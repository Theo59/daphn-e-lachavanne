/**
 * Seed Sanity : importe les dictionnaires src/i18n/*.ts → documents FR + EN.
 *
 * Lancer (après avoir renseigné .env : PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN) :
 *   npm run sanity:seed
 *
 * Idempotent : createOrReplace sur des _id déterministes (<type>-<lang>). Relançable sans doublon.
 * Crée aussi les documents translation.metadata pour lier FR↔EN dans le Studio (plugin i18n).
 */
import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';

import { common } from '../src/i18n/common';
import { home } from '../src/i18n/home';
import { soins } from '../src/i18n/soins';
import { yoga } from '../src/i18n/yoga';
import { breathwork } from '../src/i18n/breathwork';
import { pilates } from '../src/i18n/pilates';
import { about } from '../src/i18n/about';
import { contact } from '../src/i18n/contact';
import { legal } from '../src/i18n/legal';
import { prestations } from '../src/i18n/prestations';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('❌ Renseigne PUBLIC_SANITY_PROJECT_ID et SANITY_WRITE_TOKEN dans .env avant le seed.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2026-03-01', token, useCdn: false });

// type Sanity → dictionnaire { fr, en }
const MAP: { type: string; dict: { fr: unknown; en: unknown } }[] = [
  { type: 'siteSettings', dict: common },
  { type: 'homePage', dict: home },
  { type: 'soinsPage', dict: soins },
  { type: 'yogaPage', dict: yoga },
  { type: 'breathworkPage', dict: breathwork },
  { type: 'pilatesPage', dict: pilates },
  { type: 'aboutPage', dict: about },
  { type: 'contactPage', dict: contact },
  { type: 'legalPage', dict: legal },
  { type: 'prestationsPage', dict: prestations },
];

const LANGS = ['fr', 'en'] as const;

/** Ajoute un _key stable à chaque item objet d'un tableau (requis par Sanity). */
function withKeys(value: any): any {
  if (Array.isArray(value)) {
    return value.map((item) =>
      item && typeof item === 'object' && !Array.isArray(item)
        ? { _key: randomUUID().slice(0, 8), ...withKeys(item) }
        : withKeys(item),
    );
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(value)) out[k] = withKeys(value[k]);
    return out;
  }
  return value;
}

async function run() {
  // Filtre optionnel : `npm run sanity:seed -- prestationsPage` ne (re)crée que ce type.
  // Sans argument : seed complet (⚠️ écrase tous les docs — à éviter si du contenu a été édité).
  const only = process.argv.slice(2).filter(Boolean);
  const targets = only.length ? MAP.filter((m) => only.includes(m.type)) : MAP;
  if (!targets.length) {
    console.error(`❌ Aucun type à seeder (filtre : ${only.join(', ') || '—'}).`);
    process.exit(1);
  }

  const tx = client.transaction();

  for (const { type, dict } of targets) {
    for (const lang of LANGS) {
      tx.createOrReplace({
        _id: `${type}-${lang}`,
        _type: type,
        language: lang,
        ...withKeys((dict as any)[lang]),
      });
    }
    // Métadonnée de traduction (lie FR↔EN dans le Studio) — format v5 du plugin
    // document-internationalization : la langue est dans le champ `language`, le `_key`
    // est aléatoire (cf. createReference() du plugin). Réf. weak + _strengthenOnPublish.
    tx.createOrReplace({
      _id: `${type}-translation-metadata`,
      _type: 'translation.metadata',
      schemaTypes: [type],
      translations: LANGS.map((lang) => ({
        _key: randomUUID().slice(0, 12),
        _type: 'internationalizedArrayReferenceValue',
        language: lang,
        value: {
          _type: 'reference',
          _ref: `${type}-${lang}`,
          _weak: true,
          _strengthenOnPublish: { type },
        },
      })),
    });
  }

  await tx.commit();
  console.log(`✅ Seed terminé : ${targets.length} type(s) × ${LANGS.length} langues importés dans « ${dataset} » (${targets.map((t) => t.type).join(', ')}).`);
}

run().catch((err) => {
  console.error('❌ Échec du seed :', err);
  process.exit(1);
});
