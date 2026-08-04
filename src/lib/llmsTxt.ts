/**
 * Construction du texte servi par /llms.txt (FR) et /en/llms.txt (EN).
 *
 * Format llms.txt (llmstxt.org), destiné aux moteurs génératifs (ChatGPT, Perplexity,
 * Claude, AI Overviews). La spécification impose une structure précise :
 *
 *   1. un H1 (seule section obligatoire) ;
 *   2. une blockquote de résumé ;
 *   3. zéro ou plusieurs sections Markdown SANS titre — les détails en texte libre ;
 *   4. zéro ou plusieurs sections en H2, dont chaque entrée de liste DOIT être un lien
 *      Markdown `[titre](url)`, éventuellement suivi de « : » et de précisions.
 *
 * C'est le point 4 qui commande la forme de ce fichier : une première version listait
 * les faits en puces de texte brut avec des URL nues, ce qu'un audit a signalé comme
 * non conforme (« le fichier ne semble pas contenir de liens »). Les faits ne sont pas
 * perdus pour autant : ils passent dans les précisions après « : », c'est-à-dire là où
 * la spécification les attend. Les informations sans URL (adresse, horaires, note)
 * vivent dans la section libre du point 3.
 *
 * Le H2 « Optional » a un sens réservé par la spécification : ce qu'il contient peut
 * être ignoré quand un contexte plus court est nécessaire. On y met donc ce qui est
 * secondaire pour un modèle : l'autre langue et les mentions légales.
 *
 * Règle inchangée : AUCUN fait n'est écrit en dur ici — tout est dérivé de la même
 * source de vérité que les pages (Sanity au build, repli sur les dicos src/i18n/*.ts).
 * Seuls les libellés de structure sont littéraux. La version statique précédente
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
    practitioner: 'Praticienne',
    studio: 'Cabinet privé',
    appointmentOnly: 'sur rendez-vous uniquement',
    hours: 'Horaires',
    email: 'E-mail',
    rating: 'Note clients',
    sectionTreatments: 'Soins',
    sectionLessons: 'Cours et séances',
    sectionBooking: 'Réserver et contacter',
    sectionAbout: 'Parcours',
    sectionOptional: 'Optional',
    treatments: 'Soins & drainage lymphatique méthode Renata França',
    packages: 'Packs Soin Signature',
    yoga: 'Yoga — cours particuliers',
    breathwork: 'Breathwork — respiration consciente',
    pilates: 'Pilates — cours particuliers',
    prices: 'Prestations & tarifs',
    pricesNote: 'catalogue complet des durées et des prix',
    contact: 'Contact & accès au cabinet',
    contactNote: 'formulaire, adresse, horaires',
    booking: 'Réservation en ligne (Planity)',
    bookingNote: 'prise de rendez-vous',
    about: 'À propos de Daphné Lachavanne',
    home: 'Accueil',
    homeNote: 'présentation des quatre pratiques',
    legal: 'Mentions légales',
    legalNote: 'éditeur, hébergement, données',
    otherLang: 'Version anglaise',
    otherLangNote: 'le même site en anglais',
  },
  en: {
    practitioner: 'Practitioner',
    studio: 'Private studio',
    appointmentOnly: 'by appointment only',
    hours: 'Opening hours',
    email: 'Email',
    rating: 'Client rating',
    sectionTreatments: 'Treatments',
    sectionLessons: 'Lessons and sessions',
    sectionBooking: 'Booking and contact',
    sectionAbout: 'Background',
    sectionOptional: 'Optional',
    treatments: 'Treatments & Renata França lymphatic drainage',
    packages: 'Signature Treatment packs',
    yoga: 'Yoga — private lessons',
    breathwork: 'Breathwork — conscious breathing',
    pilates: 'Pilates — private lessons',
    prices: 'Services & prices',
    pricesNote: 'full catalogue of durations and prices',
    contact: 'Contact & studio access',
    contactNote: 'form, address, opening hours',
    booking: 'Online booking (Planity)',
    bookingNote: 'appointment scheduling',
    about: 'About Daphné Lachavanne',
    home: 'Home',
    homeNote: 'overview of the four practices',
    legal: 'Legal notice',
    legalNote: 'publisher, hosting, data',
    otherLang: 'French version',
    otherLangNote: 'the same site in French',
  },
} as const;

/** Entrée de liste conforme à la spec : `- [titre](url): précisions`. */
function link(title: string, url: string, details?: string): string {
  return details ? `- [${title}](${url}): ${details}` : `- [${title}](${url})`;
}

