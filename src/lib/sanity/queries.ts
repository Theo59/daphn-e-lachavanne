/**
 * Requêtes GROQ par page. La forme stockée dans Sanity est IDENTIQUE à celle des
 * dicos src/i18n/*.ts (mêmes clés), donc on renvoie simplement le document de la
 * langue demandée ($lang) ; content.ts fait ensuite un deep-fill vers la forme du dico
 * (les champs système _id/_type/language/title sont ignorés).
 */

/** page logique → type de document Sanity. */
export const TYPE_BY_PAGE = {
  home: 'homePage',
  soins: 'soinsPage',
  yoga: 'yogaPage',
  breathwork: 'breathworkPage',
  pilates: 'pilatesPage',
  about: 'aboutPage',
  contact: 'contactPage',
  legal: 'legalPage',
  prestations: 'prestationsPage',
} as const;

export type PageKey = keyof typeof TYPE_BY_PAGE;

function docByLang(type: string): string {
  return `*[_type == "${type}" && language == $lang][0]`;
}

export const QUERIES: Record<PageKey | 'settings', string> = {
  ...(Object.fromEntries(
    Object.entries(TYPE_BY_PAGE).map(([page, type]) => [page, docByLang(type)]),
  ) as Record<PageKey, string>),
  settings: docByLang('siteSettings'),
};

/** `pricing` n'est pas traduit (un prix n'a pas de langue) : document unique, pas de filtre `language`. */
export const PRICING_QUERY = `*[_type == "pricing"][0]`;
