#!/usr/bin/env node
// @ts-check
/**
 * Optimise les médias du site pour le web.
 *
 * Images (jpg/png) → version compressée + WebP + AVIF, redimensionnées au max.
 * Vidéos (mov/mp4) → mp4 (H.264) + webm (VP9) « web-ready » + poster JPEG (via ffmpeg).
 *
 * Non destructif : les sources (`media-src/`, hors déploiement) ne sont jamais
 * modifiées. Les versions web sont écrites dans `public/media/web/` (servies),
 * en miroir de l'arborescence source. Seul `public/media/web/` part en prod ;
 * les originaux lourds restent dans le dépôt sans alourdir le build.
 *
 * Usage :
 *   npm run media                    # optimise tout (images + vidéos)
 *   node scripts/optimize-media.mjs --dry          # aperçu sans écrire
 *   node scripts/optimize-media.mjs --no-video     # images uniquement
 *   node scripts/optimize-media.mjs --max 1600     # largeur max 1600px
 *   node scripts/optimize-media.mjs --force        # ré-encode même si déjà à jour
 */

import { Buffer } from 'node:buffer';
import { spawn } from 'node:child_process';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_DIR = join(ROOT, 'media-src'); // originaux (hors déploiement)
const OUT_DIR = join(ROOT, 'public', 'media', 'web'); // versions web (servies)

// ── Options CLI ────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const opt = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const CONFIG = {
  dry: has('--dry'),
  force: has('--force'),
  doImages: !has('--no-image'),
  doVideos: !has('--no-video'),
  maxWidth: Number(opt('--max', '2000')), // largeur max des images
  quality: { jpeg: 80, webp: 78, avif: 55 },
  video: { crf: 28, height: 1080 }, // H.264/VP9 CRF, hauteur max
};

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png']);
const VIDEO_EXT = new Set(['.mov', '.mp4', '.m4v', '.webm']);

// ── Helpers ────────────────────────────────────────────────────────────────
const KB = 1024;
const fmtSize = (b) => (b < KB * KB ? `${(b / KB).toFixed(0)} Ko` : `${(b / KB / KB).toFixed(1)} Mo`);
const pct = (from, to) => `${(((from - to) / from) * 100).toFixed(0)}%`;

/** Liste récursive des fichiers, en ignorant le dossier de sortie. */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full === OUT_DIR) continue; // ne pas ré-optimiser nos sorties
      files.push(...(await walk(full)));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

/** Vrai si `out` existe et est plus récent que `src` (sauf --force). */
async function upToDate(src, out) {
  if (CONFIG.force) return false;
  try {
    const [s, o] = await Promise.all([stat(src), stat(out)]);
    return o.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

function run(cmd, cmdArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, cmdArgs, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', (d) => (stderr += d));
    child.on('error', reject);
    child.on('close', (code) =>
      code === 0 ? resolve(undefined) : reject(new Error(`${cmd} a échoué (${code}) : ${stderr.slice(-400)}`)),
    );
  });
}

async function hasFfmpeg() {
  try {
    await run('ffmpeg', ['-version']);
    return true;
  } catch {
    return false;
  }
}

const stats = { imgIn: 0, imgOut: 0, vidIn: 0, vidOut: 0, processed: 0, skipped: 0 };

// Garde anti-collision : deux sources de même nom mais d'extension différente
// (ex logo-noir.jpg + logo-noir.png) produiraient le même .webp/.avif et
// s'écraseraient silencieusement — corrompant l'alpha, etc. On trace le 1ᵉʳ
// propriétaire de chaque sortie et on refuse l'écrasement par une autre source.
const claimed = new Map(); // outPath → source relPath

// ── Images ─────────────────────────────────────────────────────────────────
async function optimizeImage(src, relPath, srcBytes) {
  const base = relPath.slice(0, -extname(relPath).length);
  const isPng = extname(relPath).toLowerCase() === '.png';
  const baseFmt = isPng ? 'png' : 'jpeg';
  const targets = [
    { suffix: `.${baseFmt === 'png' ? 'png' : 'jpg'}`, fmt: baseFmt },
    { suffix: '.webp', fmt: 'webp' },
    { suffix: '.avif', fmt: 'avif' },
  ];

  const meta = await sharp(src).metadata();
  const resize = meta.width && meta.width > CONFIG.maxWidth;
  let smallest = Infinity; // variante la plus légère = celle réellement servie
  let wrote = false;

  for (const { suffix, fmt } of targets) {
    const outPath = join(OUT_DIR, base + suffix);
    const owner = claimed.get(outPath);
    if (owner && owner !== relPath) {
      console.warn(`  ⚠️  collision : ${base + suffix} déjà généré depuis « ${owner} » — « ${relPath} » ignoré (renomme l'une des deux sources)`);
      continue;
    }
    claimed.set(outPath, relPath);
    if (await upToDate(src, outPath)) {
      try { smallest = Math.min(smallest, (await stat(outPath)).size); } catch {}
      continue;
    }
    let pipe = sharp(src).rotate(); // respecte l'orientation EXIF
    if (resize) pipe = pipe.resize({ width: CONFIG.maxWidth, withoutEnlargement: true });
    if (fmt === 'jpeg') pipe = pipe.jpeg({ quality: CONFIG.quality.jpeg, mozjpeg: true });
    else if (fmt === 'png') pipe = pipe.png({ compressionLevel: 9, palette: true });
    else if (fmt === 'webp') pipe = pipe.webp({ quality: CONFIG.quality.webp });
    else if (fmt === 'avif') pipe = pipe.avif({ quality: CONFIG.quality.avif });

    const buf = await pipe.toBuffer();
    smallest = Math.min(smallest, buf.length);
    wrote = true;
    if (!CONFIG.dry) {
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, buf);
    }
  }

  if (wrote) {
    // On compte la variante la plus légère : c'est elle que le navigateur charge.
    stats.imgIn += srcBytes;
    stats.imgOut += smallest;
    stats.processed++;
    const note = resize ? ` ↓${CONFIG.maxWidth}px` : '';
    console.log(`  🖼  ${relPath}${note}  ${fmtSize(srcBytes)} → ${fmtSize(smallest)} (best, -${pct(srcBytes, smallest)}) · +webp/avif`);
  } else {
    stats.skipped++;
  }
}

