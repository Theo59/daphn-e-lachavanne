/**
 * Dictionnaire de la page Contact / réservation (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Le formulaire Netlify (name="contact", champ caché form-name, honeypot) est géré
 * dans la vue et reste partagé entre les deux langues — un seul endpoint.
 */

const fr = {
  meta: {
    title: 'Contact & réservation | Daphné Lachavanne, Paris 7e',
    description:
      'Réservez votre soin ou cours au cabinet de Daphné Lachavanne, 3 rue Valadon, Paris 7e. Drainage Renata França dès 150 €, sur Planity ou par email.',
  },

  header: {
    label: 'Réservation',
    titleLine1: 'Écrire,',
    titleLine2: 'réserver.',
  },

  form: {
    label: '(  Un message  )',
    honeypot: 'Ne pas remplir si vous êtes humain :',
    successTitle: 'Message bien reçu.',
    successText:
      'Je vous réponds sous 24 à 48 h. Pour réserver un créneau tout de suite, la prise de rendez-vous Planity est juste à côté.',
    prenomLabel: 'Prénom',
    prenomPlaceholder: 'Marie',
    nomLabel: 'Nom',
    nomPlaceholder: 'Dupont',
    emailLabel: 'Email',
    emailPlaceholder: 'vous@email.com',
    pratiqueLabel: 'Soin souhaité',
    pratiquePlaceholder: 'Soin Signature · Drainage · Miracle Face…',
    messageLabel: 'Votre message',
    messagePlaceholder: 'Dites-moi où vous en êtes, ce que vous cherchez…',
    submit: 'Envoyer →',
  },

  booking: {
    label: '(  Réservation en ligne  )',
    eyebrow: 'Disponibilités en direct',
    title: 'Planity',
    text: 'Choisissez votre soin, un créneau, et confirmez en deux minutes. Annulation gratuite jusqu’à 24h avant.',
  },

  cabinet: {
    label: '(  Le cabinet  )',
    addressLine1: '3 Rue Valadon',
    addressLine2: '75007 Paris',
    email: 'hello@daphnelachavanne.com',
    hours1: 'Lundi 15h - 22h30',
    hours2: 'Mardi-Samedi 8h - 22h30',
    hours3: 'Dimanche fermé',
  },

  map: {
    label: 'Le cabinet',
    address: '3 Rue Valadon, Paris 7e',
  },

  prose: {
    label: 'Réserver une séance à Paris 7e',
    text: `Pour prendre rendez-vous, deux chemins coexistent. La réservation en ligne se fait sur Planity, où les disponibilités s'affichent en direct : vous choisissez votre soin, un créneau, et vous confirmez en quelques minutes. Pour une demande plus précise (un forfait, un cercle de souffle, un duo de Pilates), un message à hello@daphnelachavanne.com suffit à amorcer l'échange.

Le cabinet se situe au 3 rue Valadon, 75007 Paris, sur la rive gauche, dans le 7e arrondissement. C'est un lieu privé, reçu uniquement sur rendez-vous, pensé pour la confidentialité et la qualité de présence. Daphné Lachavanne y reçoit en séances individuelles, ainsi qu'en duo ou en cercle fermé selon la pratique.

Vous pouvez prendre rendez-vous pour un drainage lymphatique méthode Renata França (1h, 150 €), le Soin Signature qui réunit drainage, breathwork et travail énergétique (2h, 280 €), le Miracle Face (40 min, 90 €) ou le Combo Détox (1h30, 200 €). Côté mouvement, le yoga et le Pilates se réservent selon les mêmes modalités : cours particuliers au cabinet, à 90 € l'heure pour le yoga comme pour le breathwork.

Avant chaque suivi, un court échange permet de comprendre votre demande et d'ajuster la séance à votre moment. Certifiée méthode Renata França depuis 2013, Daphné a fondé en 2025 L'Art de la Circulation. Les retours des personnes reçues sont rassemblés sur Planity, où le cabinet est noté 5,0 / 5.`,
  },

  faqs: [
    { q: 'Comment prendre rendez-vous avec Daphné Lachavanne ?', a: 'Deux possibilités : la réservation en ligne sur Planity (planity.com/daphne-lachavanne-75007-paris), où les créneaux disponibles s\'affichent en direct, ou un message à hello@daphnelachavanne.com pour une demande particulière.' },
    { q: 'Où se trouve le cabinet ?', a: 'Au 3 rue Valadon, 75007 Paris, dans le 7e arrondissement, sur la rive gauche. C\'est un cabinet privé, accessible uniquement sur rendez-vous.' },
    { q: 'Quels sont les horaires du cabinet ?', a: 'Le cabinet est ouvert le lundi de 15h à 22h30, du mardi au samedi de 8h à 22h30, et fermé le dimanche. Les séances se font uniquement sur rendez-vous.' },
    { q: 'Combien coûte un drainage lymphatique méthode Renata França ?', a: '150 € pour une séance d\'une heure. Le Soin Signature (drainage, breathwork et énergétique, 2h) est à 280 €. Un Forfait Découverte de 3 drainages, valable 3 mois, est proposé à 420 €.' },
    { q: 'Puis-je réserver un cours de yoga ou de Pilates à Paris 7e ?', a: 'Oui, en cours particuliers au cabinet. Le yoga est à 90 € l\'heure (forfait 5 séances valable 3 mois, 400 €). Le Pilates se pratique en privé ou en duo, sur devis.' },
    { q: 'Proposez-vous des séances de breathwork en groupe ?', a: 'Oui. Un cercle de souffle en groupe fermé de 4 à 6 personnes dure 2h, à 60 € par personne. La séance individuelle d\'une heure est à 90 €, au cabinet.' },
  ],
};

