/**
 * Schéma de la page Breathwork.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/breathwork.ts
 * (mapping 1:1 au build via content.ts).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'breathworkPage',
  title: 'Breathwork',
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
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'quote', title: 'Citation', type: 'text', rows: 3 }),
        defineField({ name: 'sub', title: 'Sous-titre', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Galerie',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'photo1Alt', title: 'Texte alternatif photo 1', type: 'string' }),
        defineField({ name: 'photo2Alt', title: 'Texte alternatif photo 2', type: 'string' }),
        defineField({ name: 'videoBadge', type: 'string' }),
        defineField({ name: 'videoLabel', type: 'string' }),
      ],
    }),

    defineField({
      name: 'approach',
      title: 'Approche',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'title', title: 'Titre', type: 'text', rows: 2 }),
      ],
    }),

    defineField({
      name: 'principles',
      title: 'Principes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Clé (coherence/holotropic/pranayama)', type: 'string' }),
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'text', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title', subtitle: 'key' } },
        }),
      ],
    }),

    defineField({
      name: 'pricing',
      title: 'Tarif & Réservation',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'titleHtml', title: 'Titre (HTML <br> autorisé)', type: 'text', rows: 2 }),
        defineField({ name: 'text', type: 'text', rows: 3 }),
        defineField({ name: 'book', title: 'Libellé du bouton', type: 'string' }),
      ],
    }),

    defineField({
      name: 'tarifs',
      title: 'Tarifs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Clé (solo/circle)', type: 'string' }),
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'detail', type: 'string' }),
            defineField({ name: 'price', title: 'Prix', type: 'string' }),
          ],
          preview: { select: { title: 'title', subtitle: 'price' } },
        }),
      ],
    }),

    defineField({
      name: 'prose',
      title: 'Prose éditoriale',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'text', title: 'Texte (paragraphes séparés par une ligne vide)', type: 'text', rows: 12 }),
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

    defineField({
      name: 'schema',
      title: 'Schema.org (Service)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'serviceType', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Breathwork', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
