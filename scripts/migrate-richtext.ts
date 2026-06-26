/**
 * Migration one-shot : convertit les champs texte historiques (chaînes HTML / texte)
 * vers le texte enrichi (Portable Text), suite au passage de ces champs au type `richText`.
 *
 * Lancer (après avoir renseigné .env : PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN) :
 *   npm run sanity:migrate-richtext
 *
 * Idempotent : ne convertit qu'un champ encore stocké en chaîne (relançable sans dégât).
 * Patche les documents tels quels (publiés ET brouillons), sans toucher aux autres champs.
 */
import { createClient } from '@sanity/client';
import { RICHTEXT_FIELDS, FAQ_TYPES, toBlocks, plainToBlocks, getPath } from './lib/portable';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('❌ Renseigne PUBLIC_SANITY_PROJECT_ID et SANITY_WRITE_TOKEN dans .env avant la migration.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2026-03-01', token, useCdn: false });

async function run() {
  const types = Array.from(new Set([...Object.keys(RICHTEXT_FIELDS), ...FAQ_TYPES]));
  const docs: any[] = await client.fetch('*[_type in $types]', { types });

  let changed = 0;
  for (const doc of docs) {
    const set: Record<string, any> = {};

    for (const [path, kind] of Object.entries(RICHTEXT_FIELDS[doc._type] || {})) {
      const cur = getPath(doc, path);
      if (typeof cur === 'string' && cur.trim()) set[path] = toBlocks(cur, kind);
    }

    if (FAQ_TYPES.includes(doc._type) && Array.isArray(doc.faqs)) {
      let faqChanged = false;
      const faqs = doc.faqs.map((it: any) => {
        if (it && typeof it.a === 'string') {
          faqChanged = true;
          return { ...it, a: plainToBlocks(it.a) };
        }
        return it;
      });
      if (faqChanged) set.faqs = faqs;
    }

    if (Object.keys(set).length) {
      await client.patch(doc._id).set(set).commit();
      changed++;
      console.log(`✓ ${doc._id} — ${Object.keys(set).join(', ')}`);
    }
  }

  console.log(`\n✅ Migration terminée : ${changed} document(s) converti(s) sur ${docs.length} examiné(s).`);
}

run().catch((err) => {
  console.error('❌ Échec de la migration :', err);
  process.exit(1);
});
