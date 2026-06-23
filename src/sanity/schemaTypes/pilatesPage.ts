/**
 * Schéma de la page Pilates — calqué sur le dico src/i18n/pilates.ts.
 * Les noms de champs sont IDENTIQUES aux clés du dico (mapping 1:1 au build).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'pilatesPage',
  title: 'Pilates',
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
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'quote', title: 'Citation', type: 'text', rows: 2 }),
        defineField({ name: 'sub', title: 'Sous-titre', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Galerie',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'alt1', title: 'Texte alternatif image 1', type: 'string' }),
        defineField({ name: 'image1', title: 'Image 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'alt2', title: 'Texte alternatif image 2', type: 'string' }),
        defineField({ name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'videoBadge', type: 'string' }),
        defineField({ name: 'videoCaption', type: 'string' }),
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
            defineField({ name: 'key', title: 'Clé (alignement/fluidite/renforcement)', type: 'string' }),
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'text', type: 'text', rows: 2 }),
            defineField({ name: 'icon', title: 'Icône', type: 'image', options: { hotspot: true } }),
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
        defineField({ name: 'text', type: 'text', rows: 2 }),
        defineField({ name: 'bookArrow', title: 'Libellé bouton réserver', type: 'string' }),
        defineField({
          name: 'rows',
          title: 'Lignes de tarif',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'key', title: 'Clé (particulier/duo)', type: 'string' }),
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'detail', type: 'string' }),
                defineField({ name: 'price', title: 'Prix', type: 'string' }),
              ],
              preview: { select: { title: 'title', subtitle: 'price' } },
            }),
          ],
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
      title: 'Données structurées (Service)',
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
    prepare: ({ lang }) => ({ title: 'Pilates', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
