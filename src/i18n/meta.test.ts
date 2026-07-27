/**
 * Garde sur les balises title / meta description de chaque page.
 *
 * Search Console a montré que /soins — la page la plus vue après l'accueil — avait un
 * title de 64 caractères, tronqué en résultat de recherche. Rien ne surveillait cette
 * longueur, et elle ne se voit pas en relisant le dico.
 *
 * Seuils : title ≤ 60 caractères (Google tronque autour de 580 px, soit ~60 signes en
 * moyenne — la limite réelle est en pixels, 60 est l'approximation d'usage), description
 * entre 120 et 160. Ce sont des bornes de sécurité, pas des cibles à atteindre.
 *
 * Ne couvre que les dicos i18n (repli). Les valeurs Sanity, qui les surchargent au build,
 * ne sont pas testables ici — elles se vérifient au crawl (scripts/site-crawl.mjs).
 */
import { describe, it, expect } from 'vitest';
import { home } from './home';
import { soins } from './soins';
import { yoga } from './yoga';
import { breathwork } from './breathwork';
import { pilates } from './pilates';
import { about } from './about';
import { contact } from './contact';
import { legal } from './legal';
import { prestations } from './prestations';
import { LOCALES } from './config';

const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

const PAGES = { home, soins, yoga, breathwork, pilates, about, contact, legal, prestations };

describe('balises title / description', () => {
  for (const lang of LOCALES) {
    for (const [name, dict] of Object.entries(PAGES)) {
      const meta = (dict as any)[lang]?.meta;

      it(`${name} (${lang}) : title ≤ ${TITLE_MAX} caractères`, () => {
        expect(typeof meta?.title, `meta.title manquant`).toBe('string');
        expect(meta.title.length, `« ${meta.title} » fait ${meta.title.length} caractères`)
          .toBeLessThanOrEqual(TITLE_MAX);
      });

      it(`${name} (${lang}) : description entre ${DESC_MIN} et ${DESC_MAX}`, () => {
        expect(typeof meta?.description, `meta.description manquante`).toBe('string');
        expect(meta.description.length).toBeGreaterThanOrEqual(DESC_MIN);
        expect(meta.description.length).toBeLessThanOrEqual(DESC_MAX);
      });
    }
  }
});
