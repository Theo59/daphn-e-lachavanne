/**
 * Configuration du Sanity Studio (embarqué à /admin par @sanity/astro).
 * i18n document-level : un document FR + un document EN par type, liés par le plugin.
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { documentInternationalization } from '@sanity/document-internationalization';
import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Tous les types traduits (FR/EN). Doit rester aligné avec les schémas + la structure.
const TRANSLATED_TYPES = [
  'siteSettings',
  'homePage',
  'soinsPage',
  'yogaPage',
  'breathworkPage',
  'pilatesPage',
  'aboutPage',
  'contactPage',
  'legalPage',
];

// Ces types sont des singletons (un doc FR + un doc EN, fixes) : on bloque la
// création de nouveaux docs et on retire dupliquer/supprimer/dépublier.
const SINGLETONS = new Set(TRANSLATED_TYPES);
const LOCKED_ACTIONS = new Set(['duplicate', 'delete', 'unpublish']);

export default defineConfig({
  name: 'default',
  title: 'Daphné Lachavanne',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'fr', title: 'Français' },
        { id: 'en', title: 'English' },
      ],
      schemaTypes: TRANSLATED_TYPES,
    }),
    visionTool(),
  ],
  document: {
    // Retire les types singletons du menu de création global (« + »).
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((tpl) => !SINGLETONS.has(tpl.templateId))
        : prev,
    // Sur un singleton : garde publier/annuler/restaurer + actions du plugin i18n,
    // retire dupliquer/supprimer/dépublier.
    actions: (prev, { schemaType }) =>
      SINGLETONS.has(schemaType)
        ? prev.filter((a) => !(a.action && LOCKED_ACTIONS.has(a.action)))
        : prev,
  },
  schema: { types: schemaTypes },
});
