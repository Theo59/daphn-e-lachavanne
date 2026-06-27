/**
 * Champs Sanity réutilisables (non enregistrés comme types de document — voir index.ts).
 */
import { defineField } from 'sanity';

/**
 * Champ « Couleur de fond » (bleu / orange) pour les blocs colorés.
 * La valeur ('blue' | 'orange') est lue par la vue → `background: var(--blue|--orange)`.
 * Le texte et les boutons restent blancs dans les deux cas.
 */
export const bgColorField = (opts: { name?: string; initialValue?: 'blue' | 'orange' } = {}) =>
  defineField({
    name: opts.name ?? 'bgColor',
    title: 'Couleur de fond',
    description: 'Couleur de fond de ce bloc : bleu profond ou orange.',
    type: 'string',
    options: {
      list: [
        { title: 'Bleu profond', value: 'blue' },
        { title: 'Orange', value: 'orange' },
      ],
      layout: 'radio',
    },
    initialValue: opts.initialValue ?? 'blue',
  });
