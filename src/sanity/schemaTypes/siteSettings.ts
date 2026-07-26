/**
 * Réglages communs du site (nav, footer, CTA, JSON-LD). Clés IDENTIQUES à src/i18n/common.ts.
 * Traduit FR/EN (document-internationalization).
 */
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({ name: 'language', type: 'string', readOnly: true, hidden: true }),

    defineField({
      name: 'brand',
      title: 'Visuels de marque (partagés)',
      description: 'Logo, fonds et décors réutilisés sur tout le site.',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'logo', title: 'Logo (sombre)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'logoWhite', title: 'Logo (blanc)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'portrait', title: 'Portrait (partage social / données structurées)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'gradient1', title: 'Fond dégradé 1', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'gradient2', title: 'Fond dégradé 2', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'circle', title: 'Cercle tracé (décor)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'shapes', title: 'Formes (décor)', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'social',
      title: 'Réseaux sociaux',
      description: 'Liens vers les réseaux sociaux, réutilisés dans le pied de page et les données structurées.',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        }),
      ],
    }),

    defineField({
      name: 'colors',
      title: 'Couleurs de la marque',
      description:
        'Bleu et orange utilisés partout sur le site (fonds des blocs, accents). Code hexadécimal, ex. #16066e. À renseigner ici — appliqué à tout le site.',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'blue',
          title: 'Bleu profond',
          description: 'Fond des blocs « feature », menu mobile, bandeau « Réservez »… Ex. #16066e',
          type: 'string',
          initialValue: '#16066e',
          validation: (Rule) =>
            Rule.regex(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).error('Code hexadécimal, ex. #16066e'),
        }),
        defineField({
          name: 'orange',
          title: 'Orange (accent)',
          description: 'Accent principal, cartes forfait, liens… Ex. #ff7100',
          type: 'string',
          initialValue: '#ff7100',
          validation: (Rule) =>
            Rule.regex(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).error('Code hexadécimal, ex. #ff7100'),
        }),
      ],
    }),

    defineField({ name: 'skipLink', title: 'Lien d’évitement', type: 'string' }),
    defineField({ name: 'siteName', title: 'Nom du site', type: 'string' }),

    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'ariaLabel', type: 'string' }),
        defineField({ name: 'logoAria', type: 'string' }),
        defineField({
          name: 'links',
          title: 'Libellés des liens',
          type: 'object',
          fields: [
            defineField({ name: 'home', type: 'string' }),
            defineField({ name: 'soins', type: 'string' }),
            defineField({ name: 'yoga', type: 'string' }),
            defineField({ name: 'breathwork', type: 'string' }),
            defineField({ name: 'pilates', type: 'string' }),
            defineField({ name: 'about', type: 'string' }),
            defineField({ name: 'contact', type: 'string' }),
          ],
        }),
        defineField({ name: 'cta', type: 'string' }),
        defineField({ name: 'menuOpen', type: 'string' }),
        defineField({ name: 'menuClose', type: 'string' }),
        defineField({ name: 'menuAria', type: 'string' }),
        defineField({ name: 'langAria', type: 'string' }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Boutons',
      type: 'object',
      fields: [
        defineField({ name: 'book', type: 'string' }),
        defineField({ name: 'bookPlanity', type: 'string' }),
      ],
    }),

    defineField({
      name: 'footer',
      title: 'Pied de page',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({ name: 'tagline', type: 'string' }),
        defineField({ name: 'colPractices', type: 'string' }),
        defineField({ name: 'colCabinet', type: 'string' }),
        defineField({ name: 'colFollow', type: 'string' }),
        defineField({ name: 'itinerary', type: 'string' }),
        defineField({ name: 'newsletter', type: 'string' }),
        defineField({ name: 'legal', type: 'string' }),
        defineField({ name: 'rights', type: 'string' }),
        defineField({ name: 'devCredit', title: 'Crédit développement (texte du lien)', type: 'string' }),
        defineField({ name: 'devUrl', title: 'Crédit développement (URL)', type: 'url' }),
      ],
    }),

    defineField({ name: 'breadcrumbHome', type: 'string' }),
    defineField({ name: 'faqTitle', title: 'Titre section FAQ', type: 'string' }),

    defineField({
      name: 'announcement',
      title: 'Bandeau d’annonce',
      description:
        'Bandeau affiché tout en haut du site (reprise des cours, événement, offre…). Laissez le message vide pour ne rien afficher. À renseigner en FR et en EN.',
      type: 'object',
      options: { collapsible: true },
      fields: [
        defineField({
          name: 'message',
          title: 'Message',
          description: 'Texte court, sur une ligne. Vide = bandeau masqué.',
          type: 'string',
        }),
        defineField({ name: 'linkLabel', title: 'Libellé du lien (optionnel)', type: 'string' }),
        defineField({
          name: 'linkUrl',
          title: 'URL du lien (optionnel)',
          description:
            'Lien externe (https://…, ouvre un nouvel onglet) ou interne (/tarifs). ' +
            'Valeur spéciale #newsletter : le bouton ouvre la fenêtre d’inscription à la newsletter.',
          type: 'url',
          // Accepte les URLs classiques + la valeur spéciale #newsletter (sinon la validation
          // d'URI rejetterait un fragment seul → impossible à saisir dans le Studio).
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value || value === '#newsletter') return true;
              return /^(https?:\/\/|mailto:|tel:|\/)/i.test(String(value))
                ? true
                : 'Utilisez https://…, mailto:, tel:, un chemin interne (/tarifs) ou #newsletter.';
            }),
        }),
        defineField({
          name: 'variant',
          title: 'Couleur',
          type: 'string',
          options: {
            list: [
              { title: 'Bleu profond', value: 'blue' },
              { title: 'Orange', value: 'orange' },
            ],
            layout: 'radio',
          },
          initialValue: 'blue',
        }),
      ],
    }),

    defineField({
      name: 'schema',
      title: 'Données structurées (JSON-LD)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'businessDescription', type: 'text', rows: 3 }),
        defineField({ name: 'personJobTitle', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { lang: 'language' },
    prepare: ({ lang }) => ({ title: 'Réglages du site', subtitle: lang ? String(lang).toUpperCase() : '' }),
  },
});
