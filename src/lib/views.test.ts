/**
 * Tests du helper `bg()` — comportement de garde (indépendant du réseau / de l'env).
 * Le chemin « image présente → URL CDN » dépend de PUBLIC_SANITY_PROJECT_ID (build) ;
 * il est couvert par le build + la vérif visuelle, pas en unitaire.
 */
import { describe, it, expect } from 'vitest';
import { bg, PLANITY } from './views';

describe('bg()', () => {
  it('renvoie une chaîne vide quand l’image est absente', () => {
    expect(bg(undefined)).toBe('');
    expect(bg(null)).toBe('');
  });

  it('renvoie une chaîne vide pour un objet sans asset', () => {
    expect(bg({} as never)).toBe('');
    expect(bg({ asset: {} } as never)).toBe('');
  });
});

describe('PLANITY', () => {
  it('pointe vers la page de réservation', () => {
    expect(PLANITY).toContain('planity.com');
  });
});
