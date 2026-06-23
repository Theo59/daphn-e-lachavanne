// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Lecture des variables d'env au niveau config (loadEnv lit .env, prefix '' = toutes).
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  '',
);

// Le Studio + le fetch Sanity ne sont activés QUE si un projet est configuré.
// Sinon, le site build en fallback sur les dicos src/i18n/*.ts (rien ne casse).
const sanityConfigured = Boolean(PUBLIC_SANITY_PROJECT_ID);

const integrations = [
  sitemap({
    // Déclare les correspondances de langues → génère les <xhtml:link hreflang> par URL.
    i18n: {
      defaultLocale: 'fr',
      locales: { fr: 'fr-FR', en: 'en-US' },
    },
    // Le Studio n'a pas à figurer dans le sitemap.
    filter: (page) => !page.includes('/admin'),
    // Signal de fraîcheur (valorisé par les crawlers IA) : date de build par URL.
    serialize(item) {
      item.lastmod = new Date().toISOString();
      return item;
    },
  }),
];

if (sanityConfigured) {
  integrations.push(
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-03-01',
      useCdn: false,
      // Studio embarqué en SPA client-side à /admin (site public reste statique).
      studioBasePath: '/admin',
    }),
    react(),
  );
}

// https://astro.build/config
export default defineConfig({
  // Domaine canonique du site — requis pour les URL absolues (canonical, sitemap, Open Graph).
  site: 'https://daphnelachavanne.netlify.app',
  // URLs sans slash final (/soins, pas /soins/) — cohérent avec la nav et les balises canonical.
  trailingSlash: 'never',
  build: { format: 'file' },
  // Internationalisation : FR par défaut à la racine (/), EN préfixée sous /en.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations,
});
