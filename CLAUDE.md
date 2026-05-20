# Daphné Lachavanne — Site web

Site de praticienne bien-être (yoga, breathwork, pilates, soins) basée à Genève au Loft.

## Lancer le projet

```bash
cd site && npm run dev
# puis ouvrir http://localhost:4321
```

## Stack

- **Astro** (static site generator) — composants `.astro`, CSS scopé, aucun JS runtime par défaut
- Pas de React, pas de framework UI — HTML + CSS pur dans les composants Astro
- Build statique : `npm run build` → `site/dist/`

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
