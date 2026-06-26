# Daphné Lachavanne — Site web

Site de praticienne bien-être (yoga, breathwork, pilates, soins) basée à Paris (7e arrondissement — cabinet 3 rue Valadon).

## Git — flux de travail (obligatoire)

⚠️ Plusieurs personnes travaillent sur ce repo **en parallèle**. Pour ne jamais se marcher dessus ni perdre de travail :

- **Avant toute modification** : regarder l'arbre git (`git fetch`, puis `git status` / `git log`).
  - Si la branche locale est **en retard** sur `origin/main` → se **rebase** sur `main` à jour avant de commencer.
  - Sinon → **tirer une branche depuis `main` à jour** pour la modif : `git checkout main && git pull && git checkout -b <slug>`. **Jamais de travail directement sur `main`.**
- **Avant d'ouvrir une PR** : re-`git fetch`, rebase la branche sur `main` à jour si besoin.
- **Avant de merger une PR** : **TOUJOURS rebase d'abord la branche à merger sur `main` à jour** — `git fetch` puis, sur la branche, `git rebase origin/main` (résoudre les conflits en local, `git push --force-with-lease`), **puis** merger. Objectif : merge propre et linéaire, conflits détectés en local, jamais de merge-commit issu d'une base périmée.
- **Jamais de `git push` direct sur `main`** : toujours branche + PR ; le merge (et le déploiement Netlify) se fait côté client.

## Lancer le projet

```bash
npm run dev
# puis ouvrir http://localhost:4321
```

## Stack

- **Astro** (static site generator) — composants `.astro`, CSS scopé, aucun JS runtime par défaut
- Pas de React, pas de framework UI — HTML + CSS pur dans les composants Astro
- Build statique : `npm run build` → `dist/`

## Structure

```
src/
  layouts/Layout.astro       # Shell HTML (Nav + Footer) ; <html lang>, hreflang, JSON-LD ; props activePage/darkNav
  components/
    SanityImage.astro        # <img> servie par le CDN Sanity (image éditable dans /admin)
    Nav.astro · Footer.astro · Faq.astro · Prose.astro · Sym.astro · Logo.astro · NewsletterPopup.astro
    views/<Page>View.astro   # LE markup partagé de chaque page (cf. section i18n)
  styles/global.css          # tokens de marque, reset, polices auto-hébergées (woff2)
  i18n/                      # tous les textes FR/EN (cf. section i18n)
  sanity/ · lib/sanity/      # schémas du Studio (/admin) + couche contenu (deepFill + fallback dico)
  pages/                     # coquilles FR (racine) + EN (sous /en) qui montent les views/
public/
  media/ · fonts/            # assets statiques (favicon, og-image, polices woff2)
```

