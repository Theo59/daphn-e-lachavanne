// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  integrations: [
    sitemap({
      // Déclare les correspondances de langues → génère les <xhtml:link hreflang> par URL.
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      // Signal de fraîcheur (valorisé par les crawlers IA) : date de build par URL.
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
