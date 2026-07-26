---
name: seo-horusium
description: Run, read, and act on Horusium SEO audits for daphnelachavanne.com — score, competitor gap analysis, missing topics, exact-keyword/title/H1 checks, semantic terms, internal linking. Use when the user mentions Horusium, an SEO audit, an SEO score, "sujets manquants", "termes à utiliser", or asks to improve a page's SEO/ranking on this site.
---

# SEO Horusium — daphnelachavanne.com

Horusium (https://www.horusium.com) is the SEO audit tool used for this site. One audit = one
`(page URL, keyword)` pair, scored against the current Google top-10 for that keyword. Login is via
the user's own Chrome session — use `claude-in-chrome`, not `agent-browser`, so the existing session
is reused (see project memory `use-agent-browser.md` for the general default, overridden here).

Dashboard sections (nav): **Audit de page** (`/audits`, list + detail), **Santé SEO**
(`/seo-page-health`, site-wide GSC-based scoring — costs 1 credit, ask before running), **Suivi
Actions** (`/action-tracking`, free — logs an optimization and overlays it on the GSC clicks/impressions
graph so its impact is visible later), **Rédaction SEO/GEO** (`/articles`, AI article drafting —
not used for this site's core pages).

## Reading an audit — what each section means

- **Score SEO** — 0–100 vs the actual top-10 competitors for that keyword (not a generic rubric).
  Includes a bar chart of every competitor's score + your own — this is the fastest way to judge
  whether the competitive set is realistic for a small local site (see below).
- **Analyse sémantique** — embedding similarity between your content and each competitor's page,
  plus "search intent alignment" and "competitor cluster coherence". Below ~65% similarity = your
  content likely misses angles the SERP consistently covers.
- **Sujets manquants** — subtopics present in most competitor pages but absent from yours, each
  tagged with a priority and an exact "N/7 competitors cover this" count. Treat as a menu, not a
  checklist — see content policy below before writing any of them.
- **Termes à utiliser** — the actual term/n-gram frequency gap vs competitors (median, mean, yours,
  suggested range, relevance %). High-relevance terms absent from your page are the cheapest wins;
  don't force low-relevance ones just to move the counter.
- **Maillage interne** — *other pages on your own site* that could link to the audited page but
  don't yet. 0 opportunities usually just means the page is already well-linked (e.g. it's in nav).
- **Netlinking** — referring domains to that specific page vs competitors. A small wellness site
  will never match a hospital group's backlink count — check whether you're merely "in range" of
  the weaker competitors, not trying to beat the strongest one.
- **Structure de page** — H1 count/text, word count, H2-H3 word count, title/meta-description length,
  all compared to competitor ranges (never fixed universal numbers — re-read the live audit).
- **Mots-clés exacts** — exact-match keyword presence/count in title, H1, and body density, vs the
  competitive density range for that specific keyword.
- **Vitesse** / **Indexabilité** — TTFB, load time, noindex/canonical/robots.txt/HTTP status. Usually
  already clean for this site (static Astro build) — if flagged, check whether the *live* page is
  actually broken or the audit is reading stale cached data (cf. the GSC "isn't indexed" false-alarm
  precedent — verify with `curl`/URL Inspection before trusting a scary red flag).

## Piège : la page auditée n'est pas forcément la bonne cible

Horusium picks whichever URL currently ranks for the keyword — that's often NOT the page that's
actually about that topic (e.g. it audited the homepage for "Drainage lymphatique" instead of
`/soins`, because the homepage had more backlinks). Before implementing any fix:
1. Check which page on the site is thematically dedicated to the keyword.
2. If it's not the audited page, prefer strengthening the dedicated page + linking to it, over
   diluting the audited page's own focus. Don't blindly stuff the keyword into a page that covers
   four different practices.
3. Re-audit the *correct* target page once changes are live to get a real score for it.

## Politique de contenu : bien-être, pas médical

This site is explicitly positioned as wellness ("soin de bien-être, sans visée médicale" — already
in the FAQ copy). Competitor gap analysis for health-adjacent keywords will routinely suggest
medical framing: contraindications, "role of the physiotherapist", Sécurité sociale reimbursement,
post-surgical/cancer indications, comparisons to medical techniques (Vodder/Leduc vs the site's own
Renata França method). **Do not add these** without explicit sign-off — they risk implying a
paramedical service the practitioner isn't licensed for, and undercut the site's own legal
positioning. Good angles to adopt instead: detailed benefits (wellness framing), session walkthrough,
self-care/at-home tips — anything that adds depth without a medical claim.

## Maillage interne — méthode

When adding internal links to satisfy an audit or generally strengthen topical relevance:
- Prefer turning an *existing* mention of another page's topic into a real link over inventing new
  sentences. Home/about/contact naturally name every practice — link those mentions first.
- Only add a new sentence when the target page never mentions sibling practices at all (this was
  the case for yoga/pilates/breathwork — each got one closing sentence cross-linking the other two
  practices + soins).
- Don't link the same target twice with the same anchor text right next to each other in one
  paragraph; do link distinct phrases (e.g. "Soin Signature" and "Miracle Face" can both point to
  `/soins` in the same paragraph — they're different search terms for the same page).
- Sanity content uses Portable Text `link` annotations (`markDefs` + `marks` on the span) — see any
  recent commit touching `prose.text` for the exact patch shape. The i18n dico fallback is plain
  text and **cannot** carry a real `<a>` (see `src/lib/sanity/richText.ts` — HTML in the string
  fallback gets escaped, not rendered). Add the same sentence there without link markup, for parity.

## Workflow pour traiter un audit

1. Open the audit, read every section top to bottom (screenshot or `get_page_text`, click every
   "Voir détails" — competitor breakdowns and term tables are hidden behind those by default).
2. Identify the real target page (see pitfall above) if it differs from the audited URL.
3. Sort findings into: technical (title/H1/meta length, exact-keyword placement — safe, do first),
   content depth (missing topics, word count — filter through the content policy above), semantic
   terms (weave the high-relevance ones into new/existing sentences, don't keyword-stuff), internal
   linking (see method above).
4. Fix content directly in Sanity (immediate live effect via the publish webhook) **and** mirror the
   same text in the matching `src/i18n/*.ts` dico for fallback parity — this project's established
   pattern (see recent git history: every content fix this session touched both).
5. Log durable, non-numeric learnings back into this file; log the specific audit snapshot as a new
   dated file under `reference/` (see `reference/2026-07-26-drainage-lymphatique.md` for the shape) —
   never overwrite an old snapshot, they're a before/after trail.
6. Optionally log the change in Horusium's **Suivi Actions** (free) so its GSC graph shows the
   before/after around that date.
