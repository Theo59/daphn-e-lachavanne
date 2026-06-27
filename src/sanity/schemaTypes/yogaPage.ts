/**
 * Schéma de la page Yoga.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/yoga.ts
 * (mapping 1:1 au build via content.ts).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';
import { bgColorField } from './_fields';

export default defineType({
  name: 'yogaPage',
  title: 'Yoga',
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
        defineField({ name: 'quote', title: 'Citation', type: 'text', rows: 2 }),
        defineField({ name: 'sub', title: 'Sous-titre', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'image1', title: 'Photo 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image1Video', title: 'Vidéo 1 (mp4, optionnel — remplace la photo 1)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'alt1', title: 'Alt photo 1', type: 'string' }),
        defineField({ name: 'image2', title: 'Photo 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image2Video', title: 'Vidéo 2 (mp4, optionnel — remplace la photo 2)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'alt2', title: 'Alt photo 2', type: 'string' }),
        defineField({ name: 'image3', title: 'Photo 3', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image3Video', title: 'Vidéo 3 (mp4, optionnel — remplace la photo 3)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'alt3', title: 'Alt photo 3', type: 'string' }),
      ],
    }),

    defineField({
      name: 'approche',
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
            defineField({ name: 'key', title: 'Clé (pranayama/posture/meditation)', type: 'string' }),
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'text', title: 'Texte', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icône', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'title', subtitle: 'key' } },
        }),
      ],
    }),

    defineField({
      name: 'tarif',
      title: 'Tarif & Réservation',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titre — ligne 2', type: 'string' }),
        defineField({ name: 'body', title: 'Texte', type: 'text', rows: 2 }),
        defineField({ name: 'reserve', title: 'Libellé bouton réserver', type: 'string' }),
        bgColorField(),
        defineField({
          name: 'rows',
          title: 'Lignes de tarif',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Titre', type: 'string' }),
                defineField({ name: 'detail', title: 'Détail', type: 'string' }),
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

    defineField({
      name: 'schema',
      title: 'Données structurées (JSON-LD)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'name', title: 'Nom du service', type: 'string' }),
        defineField({ name: 'serviceType', title: 'Type de service', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Yoga', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
