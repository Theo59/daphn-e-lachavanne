/**
 * Schéma de la page Soins.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/soins.ts
 * (mapping 1:1 au build via content.ts). Le champ `language` est géré par
 * le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'soinsPage',
  title: 'Soins',
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
        defineField({ name: 'quote', title: 'Citation', type: 'text', rows: 3 }),
        defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
        defineField({ name: 'methodLabel', type: 'string' }),
        defineField({ name: 'sinceLabel', type: 'string' }),
      ],
    }),

    defineField({
      name: 'photo',
      title: 'Photos',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'oilTexture', title: 'Légende texture huile', type: 'string' }),
        defineField({ name: 'alt1', title: 'Texte alternatif 1', type: 'string' }),
        defineField({ name: 'alt2', title: 'Texte alternatif 2', type: 'string' }),
        defineField({ name: 'alt3', title: 'Texte alternatif 3', type: 'string' }),
        defineField({ name: 'image1', title: 'Photo 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image1Video', title: 'Vidéo 1 (mp4, optionnel — remplace la photo 1)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'image2', title: 'Photo 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image2Video', title: 'Vidéo 2 (mp4, optionnel — remplace la photo 2)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'image3', title: 'Photo 3', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'image3Video', title: 'Vidéo 3 (mp4, optionnel — remplace la photo 3)', type: 'file', options: { accept: 'video/mp4' } }),
      ],
    }),

    defineField({
      name: 'catalogue',
      title: 'Catalogue (en-tête)',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'all', title: 'Sous-titre (durées)', type: 'string' }),
        defineField({ name: 'reserve', title: 'Libellé bouton réserver', type: 'string' }),
      ],
    }),

    defineField({
      name: 'soins',
      title: 'Soins',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Clé (signature/drainage/miracleFace/comboDetox)', type: 'string' }),
            defineField({ name: 'name', title: 'Nom', type: 'string' }),
            defineField({ name: 'sub', title: 'Sous-titre', type: 'string' }),
            defineField({ name: 'price', title: 'Prix', type: 'string' }),
            defineField({ name: 'text', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icône', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'sub' } },
        }),
      ],
    }),

    defineField({ name: 'packagesLabel', title: 'Libellé section forfaits', type: 'string' }),

    defineField({
      name: 'packages',
      title: 'Forfaits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Clé (decouverte/suiviSaison/intensif)', type: 'string' }),
            defineField({ name: 'name', title: 'Nom', type: 'string' }),
            defineField({ name: 'detail', title: 'Détail', type: 'string' }),
            defineField({ name: 'price', title: 'Prix', type: 'string' }),
            defineField({ name: 'save', title: 'Économie', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'detail' } },
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
        defineField({ name: 'packagePrefix', title: 'Préfixe forfait', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Soins', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
