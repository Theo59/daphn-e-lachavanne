/**
 * Schéma de la page Breathwork.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/breathwork.ts
 * (mapping 1:1 au build via content.ts).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';
import { bgColorField } from './_fields';

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
        defineField({ name: 'photo1', title: 'Photo 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'photo1Video', title: 'Vidéo 1 (mp4, optionnel — remplace la photo 1)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'photo2Alt', title: 'Texte alternatif photo 2', type: 'string' }),
        defineField({ name: 'photo2', title: 'Photo 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'photo2Video', title: 'Vidéo 2 (mp4, optionnel — remplace la photo 2)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'photo3Alt', title: 'Texte alternatif photo 3', type: 'string' }),
        defineField({ name: 'photo3', title: 'Photo 3 (optionnel)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'photo3Video', title: 'Vidéo 3 (mp4, optionnel — remplace la photo 3)', type: 'file', options: { accept: 'video/mp4' } }),
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
        defineField({ name: 'titleHtml', title: 'Titre', type: 'richText' }),
        defineField({ name: 'text', type: 'text', rows: 3 }),
        defineField({ name: 'book', title: 'Libellé du bouton', type: 'string' }),
        bgColorField(),
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
