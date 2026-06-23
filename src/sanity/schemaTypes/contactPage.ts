/**
 * Schéma de la page Contact / réservation.
 * Les noms de champs sont IDENTIQUES aux clés du dico src/i18n/contact.ts
 * (mapping 1:1 au build via content.ts).
 * Le champ `language` est géré par le plugin document-internationalization.
 */
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Contact',
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
        defineField({ name: 'titleLine1', title: 'Titre — ligne 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titre — ligne 2 (italique)', type: 'string' }),
      ],
    }),

    defineField({
      name: 'form',
      title: 'Formulaire',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'honeypot', title: 'Honeypot (label)', type: 'string' }),
        defineField({ name: 'successTitle', title: 'Succès — titre', type: 'string' }),
        defineField({ name: 'successText', title: 'Succès — texte', type: 'text', rows: 3 }),
        defineField({ name: 'prenomLabel', type: 'string' }),
        defineField({ name: 'prenomPlaceholder', type: 'string' }),
        defineField({ name: 'nomLabel', type: 'string' }),
        defineField({ name: 'nomPlaceholder', type: 'string' }),
        defineField({ name: 'emailLabel', type: 'string' }),
        defineField({ name: 'emailPlaceholder', type: 'string' }),
        defineField({ name: 'pratiqueLabel', type: 'string' }),
        defineField({ name: 'pratiquePlaceholder', type: 'string' }),
        defineField({ name: 'messageLabel', type: 'string' }),
        defineField({ name: 'messagePlaceholder', type: 'string' }),
        defineField({ name: 'submit', title: 'Bouton', type: 'string' }),
      ],
    }),

    defineField({
      name: 'booking',
      title: 'Réservation en ligne',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'text', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'cabinet',
      title: 'Le cabinet',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'addressLine1', type: 'string' }),
        defineField({ name: 'addressLine2', type: 'string' }),
        defineField({ name: 'email', type: 'string' }),
        defineField({ name: 'hours1', type: 'string' }),
        defineField({ name: 'hours2', type: 'string' }),
        defineField({ name: 'hours3', type: 'string' }),
      ],
    }),

    defineField({
      name: 'map',
      title: 'Plan',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'address', type: 'string' }),
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
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Contact', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
