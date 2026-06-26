/**
 * Type « texte enrichi » réutilisable (Portable Text), volontairement MINIMAL :
 * paragraphes + italique, gras, lien et saut de ligne — pas de titres ni de listes.
 * But : la cliente met en forme visuellement, sans jamais taper de HTML.
 *
 * Rendu côté site : src/lib/sanity/richText.ts (sérialisation Portable Text → HTML).
 * Le fallback i18n (src/i18n/*.ts) reste une chaîne et passe par les mêmes helpers.
 */
import { defineType, defineArrayMember, defineField } from 'sanity';

export default defineType({
  name: 'richText',
  title: 'Texte enrichi',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Un seul style de bloc (paragraphe) : pas de titres parasites dans la mise en page.
      styles: [{ title: 'Paragraphe', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Italique', value: 'em' },
          { title: 'Gras', value: 'strong' },
        ],
        annotations: [
          defineField({
            name: 'link',
            type: 'object',
            title: 'Lien',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              }),
            ],
          }),
        ],
      },
    }),
  ],
});
