/**
 * Tarifs — SOURCE UNIQUE de tous les prix du site (soins, packs, cours).
 * Document singleton, non traduit (un prix n'a pas de langue) : les vues formatent
 * le nombre selon la langue (« 290 € » en FR, « €290 » en EN). Modifier un prix ICI
 * le répercute partout où il est affiché (page Soins, page Prestations & tarifs…).
 */
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricing',
  title: 'Tarifs (source unique)',
  type: 'document',
  fields: [
    defineField({
      name: 'soins',
      title: 'Soins',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'signature', title: 'Soin Signature', type: 'number' }),
        defineField({ name: 'signatureFirstSession', title: 'Soin Signature — 1re séance', type: 'number' }),
        defineField({ name: 'drainage', title: 'Drainage Lymphatique', type: 'number' }),
        defineField({ name: 'miracleFace', title: 'Miracle Face', type: 'number' }),
        defineField({ name: 'comboDetox', title: 'Combo Détox', type: 'number' }),
      ],
    }),

    defineField({
      name: 'packages',
      title: 'Packs Soin Signature',
      description: 'Prix total du pack. Le prix « à la séance » et l’économie sont calculés automatiquement (à partir du prix du Soin Signature ci-dessus).',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({
          name: 'pack3',
          title: 'Pack 3 séances',
          type: 'object',
          fields: [
            defineField({ name: 'sessions', title: 'Nombre de séances', type: 'number', initialValue: 3, readOnly: true }),
            defineField({ name: 'price', title: 'Prix du pack', type: 'number' }),
          ],
        }),
        defineField({
          name: 'pack5',
          title: 'Pack 5 séances',
          type: 'object',
          fields: [
            defineField({ name: 'sessions', title: 'Nombre de séances', type: 'number', initialValue: 5, readOnly: true }),
            defineField({ name: 'price', title: 'Prix du pack', type: 'number' }),
          ],
        }),
        defineField({
          name: 'pack10',
          title: 'Pack 10 séances',
          type: 'object',
          fields: [
            defineField({ name: 'sessions', title: 'Nombre de séances', type: 'number', initialValue: 10, readOnly: true }),
            defineField({ name: 'price', title: 'Prix du pack', type: 'number' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'movement',
      title: 'Yoga & Pilates',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'hour', title: 'Cours particulier (1h)', type: 'number' }),
        defineField({ name: 'duoSurcharge', title: 'Supplément en duo', type: 'number' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Tarifs (source unique)' }),
  },
});
