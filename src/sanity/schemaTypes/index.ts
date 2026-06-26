/**
 * Index des schémas Sanity. Un type de document par page + les réglages du site.
 * Les fichiers <page>.ts sont créés sur le patron de homePage.ts (mêmes clés que les dicos).
 */
import richText from './richText';
import siteSettings from './siteSettings';
import homePage from './homePage';
import soinsPage from './soinsPage';
import yogaPage from './yogaPage';
import breathworkPage from './breathworkPage';
import pilatesPage from './pilatesPage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';
import legalPage from './legalPage';
import prestationsPage from './prestationsPage';

export const schemaTypes = [
  richText,
  siteSettings,
  homePage,
  soinsPage,
  yogaPage,
  breathworkPage,
  pilatesPage,
  aboutPage,
  contactPage,
  legalPage,
  prestationsPage,
];
