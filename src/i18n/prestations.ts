/**
 * Dictionnaire de la page Prestations / Tarifs (FR + EN).
 * Calque le catalogue Planity de Daphné : une catégorie, une liste de prestations
 * (nom · durée · prix · description · note). Source de vérité du site pour les tarifs ;
 * à mettre à jour ici / dans Sanity quand un prix change sur Planity.
 */

const fr = {
  meta: {
    title: 'Prestations & tarifs | Daphné Lachavanne, Paris 7e',
    description:
      'Tarifs des soins de Daphné Lachavanne à Paris 7e : drainage lymphatique Renata França (150 €), Soin Signature (280 €), Miracle Face, Combo Détox, yoga & pilates. Sur rendez-vous.',
  },

  header: {
    label: 'Tarifs',
    h1: 'Prestations & tarifs',
    intro:
      'Toutes les prestations du cabinet, du drainage au mouvement. Réservation en ligne sur Planity, ou par e-mail à hello@daphnelachavanne.com.',
  },

  reserve: 'Réserver',

  categories: [
    {
      title: 'Drainages · Massages · Yoga · Pilates',
      services: [
        {
          name: 'Soin Signature',
          duration: '2h',
          price: '280 €',
          description:
            'Le soin le plus complet : drainage lymphatique Renata França, breathwork guidé et travail énergétique (Reiki & magnétisme). Pour libérer les trois corps — physique, mental, émotionnel — en une seule séance.',
          note: '',
        },
        {
          name: 'Drainage lymphatique corps — Méthode Renata França',
          duration: '1h',
          price: '150 €',
          description:
            'Massage manuel dynamique qui relance la circulation lymphatique, élimine les toxines, réduit les gonflements et la rétention d’eau. Idéal pour les jambes lourdes, les ballonnements et le post-opératoire.',
          note: '',
        },
        {
          name: 'Miracle Face — soin drainant du visage (Renata França)',
          duration: '40 min',
          price: '90 €',
          description:
            'Drainage et massage sculptant du visage : décongestionne, réduit poches et cernes, lisse les traits, ravive l’éclat et apaise les tensions de la mâchoire.',
          note: '',
        },
        {
          name: 'Combo Massage Détox — Corps + Visage',
          duration: '1h30',
          price: '200 €',
          description:
            'Drainage complet corps et visage en une seule séance. La détox la plus profonde, idéale en préparation d’un événement.',
          note: '',
        },
        {
          name: 'Yoga — Cours particulier',
          duration: '1h',
          price: '90 €',
          description: 'Cours particulier de yoga, en français ou en anglais, adapté à votre niveau et à votre moment.',
          note: '+40 € en duo',
        },
        {
          name: 'Pilates mat — Cours particulier',
          duration: '1h',
          price: '90 €',
          description: 'Cours particulier de Pilates au sol, en français ou en anglais, pour un alignement et un renforcement profonds.',
          note: '+40 € en duo',
        },
      ],
    },
  ],

  faqs: [
    { q: 'Comment réserver une prestation ?', a: 'La réservation se fait en ligne sur Planity (planity.com/daphne-lachavanne-75007-paris) ou par e-mail à hello@daphnelachavanne.com. Le cabinet reçoit uniquement sur rendez-vous, au 3 rue Valadon, 75007 Paris.' },
    { q: 'Les cours de yoga et de pilates se font-ils en duo ?', a: 'Oui. Le cours particulier d’1h est à 90 €, en français ou en anglais. En duo (deux personnes), il faut ajouter 40 €.' },
  ],
};

const en = {
  meta: {
    title: 'Treatments & rates | Daphné Lachavanne, Paris 7th',
    description:
      'Daphné Lachavanne’s rates in Paris 7th: Renata França lymphatic drainage (€150), Signature Treatment (€280), Miracle Face, Detox Combo, yoga & pilates. By appointment.',
  },

  header: {
    label: 'Rates',
    h1: 'Treatments & rates',
    intro:
      'Every service at the studio, from drainage to movement. Book online on Planity, or by email at hello@daphnelachavanne.com.',
  },

  reserve: 'Book',

  categories: [
    {
      title: 'Drainage · Massage · Yoga · Pilates',
      services: [
        {
          name: 'Signature Treatment',
          duration: '2 hrs',
          price: '€280',
          description:
            'The most complete treatment: Renata França lymphatic drainage, guided breathwork and energy work (Reiki & magnetism). To free the three bodies — physical, mental, emotional — in a single session.',
          note: '',
        },
        {
          name: 'Body Lymphatic Drainage — Renata França Method',
          duration: '1 hr',
          price: '€150',
          description:
            'A dynamic manual massage that boosts lymphatic circulation, flushes toxins, reduces swelling and water retention. Ideal for heavy legs, bloating and post-operative recovery.',
          note: '',
        },
        {
          name: 'Miracle Face — facial drainage (Renata França)',
          duration: '40 min',
          price: '€90',
          description:
            'Facial drainage and sculpting massage: decongests, reduces puffiness and dark circles, smooths the features, revives radiance and eases jaw tension.',
          note: '',
        },
        {
          name: 'Detox Combo — Body + Face',
          duration: '1 hr 30',
          price: '€200',
          description:
            'Full body and facial drainage in a single session. The deepest detox, ideal to prepare for an event.',
          note: '',
        },
        {
          name: 'Yoga — Private lesson',
          duration: '1 hr',
          price: '€90',
          description: 'Private yoga lesson, in French or English, tailored to your level and your moment.',
          note: '+€40 in pairs',
        },
        {
          name: 'Mat Pilates — Private lesson',
          duration: '1 hr',
          price: '€90',
          description: 'Private mat Pilates lesson, in French or English, for deep alignment and strengthening.',
          note: '+€40 in pairs',
        },
      ],
    },
  ],

  faqs: [
    { q: 'How do I book a treatment?', a: 'Booking is done online on Planity (planity.com/daphne-lachavanne-75007-paris) or by email at hello@daphnelachavanne.com. The studio is by appointment only, at 3 rue Valadon, 75007 Paris.' },
    { q: 'Can yoga and pilates be taken in pairs?', a: 'Yes. The 1-hour private lesson is €90, in French or English. In pairs (two people), add €40.' },
  ],
} satisfies typeof fr;

export const prestations = { fr, en };
