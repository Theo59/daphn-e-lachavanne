/**
 * Dictionnaire de la page Pilates (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Données NON-textuelles (icônes des principes, fonds, classes) : dans la vue.
 * Ici : clés stables + champs traduisibles (+ prix). HTML inline (`<br />`)
 * rendu via `set:html` dans la vue (clés suffixées « Html »).
 */

const fr = {
  meta: {
    title: 'Pilates particulier Paris 7e | Daphné Lachavanne',
    description:
      'Cours particuliers de Pilates au sol et petit matériel, en privé ou en duo, au cabinet de Paris 7e (3 rue Valadon). 90 € l’heure (130 € en duo), sur rendez-vous.',
  },

  hero: {
    label: 'Pratique 04 / 04',
    title: 'Pilates',
    quote: '« Le mouvement précis est plus efficace que le mouvement fort. »',
    sub: 'Cours particuliers au sol et avec petit matériel. Travail postural, respiratoire et musculaire profond. En privé ou en duo, pour ajuster avec une précision millimétrique.',
  },

  gallery: {
    alt1: 'Cours particulier de Pilates au sol, cabinet de Daphné Lachavanne à Paris 7e',
    alt2: "Travail d'alignement et de renforcement en Pilates, Paris rive gauche",
    alt3: 'Séance de Pilates au sol, cabinet de Daphné Lachavanne à Paris 7e',
    videoBadge: 'vidéo',
    videoCaption: 'Pilates · séance',
  },

  approach: {
    label: '(  Approche  )',
    title: "Force, alignement, fluidité. Le mouvement comme une écriture.",
  },

  // Trois principes. `key` mappe l'icône (dans la vue).
  principles: [
    { key: 'alignement', title: 'Alignement', text: "Trouver l'axe, le centre, la verticale. Avant tout autre mouvement." },
    { key: 'fluidite', title: 'Fluidité', text: "Enchaînements lents, précis. Le contraire de la performance, et plus exigeant." },
    { key: 'renforcement', title: 'Renforcement', text: "Profond, durable, jamais brutal. Pour tenir le corps dans la durée." },
  ],

  pricing: {
    label: '(  Tarif & Réservation  )',
    titleHtml: 'Sur<br />rendez-vous.',
    text: 'Séances individuelles au cabinet. Réservation via Planity.',
    bookArrow: 'Réserver →',
    // `key` est stable ; title/detail/price sont traduisibles.
    rows: [
      { key: 'particulier', title: 'Cours particulier', detail: '1h · au cabinet', price: '90 €' },
      { key: 'duo', title: 'Duo', detail: '1h · 2 personnes', price: '130 €' },
    ],
  },

  prose: {
    label: 'Le Pilates en cours particulier à Paris 7e',
    text: `Le Pilates de Daphné Lachavanne se pratique en cours particulier, dans le calme du cabinet de la rue Valadon, à Paris 7e. Pas de salle bondée ni de rythme imposé : une heure d'attention entière, pensée pour votre corps, votre niveau et votre journée. Le travail se fait au sol, sur tapis, avec du petit matériel choisi selon ce que demande la séance.

Trois principes guident chaque mouvement : l'alignement, pour retrouver l'axe et la verticale avant tout effort ; la fluidité, faite d'enchaînements lents et précis ; le renforcement profond, qui sollicite les muscles posturaux sans jamais brusquer. C'est cette précision qui rend la méthode précieuse pour accompagner la posture et relâcher les tensions du dos liées aux longues heures assises, un travail de bien-être, jamais un soin médical.

Les cours particuliers de Pilates à Paris 7e s'adressent autant aux débutants qu'aux pratiquants confirmés : la séance s'ajuste geste après geste, avec une correction millimétrique impossible en cours collectif. Le Pilates individuel peut aussi se partager en duo, à deux personnes, dans le même esprit d'écoute. La pratique reste un Pilates au sol (matwork) et non sur machine Reformer : le corps, le souffle et le petit matériel suffisent à construire une force durable.

Professeure privée sur la rive gauche, Daphné reçoit uniquement sur rendez-vous, au 3 rue Valadon, 75007 Paris. Le cours particulier d’une heure est à 90 €, et le duo (deux personnes) à 130 € ; la réservation se fait en ligne via Planity ou par e-mail à hello@daphnelachavanne.com. Le Pilates s'inscrit dans « L'Art de la Circulation », son approche du mouvement, du souffle et du soin.`,
  },

  faqs: [
    { q: 'Le Pilates est-il adapté aux débutants ?', a: "Oui. Le cours particulier de Pilates à Paris 7e s'ajuste geste par geste à votre niveau : les débutants bénéficient de la même attention et de corrections individuelles, impossibles en cours collectif." },
    { q: 'Proposez-vous des cours de Pilates sur Reformer ?', a: 'Non. La pratique est un Pilates au sol (matwork) avec petit matériel, sans machine Reformer. Le corps, le souffle et les accessoires suffisent à un renforcement profond et durable.' },
    { q: 'Le Pilates peut-il aider ma posture et les tensions du dos ?', a: "Le travail d'alignement et de renforcement profond accompagne la posture et aide à relâcher les tensions du dos liées à la position assise. Il s'agit d'une démarche de bien-être à Paris 7e, et non d'un soin médical." },
    { q: 'Proposez-vous des cours de Pilates à domicile à Paris 7 ?', a: 'Les séances se déroulent au cabinet, au 3 rue Valadon, 75007 Paris, sur rendez-vous uniquement. Il n\'y a pas de cours à domicile : tout le matériel et le calme nécessaires sont réunis sur place, sur la rive gauche.' },
    { q: 'Peut-on suivre un cours de Pilates à deux ?', a: "Oui. La formule duo accueille deux personnes pour une heure, dans le même esprit d'écoute que le cours individuel. Le duo est à 130 € (90 € en individuel)." },
    { q: 'Combien coûte un cours particulier de Pilates et comment réserver ?', a: 'Le cours particulier d’une heure est à 90 €, le duo (deux personnes) à 130 €. La réservation se fait en ligne via Planity ou par e-mail à hello@daphnelachavanne.com.' },
  ],

  // Données structurées (Service schema.org). path + inLanguage localisés dans la vue.
  schema: {
    name: 'Cours de Pilates particulier à Paris 7e',
    serviceType: 'Cours de Pilates',
    description:
      'Cours particuliers de Pilates au sol et petit matériel à Paris 7e, en privé ou en duo, au cabinet de Daphné Lachavanne, sur rendez-vous.',
  },
};

