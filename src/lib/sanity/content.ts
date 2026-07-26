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
import { DEFAULT_LOCALE } from '../../i18n/config';
import { sanityClient } from './client';
import { QUERIES, PRICING_QUERY, type PageKey } from './queries';
import { PRICING_FALLBACK, type Pricing } from './pricing';
import type {
  HomePage, SoinsPage, YogaPage, BreathworkPage, PilatesPage,
  AboutPage, ContactPage, LegalPage, PrestationsPage, SiteSettings,
} from '../../../sanity.types';

import { home } from '../../i18n/home';
import { soins } from '../../i18n/soins';
import { yoga } from '../../i18n/yoga';
import { breathwork } from '../../i18n/breathwork';
import { pilates } from '../../i18n/pilates';
import { about } from '../../i18n/about';
import { contact } from '../../i18n/contact';
import { legal } from '../../i18n/legal';
import { prestations } from '../../i18n/prestations';
import { common } from '../../i18n/common';

const DICTS = { home, soins, yoga, breathwork, pilates, about, contact, legal, prestations } as const;

// Type document Sanity (généré par TypeGen) par clé de page. Porte les champs
// éditables ABSENTS des dicos texte (images, vidéos, Portable Text…).
type SanityDocByPage = {
  home: HomePage; soins: SoinsPage; yoga: YogaPage; breathwork: BreathworkPage;
  pilates: PilatesPage; about: AboutPage; contact: ContactPage; legal: LegalPage;
  prestations: PrestationsPage;
};

// Contenu d'une page = forme du dico (texte garanti) + champs Sanity générés
// (images/vidéos/etc.). Les vues accèdent ainsi aux champs médias sans `as any`.
export type PageContent<K extends PageKey> = (typeof DICTS)[K]['fr'] & SanityDocByPage[K];
export type Settings = (typeof common)['fr'] & SiteSettings;

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
  // Champ passé en texte enrichi (Portable Text) : dico = string, Sanity = tableau de blocs.
  // La valeur CMS l'emporte si elle a du contenu, sinon on garde le fallback dico.
  if (Array.isArray(remote)) return (remote.length ? remote : local) as T;
  // primitive : la valeur CMS l'emporte sauf si vide
  return remote === '' || remote == null ? local : (remote as T);
}

/** Contenu d'une page dans la langue voulue (Sanity → dico). */
export function getPageContent<K extends PageKey>(page: K, lang: Lang): Promise<PageContent<K>> {
  const local = DICTS[page][lang] as unknown as PageContent<K>;
  return memo(`${page}:${lang}`, async () => {
    if (!sanityClient) return local;
    try {
      const doc = await sanityClient.fetch(QUERIES[page], { lang });
      if (!doc) return local;
      const filled = deepFill(local, doc) as PageContent<K>;
      // deepFill ignore volontairement les champs système Sanity (_id/_type/_rev…) ;
      // _updatedAt/_createdAt sont utiles (dateModified/datePublished JSON-LD) → repassés explicitement.
      filled._updatedAt = doc._updatedAt;
      filled._createdAt = doc._createdAt;
      return filled;
    } catch (err) {
      console.warn(`[sanity] fetch ${page}/${lang} échoué → fallback dico`, err);
      return local;
    }
  });
}

/** Réglages communs (nav, footer, CTA, JSON-LD) dans la langue voulue. */
export function getSettings(lang: Lang): Promise<Settings> {
  const local = common[lang] as unknown as Settings;
  return memo(`settings:${lang}`, async () => {
    if (!sanityClient) return local;
    try {
      const doc = await sanityClient.fetch(QUERIES.settings, { lang });
      return doc ? (deepFill(local, doc) as Settings) : local;
    } catch (err) {
      console.warn(`[sanity] fetch settings/${lang} échoué → fallback dico`, err);
      return local;
    }
  });
}

// Couleurs de marque (bleu/orange) éditables dans Sanity (Réglages → Couleurs).
const COLOR_DEFAULTS = { blue: '#16066e', orange: '#ff7100' } as const;
const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const okHex = (v: unknown, fallback: string) =>
  typeof v === 'string' && HEX.test(v.trim()) ? v.trim() : fallback;

/**
 * Couleurs de marque éditables dans `/admin` (Réglages → Couleurs de la marque).
 * Lues sur le document de la langue par défaut (source unique, indépendant de la
 * langue de la page), puis injectées en `:root` par le Layout. Fallback sur la
 * charte si absent/invalide.
 */
export function getBrandColors(): Promise<{ blue: string; orange: string }> {
  return memo('brandColors', async () => {
    if (!sanityClient) return { ...COLOR_DEFAULTS };
    try {
      const doc = await sanityClient.fetch(
        '*[_type == "siteSettings" && language == $lang][0]{colors}',
        { lang: DEFAULT_LOCALE },
      );
      const c = doc?.colors ?? {};
      return { blue: okHex(c.blue, COLOR_DEFAULTS.blue), orange: okHex(c.orange, COLOR_DEFAULTS.orange) };
    } catch (err) {
      console.warn('[sanity] fetch couleurs échoué → charte par défaut', err);
      return { ...COLOR_DEFAULTS };
    }
  });
}

const num = (v: unknown, fallback: number): number => (typeof v === 'number' && Number.isFinite(v) ? v : fallback);

/**
 * Tarifs (source unique, `pricing`) : indépendant de la langue, comme les couleurs.
 * Fusionne champ par champ avec PRICING_FALLBACK (un prix oublié dans Sanity ne casse
 * pas les autres).
 */
export function getPricing(): Promise<Pricing> {
  return memo('pricing', async () => {
    if (!sanityClient) return PRICING_FALLBACK;
    try {
      const doc = await sanityClient.fetch(PRICING_QUERY);
      if (!doc) return PRICING_FALLBACK;
      return {
        soins: {
          signature: num(doc.soins?.signature, PRICING_FALLBACK.soins.signature),
          signatureFirstSession: num(doc.soins?.signatureFirstSession, PRICING_FALLBACK.soins.signatureFirstSession),
          drainage: num(doc.soins?.drainage, PRICING_FALLBACK.soins.drainage),
          miracleFace: num(doc.soins?.miracleFace, PRICING_FALLBACK.soins.miracleFace),
          comboDetox: num(doc.soins?.comboDetox, PRICING_FALLBACK.soins.comboDetox),
        },
        packages: {
          pack3: {
            sessions: num(doc.packages?.pack3?.sessions, PRICING_FALLBACK.packages.pack3.sessions),
            price: num(doc.packages?.pack3?.price, PRICING_FALLBACK.packages.pack3.price),
          },
          pack5: {
            sessions: num(doc.packages?.pack5?.sessions, PRICING_FALLBACK.packages.pack5.sessions),
            price: num(doc.packages?.pack5?.price, PRICING_FALLBACK.packages.pack5.price),
          },
          pack10: {
            sessions: num(doc.packages?.pack10?.sessions, PRICING_FALLBACK.packages.pack10.sessions),
            price: num(doc.packages?.pack10?.price, PRICING_FALLBACK.packages.pack10.price),
          },
        },
        movement: {
          hour: num(doc.movement?.hour, PRICING_FALLBACK.movement.hour),
          duoSurcharge: num(doc.movement?.duoSurcharge, PRICING_FALLBACK.movement.duoSurcharge),
        },
      };
    } catch (err) {
      console.warn('[sanity] fetch tarifs échoué → repli par défaut', err);
      return PRICING_FALLBACK;
    }
  });
}
