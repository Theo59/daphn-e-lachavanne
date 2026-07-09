// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

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
  site: 'https://daphnelachavanne.com',
  // URLs sans slash final (/soins, pas /soins/) — cohérent avec la nav et les balises canonical.
  trailingSlash: 'never',
  build: { format: 'file' },
  // Site statique par défaut (toutes les pages pré-rendues) ; seules les routes
  // src/pages/api/*.ts passent en rendu à la demande (export const prerender = false)
  // pour appeler Brevo côté serveur (contact, newsletter) sans exposer de clé au client.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  security: {
    // @astrojs/node (mode standalone) construit l'URL de la requête depuis le seul
    // header Host, sans lire X-Forwarded-Proto — derrière le reverse proxy nginx/
    // Traefik (TLS terminée en amont), url.origin reste donc "http://…" alors que
    // le navigateur envoie "https://…" dans l'en-tête Origin. La vérification
    // same-origin générique d'Astro rejetterait alors CHAQUE soumission légitime
    // des deux seuls formulaires POST du site → désactivée ici, et remplacée par
    // une vérification manuelle et ciblée de l'Origin (liste blanche du domaine)
    // directement dans src/pages/api/contact.ts et src/pages/api/newsletter.ts.
    checkOrigin: false,
  },
  // Internationalisation : FR par défaut à la racine (/), EN préfixée sous /en.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations,
});
