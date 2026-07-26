/**
 * Chaînes communes à toutes les pages : navigation, pied de page, sélecteur de
 * langue, boutons d'appel à l'action, libellés de fil d'Ariane et descriptions
 * utilisées dans les données structurées (JSON-LD) du Layout.
 *
 * Pour modifier un texte : édite directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` → toute clé manquante = erreur de build.
 */

const fr = {
  skipLink: 'Aller au contenu',

  // Nom & accroche de marque — conservés tels quels dans les deux langues.
  siteName: 'Daphné Lachavanne · L’Art de la Circulation',

  nav: {
    ariaLabel: 'Navigation principale',
    logoAria: 'Accueil',
    // Libellés des liens, indexés par clé de page (= activePage).
    links: {
      home: 'Accueil',
      soins: 'Soins',
      yoga: 'Yoga',
      breathwork: 'Breathwork',
      pilates: 'Pilates',
      prestations: 'Tarifs',
      about: 'À propos',
      contact: 'Réserver',
    },
    cta: 'Réserver',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    menuAria: 'Navigation',
    langAria: 'Changer de langue',
  },

  cta: {
    book: 'Prendre rendez-vous',
    bookPlanity: 'Réserver sur Planity',
  },

  footer: {
    tagline: 'Soins, drainage lymphatique, yoga & breathwork. Paris 7e.',
    colPractices: 'Pratiques',
    colCabinet: 'Cabinet',
    colFollow: 'Suivre',
    itinerary: 'Itinéraire →',
    newsletter: 'Newsletter',
    legal: 'Mentions légales',
    rights: '© 2026 Daphné Lachavanne. Tous droits réservés. Conception et création : Studio Moore.',
    devCredit: 'Développement par Jetdev',
    devUrl: 'https://jetdev.fr',
  },

  breadcrumbHome: 'Accueil',

  // Titre de la section FAQ (composant Faq).
  faqTitle: 'Questions fréquentes',

  // Descriptions injectées dans le JSON-LD global (Layout).
  schema: {
    businessDescription:
      'Praticienne bien-être à Paris 7e : drainage lymphatique méthode Renata França, soins, yoga, breathwork et pilates, en cabinet privé sur rendez-vous.',
    personJobTitle: 'Praticienne bien-être',
  },

  // Popup d'inscription à la newsletter (composant NewsletterPopup).
  newsletter: {
    ariaLabel: 'Inscription à la newsletter',
    title: '−10 % sur votre première séance',
    text: 'Inscrivez-vous à la newsletter et recevez votre code de bienvenue par e-mail.',
    firstName: 'Prénom',
    firstNamePlaceholder: 'Marie',
    lastName: 'Nom',
    lastNamePlaceholder: 'Dupont',
    email: 'Email',
    emailPlaceholder: 'vous@email.com',
    consent: 'J’accepte de recevoir la newsletter de Daphné Lachavanne.',
    submit: 'Je m’inscris',
    submitting: 'Inscription…',
    successTitle: 'Bienvenue !',
    successText: 'Vérifiez votre boîte mail : votre code de réduction vous attend.',
    errorText: 'Une erreur est survenue. Merci de réessayer dans un instant.',
    close: 'Fermer',
  },

  // Bandeau d'annonce en haut du site (composant AnnouncementBar).
  // `message` vide = bandeau masqué. `label`/`close` = a11y (non éditables en Studio).
  announcement: {
    label: 'Annonce',
    message: '',
    linkLabel: '',
    linkUrl: '',
    variant: 'blue',
    close: 'Fermer l’annonce',
  },
};

const en = {
  skipLink: 'Skip to content',

  siteName: 'Daphné Lachavanne · L’Art de la Circulation',

  nav: {
    ariaLabel: 'Main navigation',
    logoAria: 'Home',
    links: {
      home: 'Home',
      soins: 'Treatments',
      yoga: 'Yoga',
      breathwork: 'Breathwork',
      pilates: 'Pilates',
      prestations: 'Rates',
      about: 'About',
      contact: 'Book',
    },
    cta: 'Book',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuAria: 'Navigation',
    langAria: 'Change language',
  },

  cta: {
    book: 'Book an appointment',
    bookPlanity: 'Book on Planity',
  },

  footer: {
    tagline: 'Treatments, lymphatic drainage, yoga & breathwork. Paris 7th.',
    colPractices: 'Practices',
    colCabinet: 'Studio',
    colFollow: 'Follow',
    itinerary: 'Directions →',
    newsletter: 'Newsletter',
    legal: 'Legal notice',
    rights: '© 2026 Daphné Lachavanne. All rights reserved. Design and creation: Studio Moore.',
    devCredit: 'Development by Jetdev',
    devUrl: 'https://jetdev.fr',
  },

  breadcrumbHome: 'Home',

  faqTitle: 'Frequently asked questions',

  schema: {
    businessDescription:
      'Wellbeing practitioner in Paris 7th: Renata França lymphatic drainage, treatments, yoga, breathwork and pilates, in a private studio by appointment.',
    personJobTitle: 'Wellbeing practitioner',
  },

  newsletter: {
    ariaLabel: 'Newsletter signup',
    title: '10% off your first session',
    text: 'Sign up to the newsletter and get your welcome code by email.',
    firstName: 'First name',
    firstNamePlaceholder: 'Marie',
    lastName: 'Last name',
    lastNamePlaceholder: 'Dupont',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    consent: 'I agree to receive Daphné Lachavanne’s newsletter.',
    submit: 'Sign up',
    submitting: 'Signing up…',
    successTitle: 'Welcome!',
    successText: 'Check your inbox: your discount code is waiting for you.',
    errorText: 'Something went wrong. Please try again in a moment.',
    close: 'Close',
  },

  announcement: {
    label: 'Announcement',
    message: '',
    linkLabel: '',
    linkUrl: '',
    variant: 'blue',
    close: 'Dismiss announcement',
  },
} satisfies typeof fr;

export const common = { fr, en };
