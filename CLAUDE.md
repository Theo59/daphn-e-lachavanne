# Daphné Lachavanne — Site web

Site de praticienne bien-être (yoga, breathwork, pilates, soins) basée à Genève au Loft.

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
site/
  src/
    layouts/
      Layout.astro        # Shell HTML, importe Nav + Footer, props: activePage, darkNav
    components/
      Logo.astro           # SVG logo mark + wordmark
      GradientBlob.astro   # Dégradé animé SVG (prop: variant)
      Sym.astro            # Icônes SVG (prop: kind)
      Photo.astro          # Image B&W (grayscale filter)
      PhotoSlot.astro      # Placeholder sombre (prop: kind=photo|video)
      Nav.astro            # Nav responsive (desktop + mobile menu)
      Footer.astro         # Footer 4 colonnes
    styles/
      global.css           # CSS variables brand, reset, fonts (Google Fonts)
    pages/
      index.astro          # Homepage
      soins.astro          # Soins
      yoga.astro           # Yoga
      breathwork.astro     # Breathwork
      pilates.astro        # Pilates
      about.astro          # À propos
      contact.astro        # Contact
  public/
    media/                 # Photos et médias servis statiquement
```

## 7 pages

| Route | Titre | Description |
|-------|-------|-------------|
| / | Homepage | Hero plein écran, manifeste, pratiques, Loft, témoignages, CTA |
| /soins | Soins | Catalogue, durées, tarifs, forfaits |
| /yoga | Yoga | Pranayama, posture, méditation, planning |
| /breathwork | Breathwork | Cohérence, holotropique, tummo, cercles |
| /pilates | Pilates | Alignement, fluidité, mat & matériel |
| /about | À propos | Portrait, manifeste, parcours |
| /contact | Contact | Booking, formulaire, plan Loft |

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
- Les photos réelles : `<Photo src="/media/..." />` · les placeholders : `<PhotoSlot />`
- Responsive : breakpoint principal à 900px, secondaire à 560px
- `--pad: clamp(24px, 4vw, 56px)` gère le padding horizontal

## Médias — optimisation web

Deux dossiers, séparation source / servi :

- **`media-src/`** (racine, **hors déploiement**) : les originaux lourds (sources). Modifiés à la main, jamais servis.
- **`public/media/web/`** (servi, **commité**) : les versions optimisées générées. **Seul ce dossier part en prod.**

### Régénérer après ajout/modif d'un média

```bash
npm run media            # media-src/ → public/media/web/ (AVIF + WebP + repli, max 2000px)
npm run media -- --dry   # aperçu sans écrire
```

Le script `scripts/optimize-media.mjs` (sharp + ffmpeg) produit par image 3 variantes
(`.avif`, `.webp`, format d'origine compressé), et par vidéo un `.mp4` + `.webm` + poster.
Il saute ce qui est déjà à jour (`--force` pour tout refaire). Ajouter un original dans
`media-src/`, relancer `npm run media`, commiter `public/media/web/`.

### Afficher un média

- **Image** : `<Picture src="/media/photo-1.jpg" alt="…" />` (composant `src/components/Picture.astro`).
  On passe le chemin **d'origine** `/media/…` ; `Picture` sert automatiquement la meilleure
  variante (`<picture>` AVIF → WebP → repli) depuis `/media/web/`. Tous les autres attributs
  (`style`, `loading`, `fetchpriority`, `aria-*`…) sont transmis à la `<img>`. `display:contents`
  → mise en page inchangée. **Ne jamais référencer `/media/web/…` à la main** dans le markup.
- **Fond CSS** : `background:url('/media/web/fond-3.webp')` (pointe directement vers la variante WebP servie).
- Données structurées / og:image (`Layout.astro`) : pointent vers `/media/web/…` (formats jpg/png pour les crawlers).

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