Composants **legacy non utilisés** (vestiges d'avant Sanity) : `Photo.astro`, `PhotoSlot.astro`, `GradientBlob.astro`.

## Pages

| Route | Titre | Description |
|-------|-------|-------------|
| / | Homepage | Hero plein écran, manifeste, pratiques, cabinet, témoignages, CTA |
| /soins | Soins | Catalogue, durées, tarifs, forfaits |
| /yoga | Yoga | Pranayama, posture, méditation, planning |
| /breathwork | Breathwork | Cohérence, holotropique, tummo, cercles |
| /pilates | Pilates | Alignement, fluidité, mat & matériel |
| /about | À propos | Portrait, manifeste, parcours |
| /contact | Contact | Booking, formulaire, accès au cabinet (Paris 7e) |
| /tarifs | Prestations & tarifs | Catalogue complet (calque Planity), packs Soin Signature |
| /mentions-legales | Mentions légales | Éditeur, hébergement, données |

## Brand tokens (`src/styles/global.css`)

```css
--orange: #ff7100      /* accent principal */
--blue:   #16066e      /* bleu profond */
--ink:    #0d0a1f      /* texte */
--paper:  #f7f4ee      /* fond */
--muted:  rgba(13,10,31,0.55)
--rule:   rgba(13,10,31,0.12)
```

**Typographies** : `--font-display` Tenor Sans · `--font-accent` Cormorant Garamond italic · `--font-body` Inter

**GradientBlob variants** : `doux` · `intense` · `aerien` · `uni-orange` · `uni-blue` · `mix`

**Sym kinds** : `breath` · `spiral` · `sun` · `wave` · `triangle` · `dot` · `arrow` · `plus`

## Conventions

- Chaque page importe ses composants en frontmatter `---`
- CSS scopé via `<style>` dans chaque `.astro` (pas de fuite entre composants)
- Les images viennent de Sanity : `<SanityImage image={…} alt={…} />` (CDN, éditable dans `/admin` ; cf. section « Médias »)
- Responsive : breakpoint principal à 900px, secondaire à 560px
- `--pad: clamp(24px, 4vw, 56px)` gère le padding horizontal

## Médias — dans Sanity (CDN)

**Toutes les images vivent dans Sanity** (CDN, optim auto avif/webp à la volée, uploadables par la cliente dans `/admin`). Plus de pipeline d'optim local. `media-src/` ne sert plus que d'archive locale des originaux (gitignoré pour les vidéos lourdes).

### Afficher une image

- **Composant** : `<SanityImage image={objetImageSanity} alt={texte} width={…} | widths={[…]} sizes="…" style/loading/… />` (`src/components/SanityImage.astro`). Rend une `<img>` servie par le CDN ; ne rend rien si l'image est absente. L'**alt vient du dico texte** (`src/i18n/*.ts`).
- **Helper** : `urlFor(img).width(w).url()` et `fileUrl(ref)` (`src/lib/sanity/image.ts`).
- **Fond CSS** : `style={\`background:url('${urlFor(brand.gradient1).width(1600).url()}')\`}`.
- **Visuels de marque partagés** (logo, fonds dégradés, décor, portrait) : groupe `brand` des réglages → `const brand = (c as any).brand` puis `brand.logo`/`gradient1`/`circle`/… (édités une fois dans Réglages, réutilisés partout).
- **Vidéo** : champ `file` (mp4) ; URL via `fileUrl(t.…video?.asset?._ref)` rendue en `<video>`.
- Données structurées / `Layout.astro` : `logo`/`image` (person) dérivés de `brand.logo`/`brand.portrait` ; `og-image.jpg`, favicon restent locaux (assets techniques).

### Champs image dans Sanity

Les schémas (`src/sanity/schemaTypes/*.ts`) portent des champs `type:'image'` (`options:{hotspot:true}`) miroir des emplacements. `deepFill` (`content.ts`) laisse passer ces champs (hors typage des dicos texte → accès castés `(t.x as any).image` dans les vues).

### Importer / re-référencer des images (one-shot)

`scripts/migrate-media.ts` (`npm run sanity:migrate-media`, token requis) uploade les fichiers de `media-src/` et les référence dans les docs (idempotent, dédoublonné par hash). Sert au seed initial ; ensuite la cliente change les images directement dans `/admin`.

## i18n — Bilingue FR / EN

Site bilingue : **FR à la racine** (`/`, `/soins`…), **EN sous `/en`** (`/en`, `/en/soins`…), via l'i18n natif d'Astro (`astro.config.mjs` → bloc `i18n`, `prefixDefaultLocale: false`).

### Changer un texte

**Tous les textes vivent dans `src/i18n/`**, un fichier par page, les deux langues côte à côte :

```
src/i18n/
  config.ts     # langues (LOCALES), libellés, codes (HTML_LANG, OG_LOCALE)
  utils.ts      # getLangFromUrl, localizePath, getAlternates (hreflang/switcher)
  common.ts     # nav, footer, CTA, switcher, faqTitle, descriptions JSON-LD
  home.ts soins.ts yoga.ts breathwork.ts pilates.ts about.ts contact.ts legal.ts
```

Chaque fichier exporte `{ fr, en }`. Pour modifier un texte : **édite la valeur dans le bloc `fr` ou `en`** du fichier concerné. Rien d'autre à toucher. `en` est typé `satisfies typeof fr` → **oublier une clé casse le build** (parité garantie au type-check).

- Données non-textuelles (chemins d'icônes, de fonds) : dans la **vue**, pas le dico (maps par clé, ex. `PRACTICE_ICONS`).
- HTML inline (`<em>`, `<br />`) : clés suffixées `…Html`, rendues via `set:html`.
- Prix : `150 €` (FR) / `€150` (EN) ; « Sur devis » / « On request ».

### Architecture (un seul markup par page)

- `src/components/views/<Page>View.astro` : la vue partagée, `interface Props { lang }`, tout le texte tiré du dico. **C'est là qu'est le markup.**
- `src/pages/<page>.astro` (coquille FR `lang="fr"`) et `src/pages/en/<page>.astro` (coquille EN `lang="en"`) : 3 lignes, montent la vue.
- `Layout.astro` dérive la langue de l'URL → `<html lang>`, `hreflang` (fr/en/x-default), `og:locale`, JSON-LD `inLanguage`. `Nav`/`Footer` localisent liens + libellés ; le **switcher FR/EN** pointe vers l'URL équivalente.
- 404 : page unique bilingue (Astro ne sert qu'un `/404.html` en statique).

### Ajouter une langue

1. L'ajouter à `LOCALES` + `*_LANG`/labels dans `config.ts`.
2. Remplir le bloc de la nouvelle langue dans chaque `src/i18n/*.ts`.
3. Créer les coquilles `src/pages/<lang>/<page>.astro`.
