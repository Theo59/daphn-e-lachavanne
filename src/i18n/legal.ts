/**
 * Dictionnaire des pages « légales » (FR + EN) : mentions légales ET page 404.
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Certaines valeurs contiennent du HTML inline (lien <a>) ; elles sont rendues
 * via `set:html` dans la vue (contenu de confiance, édité ici, suffixe « Html »).
 *
 * Le placeholder SIRET reste à compléter par l'éditrice (identique FR/EN).
 */

const fr = {
  meta: {
    title: 'Mentions légales | Daphné Lachavanne',
    description:
      'Mentions légales du site de Daphné Lachavanne, praticienne bien-être à Paris 7e : éditrice, hébergement, propriété intellectuelle et données personnelles.',
  },

  label: 'Informations',
  titleLine1: 'Mentions',
  titleLine2: 'légales.',

  sections: [
    {
      title: 'Éditrice du site',
      rows: [
        { label: 'Responsable', value: 'Daphné Lachavanne, praticienne bien-être' },
        { label: 'Adresse', value: '3 rue Valadon, 75007 Paris, France' },
        { label: 'Contact', value: 'hello@daphnelachavanne.com' },
        { label: 'SIRET', value: '[à compléter par l’éditrice]' },
        { label: 'TVA', value: 'TVA non applicable, art. 293 B du CGI (à confirmer)' },
      ],
    },
    {
      title: 'Hébergement',
      rows: [
        { label: 'Hébergeur', value: 'Hetzner Online GmbH' },
        { label: 'Adresse', value: 'Industriestr. 25, 91710 Fürth, Allemagne' },
        { label: 'Site', value: 'hetzner.com' },
      ],
    },
  ],

  ipLabel: 'Propriété intellectuelle',
  ipBody:
    'L’ensemble des contenus de ce site (textes, photographies, illustrations, logo et identité visuelle) est protégé par le droit d’auteur. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.',

  dataLabel: 'Données personnelles',
  dataBodyHtml:
    'Les informations transmises via le formulaire de contact servent uniquement à répondre à votre demande et ne sont ni cédées ni revendues. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données : il s’exerce par e-mail à <a href="mailto:hello@daphnelachavanne.com" style="color:var(--orange);text-decoration:none">hello@daphnelachavanne.com</a>. La réservation en ligne est gérée par Planity, soumis à sa propre politique de confidentialité.',

  notFound: {
    meta: {
      title: 'Page introuvable | Daphné Lachavanne',
      description:
        'Cette page n’existe pas ou a été déplacée. Retrouvez les soins, le yoga, le breathwork et la prise de rendez-vous de Daphné Lachavanne à Paris 7e.',
    },
    label: 'Erreur 404',
    titleLine1: 'Page',
    titleLine2: 'introuvable.',
    body:
      'La page que vous cherchez a été déplacée ou n’existe plus. Reprenons le fil : voici les chemins du cabinet.',
    backHome: 'Retour à l’accueil',
    navAria: 'Pages du site',
    links: [
      { path: '/', label: 'Accueil' },
      { path: '/soins', label: 'Soins' },
      { path: '/yoga', label: 'Yoga' },
      { path: '/breathwork', label: 'Breathwork' },
      { path: '/pilates', label: 'Pilates' },
      { path: '/contact', label: 'Réserver' },
    ],
  },
};

const en = {
  meta: {
    title: 'Legal notice | Daphné Lachavanne',
    description:
      'Legal notice for Daphné Lachavanne’s website, wellbeing practitioner in Paris 7th: publisher, hosting, intellectual property and personal data.',
  },

  label: 'Information',
  titleLine1: 'Legal',
  titleLine2: 'notice.',

  sections: [
    {
      title: 'Site publisher',
      rows: [
        { label: 'Responsible', value: 'Daphné Lachavanne, wellbeing practitioner' },
        { label: 'Address', value: '3 rue Valadon, 75007 Paris, France' },
        { label: 'Contact', value: 'hello@daphnelachavanne.com' },
        { label: 'SIRET', value: '[to be completed by the publisher]' },
        { label: 'VAT', value: 'VAT not applicable, art. 293 B of the French Tax Code (to be confirmed)' },
      ],
    },
    {
      title: 'Hosting',
      rows: [
        { label: 'Host', value: 'Hetzner Online GmbH' },
        { label: 'Address', value: 'Industriestr. 25, 91710 Fürth, Germany' },
        { label: 'Website', value: 'hetzner.com' },
      ],
    },
  ],

  ipLabel: 'Intellectual property',
  ipBody:
    'All content on this site (texts, photographs, illustrations, logo and visual identity) is protected by copyright. Any reproduction or reuse, in whole or in part, without prior written permission is prohibited.',

  dataLabel: 'Personal data',
  dataBodyHtml:
    'The information sent through the contact form is used solely to respond to your enquiry and is never shared or sold. In accordance with the GDPR, you have the right to access, rectify and erase your data: this can be exercised by email at <a href="mailto:hello@daphnelachavanne.com" style="color:var(--orange);text-decoration:none">hello@daphnelachavanne.com</a>. Online booking is handled by Planity, subject to its own privacy policy.',

  notFound: {
    meta: {
      title: 'Page not found | Daphné Lachavanne',
      description:
        'This page does not exist or has been moved. Find Daphné Lachavanne’s treatments, yoga, breathwork and booking in Paris 7th.',
    },
    label: 'Error 404',
    titleLine1: 'Page',
    titleLine2: 'not found.',
    body:
      'The page you are looking for has been moved or no longer exists. Let’s pick up the thread: here are the studio’s paths.',
    backHome: 'Back to home',
    navAria: 'Site pages',
    links: [
      { path: '/', label: 'Home' },
      { path: '/soins', label: 'Treatments' },
      { path: '/yoga', label: 'Yoga' },
      { path: '/breathwork', label: 'Breathwork' },
      { path: '/pilates', label: 'Pilates' },
      { path: '/contact', label: 'Book' },
    ],
  },
} satisfies typeof fr;

export const legal = { fr, en };
