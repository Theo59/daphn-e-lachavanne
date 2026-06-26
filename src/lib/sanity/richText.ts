/**
 * Sérialisation Portable Text → HTML pour les vues Astro (au build).
 *
 * Les champs « texte enrichi » (type Sanity `richText`, cf. src/sanity/schemaTypes/richText.ts)
 * sont édités visuellement et stockés en Portable Text (tableau de blocs). Le FALLBACK i18n
 * (src/i18n/*.ts) reste une chaîne :
 *   - champs `…Html` historiques : HTML brut → rendu tel quel ;
 *   - prose / FAQ : texte simple → échappé.
 * Ces helpers acceptent donc indifféremment une chaîne (fallback) ou un tableau de blocs (Sanity).
 */
import { toHTML } from '@portabletext/to-html';

export type RichText = unknown; // string (fallback dico) | PortableTextBlock[] (Sanity)

export const isPortable = (v: unknown): v is any[] => Array.isArray(v);

const escapeText = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const escapeAttr = (s: string) => escapeText(s).replace(/"/g, '&quot;');

// Lien : orange, sans soulignement (rendu identique à l'ancien HTML) ; _blank si externe.
const link = ({ value, children }: any) => {
  const href = String(value?.href ?? '#');
  const ext = /^https?:\/\//i.test(href);
  const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${escapeAttr(href)}" style="color:var(--orange);text-decoration:none"${attrs}>${children}</a>`;
};

// Sérialiseur « inline » : le bloc rend ses enfants SANS wrapper <p> (on injecte dans un
// élément déjà stylé : <p style>, <h2>, <h3>…). Les sauts de ligne souples (\n) → <br>.
const inlineComponents = { block: { normal: ({ children }: any) => children }, marks: { link } };

const blockInline = (block: any): string => toHTML([block], { components: inlineComponents });

/** Rendu inline (sans <p>) pour un élément stylé sur-mesure. Blocs multiples joints par <br>. */
export function richTextToInlineHtml(v: RichText, opts: { escapeFallback?: boolean } = {}): string {
  if (v == null) return '';
  if (isPortable(v)) return v.map(blockInline).join('<br />');
  return opts.escapeFallback ? escapeText(v as string) : String(v); // fallback dico
}

/** Liste de paragraphes (HTML inline par bloc) — pour <Prose> (lettrine, accroche…). */
export function richTextToParagraphs(v: RichText): string[] {
  if (v == null) return [];
  if (isPortable(v)) return v.map(blockInline).filter(Boolean);
  return String(v)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map(escapeText);
}

/** Texte brut (sans balise) — pour le JSON-LD (FAQPage), meta description… */
export function richTextToPlain(v: RichText): string {
  if (v == null) return '';
  if (isPortable(v)) {
    return v
      .map((b) => (Array.isArray(b?.children) ? b.children.map((c: any) => c?.text ?? '').join('') : ''))
      .join('\n\n')
      .trim();
  }
  return String(v).replace(/<[^>]+>/g, '');
}