// ── Vidéos ─────────────────────────────────────────────────────────────────
async function optimizeVideo(src, relPath, srcBytes) {
  const base = relPath.slice(0, -extname(relPath).length);
  const mp4 = join(OUT_DIR, `${base}.mp4`);
  const webm = join(OUT_DIR, `${base}.webm`);
  const poster = join(OUT_DIR, `${base}.poster.jpg`);
  const scale = `scale='min(iw,trunc(oh*a/2)*2)':'min(${CONFIG.video.height},ih)'`;

  if ((await upToDate(src, mp4)) && (await upToDate(src, webm))) {
    stats.skipped++;
    return;
  }
  if (CONFIG.dry) {
    console.log(`  🎬 ${relPath}  ${fmtSize(srcBytes)} → mp4 + webm + poster (aperçu)`);
    stats.skipped++;
    return;
  }

  await mkdir(dirname(mp4), { recursive: true });
  // mp4 H.264 (compatibilité maximale)
  await run('ffmpeg', ['-y', '-i', src, '-vf', scale, '-c:v', 'libx264', '-crf', String(CONFIG.video.crf),
    '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '128k', mp4]);
  // webm VP9 (poids réduit)
  await run('ffmpeg', ['-y', '-i', src, '-vf', scale, '-c:v', 'libvpx-vp9', '-crf', String(CONFIG.video.crf + 4),
    '-b:v', '0', '-row-mt', '1', '-c:a', 'libopus', '-b:a', '96k', webm]);
  // poster (1ʳᵉ seconde)
  await run('ffmpeg', ['-y', '-ss', '1', '-i', src, '-frames:v', '1', '-vf', scale, '-q:v', '4', poster]);

  const [m, w] = await Promise.all([stat(mp4), stat(webm)]);
  const outBytes = m.size + w.size;
  stats.vidIn += srcBytes;
  stats.vidOut += outBytes;
  stats.processed++;
  console.log(`  🎬 ${relPath}  ${fmtSize(srcBytes)} → mp4 ${fmtSize(m.size)} + webm ${fmtSize(w.size)} (-${pct(srcBytes, outBytes)})`);
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📦 Optimisation des médias${CONFIG.dry ? ' (dry-run)' : ''}`);
  console.log(`   Source : ${relative(ROOT, SRC_DIR)}/  →  Sortie : ${relative(ROOT, OUT_DIR)}/`);
  console.log(`   Largeur max ${CONFIG.maxWidth}px · vidéo ${CONFIG.video.height}p CRF ${CONFIG.video.crf}\n`);

  let files;
  try {
    files = await walk(SRC_DIR);
  } catch {
    console.error(`✗ Dossier introuvable : ${SRC_DIR}`);
    process.exit(1);
  }

  const ffmpegOk = CONFIG.doVideos && (await hasFfmpeg());
  if (CONFIG.doVideos && !ffmpegOk) console.log('⚠️  ffmpeg introuvable → vidéos ignorées (brew install ffmpeg)\n');

  for (const src of files.sort()) {
    const ext = extname(src).toLowerCase();
    const relPath = relative(SRC_DIR, src);
    const { size } = await stat(src);
    try {
      if (CONFIG.doImages && IMAGE_EXT.has(ext)) await optimizeImage(src, relPath, size);
      else if (ffmpegOk && VIDEO_EXT.has(ext)) await optimizeVideo(src, relPath, size);
    } catch (err) {
      console.error(`  ✗ ${relPath} : ${err instanceof Error ? err.message : err}`);
    }
  }

  // ── Bilan ──
  const totalIn = stats.imgIn + stats.vidIn;
  const totalOut = stats.imgOut + stats.vidOut;
  console.log(`\n── Bilan ──────────────────────────────`);
  console.log(`Traités : ${stats.processed} · ignorés (à jour) : ${stats.skipped}`);
  if (stats.imgIn) console.log(`Images  : ${fmtSize(stats.imgIn)} → ${fmtSize(stats.imgOut)}  (-${pct(stats.imgIn, stats.imgOut)})`);
  if (stats.vidIn) console.log(`Vidéos  : ${fmtSize(stats.vidIn)} → ${fmtSize(stats.vidOut)}  (-${pct(stats.vidIn, stats.vidOut)})`);
  if (totalIn) console.log(`Total   : ${fmtSize(totalIn)} → ${fmtSize(totalOut)}  (-${pct(totalIn, totalOut)})`);
  if (CONFIG.dry) console.log(`\nℹ️  Dry-run : aucun fichier écrit. Relance sans --dry pour générer.`);
  else console.log(`\n✓ Médias optimisés dans ${relative(ROOT, OUT_DIR)}/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
