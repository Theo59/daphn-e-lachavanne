/**
 * Schéma de la page Prestations / Tarifs. Clés identiques à src/i18n/prestations.ts.
 * Calque le catalogue Planity : catégories → prestations (nom · durée · prix · description · note).
 * Traduit FR/EN (document-internationalization).
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'prestationsPage',
  title: 'Prestations & tarifs',
  type: 'document',
  fields: [
    defineField({ name: 'language', type: 'string', readOnly: true, hidden: true }),

    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Titre (balise <title>)', type: 'string' }),
        defineField({ name: 'description', title: 'Meta description', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'header',
      title: 'En-tête',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'h1', title: 'Titre H1', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
      ],
    }),

    defineField({ name: 'reserve', title: 'Libellé bouton « Réserver »', type: 'string' }),

    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Titre de la catégorie', type: 'string' }),
            defineField({
              name: 'services',
              title: 'Prestations',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'name', title: 'Nom', type: 'string' }),
                    defineField({ name: 'duration', title: 'Durée', type: 'string' }),
                    defineField({ name: 'price', title: 'Prix', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                    defineField({ name: 'note', title: 'Note (ex. « +40 € en duo »)', type: 'string' }),
                  ],
                  preview: { select: { title: 'name', subtitle: 'price' } },
                }),
              ],
            }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),

    defineField({
      name: 'faqs',
      title: 'FAQ',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string' }),
            defineField({ name: 'a', title: 'Réponse', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'q' } },
        }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Prestations & tarifs', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
