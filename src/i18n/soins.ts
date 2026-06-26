/**
 * Dictionnaire de la page Soins (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Données NON-textuelles (icônes des cartes, fonds des forfaits) : voir la vue
 * src/components/views/SoinsView.astro (maps indexées par `key`).
 */

const fr = {
  meta: {
    title: 'Drainage lymphatique Renata França, Paris 7e',
    description:
      'Drainage lymphatique méthode Renata França à Paris 7e (75007). Soin Signature, Miracle Face, Combo Détox dès 90 €. Cabinet rive gauche, sur rendez-vous.',
  },

  header: {
    label: 'Pratique 01 / 04',
    h1: 'Soins.',
    quote:
      '« Le toucher est une langue. J’apprends à la parler avec patience, pour que le corps se souvienne. »',
    intro:
      'Certifiée méthode Renata França depuis 2013, chaque soin commence par un échange. Comprendre où vous en êtes, ce que vous cherchez. Puis nous laissons le silence prendre le relais.',
    methodLabel: 'Méthode Renata França',
    sinceLabel: 'depuis 2013',
  },

  photo: {
    oilTexture: 'Huile · texture',
    alt1: 'Drainage lymphatique méthode Renata França au cabinet de Daphné Lachavanne, Paris 7e',
    alt2: 'Détail d’un soin de drainage corps, cabinet de bien-être Paris 7e',
    alt3: 'Cabinet de soins de Daphné Lachavanne, 3 rue Valadon, Paris 7e',
  },

  catalogue: {
    label: '(  Catalogue  )',
    all: 'Tous les soins · 40 min à 2h',
    reserve: 'Réserver →',
  },

  // Ordre = ordre d'affichage (numérotation 01 → 04). `key` mappe l'icône (vue).
  soins: [
    {
      key: 'signature',
      name: 'Soin Signature',
      sub: 'Drainage + breathwork + énergétique · 2h',
      price: '300 €',
      text: 'Le soin le plus complet. Drainage lymphatique Renata França, respiration guidée et travail sur les centres énergétiques. Pour libérer les trois corps en une seule séance.',
    },
    {
      key: 'drainage',
      name: 'Drainage Lymphatique',
      sub: 'Méthode Renata França · 1h',
      price: '150 €',
      text: 'La technique originale, certifiée depuis 2013. Mouvements rythmiques et précis qui relancent la circulation lymphatique, allègent, désenflent et régénèrent.',
    },
    {
      key: 'miracleFace',
      name: 'Miracle Face',
      sub: 'Drainage facial · 40 min',
      price: '90 €',
      text: 'Drainage du visage et du crâne. Détonifie les traits, élimine les tensions, redonne de l’éclat et du volume. Idéal en soin express ou en complément corps.',
    },
    {
      key: 'comboDetox',
      name: 'Combo Détox',
      sub: 'Corps + Visage · 1h30',
      price: '200 €',
      text: 'Drainage complet corps et visage en une session. Le traitement signature pour une détox profonde, le soin le plus demandé en préparation d’événement.',
    },
  ],

  packagesLabel: '(  Packs  )',

  // Packs Soin Signature (séances de 2h). Tarif séance seule : 300 €.
  packages: [
    { key: 'pack3', name: 'Pack 3 séances', detail: 'Soin Signature · 2h · soit 270 € la séance', price: '810 €', save: '−90 €' },
    { key: 'pack5', name: 'Pack 5 séances', detail: 'Soin Signature · 2h · soit 250 € la séance', price: '1 250 €', save: '−250 €' },
    { key: 'pack10', name: 'Pack 10 séances', detail: 'Soin Signature · 2h · soit 230 € la séance', price: '2 300 €', save: '−700 €' },
  ],

  prose: {
    label: 'Le drainage lymphatique à Paris 7e',
    text: `Au 3 Rue Valadon, sur la rive gauche de Paris, le drainage lymphatique méthode Renata França se pratique dans un cabinet confidentiel du 7e arrondissement, sur rendez-vous uniquement. Certifiée depuis 2013, Daphné Lachavanne travaille par mouvements rythmiques et pressions précises qui relancent la circulation, désengorgent les tissus et laissent au corps une vraie sensation de légèreté.

Le Drainage Lymphatique (1h, 150 €) accompagne les jambes lourdes comme les impressions de gonflement : il soulage, affine la silhouette et apaise. Sur le ventre, ce massage drainant aide à dégonfler et à retrouver de la légèreté.

Pour le visage, le Miracle Face (40 min, 90 €) draine le visage et le crâne, détend les traits, redessine l’ovale et ravive l’éclat. Le Combo Détox (1h30, 200 €) réunit corps et visage en une seule séance, idéal en préparation d’un événement. Le Soin Signature (2h, 300 €) prolonge le geste par le breathwork et le travail énergétique, l’expérience la plus complète de L’Art de la Circulation, le concept né en 2025.

Pour celles et ceux qui inscrivent le soin dans la durée, le Soin Signature se décline en packs dégressifs : 3 séances à 810 € (270 € la séance), 5 séances à 1 250 € (250 € la séance) ou 10 séances à 2 300 € (230 € la séance), au lieu de 300 € la séance. Chaque rendez-vous se réserve en ligne sur Planity, où le cabinet affiche une note de 5,0 / 5. Une praticienne, une méthode, un lieu, pour que le corps se souvienne.`,
  },

  faqs: [
    { q: 'Le drainage lymphatique aide-t-il vraiment pour les jambes lourdes ?', a: 'Le Drainage Lymphatique méthode Renata França (1h, 150 €) relance la circulation par des mouvements rythmiques et précis. Il allège la sensation de jambes lourdes et de gonflement. C’est un soin de bien-être, sans visée médicale.' },
    { q: 'Combien coûte une séance de drainage lymphatique à Paris 7e ?', a: 'Le Drainage Lymphatique seul est à 150 € (1h). Le Miracle Face est à 90 € (40 min), le Combo Détox corps + visage à 200 € (1h30) et le Soin Signature à 300 € (2h). Le Soin Signature se prend aussi en packs : 3 séances à 810 € (270 € la séance), jusqu’à 230 € la séance pour 10 séances.' },
    { q: 'C’est quoi le Miracle Face ?', a: 'Le Miracle Face (40 min, 90 €) est un drainage du visage et du crâne. Il détend les traits, élimine les tensions et ravive l’éclat. Il se pratique en soin express ou en complément d’un drainage corps.' },
    { q: 'Quelle est la différence entre le Soin Signature et un drainage simple ?', a: 'Le Drainage Lymphatique (1h, 150 €) se concentre sur la circulation. Le Soin Signature (2h, 300 €) ajoute le breathwork et le travail énergétique au drainage Renata França : l’expérience la plus complète de L’Art de la Circulation.' },
    { q: 'Où se trouve le cabinet et comment réserver ?', a: 'Le cabinet est au 3 Rue Valadon, 75007 Paris, sur la rive gauche, dans le 7e arrondissement. L’espace est privé et sur rendez-vous. La réservation se fait en ligne sur Planity, ou par e-mail à hello@daphnelachavanne.com.' },
  ],

  // Données structurées (JSON-LD). `packagePrefix` préfixe le nom des forfaits.
  schema: {
    name: 'Soins & drainage lymphatique méthode Renata França',
    serviceType: 'Drainage lymphatique',
    description:
      'Soins de drainage lymphatique méthode Renata França à Paris 7e : Drainage Lymphatique, Soin Signature, Miracle Face, Combo Détox et forfaits.',
    packagePrefix: 'Soin Signature —',
  },
};

