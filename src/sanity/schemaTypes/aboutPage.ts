/**
 * Schéma de la page « À propos ».
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/about.ts
 * (mapping 1:1 au build via content.ts). Patron : homePage.ts.
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'À propos',
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
      title: 'En-tête portrait',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titre — ligne 2 (italique)', type: 'string' }),
        defineField({ name: 'subtitleHtml', title: 'Sous-titre', type: 'richText' }),
        defineField({ name: 'imgAlt', title: 'Texte alternatif image', type: 'string' }),
        defineField({ name: 'image', title: 'Portrait', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'story',
      title: 'Mon histoire',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'lead', title: 'Accroche', type: 'text', rows: 3 }),
        defineField({ name: 'body1', title: 'Paragraphe 1', type: 'text', rows: 3 }),
        defineField({ name: 'body2', title: 'Paragraphe 2', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'timeline',
      title: 'Parcours',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Étapes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'year', title: 'Année', type: 'string' }),
                defineField({ name: 'event', title: 'Événement', type: 'string' }),
                defineField({ name: 'place', title: 'Lieu', type: 'string' }),
              ],
              preview: { select: { title: 'event', subtitle: 'year' } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'photos',
      title: 'Bande photo',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'image1', title: 'Photo 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'alt1', title: 'Alt photo 1', type: 'string' }),
        defineField({ name: 'image2', title: 'Photo 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'alt2', title: 'Alt photo 2', type: 'string' }),
        defineField({ name: 'image3', title: 'Photo 3', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'alt3', title: 'Alt photo 3', type: 'string' }),
        defineField({ name: 'image4', title: 'Photo 4', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'alt4', title: 'Alt photo 4', type: 'string' }),
      ],
    }),

    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'textHtml', title: 'Texte', type: 'richText' }),
        defineField({ name: 'author', title: 'Auteur', type: 'string' }),
      ],
    }),

    defineField({
      name: 'prose',
      title: 'Prose éditoriale',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'richText' }),
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
            defineField({ name: 'a', title: 'Réponse', type: 'richText' }),
          ],
          preview: { select: { title: 'q' } },
        }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'À propos', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
