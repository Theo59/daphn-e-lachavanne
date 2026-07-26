---
name: seo-geo-audit
description: Run a full competitive SEO audit (score, competitor gap analysis, missing topics, exact-keyword/title/H1 checks, semantic terms, structure, speed, indexability, backlinks) AND a GEO audit (AI-search citation readiness — structured data, credentials/E-E-A-T signals, AI bot access, answer-first content, freshness) for any page on daphnelachavanne.com — free via WebSearch/WebFetch/scripts, or using Ahrefs/Horusium/Geoptie directly when the user has one open in their browser session. Use when the user asks for an SEO or GEO audit, wants to check a page's SEO/GEO score, mentions competitor keyword research, backlinks, or AI-search visibility, or asks to redo/verify a Horusium-, Geoptie-, or Ahrefs-style audit.
---

# SEO + GEO audit

Two disciplines, two checklists — read the one that matches the request (or both, they overlap on
content depth):
- **[SEO-CHECKLIST.md](SEO-CHECKLIST.md)** — classic Google ranking (13 points, calibrated against a
  real Horusium audit).
- **[GEO-CHECKLIST.md](GEO-CHECKLIST.md)** — AI-search citation readiness (6 points, calibrated
  against a real Geoptie audit).

Every point has a free DIY method (WebSearch/WebFetch/bundled scripts). If the user has a paid tool
open in their browser session (Horusium, Geoptie, Ahrefs, Semrush...) during the session, use it
directly via `claude-in-chrome` instead — it's already validated to agree with the DIY method where
they overlap (see reference snapshots), and gives data the DIY method can't (real backlink indexes,
real Core Web Vitals field data). Don't assume a paid tool is available by default; check what's
open in the current tab group first.

Historical ground-truth snapshots (dated, for calibration — not current data):
`reference/2026-07-26-drainage-lymphatique-horusium-snapshot.md` (SEO, Horusium),
`reference/2026-07-26-soins-geoptie-snapshot.md` (GEO, Geoptie),
`reference/2026-07-26-ahrefs-snapshot.md` (backlinks, Ahrefs — includes a real stale-crawl false
alarm and a real 100%-spam backlink profile finding, both worked examples of verifying before acting).

## Quick start — SEO audit workflow

1. **Discover competitors**: `WebSearch("<mot-clé exact>")`. Keep the 5-10 genuinely relevant
   organic results (drop directories/socials/off-topic).
2. **Measure our page and every competitor with the same yardstick**:
   ```
   node .claude/skills/seo-geo-audit/scripts/page-metrics.mjs <url> --keyword "<mot-clé>"
   ```
   Run once per URL (ours + each competitor). Compare titleLength/metaDescriptionLength/h1/
   bodyWordCount/keyword density across the set — the competitor numbers ARE the "suggested range",
   there's no fixed universal target.
3. **Term/topic gap**:
   ```
   node .claude/skills/seo-geo-audit/scripts/term-gap.mjs --ours <url> --competitors <url1,url2,url3>
   ```
   Then `WebFetch` each competitor with a prompt like "list every distinct subtopic this page covers
   about X" to get the qualitative "sujets manquants" equivalent — reading beats pure term frequency
   for judging what's actually missing.
4. **Internal linking**: grep this repo's `src/i18n/*.ts` and/or query Sanity (GROQ) for existing
   mentions of the target keyword/practice on OTHER pages that aren't yet links to the target page.
5. **Backlinks**: if Ahrefs (or similar) is open in the session, use it directly for both our site
   and competitors — but **filter out anything flagged `SPAM`** and **sanity-check the crawl date**
   before trusting a Domain Rating or backlink count (see SEO-CHECKLIST.md §8 — this project's own
   domain showed a stale "Site en construction" Ahrefs snapshot with a 100%-spam backlink profile on
   26/07, neither of which reflected reality). Free fallback: our own site only, via Google Search
   Console → Links. No free reliable source for competitor backlinks.
6. **Synthesize**: sort findings into technical (safe, fast — title/H1/meta length, exact-keyword
   placement) vs content depth (missing topics, word count — filter through the content policy
   below) vs internal linking. Don't compute a fake 0-100 score; give a prioritized punch list.

