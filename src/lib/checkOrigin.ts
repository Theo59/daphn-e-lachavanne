/**
 * Vérification manuelle de l'en-tête Origin pour les routes API POST (contact,
 * newsletter). Remplace la protection same-origin générique d'Astro
 * (`security.checkOrigin`, désactivée dans astro.config.mjs) : celle-ci compare
 * l'Origin du navigateur à une URL reconstruite par @astrojs/node qui ignore
 * X-Forwarded-Proto et se trompe donc de schéma (http au lieu de https) derrière
 * le reverse proxy — elle rejetterait alors toute requête légitime.
 */
const ALLOWED_ORIGINS = new Set([
  'https://daphnelachavanne.com',
  // Dev local (astro dev).
  'http://localhost:4321',
]);

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  return origin !== null && ALLOWED_ORIGINS.has(origin);
}
