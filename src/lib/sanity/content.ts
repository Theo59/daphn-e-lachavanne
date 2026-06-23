/**
 * Couche de contenu : source de vérité = Sanity (au build), avec FALLBACK sur les
 * dictionnaires src/i18n/*.ts. Les vues appellent getPageContent()/getSettings()
 * au lieu d'importer les dicos directement.
 *
 * `deepFill(local, remote)` : reconstruit la forme EXACTE du dico, en prenant la
 * valeur Sanity quand elle existe (non vide), sinon celle du dico. → forme garantie,
 * champs vides côté CMS sans danger, champs système Sanity ignorés.
 */
import type { Lang } from '../../i18n/config';
import { sanityClient } from './client';
import { QUERIES, type PageKey } from './queries';

import { home } from '../../i18n/home';
import { soins } from '../../i18n/soins';
import { yoga } from '../../i18n/yoga';
import { breathwork } from '../../i18n/breathwork';
import { pilates } from '../../i18n/pilates';
import { about } from '../../i18n/about';
import { contact } from '../../i18n/contact';
import { legal } from '../../i18n/legal';
import { common } from '../../i18n/common';

const DICTS = { home, soins, yoga, breathwork, pilates, about, contact, legal } as const;

// Mémoïsation par build : Layout + Nav + Footer + vue demandent le même contenu/réglages
// sur une page → on ne fetch Sanity qu'une fois par (clé, langue). Cache de promesses
// (dédoublonne aussi les rendus concurrents).
const cache = new Map<string, Promise<unknown>>();
function memo<T>(key: string, factory: () => Promise<T>): Promise<T> {
  // En dev, pas de cache : chaque refresh reflète les éditions publiées dans Sanity.
  if (import.meta.env.DEV) return factory();
  let hit = cache.get(key) as Promise<T> | undefined;
  if (!hit) {
    hit = factory();
    cache.set(key, hit);
  }
  return hit;
}

/** Remplit `local` avec les valeurs de `remote` quand elles existent (récursif). */
function deepFill<T>(local: T, remote: any): T {
  if (remote == null) return local;
  if (Array.isArray(local)) {
    return (Array.isArray(remote) && remote.length ? remote : local) as T;
  }
  if (local !== null && typeof local === 'object') {
    const out: any = {};
    for (const key of Object.keys(local as object)) {
      out[key] = deepFill((local as any)[key], remote?.[key]);
    }
    // Champs présents UNIQUEMENT côté Sanity (ex: images, vidéo) → on les laisse passer
    // (hors champs système _id/_type/_rev…). Les dicos texte ne les connaissent pas.
    if (remote && typeof remote === 'object') {
      for (const key of Object.keys(remote)) {
        if (!(key in out) && !key.startsWith('_')) out[key] = remote[key];
      }
    }
    return out as T;
  }
  // primitive : la valeur CMS l'emporte sauf si vide
  return remote === '' || remote == null ? local : (remote as T);
}

/** Contenu d'une page dans la langue voulue (Sanity → dico). */
export function getPageContent<K extends PageKey>(
  page: K,
  lang: Lang,
): Promise<(typeof DICTS)[K]['fr'] & Record<string, any>> {
  const local = DICTS[page][lang] as (typeof DICTS)[K]['fr'] & Record<string, any>;
  return memo(`${page}:${lang}`, async () => {
    if (!sanityClient) return local;
    try {
      const doc = await sanityClient.fetch(QUERIES[page], { lang });
      return doc ? deepFill(local, doc) : local;
    } catch (err) {
      console.warn(`[sanity] fetch ${page}/${lang} échoué → fallback dico`, err);
      return local;
    }
  });
}

/** Réglages communs (nav, footer, CTA, JSON-LD) dans la langue voulue. */
export function getSettings(lang: Lang): Promise<(typeof common)['fr'] & Record<string, any>> {
  const local = common[lang] as (typeof common)['fr'] & Record<string, any>;
  return memo(`settings:${lang}`, async () => {
    if (!sanityClient) return local;
    try {
      const doc = await sanityClient.fetch(QUERIES.settings, { lang });
      return doc ? deepFill(local, doc) : local;
    } catch (err) {
      console.warn(`[sanity] fetch settings/${lang} échoué → fallback dico`, err);
      return local;
    }
  });
}