const en = {
  meta: {
    title: 'Private Pilates Paris 7th | Daphné Lachavanne',
    description:
      'Private mat Pilates lessons with small equipment, one-to-one or in pairs, at the Paris 7th studio (3 rue Valadon). €90 per hour (€130 in pairs), by appointment.',
  },

  hero: {
    label: 'Practice 04 / 04',
    title: 'Pilates',
    quote: '“Precise movement is more effective than forceful movement.”',
    sub: 'Private lessons on the mat and with small equipment. Deep postural, breathing and muscular work. One-to-one or in pairs, to adjust with millimetre precision.',
  },

  gallery: {
    alt1: 'Private mat Pilates lesson, Daphné Lachavanne’s studio in Paris 7th',
    alt2: 'Alignment and strengthening work in Pilates, Paris Left Bank',
    alt3: 'Mat Pilates session, Daphné Lachavanne’s studio in Paris 7th',
    videoBadge: 'video',
    videoCaption: 'Pilates · session',
  },

  approach: {
    label: '(  Approach  )',
    title: 'Strength, alignment, fluidity. Movement as a form of writing.',
  },

  principles: [
    { key: 'alignement', title: 'Alignment', text: 'Finding the axis, the centre, the vertical. Before any other movement.' },
    { key: 'fluidite', title: 'Fluidity', text: 'Slow, precise sequences. The opposite of performance, and more demanding.' },
    { key: 'renforcement', title: 'Strengthening', text: 'Deep, lasting, never brutal. To hold the body over time.' },
  ],

  pricing: {
    label: '(  Pricing & Booking  )',
    titleHtml: 'By<br />appointment.',
    text: 'Individual sessions at the studio. Booking via Planity.',
    bookArrow: 'Book →',
    rows: [
      { key: 'particulier', title: 'Private lesson', detail: '1 hr · in studio', price: '€90' },
      { key: 'duo', title: 'In pairs', detail: '1 hr · 2 people', price: '€130' },
    ],
  },

  prose: {
    label: 'Pilates private lessons in Paris 7th',
    text: `Daphné Lachavanne’s Pilates is practised in private lessons, in the calm of the studio on rue Valadon, in Paris 7th. No crowded room, no imposed tempo: an hour of complete attention, shaped around your body, your level and your day. The work is done on the mat, on the floor, with small equipment chosen according to what the session calls for.

Three principles guide every movement: alignment, to recover the axis and the vertical before any effort; fluidity, made of slow, precise sequences; deep strengthening, which engages the postural muscles without ever forcing. It is this precision that makes the method so valuable in supporting posture and releasing the back tensions linked to long hours of sitting — a wellbeing practice, never a medical treatment.

Private Pilates lessons in Paris 7th suit beginners and seasoned practitioners alike: the session adjusts gesture after gesture, with a precise correction impossible in a group class. Individual Pilates can also be shared in pairs, with two people, in the same spirit of attentiveness. The practice remains mat Pilates (matwork) rather than the Reformer machine: the body, the breath and small equipment are enough to build lasting strength.

A private teacher on the Left Bank, Daphné receives by appointment only, at 3 rue Valadon, 75007 Paris. The one-hour private lesson is €90, and the pair session (two people) €130; booking is done online via Planity or by email at hello@daphnelachavanne.com. Pilates is part of L'Art de la Circulation, her approach to movement, breath and care.`,
  },

  faqs: [
    { q: 'Is Pilates suitable for beginners?', a: 'Yes. The private Pilates lesson in Paris 7th adjusts gesture by gesture to your level: beginners receive the same attention and individual corrections, impossible in a group class.' },
    { q: 'Do you offer Reformer Pilates lessons?', a: 'No. The practice is mat Pilates (matwork) with small equipment, without the Reformer machine. The body, the breath and the accessories are enough for deep, lasting strengthening.' },
    { q: 'Can Pilates help my posture and back tensions?', a: 'The work of alignment and deep strengthening supports posture and helps release the back tensions linked to sitting. It is a wellbeing practice in Paris 7th, not a medical treatment.' },
    { q: 'Do you offer Pilates lessons at home in Paris 7th?', a: 'Sessions take place at the studio, at 3 rue Valadon, 75007 Paris, by appointment only. There are no home lessons: all the equipment and the calm needed are gathered on site, on the Left Bank.' },
    { q: 'Can a Pilates lesson be taken in pairs?', a: 'Yes. The pair format welcomes two people for an hour, in the same spirit of attentiveness as the individual lesson. The pair session is €130 (€90 one-to-one).' },
    { q: 'How much does a private Pilates lesson cost and how do I book?', a: 'The one-hour private lesson is €90, the pair session (two people) €130. Booking is done online via Planity or by email at hello@daphnelachavanne.com.' },
  ],

  schema: {
    name: 'Private Pilates lessons in Paris 7th',
    serviceType: 'Pilates lessons',
    description:
      'Private mat Pilates lessons with small equipment in Paris 7th, one-to-one or in pairs, at Daphné Lachavanne’s studio, by appointment.',
  },
} satisfies typeof fr;

export const pilates = { fr, en };
