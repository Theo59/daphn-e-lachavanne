/**
 * Helpers de données structurées (schema.org) pour les pages services.
 * Les prix proviennent directement des données de page → toujours exacts.
 */

const SITE = 'https://daphnelachavanne.com';
const BUSINESS_ID = `${SITE}/#business`;

/** '280 €' → 280 · '60 €/pers.' → 60 · 'Sur devis' → null */
export function parseEuro(value: string): number | null {
  const m = value.replace(/\s/g, '').match(/(\d+)/);
  if (!m) return null;
  return /devis/i.test(value) ? null : Number(m[1]);
}

export interface OfferInput {
  name: string;
  price: string; // ex: '150 €', 'Sur devis'
  description?: string;
}

/**
 * Construit un Service schema.org avec ses offres, rattaché au LocalBusiness.
 */
export function serviceLd(opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string; // ex: '/soins' ou '/en/soins'
  offers: OfferInput[];
  inLanguage?: string; // BCP-47, ex: 'fr-FR' / 'en-US'
}) {
  const url = `${SITE}${opts.path}`;
  const offers = opts.offers.map((o) => {
    const price = parseEuro(o.price);
    if (price === null) {
      // « Sur devis » : pas de prix public → on n'émet pas priceCurrency (évite l'erreur
      // Google « Offer sans price »). On garde l'offre nommée et décrite. Le libellé
      // « sur devis » vient de o.price (déjà localisé : 'Sur devis' / 'On request').
      return {
        '@type': 'Offer',
        name: o.name,
        description: [o.description, o.price].filter(Boolean).join(' · '),
        url: 'https://www.planity.com/daphne-lachavanne-75007-paris',
      };
    }
    return {
      '@type': 'Offer',
      name: o.name,
      ...(o.description ? { description: o.description } : {}),
      price: String(price),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://www.planity.com/daphne-lachavanne-75007-paris',
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    ...(opts.inLanguage ? { inLanguage: opts.inLanguage } : {}),
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Paris' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.planity.com/daphne-lachavanne-75007-paris',
    },
    offers,
  };
}
