/**
 * Migration des médias locaux (media-src/) → assets Sanity, et référencement dans les docs.
 *
 * Lancer (token write requis) :  npm run sanity:migrate-media
 *
 * Idempotent : Sanity dédoublonne les assets par hash ; un cache local évite les ré-uploads
 * dans une même exécution. Relançable sans créer de doublons.
 *
 * MAPPINGS : les images identiques FR/EN pointent vers le même asset (l'alt vit dans le texte).
 *   - SIMPLE  : un champ objet (ex. 'hero.image') = un fichier.
 *   - ARRAYS  : un champ d'item de tableau (ex. practices.items[].icon), associé par clé.
 */
import { createClient } from '@sanity/client';
import { createReadStream, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !token) {
  console.error('❌ Renseigne PUBLIC_SANITY_PROJECT_ID et SANITY_WRITE_TOKEN avant la migration.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2026-03-01', token, useCdn: false });
const MEDIA_SRC = resolve(process.cwd(), 'media-src');

type Simple = { docs: string[]; path: string; file: string };
type ArrayIcons = { docs: string[]; arrayPath: string; itemField: string; keyField: string; byKey: Record<string, string> };

// ─── Visuels de marque (siteSettings, FR + EN, même asset) ───────────────────
const BRAND = ['siteSettings-fr', 'siteSettings-en'];
// ─── Accueil ─────────────────────────────────────────────────────────────────
const HOME = ['homePage-fr', 'homePage-en'];

const SIMPLE: Simple[] = [
  { docs: BRAND, path: 'brand.logo', file: 'logo-noir.png' },
  { docs: BRAND, path: 'brand.logoWhite', file: 'logo_blanc.png' },
  { docs: BRAND, path: 'brand.portrait', file: 'photo-1.jpg' },
  { docs: BRAND, path: 'brand.gradient1', file: 'fond-2.png' },
  { docs: BRAND, path: 'brand.gradient2', file: 'fond-3.png' },
  { docs: BRAND, path: 'brand.circle', file: 'cercle-trace.png' },
  { docs: BRAND, path: 'brand.shapes', file: 'fond-formes.png' },

  { docs: HOME, path: 'hero.image', file: 'photo-2.jpg' },
  { docs: HOME, path: 'cabinet.image', file: 'photo-1.jpg' },

  // Soins
  { docs: ['soinsPage-fr', 'soinsPage-en'], path: 'photo.image1', file: 'photo-1.jpg' },
  { docs: ['soinsPage-fr', 'soinsPage-en'], path: 'photo.image2', file: 'photo-trace.png' },
  { docs: ['soinsPage-fr', 'soinsPage-en'], path: 'photo.image3', file: '6.jpg' },

  // Yoga
  { docs: ['yogaPage-fr', 'yogaPage-en'], path: 'photos.image1', file: '9.jpg' },
  { docs: ['yogaPage-fr', 'yogaPage-en'], path: 'photos.image2', file: '10.jpg' },
  { docs: ['yogaPage-fr', 'yogaPage-en'], path: 'photos.image3', file: '11.jpg' },

  // Breathwork
  { docs: ['breathworkPage-fr', 'breathworkPage-en'], path: 'gallery.photo1', file: 'photo-2.jpg' },
  { docs: ['breathworkPage-fr', 'breathworkPage-en'], path: 'gallery.photo2', file: 'photo-3.jpg' },

  // Pilates
  { docs: ['pilatesPage-fr', 'pilatesPage-en'], path: 'gallery.image1', file: '12.jpg' },
  { docs: ['pilatesPage-fr', 'pilatesPage-en'], path: 'gallery.image2', file: '11.jpg' },

  // À propos
  { docs: ['aboutPage-fr', 'aboutPage-en'], path: 'header.image', file: 'photo-1.jpg' },
  { docs: ['aboutPage-fr', 'aboutPage-en'], path: 'photos.image1', file: 'photo-1.jpg' },
  { docs: ['aboutPage-fr', 'aboutPage-en'], path: 'photos.image2', file: '6.jpg' },
  { docs: ['aboutPage-fr', 'aboutPage-en'], path: 'photos.image3', file: '9.jpg' },
  { docs: ['aboutPage-fr', 'aboutPage-en'], path: 'photos.image4', file: 'photo-3.jpg' },
];

