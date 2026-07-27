/**
 * /llms.txt — fiche de synthèse destinée aux moteurs génératifs (ChatGPT, Perplexity,
 * Claude, AI Overviews). Format llms.txt : Markdown court, factuel, une seule page.
 *
 * GÉNÉRÉ depuis la même source de vérité que le site (Sanity au build, repli sur les
 * dicos src/i18n/*.ts) — surtout PAS écrit à la main. La version statique précédente
 * (public/llms.txt) avait dérivé : elle annonçait aux IA des tarifs périmés (150 € au
 * lieu de 160 €, forfaits 420/680/780 € au lieu de 850/1390/2590 €) et une
 * certification Renata França en 2013 au lieu de 2025. Un fichier fait pour être lu
 * comme faisant autorité vaut mieux absent que faux : tout fait ajouté ici doit être
 * dérivé du contenu, jamais recopié.
 *
 * Prérendu (output: 'static') → écrit dans dist/llms.txt au build.
 */
import type { APIRoute } from 'astro';
import { getPageContent, getSettings, getPricing } from '../lib/sanity/content';
import { formatEuro, soinPriceByKey, packageByKey } from '../lib/sanity/pricing';
import { PLANITY } from '../lib/views';

const SITE = 'https://daphnelachavanne.com';

/** « Cours particulier · 1h · au cabinet — 90 € » à partir d'une ligne de tarif de page mouvement. */
function priceRow(row: { title?: string; detail?: string; price?: string }): string {
  const parts = [row.title, row.detail].filter(Boolean).join(' · ');
  return row.price ? `- ${parts} — ${row.price}` : `- ${parts}`;
}

export const GET: APIRoute = async () => {
  const lang = 'fr' as const;
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

  const cabinet = contact.cabinet;

  // Soins : nom + durée depuis le catalogue, prix depuis la source unique `pricing`.
  const soinLines = (soins.soins ?? []).map((s: any) => {
    const price = soinPriceByKey(pricing, s.key);
    const label = [s.name, s.sub].filter(Boolean).join(' — ');
    return price === undefined ? `- ${label}` : `- ${label} — ${formatEuro(price, lang)}`;
  });

  // Packs Soin Signature : le détail (« soit 283 € la séance ») reste éditorial, le prix vient de `pricing`.
  const packLines = (soins.packages ?? []).map((p: any) => {
    const pack = packageByKey(pricing, p.key);
    const label = [p.name, p.detail].filter(Boolean).join(' — ');
    return pack ? `- ${label} — ${formatEuro(pack.price, lang)}` : `- ${label}`;
  });

  const parcoursLines = (about.timeline?.items ?? []).map((i: any) =>
    `- ${i.year} ${i.event}${i.place ? ` (${i.place})` : ''}`,
  );

  const body = `# ${settings.siteName}

> ${settings.schema.businessDescription}

## Informations pratiques
- Praticienne : Daphné Lachavanne, ${settings.schema.personJobTitle.toLowerCase()}.
- Adresse : ${cabinet.addressLine1}, ${cabinet.addressLine2} (Paris 7e arrondissement), France.
- Accès : cabinet privé, uniquement sur rendez-vous.
- Horaires : ${cabinet.hours1} ; ${cabinet.hours2} ; ${cabinet.hours3}.
- Réservation en ligne : ${PLANITY}
- E-mail : ${cabinet.email}
- Note clients : ${home.testimonials.rating}.

## Soins (drainage lymphatique méthode Renata França)
${soinLines.join('\n')}
${packLines.join('\n')}
- Page : ${SITE}/soins

## Yoga (cours particuliers)
${(yoga.tarif?.rows ?? []).map(priceRow).join('\n')}
- Page : ${SITE}/yoga

## Breathwork (respiration consciente)
${(breathwork.tarifs ?? []).map(priceRow).join('\n')}
- Page : ${SITE}/breathwork

## Pilates (cours particuliers)
${(pilates.pricing?.rows ?? []).map(priceRow).join('\n')}
- Page : ${SITE}/pilates

## Parcours
${parcoursLines.join('\n')}

## Pages
- Accueil : ${SITE}/
- À propos : ${SITE}/about
- Prestations & tarifs : ${SITE}/tarifs
- Contact & réservation : ${SITE}/contact
- Version anglaise : ${SITE}/en
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