const en = {
  meta: {
    title: 'Contact & booking | Daphné Lachavanne, Paris 7th',
    description:
      'Book your treatment or lesson at Daphné Lachavanne’s studio, 3 rue Valadon, Paris 7th. Renata França drainage, €150, on Planity or by email.',
  },

  header: {
    label: 'Booking',
    titleLine1: 'Write,',
    titleLine2: 'book.',
  },

  form: {
    label: '(  A message  )',
    honeypot: 'Do not fill in if you are human:',
    successTitle: 'Message received.',
    successText:
      'I’ll reply within 24 to 48 hours. To book a slot right away, Planity booking is right here.',
    prenomLabel: 'First name',
    prenomPlaceholder: 'Marie',
    nomLabel: 'Last name',
    nomPlaceholder: 'Dupont',
    emailLabel: 'Email',
    emailPlaceholder: 'you@email.com',
    pratiqueLabel: 'Treatment of interest',
    pratiquePlaceholder: 'Signature Treatment · Drainage · Miracle Face…',
    messageLabel: 'Your message',
    messagePlaceholder: 'Tell me where you are, what you’re looking for…',
    submit: 'Send →',
  },

  booking: {
    label: '(  Online booking  )',
    eyebrow: 'Live availability',
    title: 'Planity',
    text: 'Choose your treatment, a time slot, and confirm in two minutes. Free cancellation up to 24 hrs before.',
  },

  cabinet: {
    label: '(  The studio  )',
    addressLine1: '3 Rue Valadon',
    addressLine2: '75007 Paris',
    email: 'hello@daphnelachavanne.com',
    hours1: 'Monday 3–10:30 pm',
    hours2: 'Tuesday–Saturday 8 am–10:30 pm',
    hours3: 'Sunday closed',
  },

  map: {
    label: 'The studio',
    address: '3 Rue Valadon, Paris 7th',
  },

  prose: {
    label: 'Book a session in Paris 7th',
    text: `There are two ways to book an appointment. Online booking is done on Planity, where availability appears in real time: you choose your treatment, a time slot, and confirm in a few minutes. For a more specific request (a package, a breath circle, a Pilates session in pairs), a message to hello@daphnelachavanne.com is enough to begin the conversation.

The studio is at 3 rue Valadon, 75007 Paris, on the Left Bank, in the 7th arrondissement. It is a private space, by appointment only, designed for confidentiality and quality of presence. Daphné Lachavanne welcomes you here in individual sessions, as well as in pairs or in a closed circle depending on the practice.

You can book a Renata França lymphatic drainage (1 hr, €150), the Signature Treatment that brings together drainage, breathwork and energy work (2 hrs, €280), the Miracle Face (40 min, €90) or the Detox Combo (1 hr 30, €200). On the movement side, yoga and Pilates are booked the same way: private lessons at the studio, at €90 an hour for yoga as for breathwork.

Before every journey, a short conversation helps to understand your needs and tune the session to your moment. Certified in the Renata França method since 2013, Daphné founded L'Art de la Circulation in 2025. Feedback from the people she has welcomed is gathered on Planity, where the studio is rated 5.0 / 5.`,
  },

  faqs: [
    { q: 'How do I book an appointment with Daphné Lachavanne?', a: 'Two options: online booking on Planity (planity.com/daphne-lachavanne-75007-paris), where available slots appear in real time, or a message to hello@daphnelachavanne.com for a specific request.' },
    { q: 'Where is the studio?', a: 'At 3 rue Valadon, 75007 Paris, in the 7th arrondissement, on the Left Bank. It is a private studio, accessible by appointment only.' },
    { q: 'What are the studio’s opening hours?', a: 'The studio is open Monday 3–10:30 pm, Tuesday to Saturday 8 am–10:30 pm, and closed on Sunday. Sessions are by appointment only.' },
    { q: 'How much does a Renata França lymphatic drainage cost?', a: '€150 for a one-hour session. The Signature Treatment (drainage, breathwork and energy work, 2 hrs) is €280. A Discovery package of 3 drainages, valid for 3 months, is offered at €420.' },
    { q: 'Can I book a yoga or Pilates lesson in Paris 7th?', a: 'Yes, in private lessons at the studio. Yoga is €90 an hour (5-session package valid for 3 months, €400). Pilates is practised privately or in pairs, on request.' },
    { q: 'Do you offer breathwork sessions in a group?', a: 'Yes. A breath circle in a closed group of 4 to 6 people lasts 2 hrs, at €60 per person. The one-hour individual session is €90, at the studio.' },
  ],
} satisfies typeof fr;

export const contact = { fr, en };
