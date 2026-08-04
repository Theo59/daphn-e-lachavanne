/**
 * Tests de la fiche /llms.txt — garde anti-dérive.
 *
 * Sans PUBLIC_SANITY_PROJECT_ID, la couche de contenu retombe sur les dicos i18n :
 * le résultat est donc déterministe et comparable aux constantes de PRICING_FALLBACK
 * et au dico À propos. C'est exactement ce qu'on veut vérifier — que les faits sont
 * DÉRIVÉS et non recopiés, puisque la version statique précédente de ce fichier
 * annonçait aux moteurs génératifs des tarifs et une date de certification faux.
 */
import { describe, it, expect } from 'vitest';
import { buildLlmsTxt } from './llmsTxt';
import { PRICING_FALLBACK } from './sanity/pricing';
import { about } from '../i18n/about';

describe('buildLlmsTxt()', () => {
  it('reprend les tarifs de la source unique, pas des valeurs écrites en dur', async () => {
    const txt = await buildLlmsTxt('fr');
    expect(txt).toContain(`${PRICING_FALLBACK.soins.signature} €`);
    expect(txt).toContain(`${PRICING_FALLBACK.soins.drainage} €`);
    expect(txt).toContain(`${PRICING_FALLBACK.soins.miracleFace} €`);
    expect(txt).toContain(`${PRICING_FALLBACK.soins.comboDetox} €`);
    // 2 590 € — séparateur de milliers localisé (espace insécable en fr-FR).
    expect(txt).toMatch(/2\s?590 €/);
  });

  it('reprend le parcours du dico À propos (aucune date réécrite)', async () => {
    const txt = await buildLlmsTxt('fr');
    for (const item of about.fr.timeline.items) {
      expect(txt).toContain(item.event);
      expect(txt).toContain(item.year);
    }
  });

  it('ne contient aucun tarif ni aucune date de l’ancienne fiche statique', async () => {
    const txt = await buildLlmsTxt('fr');
    // Anciennes valeurs périmées de public/llms.txt, à ne jamais voir réapparaître.
    for (const stale of ['280 €', '150 €', '200 €', '420 €', '680 €', '780 €']) {
      expect(txt).not.toContain(stale);
    }
    // La certification Renata França est de 2025 ; l'ancienne fiche annonçait 2013.
    expect(txt).not.toContain('2013');
  });

  it('produit la version anglaise avec les prix formatés en €X', async () => {
    const txt = await buildLlmsTxt('en');
    expect(txt).toContain(`€${PRICING_FALLBACK.soins.signature}`);
    expect(txt).toContain('Renata França');
    // Le lien de bas de page pointe vers l'AUTRE langue.
    expect(txt).toContain('French version');
  });
});

/**
 * Conformité au format llms.txt (llmstxt.org). Un audit a signalé le fichier comme non
 * conforme — « le fichier ne semble pas contenir de liens » — parce que les entrées de
 * liste étaient du texte brut avec des URL nues. La spécification impose que chaque
 * entrée sous un titre H2 soit un lien Markdown `[titre](url)`, éventuellement suivi de
 * « : » et de précisions.
 */
describe('conformité au format llms.txt', () => {
  for (const lang of ['fr', 'en'] as const) {
    it(`${lang} : un seul H1, une blockquote, au moins un H2`, async () => {
      const lignes = (await buildLlmsTxt(lang)).split('\n');
      expect(lignes.filter((l) => l.startsWith('# ')), 'H1 unique et en tête').toHaveLength(1);
      expect(lignes[0].startsWith('# ')).toBe(true);
      expect(lignes.filter((l) => l.startsWith('> ')).length).toBeGreaterThan(0);
      expect(lignes.filter((l) => l.startsWith('## ')).length).toBeGreaterThan(0);
    });

    it(`${lang} : chaque entrée de liste est un lien Markdown`, async () => {
      const puces = (await buildLlmsTxt(lang)).split('\n').filter((l) => l.startsWith('- '));
      expect(puces.length).toBeGreaterThan(0);
      const nonConformes = puces.filter((l) => !/^- \[[^\]]+\]\(https?:\/\/[^)]+\)/.test(l));
      expect(nonConformes, `entrées sans lien Markdown :\n${nonConformes.join('\n')}`).toEqual([]);
    });

    it(`${lang} : aucune URL nue hors d’un lien Markdown`, async () => {
      const lignes = (await buildLlmsTxt(lang)).split('\n');
      // Une URL non précédée d'une parenthèse ouvrante = URL nue.
      const nues = lignes.filter((l) => /(?<!\()https?:\/\//.test(l));
      expect(nues, `URL nues :\n${nues.join('\n')}`).toEqual([]);
    });

    it(`${lang} : expose une section « Optional »`, async () => {
      // Sens réservé par la spec : son contenu peut être ignoré si le contexte doit
      // être raccourci. On y place l'autre langue et les mentions légales.
      expect(await buildLlmsTxt(lang)).toContain('\n## Optional\n');
    });
  }
});
