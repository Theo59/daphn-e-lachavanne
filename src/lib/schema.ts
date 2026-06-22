/**
 * Helpers de données structurées (schema.org) pour les pages services.
 * Les prix proviennent directement des données de page → toujours exacts.
 */

const SITE = 'https://daphnelachavanne.netlify.app';
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
  path: string; // ex: '/soins'
  offers: OfferInput[];
}) {
  const url = `${SITE}${opts.path}`;
  const offers = opts.offers.map((o) => {
    const price = parseEuro(o.price);
    const offer: Record<string, unknown> = {
      '@type': 'Offer',
      name: o.name,
      ...(o.description ? { description: o.description } : {}),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://www.planity.com/daphne-lachavanne-75007-paris',
    };
    if (price !== null) {
      offer.price = String(price);
    } else {
      offer.description = [o.description, 'Sur devis'].filter(Boolean).join(' · ');
    }
    return offer;
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Paris' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.planity.com/daphne-lachavanne-75007-paris',
    },
    offers,
  };
}
