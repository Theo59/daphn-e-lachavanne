/**
 * Tarifs — lecture depuis la source unique Sanity (`pricing`, singleton non traduit)
 * + formatage localisé. Voir src/sanity/schemaTypes/pricing.ts pour le schéma.
 */
import type { Lang } from '../../i18n/config';

export type Pricing = {
  soins: {
    signature: number;
    signatureFirstSession: number;
    drainage: number;
    miracleFace: number;
    comboDetox: number;
  };
  packages: {
    pack3: { sessions: number; price: number };
    pack5: { sessions: number; price: number };
    pack10: { sessions: number; price: number };
  };
  movement: {
    hour: number;
    duoSurcharge: number;
  };
};

/** Repli si le document Sanity est vide/injoignable — mêmes valeurs que les dicos i18n. */
export const PRICING_FALLBACK: Pricing = {
  soins: { signature: 290, signatureFirstSession: 260, drainage: 160, miracleFace: 95, comboDetox: 220 },
  packages: {
    pack3: { sessions: 3, price: 850 },
    pack5: { sessions: 5, price: 1390 },
    pack10: { sessions: 10, price: 2590 },
  },
  movement: { hour: 90, duoSurcharge: 40 },
};

export type SoinKey = keyof Pricing['soins'];
export type PackageKey = keyof Pricing['packages'];

/** « 290 € » en FR, « €290 » en EN. Séparateur de milliers localisé (1 390 € / €1,390). */
export function formatEuro(amount: number, lang: Lang): string {
  const grouped = Math.round(amount).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US');
  return lang === 'fr' ? `${grouped} €` : `€${grouped}`;
}

/** Économie d'un pack par rapport au prix du Soin Signature à l'unité, ex. « −20 € » / « −€20 ». */
export function formatPackageSaving(pricing: Pricing, key: PackageKey, lang: Lang): string {
  const pack = pricing.packages[key];
  const fullPrice = pricing.soins.signature * pack.sessions;
  return `−${formatEuro(fullPrice - pack.price, lang)}`;
}

/** Prix « à la séance » d'un pack, arrondi (ex. 850 € / 3 → 283 €). */
export function packageSessionPrice(pricing: Pricing, key: PackageKey): number {
  const pack = pricing.packages[key];
  return Math.round(pack.price / pack.sessions);
}

/** Lookup par clé texte (issue de Sanity/dico, non typée) — undefined si clé inconnue. */
export function soinPriceByKey(pricing: Pricing, key: string): number | undefined {
  return (pricing.soins as Record<string, number>)[key];
}

export function packageByKey(pricing: Pricing, key: string): { sessions: number; price: number } | undefined {
  return (pricing.packages as Record<string, { sessions: number; price: number }>)[key];
}

/**
 * Prix affiché d'une prestation de la page Tarifs, à partir de sa `priceKey`.
 * `movementHour` → tarif cours particulier ; `pack3/5/10` → prix du pack ; sinon
 * une des clés de soins. Retourne undefined si `priceKey` absente/inconnue (repli
 * sur le champ `price` libre, géré par l'appelant).
 */
export function servicePriceByKey(pricing: Pricing, priceKey: string | undefined | null): number | undefined {
  if (!priceKey) return undefined;
  if (priceKey === 'movementHour') return pricing.movement.hour;
  const pack = packageByKey(pricing, priceKey);
  if (pack) return pack.price;
  return soinPriceByKey(pricing, priceKey);
}

/** Note calculée pour une ligne « pack » de la page Tarifs (ex. « −20 € » / « −€20 »). */
export function servicePackageSaving(pricing: Pricing, priceKey: string | undefined | null, lang: Lang): string | undefined {
  if (!priceKey || !(priceKey in pricing.packages)) return undefined;
  return formatPackageSaving(pricing, priceKey as PackageKey, lang);
}
