/**
 * Client Sanity pour le fetch de contenu AU BUILD (pages statiques).
 * `useCdn: false` + perspective « published » → on récupère le contenu publié, frais.
 * Si PUBLIC_SANITY_PROJECT_ID n'est pas défini, le client est null et la couche
 * de contenu (content.ts) retombe sur les dictionnaires src/i18n/*.ts.
 */
import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

/** True quand un projet Sanity est configuré (sinon : mode fallback dico). */
export const sanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-03-01',
      useCdn: false,
      perspective: 'published',
    })
  : null;
