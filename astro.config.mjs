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

// `lastmod` du sitemap = date de dernière modification RÉELLE de la page dans Sanity
// (`_updatedAt`), pas la date de build. Google n'utilise `lastmod` que s'il le juge
// « constamment et vérifiablement exact » : mettre la date du build sur les 18 URL à
// chaque déploiement fait déclarer que tout le site a changé alors que rien n'a bougé,
// et c'est exactement le motif pour lequel le signal finit ignoré. Même valeur que le
// `dateModified` du JSON-LD (Layout.astro), donc les deux signaux concordent.
/** @type {Record<string, string>} */
const TYPE_BY_PATH = {
  homePage: '',
  soinsPage: '/soins',
  yogaPage: '/yoga',
  breathworkPage: '/breathwork',
  pilatesPage: '/pilates',
  aboutPage: '/about',
  contactPage: '/contact',
  legalPage: '/mentions-legales',
  prestationsPage: '/tarifs',
};

const SITE_URL = 'https://daphnelachavanne.com';

/**
 * URL absolue d'un document (type + langue) → même forme que les items du sitemap.
 * @param {string} type
 * @param {string} language
 * @returns {string | null}
 */
function urlForDoc(type, language) {
  const path = TYPE_BY_PATH[type];
  if (path === undefined) return null;
  return `${SITE_URL}${language === 'en' ? '/en' : ''}${path}`;
}

/**
 * url → _updatedAt, construit une seule fois. Map vide si Sanity n'est pas joignable.
 * @type {Promise<Map<string, string>> | undefined}
 */
let lastmodMap;

/** @returns {Promise<Map<string, string>>} */
function getLastmodMap() {
  if (lastmodMap) return lastmodMap;
  lastmodMap = (async () => {
    /** @type {Map<string, string>} */
    const map = new Map();
    if (!sanityConfigured) return map;
    const query = `*[_type in ${JSON.stringify(Object.keys(TYPE_BY_PATH))}]{_type, language, _updatedAt}`;
    const dataset = PUBLIC_SANITY_DATASET || 'production';
    const endpoint =
      `https://${PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2026-03-01/data/query/${dataset}` +
      `?query=${encodeURIComponent(query)}`;
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { result = [] } = await res.json();
      for (const doc of result) {
        const url = urlForDoc(doc._type, doc.language);
        if (url && doc._updatedAt) map.set(url, doc._updatedAt);
      }
    } catch (err) {
      // Pas de date plutôt qu'une fausse : un `lastmod` absent est neutre, un `lastmod`
      // inventé décrédibilise le signal pour tout le sitemap.
      console.warn('[sitemap] _updatedAt Sanity indisponible → sitemap sans lastmod', err);
    }
    return map;
  })();
  return lastmodMap;
}

const integrations = [
  sitemap({
    // Déclare les correspondances de langues → génère les <xhtml:link hreflang> par URL.
    i18n: {
      defaultLocale: 'fr',
      locales: { fr: 'fr-FR', en: 'en-US' },
    },
    // Le Studio n'a pas à figurer dans le sitemap.
    filter: (page) => !page.includes('/admin'),
    async serialize(item) {
      const map = await getLastmodMap();
      // `build.format: 'file'` → les URL arrivent sans slash final, sauf la racine.
      const lastmod = map.get(item.url.replace(/\/$/, ''));
      if (lastmod) item.lastmod = lastmod;
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
