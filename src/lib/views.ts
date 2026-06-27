/**
 * Helpers partagés par les vues (src/components/views/*.astro).
 * Factorise ce qui était redéclaré dans chaque vue : URL de réservation Planity
 * et construction d'URL de fond CSS depuis une image Sanity.
 */
import { urlFor, hasImage } from './sanity/image';

type ImageSource = Parameters<typeof urlFor>[0];

/** URL de réservation Planity (CTA « Réserver »), partagée par toutes les vues. */
export const PLANITY = 'https://www.planity.com/daphne-lachavanne-75007-paris';

/**
 * URL CDN d'une image Sanity pour un fond CSS (`background:url(...)`).
 * Renvoie une chaîne vide si l'image est absente → `background:url('')` inerte,
 * jamais d'erreur de build sur un champ vide.
 */
export function bg(source: unknown, w = 1600): string {
  return hasImage(source) ? urlFor(source as ImageSource).width(w).url() : '';
}
