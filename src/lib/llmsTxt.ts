/**
 * Construction du texte servi par /llms.txt (FR) et /en/llms.txt (EN).
 *
 * Format llms.txt : Markdown court et factuel, destiné aux moteurs génératifs
 * (ChatGPT, Perplexity, Claude, AI Overviews).
 *
 * Règle de ce fichier : AUCUN fait n'est écrit en dur ici — tout est dérivé de la même
 * source de vérité que les pages (Sanity au build, repli sur les dicos src/i18n/*.ts).
 * Seuls les libellés de sections sont littéraux. La version statique précédente
 * (public/llms.txt, écrite à la main) avait dérivé et annonçait aux IA des tarifs
 * périmés et une certification Renata França en 2013 au lieu de 2025 : un fichier lu
 * comme faisant autorité vaut mieux absent que faux.
 */
import type { Lang } from '../i18n/config';
import { getPageContent, getSettings, getPricing } from './sanity/content';
import { formatEuro, soinPriceByKey, packageByKey } from './sanity/pricing';
import { PLANITY } from './views';

const SITE = 'https://daphnelachavanne.com';

/** Libellés de structure (les seules chaînes littérales du fichier). */
const LABELS = {
  fr: {
    practical: 'Informations pratiques',
    practitioner: 'Praticienne',
    address: 'Adresse',
    access: 'Accès',
    accessValue: 'cabinet privé, uniquement sur rendez-vous',
    hours: 'Horaires',
    booking: 'Réservation en ligne',
    email: 'E-mail',
    rating: 'Note clients',
    treatments: 'Soins (drainage lymphatique méthode Renata França)',
    yoga: 'Yoga (cours particuliers)',
    breathwork: 'Breathwork (respiration consciente)',
    pilates: 'Pilates (cours particuliers)',
    journey: 'Parcours',
    pages: 'Pages',
    page: 'Page',
    home: 'Accueil',
    about: 'À propos',
    prices: 'Prestations & tarifs',
    contact: 'Contact & réservation',
    // Libellé du lien vers l'AUTRE langue (depuis le FR → la version anglaise).
    otherLang: 'Version anglaise',
  },
  en: {
    practical: 'Practical information',
    practitioner: 'Practitioner',
    address: 'Address',
    access: 'Access',
    accessValue: 'private studio, by appointment only',
    hours: 'Opening hours',
    booking: 'Online booking',
    email: 'Email',
    rating: 'Client rating',
    treatments: 'Treatments (Renata França lymphatic drainage)',
    yoga: 'Yoga (private lessons)',
    breathwork: 'Breathwork (conscious breathing)',
    pilates: 'Pilates (private lessons)',
    journey: 'Journey',
    pages: 'Pages',
    page: 'Page',
    home: 'Home',
    about: 'About',
    prices: 'Services & prices',
    contact: 'Contact & booking',
    // Link label pointing at the OTHER language (from EN → the French version).
    otherLang: 'French version',
  },
} as const;

/** « Cours particulier · 1h · au cabinet — 90 € » à partir d'une ligne de tarif. */
function priceRow(row: { title?: string; detail?: string; price?: string }): string {
  const parts = [row.title, row.detail].filter(Boolean).join(' · ');
  return row.price ? `- ${parts} — ${row.price}` : `- ${parts}`;
}

export async function buildLlmsTxt(lang: Lang): Promise<string> {
  const [settings, pricing, soins, yoga, breathwork, pilates, about, contact, home] =
    await Promise.all([
      getSettings(lang),
      getPricing(),
      getPageContent('soins', lang),
      getPageContent('yoga', lang),
      getPageContent('breathwork', lang),
      getPageContent('pilates', lang),
      getPageContent('about', lang),
      getPageContent('contact', lang),
      getPageContent('home', lang),
    ]);

  const l = LABELS[lang];
  const cabinet = contact.cabinet;
  // Préfixe d'URL de la langue courante, et lien vers l'autre version.
  const prefix = lang === 'en' ? `${SITE}/en` : SITE;
  const otherHome = lang === 'en' ? `${SITE}/` : `${SITE}/en`;

  // Soins : nom + durée depuis le catalogue, prix depuis la source unique `pricing`.
  const soinLines = (soins.soins ?? []).map((s: any) => {
    const price = soinPriceByKey(pricing, s.key);
    const label = [s.name, s.sub].filter(Boolean).join(' — ');
    return price === undefined ? `- ${label}` : `- ${label} — ${formatEuro(price, lang)}`;
  });

  // Packs : le détail (« soit 283 € la séance ») est éditorial, le prix vient de `pricing`.
  const packLines = (soins.packages ?? []).map((p: any) => {
    const pack = packageByKey(pricing, p.key);
    const label = [p.name, p.detail].filter(Boolean).join(' — ');
    return pack ? `- ${label} — ${formatEuro(pack.price, lang)}` : `- ${label}`;
  });

  const journeyLines = (about.timeline?.items ?? []).map(
    (i: any) => `- ${i.year} ${i.event}${i.place ? ` (${i.place})` : ''}`,
  );

  return `# ${settings.siteName}

> ${settings.schema.businessDescription}

## ${l.practical}
- ${l.practitioner} : Daphné Lachavanne, ${settings.schema.personJobTitle.toLowerCase()}.
- ${l.address} : ${cabinet.addressLine1}, ${cabinet.addressLine2}, France.
- ${l.access} : ${l.accessValue}.
- ${l.hours} : ${cabinet.hours1} ; ${cabinet.hours2} ; ${cabinet.hours3}.
- ${l.booking} : ${PLANITY}
- ${l.email} : ${cabinet.email}
- ${l.rating} : ${home.testimonials.rating}.

## ${l.treatments}
${soinLines.join('\n')}
${packLines.join('\n')}
- ${l.page} : ${prefix}/soins

## ${l.yoga}
${(yoga.tarif?.rows ?? []).map(priceRow).join('\n')}
- ${l.page} : ${prefix}/yoga

## ${l.breathwork}
${(breathwork.tarifs ?? []).map(priceRow).join('\n')}
- ${l.page} : ${prefix}/breathwork

## ${l.pilates}
${(pilates.pricing?.rows ?? []).map(priceRow).join('\n')}
- ${l.page} : ${prefix}/pilates

## ${l.journey}
${journeyLines.join('\n')}

## ${l.pages}
- ${l.home} : ${prefix}${lang === 'en' ? '' : '/'}
- ${l.about} : ${prefix}/about
- ${l.prices} : ${prefix}/tarifs
- ${l.contact} : ${prefix}/contact
- ${l.otherLang} : ${otherHome}
`;
}
