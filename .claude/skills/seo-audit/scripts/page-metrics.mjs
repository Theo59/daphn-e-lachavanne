#!/usr/bin/env node
/**
 * SEO page metrics — DIY replacement for Horusium's "Structure de page" /
 * "Mots-clés exacts" / "Longueur du titre et de la meta description" checks.
 * Usage: node page-metrics.mjs <url> [--keyword "exact phrase"]
 */
import { JSDOM } from 'jsdom';

const url = process.argv[2];
const kwIdx = process.argv.indexOf('--keyword');
const keyword = kwIdx > -1 ? process.argv[kwIdx + 1] : null;

if (!url) {
  console.error('Usage: node page-metrics.mjs <url> [--keyword "phrase"]');
  process.exit(1);
}

const t0 = performance.now();
const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (SEO audit script)' } });
const ttfbMs = Math.round(performance.now() - t0);
const html = await res.text();
const loadMs = Math.round(performance.now() - t0);
const dom = new JSDOM(html);
const doc = dom.window.document;

// robots.txt check — is this exact path disallowed for a generic crawler ("User-agent: *")?
let robotsTxtDisallowed = null;
try {
  const robotsUrl = new URL('/robots.txt', url).toString();
  const robotsRes = await fetch(robotsUrl);
  const robotsTxt = robotsRes.ok ? await robotsRes.text() : '';
  const path = new URL(url).pathname;
  const lines = robotsTxt.split('\n').map((l) => l.trim());
  let inWildcardBlock = false;
  robotsTxtDisallowed = false;
  for (const line of lines) {
    if (/^user-agent:\s*\*/i.test(line)) inWildcardBlock = true;
    else if (/^user-agent:/i.test(line)) inWildcardBlock = false;
    else if (inWildcardBlock && /^disallow:\s*(.+)/i.test(line)) {
      const rule = line.match(/^disallow:\s*(.+)/i)[1].trim();
      if (rule && path.startsWith(rule)) robotsTxtDisallowed = true;
    }
  }
} catch {
  robotsTxtDisallowed = null; // couldn't fetch/parse robots.txt — check manually
}

const text = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : null);

const title = text(doc.querySelector('title'));
const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? null;
const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;
const robotsMeta = doc.querySelector('meta[name="robots"]')?.getAttribute('content') ?? null;

const h1 = [...doc.querySelectorAll('h1')].map(text);
const h2 = [...doc.querySelectorAll('h2')].map(text);
const h3 = [...doc.querySelectorAll('h3')].map(text);
const h2h3WordCount = [...h2, ...h3].join(' ').split(/\s+/).filter(Boolean).length;

// Body word count: strip nav/header/footer/script/style to approximate "main content"
// the way Horusium likely does (avoids counting nav links repeated on every page).
const clone = doc.body.cloneNode(true);
clone.querySelectorAll('script, style, nav, header, footer, noscript').forEach((n) => n.remove());
const bodyText = clone.textContent.replace(/\s+/g, ' ').trim();
const bodyWordCount = bodyText.split(/\s+/).filter(Boolean).length;

const result = {
  url,
  httpStatus: res.status,
  ttfbMs,
  loadMs,
  robotsTxtDisallowed,
  title,
  titleLength: title?.length ?? 0,
  metaDescription: metaDesc,
  metaDescriptionLength: metaDesc?.length ?? 0,
  canonical,
  robotsMeta,
  h1Count: h1.length,
  h1,
  h2Count: h2.length,
  h3Count: h3.length,
  h2h3WordCount,
  bodyWordCount,
};

if (keyword) {
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const kw = norm(keyword);
  const occurrences = (s) => (norm(s).match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length;
  const bodyOccurrences = occurrences(bodyText);
  result.keyword = {
    phrase: keyword,
    inTitle: occurrences(title ?? '') > 0,
    inH1: h1.some((h) => occurrences(h) > 0),
    bodyOccurrences,
    densityPct: bodyWordCount ? +((bodyOccurrences / bodyWordCount) * 100).toFixed(2) : 0,
  };
}

console.log(JSON.stringify(result, null, 2));
