/**
 * Smoke test : pose la convention Vitest du projet (fichiers *.test.ts à côté du
 * module, helpers purs sans mock réseau). Étoffé au fil du refactor (bg(), deepFill…).
 */
import { describe, it, expect } from 'vitest';
import { isPortable, richTextToPlain } from './richText';

describe('richText helpers', () => {
  it('isPortable distingue tableau de blocs et chaîne', () => {
    expect(isPortable([{ _type: 'block' }])).toBe(true);
    expect(isPortable('texte simple')).toBe(false);
  });

  it('richTextToPlain extrait le texte brut des blocs Portable Text', () => {
    const blocks = [{ _type: 'block', children: [{ text: 'Bonjour' }, { text: ' monde' }] }];
    expect(richTextToPlain(blocks)).toBe('Bonjour monde');
  });

  it('richTextToPlain retire les balises d’une chaîne HTML (fallback dico)', () => {
    expect(richTextToPlain('Vos <em>droits</em>')).toBe('Vos droits');
  });
});
