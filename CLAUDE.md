# Daphné Lachavanne — Site web

Maquettes d'un site de praticienne bien-être (yoga, breathwork, pilates, soins) basée à Genève au Loft.

## Lancer le projet

```bash
cd project && python3 -m http.server 8787
# puis ouvrir http://localhost:8787
```

## Stack

- React 18 via CDN (UMD) + Babel standalone — pas de build, JSX interprété dans le navigateur
- Fichiers servis statiquement, pas de framework backend

## Structure

```
project/
  index.html          # Point d'entrée — charge tous les modules JSX via Babel
  brand.jsx           # Tokens (Brand.*), Logo, GradientBlob, Sym, Photo, PhotoSlot
  design-canvas.jsx   # DesignCanvas, DCSection, DCArtboard — canvas de maquettage
  tweaks-panel.jsx    # Panel de tweaks live (palette, hero variant, toggles)
  frames.jsx          # DesktopFrame, MobileFrame, DesktopNav, MobileNav, Footer
  pages/
    home.jsx          # Homepage (HomeDesktop, HomeMobile)
    soins.jsx         # Soins (SoinsDesktop, SoinsMobile)
    practices.jsx     # Yoga, Breathwork, Pilates (*Desktop, *Mobile × 3)
    about-contact.jsx # À propos + Contact (*Desktop, *Mobile × 2)
  media/
    yoga-bow.jpg
    yoga-childpose.jpg
  uploads/            # Charte graphique et médias bruts
```

## 7 pages maquettées (desktop 1440 + mobile 375)

| ID | Titre | Description |
|----|-------|-------------|
| home | 01 · Homepage | Hero vidéo, manifeste, pratiques, Loft, témoignages, CTA |
| soins | 02 · Soins | Catalogue, durées, tarifs, forfaits |
| yoga | 03 · Yoga | Pranayama, posture, méditation, planning |
| breathwork | 04 · Breathwork | Cohérence, holotropique, tummo, cercles |
| pilates | 05 · Pilates | Alignement, fluidité, mat & matériel |
| about | 06 · À propos | Portrait, manifeste, parcours |
| contact | 07 · Contact | Booking, formulaire, plan Loft |

## Brand tokens (`brand.jsx`)

```js
Brand.orange  = '#ff7100'   // accent principal
Brand.blue    = '#16066e'   // bleu profond
Brand.ink     = '#0d0a1f'   // texte
Brand.paper   = '#f7f4ee'   // fond
Brand.muted   = 'rgba(13,10,31,0.55)'
Brand.rule    = 'rgba(13,10,31,0.12)'
```

**Typographies** : Tenor Sans (titres display), Cormorant Garamond italic (accents), Inter (corps)

**Dégradés** : `GradientBlob` variants — `doux`, `intense`, `aerien`, `mix`

**Symboles** : `Sym` kinds — `breath`, `spiral`, `sun`, `wave`, `triangle`, `dot`, `arrow`, `plus`

## Tweaks live (panel flottant)

- **Palette** : `default` (charte) / `warmer` / `cooler`
- **Hero dégradé** : `doux` / `aerien` / `intense` / `mix`
- **Italique d'accentuation** : toggle
- **Badges vidéo** : toggle

## Conventions de code

- Chaque page exporte `*Desktop` et `*Mobile` sur `window` via `Object.assign(window, {...})`
- `brand.jsx` expose `window.Brand` muté par le Tweaks panel avant chaque render
- Les photos réelles utilisent `<Photo src="media/..." />`, les placeholders `<PhotoSlot />`
- Pas de routing — tout s'affiche dans un scroll vertical (canvas de design)
