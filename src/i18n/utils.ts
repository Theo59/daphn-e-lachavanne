/**
 * Helpers i18n — dérivation de la langue depuis l'URL et construction des chemins
 * localisés. Aucune dépendance aux dictionnaires (évite les cycles d'import).
 *
 * Convention de chemin « canonique » : toujours le chemin FR à la racine
 * ('/', '/soins', '/contact'…), sans préfixe de langue, sans .html, sans slash final.
 * localizePath() y ajoute le préfixe /en pour l'anglais.
 */

import { LOCALES, DEFAULT_LOCALE, HTML_LANG, type Lang } from './config';

/**
 * Langue de la page courante, lue au 1er segment de l'URL ('/en/...' → 'en', sinon défaut).
 * Robuste à build.format:'file' : '/en.html' et '/en/soins.html' donnent tous deux 'en'.
 */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.replace(/^\/+/, '').split('/')[0].replace(/\.html$/, '');
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Lang) : DEFAULT_LOCALE;
}

/**
 * Ramène n'importe quel pathname au chemin canonique FR.
 * Gère build.format:'file' (.html / index.html) et trailingSlash:'never'.
 * '/en/soins.html' → '/soins' · '/en' → '/' · '/index.html' → '/'
 */
export function stripToCanonical(pathname: string): string {
  let p = pathname.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '');
  for (const l of LOCALES) {
    if (l === DEFAULT_LOCALE) continue;
    if (p === `/${l}`) return '/';
    if (p.startsWith(`/${l}/`)) {
      p = p.slice(l.length + 1);
      break;
    }
  }
  return p === '' ? '/' : p;
}

/** Préfixe un chemin canonique FR pour la langue cible. localizePath('/soins','en') → '/en/soins'. */
export function localizePath(path: string, lang: Lang): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LOCALE) return normalized;
  return normalized === '/' ? `/${lang}` : `/${lang}${normalized}`;
}

export interface Alternate {
  lang: Lang;
  htmlLang: string; // BCP-47, pour hreflang
  path: string; // chemin localisé absolu (commence par /)
}

/**
 * Pour la page courante, renvoie les chemins équivalents dans toutes les langues.
 * Sert à générer les <link hreflang> ET le sélecteur de langue de la nav.
 */
export function getAlternates(url: URL): Alternate[] {
  const canonical = stripToCanonical(url.pathname);
  return LOCALES.map((lang) => ({
    lang,
    htmlLang: HTML_LANG[lang],
    path: localizePath(canonical, lang),
  }));
}
