/**
 * Configuration i18n centrale.
 * FR = langue par défaut, servie à la racine (/). EN servie sous /en.
 * Pour ajouter une langue : l'ajouter à LOCALES + remplir chaque dictionnaire src/i18n/*.ts.
 */

export const LOCALES = ['fr', 'en'] as const;
export type Lang = (typeof LOCALES)[number];

/** Langue par défaut — NON préfixée dans l'URL (racine). */
export const DEFAULT_LOCALE: Lang = 'fr';

/** Étiquette courte affichée dans le sélecteur de langue. */
export const LANG_LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN' };

/** Nom complet de la langue (pour aria-label « Switch to English »). */
export const LANG_NAMES: Record<Lang, string> = { fr: 'Français', en: 'English' };

/** Valeur og:locale (Open Graph). */
export const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US' };

/** Code BCP-47 pour <html lang> et inLanguage (JSON-LD). */
export const HTML_LANG: Record<Lang, string> = { fr: 'fr-FR', en: 'en-US' };
