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
  integrations: [sitemap()],
});
