/**
 * Helpers médias Sanity : URLs d'images (CDN, format auto avif/webp) et de fichiers (vidéo).
 */
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

/** Builder d'URL pour une image Sanity : `.auto('format')` sert avif/webp selon le navigateur. */
export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity non configuré (PUBLIC_SANITY_PROJECT_ID manquant) — impossible de construire une URL image.');
  }
  return builder.image(source).auto('format').fit('max');
}

/** True si une image Sanity exploitable est présente. */
export function hasImage(image: unknown): boolean {
  return Boolean((image as any)?.asset?._ref);
}

/**
 * URL publique d'un asset fichier (vidéo) depuis sa référence `_ref`.
 * 'file-<sha>-mp4' → https://cdn.sanity.io/files/<projectId>/<dataset>/<sha>.mp4
 */
export function fileUrl(ref?: string | null): string | null {
  if (!ref || !projectId) return null;
  const m = ref.match(/^file-(.+)-([a-z0-9]+)$/i);
  return m ? `https://cdn.sanity.io/files/${projectId}/${dataset}/${m[1]}.${m[2]}` : null;
}
