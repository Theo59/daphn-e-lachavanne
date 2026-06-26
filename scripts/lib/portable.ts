/**
 * Conversion chaîne → Portable Text (texte enrichi Sanity), partagée par :
 *   - scripts/migrate-richtext.ts (migre le contenu existant dans Sanity) ;
 *   - scripts/seed-sanity.ts (les dicos i18n sont des chaînes → blocs au seed).
 *
 * Sous-ensemble géré (cf. type `richText`, minimal) : paragraphes, italique <em>,
 * gras <strong>/<b>, lien <a href>, saut de ligne <br> (→ saut souple \n dans le bloc).
 */
import { randomUUID } from 'node:crypto';

const key = () => randomUUID().slice(0, 8);

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

/** Champs richText par type de document : chemin → 'html' (balises) | 'plain' (texte simple). */
export const RICHTEXT_FIELDS: Record<string, Record<string, 'html' | 'plain'>> = {
  homePage: { 'welcome.quote': 'html', 'welcome.body1Html': 'html', 'prose.text': 'plain' },
  aboutPage: { 'header.subtitleHtml': 'html', 'quote.textHtml': 'html', 'prose.text': 'plain' },
  breathworkPage: { 'pricing.titleHtml': 'html', 'prose.text': 'plain' },
  pilatesPage: { 'pricing.titleHtml': 'html', 'prose.text': 'plain' },
  legalPage: { dataBodyHtml: 'html' },
  soinsPage: { 'prose.text': 'plain' },
  yogaPage: { 'prose.text': 'plain' },
  contactPage: { 'prose.text': 'plain' },
  prestationsPage: {},
};

/** Types dont chaque réponse faqs[].a est un richText 'plain'. */
export const FAQ_TYPES = [
  'homePage',
  'aboutPage',
  'breathworkPage',
  'pilatesPage',
  'soinsPage',
  'yogaPage',
  'contactPage',
  'prestationsPage',
];

type Span = { _type: 'span'; _key: string; text: string; marks: string[] };
type Block = { _type: 'block'; _key: string; style: 'normal'; markDefs: any[]; children: Span[] };

const span = (text: string, marks: string[] = []): Span => ({ _type: 'span', _key: key(), text, marks });
const block = (children: Span[], markDefs: any[] = []): Block => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs,
  children,
});

/** Texte simple → blocs (un par paragraphe séparé par une ligne vide). */
export function plainToBlocks(str: string): Block[] {
  const parts = String(str)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.map((p) => block([span(p)]));
}

/** HTML restreint (<br>, <em>, <strong>/<b>, <a href>) → UN bloc (les <br> deviennent \n). */
export function htmlToBlocks(str: string): Block[] {
  const html = String(str);
  const tagRe = /<(\/?)(em|strong|b|a|br)\b([^>]*)>/gi;
  const children: Span[] = [];
  const markDefs: any[] = [];
  let decos: string[] = [];
  let linkKey: string | null = null;
  let buf = '';
  let last = 0;
  const flush = () => {
    if (!buf) return;
    children.push(span(decode(buf), [...decos, ...(linkKey ? [linkKey] : [])]));
    buf = '';
  };
  let m: RegExpExecArray | null;
  while ((m = tagRe.exec(html))) {
    buf += html.slice(last, m.index);
    last = tagRe.lastIndex;
    const close = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = m[3] || '';
    if (tag === 'br') {
      buf += '\n';
      continue;
    }
    flush();
    if (tag === 'em') decos = close ? decos.filter((d) => d !== 'em') : [...decos, 'em'];
    else if (tag === 'strong' || tag === 'b')
      decos = close ? decos.filter((d) => d !== 'strong') : [...decos, 'strong'];
    else if (tag === 'a') {
      if (close) linkKey = null;
      else {
        const href =
          (attrs.match(/href\s*=\s*"([^"]*)"/i) || attrs.match(/href\s*=\s*'([^']*)'/i) || [])[1] || '#';
        linkKey = key();
        markDefs.push({ _type: 'link', _key: linkKey, href: decode(href) });
      }
    }
  }
  buf += html.slice(last);
  flush();
  if (!children.length) children.push(span(''));
  return [block(children, markDefs)];
}

export const toBlocks = (value: string, kind: 'html' | 'plain'): Block[] =>
  kind === 'html' ? htmlToBlocks(value) : plainToBlocks(value);

export function getPath(obj: any, path: string): any {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function setPath(obj: any, path: string, val: any): void {
  const keys = path.split('.');
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (o[keys[i]] == null || typeof o[keys[i]] !== 'object') o[keys[i]] = {};
    o = o[keys[i]];
  }
  o[keys[keys.length - 1]] = val;
}

/**
 * Convertit (en place) les champs richText d'un objet de contenu (chaînes → blocs).
 * Utilisé par le seed : passe une COPIE du dico pour ne pas muter l'import.
 */
export function convertRichTextFields(type: string, data: any): any {
  for (const [path, kind] of Object.entries(RICHTEXT_FIELDS[type] || {})) {
    const cur = getPath(data, path);
    if (typeof cur === 'string' && cur.trim()) setPath(data, path, toBlocks(cur, kind));
  }
  if (FAQ_TYPES.includes(type) && Array.isArray(data.faqs)) {
    data.faqs = data.faqs.map((it: any) =>
      it && typeof it.a === 'string' ? { ...it, a: plainToBlocks(it.a) } : it,
    );
  }
  return data;
}
