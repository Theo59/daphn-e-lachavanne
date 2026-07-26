#!/usr/bin/env node
/**
 * Term frequency gap — DIY approximation of Horusium's "Termes à utiliser".
 * Crude 1-3-gram frequency comparison, NOT semantic/lemmatized like Horusium's.
 * Good for spotting obvious high-frequency terms competitors use that we don't;
 * not a substitute for actually reading the competitor pages for meaning/context.
 *
 * Usage:
 *   node term-gap.mjs --ours <url> --competitors <url1,url2,url3,...> [--top 40]
 */
import { JSDOM } from 'jsdom';

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i > -1 ? args[i + 1] : null;
};

const oursUrl = flag('ours');
const competitorsArg = flag('competitors');
const top = parseInt(flag('top') ?? '40', 10);

if (!oursUrl || !competitorsArg) {
  console.error('Usage: node term-gap.mjs --ours <url> --competitors <url1,url2,...> [--top 40]');
  process.exit(1);
}
const competitorUrls = competitorsArg.split(',').map((s) => s.trim()).filter(Boolean);

// Minimal French + English stopword list — trimmed on purpose, not exhaustive.
const STOPWORDS = new Set(`
le la les un une des de du au aux et ou en dans sur pour avec sans par ce cet cette ces son sa ses
qui que quoi dont où est sont sera serait été être avoir a ont il elle ils elles nous vous je tu on
plus moins très bien aussi comme mais donc or ni car se sa ses leur leurs y aux d l n s c j qu à
the a an of to in on for with without this that these those is are was were be been being have has
had it its they them we you i he she his her their and or but so as at by from
`.split(/\s+/).filter(Boolean));

async function fetchMainText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (SEO audit script)' } });
  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  doc.querySelectorAll('script, style, nav, header, footer, noscript').forEach((n) => n.remove());
  return doc.body.textContent.replace(/\s+/g, ' ').trim();
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, ' ')
    .replace(/[^a-zà-ÿœæ0-9\s-]/gi, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function ngramCounts(words, n) {
  const counts = new Map();
  for (let i = 0; i <= words.length - n; i++) {
    const gram = words.slice(i, i + n);
    if (gram.some((w) => STOPWORDS.has(w))) continue;
    if (gram.some((w) => w.length < 3 && !/^\d+$/.test(w))) continue;
    const key = gram.join(' ');
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function allNgramCounts(text) {
  const words = tokenize(text);
  const merged = new Map();
  for (const n of [1, 2, 3]) {
    for (const [k, v] of ngramCounts(words, n)) merged.set(k, v);
  }
  return merged;
}

console.log(`Fetching ours: ${oursUrl}`);
const oursText = await fetchMainText(oursUrl);
const oursCounts = allNgramCounts(oursText);

const competitorCounts = [];
for (const url of competitorUrls) {
  console.log(`Fetching competitor: ${url}`);
  try {
    const text = await fetchMainText(url);
    competitorCounts.push({ url, counts: allNgramCounts(text) });
  } catch (err) {
    console.error(`  failed: ${err.message}`);
  }
}

// Union of terms appearing in >=2 competitor pages (avoid one-off noise).
const termDocFreq = new Map();
for (const { counts } of competitorCounts) {
  for (const term of counts.keys()) termDocFreq.set(term, (termDocFreq.get(term) ?? 0) + 1);
}

const rows = [];
for (const [term, docFreq] of termDocFreq) {
  if (docFreq < 2) continue;
  const compValues = competitorCounts.map(({ counts }) => counts.get(term) ?? 0);
  const mean = compValues.reduce((a, b) => a + b, 0) / compValues.length;
  const sorted = [...compValues].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const ours = oursCounts.get(term) ?? 0;
  rows.push({ term, docFreq, median, mean: +mean.toFixed(1), ours, gap: +(mean - ours).toFixed(1) });
}

rows.sort((a, b) => b.gap - a.gap || b.docFreq - a.docFreq);

console.log('\n' + '='.repeat(90));
console.log(
  'Terme'.padEnd(35) + 'Concurrents'.padEnd(12) + 'Médiane'.padEnd(9) + 'Moyenne'.padEnd(9) + 'Nous'.padEnd(6) + 'Écart',
);
console.log('='.repeat(90));
for (const r of rows.slice(0, top)) {
  console.log(
    r.term.padEnd(35) + `${r.docFreq}/${competitorCounts.length}`.padEnd(12) + String(r.median).padEnd(9) + String(r.mean).padEnd(9) + String(r.ours).padEnd(6) + r.gap,
  );
}