const en = {
  meta: {
    title: 'Renata França lymphatic drainage, Paris 7th',
    description:
      'Renata França lymphatic drainage in Paris 7th (75007). Signature Treatment, Miracle Face, Detox Combo from €90. Left Bank studio, by appointment.',
  },

  header: {
    label: 'Practice 01 / 04',
    h1: 'Treatments.',
    quote:
      '“Touch is a language. I learn to speak it with patience, so the body remembers.”',
    intro:
      'Certified in the Renata França method since 2013, every treatment begins with a conversation. To understand where you are, what you are looking for. Then we let the silence take over.',
    methodLabel: 'Renata França method',
    sinceLabel: 'since 2013',
  },

  photo: {
    oilTexture: 'Oil · texture',
    alt1: 'Renata França lymphatic drainage at Daphné Lachavanne’s studio, Paris 7th',
    alt2: 'Detail of a body drainage treatment, wellbeing studio in Paris 7th',
    alt3: 'Daphné Lachavanne’s treatment studio, 3 rue Valadon, Paris 7th',
  },

  catalogue: {
    label: '(  Catalogue  )',
    all: 'All treatments · 40 min to 2 hrs',
    reserve: 'Book →',
  },

  soins: [
    {
      key: 'signature',
      name: 'Signature Treatment',
      sub: 'Drainage + breathwork + energy work · 2 hrs',
      price: '€300',
      text: 'The most complete treatment. Renata França lymphatic drainage, guided breathing and work on the energy centres. To free the three bodies in a single session.',
    },
    {
      key: 'drainage',
      name: 'Lymphatic Drainage',
      sub: 'Renata França method · 1 hr',
      price: '€150',
      text: 'The original technique, certified since 2013. Rhythmic, precise movements that revive lymphatic circulation, lighten, reduce swelling and regenerate.',
    },
    {
      key: 'miracleFace',
      name: 'Miracle Face',
      sub: 'Facial drainage · 40 min',
      price: '€90',
      text: 'A drainage of the face and scalp. It releases the features, eases tension and restores radiance and volume. Ideal as an express treatment or alongside a body session.',
    },
    {
      key: 'comboDetox',
      name: 'Detox Combo',
      sub: 'Body + Face · 1 hr 30',
      price: '€200',
      text: 'A full body and face drainage in a single session. The signature treatment for a deep detox, the most requested before an event.',
    },
  ],

  packagesLabel: '(  Packs  )',

  packages: [
    { key: 'pack3', name: '3-session Pack', detail: 'Signature Treatment · 2 hrs · €270 per session', price: '€810', save: '−€90' },
    { key: 'pack5', name: '5-session Pack', detail: 'Signature Treatment · 2 hrs · €250 per session', price: '€1,250', save: '−€250' },
    { key: 'pack10', name: '10-session Pack', detail: 'Signature Treatment · 2 hrs · €230 per session', price: '€2,300', save: '−€700' },
  ],

  prose: {
    label: 'Lymphatic drainage in Paris 7th',
    text: `At 3 Rue Valadon, on the Left Bank of Paris, Renata França lymphatic drainage is practised in a private studio in the 7th arrondissement, by appointment only. Certified since 2013, Daphné Lachavanne works through rhythmic movements and precise pressure that revive circulation, decongest the tissues and leave the body with a genuine sense of lightness.

The Lymphatic Drainage (1 hr, €150) eases heavy legs and feelings of swelling: it relieves, refines the silhouette and soothes. On the stomach, this draining massage helps reduce bloating and regain lightness.

For the face, the Miracle Face (40 min, €90) drains the face and scalp, relaxes the features, redraws the contour and revives radiance. The Detox Combo (1 hr 30, €200) brings body and face together in a single session, ideal in preparation for an event. The Signature Treatment (2 hrs, €300) extends the gesture with breathwork and energy work, the most complete experience of L’Art de la Circulation, the concept born in 2025.

For those who make treatment part of a longer journey, the Signature Treatment comes in tiered packs: 3 sessions at €810 (€270 each), 5 sessions at €1,250 (€250 each) or 10 sessions at €2,300 (€230 each), instead of €300 per session. Each appointment is booked online on Planity, where the studio holds a rating of 5.0 / 5. One practitioner, one method, one place, so the body remembers.`,
  },

  faqs: [
    { q: 'Does lymphatic drainage really help with heavy legs?', a: 'Renata França lymphatic drainage (1 hr, €150) revives circulation through rhythmic, precise movements. It eases the sensation of heavy, swollen legs. It is a wellbeing treatment, with no medical purpose.' },
    { q: 'How much does a lymphatic drainage session cost in Paris 7th?', a: 'The Lymphatic Drainage alone is €150 (1 hr). The Miracle Face is €90 (40 min), the body + face Detox Combo €200 (1 hr 30) and the Signature Treatment €300 (2 hrs). The Signature Treatment also comes in packs: 3 sessions at €810 (€270 each), down to €230 per session for 10 sessions.' },
    { q: 'What is the Miracle Face?', a: 'The Miracle Face (40 min, €90) is a drainage of the face and scalp. It relaxes the features, eases tension and revives radiance. It is offered as an express treatment or alongside a body drainage.' },
    { q: 'What is the difference between the Signature Treatment and a simple drainage?', a: 'The Lymphatic Drainage (1 hr, €150) focuses on circulation. The Signature Treatment (2 hrs, €300) adds breathwork and energy work to the Renata França drainage: the most complete experience of L’Art de la Circulation.' },
    { q: 'Where is the studio and how do I book?', a: 'The studio is at 3 Rue Valadon, 75007 Paris, on the Left Bank, in the 7th arrondissement. The space is private and by appointment. Booking is done online on Planity, or by email at hello@daphnelachavanne.com.' },
  ],

  schema: {
    name: 'Treatments & Renata França lymphatic drainage',
    serviceType: 'Lymphatic drainage',
    description:
      'Renata França lymphatic drainage treatments in Paris 7th: Lymphatic Drainage, Signature Treatment, Miracle Face, Detox Combo and packages.',
    packagePrefix: 'Signature Treatment —',
  },
} satisfies typeof fr;

export const soins = { fr, en };
