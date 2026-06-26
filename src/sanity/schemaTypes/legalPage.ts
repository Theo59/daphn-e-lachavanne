/**
 * Schéma de la page « Mentions légales / 404 ».
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/legal.ts
 * (mapping 1:1 au build via content.ts). Couvre mentions légales ET page 404.
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'legalPage',
  title: 'Mentions légales / 404',
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

    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
    defineField({ name: 'titleLine2', title: 'Titre — ligne 2 (italique)', type: 'string' }),

    defineField({
      name: 'sections',
      title: 'Sections (éditrice, hébergement…)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Titre de section', type: 'string' }),
            defineField({
              name: 'rows',
              title: 'Lignes',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', type: 'string' }),
                    defineField({ name: 'value', type: 'string' }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'value' } },
                }),
              ],
            }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),

    defineField({ name: 'ipLabel', title: 'Propriété intellectuelle — label', type: 'string' }),
    defineField({ name: 'ipBody', title: 'Propriété intellectuelle — texte', type: 'text', rows: 4 }),

    defineField({ name: 'dataLabel', title: 'Données personnelles — label', type: 'string' }),
    defineField({
      name: 'dataBodyHtml',
      title: 'Données personnelles — texte',
      type: 'richText',
    }),

    defineField({
      name: 'notFound',
      title: 'Page 404',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
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
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titre — ligne 2 (italique)', type: 'string' }),
        defineField({ name: 'body', title: 'Texte', type: 'text', rows: 3 }),
        defineField({ name: 'backHome', title: 'Libellé « retour accueil »', type: 'string' }),
        defineField({ name: 'navAria', title: 'Aria-label navigation', type: 'string' }),
        defineField({
          name: 'links',
          title: 'Liens',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'path', title: 'Chemin', type: 'string' }),
                defineField({ name: 'label', title: 'Libellé', type: 'string' }),
              ],
              preview: { select: { title: 'label', subtitle: 'path' } },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({
      title: 'Mentions légales / 404',
      subtitle: lang ? String(lang).toUpperCase() : '',
    }),
  },
});
