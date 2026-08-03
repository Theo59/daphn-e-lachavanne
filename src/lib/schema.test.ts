/**
 * Garde sur le nœud `Service` des données structurées.
 *
 * Un audit de crawl a signalé une erreur de validation schema.org sur 8 pages — les 4
 * pages de prestation × 2 langues. Cause : `inLanguage` était émis sur `Service`, alors
 * que schema.org ne déclare cette propriété que sur `CreativeWork`, `Event`,
 * `BroadcastService` et quelques actions. `Service` dérive d'`Intangible` : la propriété
 * y est hors domaine.
 *
 * La liste ci-dessous est volontairement une liste blanche plutôt qu'une simple
 * interdiction d'`inLanguage` : elle échoue aussi si quelqu'un ajoute demain une autre
 * propriété hors domaine, ce qu'une interdiction ciblée ne verrait pas.
 */
import { describe, it, expect } from 'vitest';
import { serviceLd, parseEuro } from './schema';

/** Propriétés valides sur Service : propres au type, ou héritées de Thing. */
const PROPRIETES_AUTORISEES = new Set([
  '@context', '@type', '@id',
  // héritées de Thing
  'name', 'description', 'url', 'image', 'sameAs', 'identifier', 'alternateName',
  // propres à Service
  'serviceType', 'provider', 'areaServed', 'availableChannel', 'offers',
  'audience', 'brand', 'category', 'termsOfService', 'hoursAvailable',
]);

const service = () =>
  serviceLd({
    name: 'Cours de yoga particulier à Paris 7e',
    serviceType: 'Cours de yoga',
    description: 'Cours particuliers de yoga à Paris 7e.',
    path: '/yoga',
    offers: [
      { name: 'Cours particulier', price: '90 €', description: '1h · au cabinet' },
      { name: 'Pilates', price: 'Sur devis' },
    ],
  });

describe('serviceLd()', () => {
  it('n’émet que des propriétés valides sur un Service', () => {
    const horsDomaine = Object.keys(service()).filter((k) => !PROPRIETES_AUTORISEES.has(k));
    expect(horsDomaine, `propriétés hors domaine schema.org : ${horsDomaine.join(', ')}`).toEqual([]);
  });

  it('n’émet jamais `inLanguage` (hors domaine sur Service)', () => {
    expect(service()).not.toHaveProperty('inLanguage');
  });

  it('rattache le service au LocalBusiness et garde un @id stable', () => {
    const s = service() as any;
    expect(s['@id']).toBe('https://daphnelachavanne.com/yoga#service');
    expect(s.provider['@id']).toBe('https://daphnelachavanne.com/#business');
  });

  it('omet priceCurrency quand le prix est « sur devis »', () => {
    const offres = (service() as any).offers;
    const surDevis = offres.find((o: any) => o.name === 'Pilates');
    expect(surDevis).not.toHaveProperty('priceCurrency');
    expect(surDevis).not.toHaveProperty('price');
    const chiffre = offres.find((o: any) => o.name === 'Cours particulier');
    expect(chiffre.price).toBe('90');
    expect(chiffre.priceCurrency).toBe('EUR');
  });
});

describe('parseEuro()', () => {
  it('extrait le montant, ou null pour « sur devis »', () => {
    expect(parseEuro('280 €')).toBe(280);
    expect(parseEuro('60 €/pers.')).toBe(60);
    expect(parseEuro('1 390 €')).toBe(1390);
    expect(parseEuro('Sur devis')).toBeNull();
  });
});
