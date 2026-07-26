/**
 * Garde de cohérence factuelle entre les pages.
 *
 * L'audit SEO/GEO a trouvé deux dates de formation qui vivaient en production dans la
 * prose de /yoga et /breathwork sans exister nulle part dans le parcours d'À propos ni
 * dans le JSON-LD (« 200 h en Inde en 2017 », « Amsterdam en 2019 »). Personne ne
 * pouvait le voir : chaque page était cohérente avec elle-même, seule la comparaison
 * entre pages faisait apparaître la contradiction.
 *
 * Invariant retenu : **toute année citée dans la prose d'une page doit figurer dans le
 * parcours d'À propos**, qui fait foi (et qui alimente `hasCredential` du JSON-LD).
 * Ajouter une date à une page impose donc de l'ajouter au parcours — ce qui est
 * précisément le geste qui manquait.
 *
 * Ne couvre que les dicos i18n (repli). Le contenu Sanity, qui les surcharge au build,
 * n'est pas testable ici : la vérification correspondante se fait à l'audit.
 */
import { describe, it, expect } from 'vitest';
import { about } from './about';
import { home } from './home';
import { soins } from './soins';
import { yoga } from './yoga';
import { breathwork } from './breathwork';
import { pilates } from './pilates';
import { contact } from './contact';
import { LOCALES, type Lang } from './config';

/** Années du parcours d'À propos — « 2015–2016 » compte pour 2015 et 2016. */
function timelineYears(lang: Lang): Set<string> {
  const years = new Set<string>();
  for (const item of about[lang].timeline.items) {
    for (const y of String(item.year).match(/\d{4}/g) ?? []) years.add(y);
  }
  return years;
}

const PAGES = { home, soins, yoga, breathwork, pilates, contact, about };

describe('cohérence des années entre les pages', () => {
  for (const lang of LOCALES) {
    for (const [name, dict] of Object.entries(PAGES)) {
      it(`${name} (${lang}) ne cite que des années présentes dans le parcours`, () => {
        const prose = (dict as any)[lang]?.prose?.text;
        if (typeof prose !== 'string') return;
        const cited = new Set(prose.match(/\b(19|20)\d{2}\b/g) ?? []);
        const known = timelineYears(lang);
        const orphelines = [...cited].filter((y) => !known.has(y));
        expect(orphelines, `années absentes du parcours d’À propos : ${orphelines.join(', ')}`).toEqual([]);
      });
    }
  }
});

describe('faits corrigés par l’audit (ne doivent pas réapparaître)', () => {
  const all = JSON.stringify(PAGES);
  it('aucune référence à la formation yoga « 200 h en Inde en 2017 »', () => {
    expect(all).not.toMatch(/200[  -]?(heures|hour)[^.]{0,20}(Inde|India)/i);
  });
  it('aucune référence au breathwork « Amsterdam »', () => {
    expect(all).not.toContain('Amsterdam');
  });
});