## Quick start — GEO audit workflow

1. **Structured data reality check**: `curl <url> -s | grep -o '<script type="application/ld+json"[^>]*>.*'`
   (or write a small parse step) — read what JSON-LD is ACTUALLY on the page before trusting any
   tool's "missing schema" claim. This project already emits `LocalBusiness`/`Person`/`WebSite`/
   `Service`/`FAQPage`/`BreadcrumbList` (see `src/layouts/Layout.astro` + `src/lib/schema.ts`) — a
   "missing org signals" finding is very likely a false positive, verify before acting.
2. **Credential depth**: check each `hasCredential` entry for a `recognizedBy` (issuing body) — name
   + date alone reads as low-authority to an AI-search crawler even though it's not literally absent.
3. **AI bot access**: check `public/robots.txt` allows (or doesn't broadly disallow) the known AI
   crawler user-agents — see GEO-CHECKLIST.md §2 for the list.
4. **Core Web Vitals**: PageSpeed Insights API (free) for real LCP/FID/CLS numbers, or
   `page-metrics.mjs` for an approximate TTFB/load time.
5. **Content checks**: answer-first opening paragraph, FAQ schema present, `dateModified` present,
   competitor topic coverage — see GEO-CHECKLIST.md §3-6.
6. Every GEO finding gets the same skepticism as an SEO one — cross-check against the live page
   before writing a fix (see `reference/2026-07-26-soins-geoptie-snapshot.md` for a worked example
   of a real false positive caught this way).

## Both workflows end the same way

7. Ship fixes the way this project always has: edit content in **Sanity directly** (immediate live
   effect via the publish webhook) **and** mirror the same text in the matching `src/i18n/*.ts` dico
   for fallback parity — every content fix this session touched both, on a branch + PR (never main).
8. Snapshot what you found as a new dated file under `reference/` — don't overwrite prior snapshots,
   they're a before/after trail per page/keyword.

## Politique de contenu : bien-être, pas médical

This site is explicitly positioned as wellness ("soin de bien-être, sans visée médicale" — already
in the FAQ copy). Competitor gap analysis for health-adjacent keywords will routinely surface medical
framing: contraindications, "role of the physiotherapist", Sécurité sociale reimbursement,
post-surgical/cancer indications, comparisons to medical techniques. **Do not add these without
explicit sign-off** — they risk implying a paramedical service the practitioner isn't licensed for.
Good angles instead: detailed benefits (wellness framing), session walkthrough, self-care tips —
depth without a medical claim. The term-gap script has no idea about this — it'll happily flag
"kinésithérapeute" as a gap; a human (or you) has to filter every suggestion through this policy
before writing it.

## Maillage interne — méthode

Prefer turning an *existing* mention of another page's topic into a real link over inventing new
sentences. Only add a new sentence when the target page never mentions the sibling topic at all.
Don't link the same target twice with identical anchor text back-to-back in one paragraph. Sanity
content uses Portable Text `link` annotations (`markDefs` + `marks` on the span) — check a recent
commit touching `prose.text` for the exact patch shape. The i18n dico fallback is plain text and
**cannot** carry a real `<a>` (HTML in the string gets escaped, not rendered, per
`src/lib/sanity/richText.ts`) — mirror the same sentence there without link markup.

## Known limitations (be upfront about these, don't fake precision)

- No embeddings tool → semantic similarity is qualitative (LLM reading), not a reproducible %.
- `term-gap.mjs` is raw 1-3-gram frequency, no lemmatization/stemming, no relevance scoring — treat
  it as a lead generator, not a verdict.
- No free backlink index for competitors — only our own site via GSC, unless a paid tool (Ahrefs...)
  is open in the session. Even then: filter `SPAM`-flagged domains and check the crawl date (see
  `reference/2026-07-26-ahrefs-snapshot.md`) before trusting a number.
- `page-metrics.mjs` timing is a single script-side fetch, not a real-browser Lighthouse run.
- Any tool-reported metric (score, DR, "missing X") can be stale, mis-targeted, or a false positive —
  three confirmed real examples this session (Horusium audited the wrong page, Geoptie flagged schema
  that existed, Ahrefs showed a stale crawl). Cross-check against the live page/code before acting,
  every time.
