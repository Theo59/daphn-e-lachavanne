---
name: seo-audit
description: Run a full competitive SEO audit (score, competitor gap analysis, missing topics, exact-keyword/title/H1 checks, semantic terms, structure, speed, indexability) for any page on daphnelachavanne.com without needing the paid Horusium tool — using WebSearch/WebFetch for competitor research and the bundled scripts for deterministic checks. Use when the user asks for an SEO audit, wants to check a page's SEO score, mentions competitor keyword research, or asks to redo/verify a Horusium-style audit.
---

# SEO audit — DIY (no paid tool required)

Full point-by-point checklist, with the DIY method for each: **[CHECKLIST.md](CHECKLIST.md)**.
Historical ground-truth snapshot used to calibrate this method: `reference/2026-07-26-drainage-lymphatique-horusium-snapshot.md`.

## Quick start — full audit workflow

1. **Discover competitors**: `WebSearch("<mot-clé exact>")`. Keep the 5-10 genuinely relevant
   organic results (drop directories/socials/off-topic).
2. **Measure our page and every competitor with the same yardstick**:
   ```
   node .claude/skills/seo-audit/scripts/page-metrics.mjs <url> --keyword "<mot-clé>"
   ```
   Run once per URL (ours + each competitor). Compare titleLength/metaDescriptionLength/h1/
   bodyWordCount/keyword density across the set — the competitor numbers ARE the "suggested range",
   there's no fixed universal target.
3. **Term/topic gap**:
   ```
   node .claude/skills/seo-audit/scripts/term-gap.mjs --ours <url> --competitors <url1,url2,url3>
   ```
   Then `WebFetch` each competitor with a prompt like "list every distinct subtopic this page covers
   about X" to get the qualitative "sujets manquants" equivalent — reading beats pure term frequency
   for judging what's actually missing.
4. **Internal linking**: grep this repo's `src/i18n/*.ts` and/or query Sanity (GROQ) for existing
   mentions of the target keyword/practice on OTHER pages that aren't yet links to the target page.
5. **Backlinks**: our own site only, via Google Search Console → Links. No free reliable source for
   competitor backlink counts (see CHECKLIST.md §8) — don't fabricate a number.
6. **Synthesize**: sort findings into technical (safe, fast — title/H1/meta length, exact-keyword
   placement) vs content depth (missing topics, word count — filter through the content policy
   below) vs internal linking. Don't compute a fake 0-100 score; give a prioritized punch list.
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
- No backlink index for competitors — only our own site via GSC.
- `page-metrics.mjs` timing is a single script-side fetch, not a real-browser Lighthouse run.
