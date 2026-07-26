/**
 * Structure du Studio en SINGLETONS : réglages + une entrée par page.
 * Chaque entrée ouvre DIRECTEMENT le document de base (FR, _id `<type>-fr`) — pas de liste,
 * pas de bouton « + ». Le sélecteur de langue du plugin i18n bascule vers l'EN (`<type>-en`).
 */
import type { StructureResolver } from 'sanity/structure';

const PAGES: [string, string][] = [
  ['homePage', 'Accueil'],
  ['soinsPage', 'Soins'],
  ['yogaPage', 'Yoga'],
  ['breathworkPage', 'Breathwork'],
  ['pilatesPage', 'Pilates'],
  ['aboutPage', 'À propos'],
  ['contactPage', 'Contact'],
  ['prestationsPage', 'Prestations & tarifs'],
  ['legalPage', 'Mentions légales / 404'],
];

export const structure: StructureResolver = (S) => {
  const singleton = (type: string, title: string) =>
    S.listItem()
      .title(title)
      .id(type)
      .child(S.document().schemaType(type).documentId(`${type}-fr`).title(title));

  // `pricing` n'est pas traduit (un prix n'a pas de langue) : un seul document,
  // id fixe `pricing` (pas de suffixe `-fr`/`-en` comme les types i18n ci-dessus).
  const nonLocalizedSingleton = (type: string, title: string) =>
    S.listItem()
      .title(title)
      .id(type)
      .child(S.document().schemaType(type).documentId(type).title(title));

  return S.list()
    .title('Contenu')
    .items([
      singleton('siteSettings', 'Réglages du site'),
      nonLocalizedSingleton('pricing', 'Tarifs (source unique)'),
      S.divider(),
      ...PAGES.map(([type, title]) => singleton(type, title)),
    ]);
};