const ARRAYS: ArrayIcons[] = [
  {
    docs: HOME,
    arrayPath: 'practices.items',
    itemField: 'icon',
    keyField: 'key',
    byKey: {
      soins: 'design-sans-titre-34.png',
      breathwork: 'illustration_select_21.png',
      yoga: 'illustration_select_30.png',
      pilates: 'illustration_select_38.png',
    },
  },
  {
    docs: ['soinsPage-fr', 'soinsPage-en'],
    arrayPath: 'soins',
    itemField: 'icon',
    keyField: 'key',
    byKey: {
      signature: 'design-sans-titre-34.png',
      drainage: 'illustration_select_30.png',
      miracleFace: 'illustration_select_38.png',
      comboDetox: 'illustration_select_21.png',
    },
  },
  {
    docs: ['yogaPage-fr', 'yogaPage-en'],
    arrayPath: 'principles',
    itemField: 'icon',
    keyField: 'key',
    byKey: {
      pranayama: 'illustration_select_21.png',
      posture: 'illustration_select_30.png',
      meditation: 'illustration_select_38.png',
    },
  },
  {
    docs: ['breathworkPage-fr', 'breathworkPage-en'],
    arrayPath: 'principles',
    itemField: 'icon',
    keyField: 'key',
    byKey: {
      coherence: 'illustration_select_21.png',
      holotropic: 'illustration_select_21.png',
      pranayama: 'design-sans-titre-34.png',
    },
  },
  {
    docs: ['pilatesPage-fr', 'pilatesPage-en'],
    arrayPath: 'principles',
    itemField: 'icon',
    keyField: 'key',
    byKey: {
      alignement: 'illustration_select_38.png',
      fluidite: 'illustration_select_21.png',
      renforcement: 'illustration_select_30.png',
    },
  },
];

const cache = new Map<string, string>();
async function uploadImage(file: string): Promise<string> {
  const cached = cache.get(file);
  if (cached) return cached;
  const path = resolve(MEDIA_SRC, file);
  if (!existsSync(path)) throw new Error(`média introuvable : ${path}`);
  const asset = await client.assets.upload('image', createReadStream(path), { filename: file });
  cache.set(file, asset._id);
  console.log(`  ↑ ${file} → ${asset._id}`);
  return asset._id;
}
const imageRef = (assetId: string) => ({ _type: 'image', asset: { _type: 'reference', _ref: assetId } });
const getPath = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);

async function run() {
  console.log('→ Upload + référencement des champs simples…');
  for (const s of SIMPLE) {
    const id = await uploadImage(s.file);
    for (const doc of s.docs) await client.patch(doc).set({ [s.path]: imageRef(id) }).commit();
  }

  console.log('→ Upload + référencement des icônes de tableaux…');
  for (const a of ARRAYS) {
    const refs: Record<string, string> = {};
    for (const [k, f] of Object.entries(a.byKey)) refs[k] = await uploadImage(f);
    for (const doc of a.docs) {
      const d = await client.getDocument(doc);
      const items = (getPath(d, a.arrayPath) ?? []).map((it: any) => ({
        ...it,
        [a.itemField]: refs[it[a.keyField]] ? imageRef(refs[it[a.keyField]]) : it[a.itemField],
      }));
      await client.patch(doc).set({ [a.arrayPath]: items }).commit();
    }
  }

  console.log('✅ Migration médias terminée.');
}

run().catch((err) => {
  console.error('❌ Échec migration médias :', err);
  process.exit(1);
});
