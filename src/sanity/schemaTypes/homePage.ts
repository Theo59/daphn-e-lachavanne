/**
 * Schéma de la page d'accueil — PATRON pour les autres pages.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/home.ts
 * (c'est ce qui permet le mapping 1:1 au build via content.ts).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';
import { bgColorField } from './_fields';

export default defineType({
  name: 'homePage',
  title: 'Accueil',
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
        defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titre — ligne 2 (italique)', type: 'string' }),
        defineField({ name: 'sub', title: 'Sous-titre', type: 'text', rows: 2 }),
        defineField({ name: 'footer', type: 'string' }),
        defineField({ name: 'imgAlt', title: 'Texte alternatif image', type: 'string' }),
        defineField({ name: 'image', title: 'Image de fond', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'video', title: 'Vidéo de fond (mp4, optionnel)', type: 'file', options: { accept: 'video/mp4' } }),
      ],
    }),

    defineField({
      name: 'welcome',
      title: 'Bienvenue',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'quote', title: 'Citation', type: 'richText' }),
        defineField({ name: 'body1Html', title: 'Paragraphe 1', type: 'richText' }),
        defineField({ name: 'body2', title: 'Paragraphe 2', type: 'text', rows: 3 }),
        defineField({ name: 'link', title: 'Libellé du lien', type: 'string' }),
      ],
    }),

    defineField({
      name: 'practices',
      title: 'Pratiques',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'caption', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Cartes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'key', title: 'Clé (soins/breathwork/yoga/pilates)', type: 'string' }),
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'desc', type: 'string' }),
                defineField({ name: 'icon', title: 'Icône', type: 'image', options: { hotspot: true } }),
              ],
              preview: { select: { title: 'name', subtitle: 'key' } },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'cabinet',
      title: 'Le cabinet',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'titleLine1', type: 'string' }),
        defineField({ name: 'titleLine2', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 3 }),
        defineField({ name: 'caption', type: 'string' }),
        defineField({ name: 'imgAlt', type: 'string' }),
        defineField({ name: 'image', title: 'Photo du cabinet', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'video', title: 'Vidéo du cabinet (mp4, optionnel — remplace la photo)', type: 'file', options: { accept: 'video/mp4' } }),
        bgColorField(),
      ],
    }),

    defineField({
      name: 'gallery',
      title: 'Galerie « en vrac » (accueil) — plusieurs petites photos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
          defineField({ name: 'video', title: 'Vidéo (mp4, optionnel — remplace la photo)', type: 'file', options: { accept: 'video/mp4' } }),
        ],
        preview: { select: { media: 'image', title: 'alt' } },
      }],
    }),

    defineField({
      name: 'testimonials',
      title: 'Témoignages',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'rating', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'quote', type: 'text', rows: 2 }),
                defineField({ name: 'author', type: 'string' }),
              ],
              preview: { select: { title: 'author', subtitle: 'quote' } },
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
      name: 'ctaBand',
      title: 'Bandeau CTA',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'titleLine1', type: 'string' }),
        defineField({ name: 'titleLine2', type: 'string' }),
        defineField({ name: 'text', type: 'text', rows: 3 }),
        bgColorField(),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Accueil', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
