# Daphné Lachavanne — Site web

Site de praticienne bien-être (soins, breathwork, yoga, pilates) · Paris 7e.

## Lancer le projet

```bash
npm install && npm run dev
# http://localhost:4321
```

## Build

```bash
npm run build   # output → dist/
npm run preview # prévisualisation locale
```

## Stack

- **Astro** — composants `.astro`, CSS global, aucun JS runtime par défaut
- Build statique servi via CDN / Firebase Hosting

## Structure

```
src/
  layouts/Layout.astro       # Shell HTML + Nav + Footer
  components/                # Logo, Nav, Footer, Sym, GradientBlob…
  styles/global.css          # Variables brand, reset, fonts
  pages/                     # index, soins, yoga, breathwork, pilates, about, contact
public/
  media/                     # Photos et médias (non trackés, gérer séparément)
  favicon.ico / favicon.svg
```

## Médias

Les fichiers `public/media/` (336 Mo) ne sont pas trackés dans git.
À déployer séparément ou via stockage externe.