/**
 * « Cours particulier — 1h · au cabinet — 90 € ».
 * Les libellés éditoriaux contiennent déjà des « · » (ex. « 1h · au cabinet ») : on
 * sépare donc les champs par « — », et les prestations entre elles par « ; » (voir
 * `JOIN`), sans quoi on ne distingue plus où finit une prestation.
 */
function priceItem(row: { title?: string; detail?: string; price?: string }): string {
  return [row.title, row.detail, row.price].filter(Boolean).join(' — ');
}

/** Séparateur entre prestations d'une même liste. */
const JOIN = ' ; ';

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
  const homeUrl = lang === 'en' ? `${SITE}/en` : `${SITE}/`;
  const otherHome = lang === 'en' ? `${SITE}/` : `${SITE}/en`;

  // Soins : nom + durée depuis le catalogue, prix depuis la source unique `pricing`.
  const soinList = (soins.soins ?? [])
    .map((s: any) => {
      const price = soinPriceByKey(pricing, s.key);
      return priceItem({
        title: s.name,
        detail: s.sub,
        price: price === undefined ? undefined : formatEuro(price, lang),
      });
    })
    .join(JOIN);

  // Packs : le détail (« soit 283 € la séance ») est éditorial, le prix vient de `pricing`.
  const packList = (soins.packages ?? [])
    .map((p: any) => {
      const pack = packageByKey(pricing, p.key);
      return priceItem({
        title: p.name,
        detail: p.detail,
        price: pack ? formatEuro(pack.price, lang) : undefined,
      });
    })
    .join(JOIN);

  const journey = (about.timeline?.items ?? [])
    .map((i: any) => `${i.year} ${i.event}${i.place ? ` (${i.place})` : ''}`)
    .join(JOIN);

  const yogaPrices = (yoga.tarif?.rows ?? []).map(priceItem).join(JOIN);
  const breathworkPrices = (breathwork.tarifs ?? []).map(priceItem).join(JOIN);
  const pilatesPrices = (pilates.pricing?.rows ?? []).map(priceItem).join(JOIN);

  // Section libre (sans titre) : les faits qui ne pointent vers aucune URL.
  // Le deux-points prend une espace avant en français, aucune en anglais.
  const c2 = lang === 'fr' ? ' : ' : ': ';
  const facts = [
    `${l.practitioner}${c2}Daphné Lachavanne, ${settings.schema.personJobTitle.toLowerCase()}.`,
    `${l.studio}${c2}${cabinet.addressLine1}, ${cabinet.addressLine2}, France — ${l.appointmentOnly}.`,
    `${l.hours}${c2}${cabinet.hours1} ; ${cabinet.hours2} ; ${cabinet.hours3}.`,
    `${l.email}${c2}${cabinet.email}. ${l.rating}${c2}${home.testimonials.rating}.`,
  ].join('\n');

  return `# ${settings.siteName}

> ${settings.schema.businessDescription}

${facts}

## ${l.sectionTreatments}
${link(l.treatments, `${prefix}/soins`, soinList)}
${link(l.packages, `${prefix}/soins`, packList)}

## ${l.sectionLessons}
${link(l.yoga, `${prefix}/yoga`, yogaPrices)}
${link(l.breathwork, `${prefix}/breathwork`, breathworkPrices)}
${link(l.pilates, `${prefix}/pilates`, pilatesPrices)}

## ${l.sectionBooking}
${link(l.home, homeUrl, l.homeNote)}
${link(l.prices, `${prefix}/tarifs`, l.pricesNote)}
${link(l.contact, `${prefix}/contact`, l.contactNote)}
${link(l.booking, PLANITY, l.bookingNote)}

## ${l.sectionAbout}
${link(l.about, `${prefix}/about`, journey)}

## ${l.sectionOptional}
${link(l.otherLang, otherHome, l.otherLangNote)}
${link(l.legal, `${prefix}/mentions-legales`, l.legalNote)}
`;
}
