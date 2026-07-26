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
    title: 'Drainage lymphatique à Paris 7e — Méthode Renata França certifiée',
    description:
      'Drainage lymphatique méthode Renata França à Paris 7e (75007). Soin Signature, Miracle Face, Combo Détox dès 95 €. Cabinet rive gauche, sur rendez-vous.',
  },

  header: {
    label: 'Pratique 01 / 04',
    h1: 'Soins & drainage lymphatique.',
    quote:
      '« Le toucher est une langue. J’apprends à la parler avec patience, pour que le corps se souvienne. »',
    intro:
      'Certifiée méthode Renata França depuis 2025, chaque soin commence par un échange. Comprendre où vous en êtes, ce que vous cherchez. Puis nous laissons le silence prendre le relais.',
    methodLabel: 'Méthode Renata França',
    sinceLabel: 'depuis 2025',
  },

  photo: {
    oilTexture: 'Huile · texture',
    alt1: 'Drainage lymphatique méthode Renata França au cabinet de Daphné Lachavanne, Paris 7e',
    alt2: 'Détail d’un soin de drainage corps, cabinet de bien-être Paris 7e',
    alt3: 'Cabinet de soins de Daphné Lachavanne, 3 rue Valadon, Paris 7e',
  },

  catalogue: {
    label: '(  Catalogue  )',
    all: 'Tous les soins · 30 min à 2h',
    reserve: 'Réserver →',
  },

  // Ordre = ordre d'affichage (numérotation 01 → 04). `key` mappe l'icône (vue).
  soins: [
    {
      key: 'signature',
      name: 'Soin Signature',
      sub: 'Drainage + breathwork + énergétique · 2h',
      text: 'Le soin le plus complet. Drainage lymphatique Renata França, respiration guidée et travail sur les centres énergétiques. Pour libérer les trois corps en une seule séance. 260 € pour la 1re séance.',
    },
    {
      key: 'drainage',
      name: 'Drainage Lymphatique',
      sub: 'Méthode Renata França · 1h',
      text: 'La technique originale, certifiée depuis 2025. Mouvements rythmiques et précis qui relancent la circulation lymphatique, allègent, désenflent et régénèrent.',
    },
    {
      key: 'miracleFace',
      name: 'Miracle Face',
      sub: 'Drainage facial · 30 min',
      text: 'Drainage du visage et du crâne. Détonifie les traits, élimine les tensions, redonne de l’éclat et du volume. Idéal en soin express ou en complément corps.',
    },
    {
      key: 'comboDetox',
      name: 'Combo Détox',
      sub: 'Corps + Visage · 1h30',
      text: 'Drainage complet corps et visage en une session. Le traitement signature pour une détox profonde, le soin le plus demandé en préparation d’événement.',
    },
  ],

  packagesLabel: '(  Packs  )',

  // Packs Soin Signature (séances de 2h). Prix/économie : voir « Tarifs (source unique) » dans Sanity.
  packages: [
    { key: 'pack3', name: 'Pack 3 séances', detail: 'Soin Signature · 2h · soit 283 € la séance' },
    { key: 'pack5', name: 'Pack 5 séances', detail: 'Soin Signature · 2h · soit 278 € la séance' },
    { key: 'pack10', name: 'Pack 10 séances', detail: 'Soin Signature · 2h · soit 259 € la séance' },
  ],

  prose: {
    label: 'Le drainage lymphatique à Paris 7e',
    text: `Au 3 Rue Valadon, sur la rive gauche de Paris, le drainage lymphatique méthode Renata França se pratique dans un cabinet confidentiel du 7e arrondissement, sur rendez-vous uniquement. Certifiée depuis 2025, Daphné Lachavanne travaille par mouvements rythmiques et pressions précises qui relancent la circulation, désengorgent les tissus et laissent au corps une vraie sensation de légèreté.

Chaque séance débute par un temps d’écoute, pour comprendre où en est le corps ce jour-là. Vient ensuite l’installation, allongée, dans une lumière tamisée et un silence propice au lâcher-prise. Les mouvements, lents et doux, suivent le sens de la circulation de la lymphe, le long des vaisseaux lymphatiques, des extrémités vers les ganglions lymphatiques : une pression légère, jamais un massage profond, pour stimuler le système lymphatique sans jamais forcer. Les zones travaillées varient selon le soin choisi — jambes et ventre pour le Drainage Lymphatique, visage et crâne pour le Miracle Face — mais le geste reste le même : rythmique, précis, entièrement manuel.

Les bienfaits se ressentent dès la première séance. Le drainage lymphatique soulage la sensation de jambes lourdes et de gonflement, stimule la circulation de la lymphe et favorise l’élimination des toxines, réduit la rétention d’eau et redonne au corps une vraie sensation de légèreté. Sur le visage, il détend les traits, atténue poches et cernes, et ravive l’éclat du teint. Un soin de bien-être, sans visée médicale, pensé pour accompagner le corps au quotidien — pas pour se substituer à un avis médical en cas de doute.

Le Drainage Lymphatique (1h, 160 €) accompagne les jambes lourdes comme les impressions de gonflement : il soulage, affine la silhouette et apaise. Sur le ventre, ce massage drainant aide à dégonfler et à retrouver de la légèreté.

Pour le visage, le Miracle Face (30 min, 95 €) draine le visage et le crâne, détend les traits, redessine l’ovale et ravive l’éclat. Le Combo Détox (1h30, 220 €) réunit corps et visage en une seule séance, idéal en préparation d’un événement. Le Soin Signature (2h, 290 €) prolonge le geste par le breathwork et le travail énergétique, l’expérience la plus complète de L’Art de la Circulation, le concept né en 2025.

Entre deux séances, quelques gestes simples prolongent l’effet du drainage : des mouvements doux et lents vers le haut du corps, une bonne hydratation pour aider le système lymphatique à évacuer les toxines, et l’habitude, en fin de journée, de surélever les jambes quelques minutes pour soulager la sensation de jambes lourdes.

Pour celles et ceux qui inscrivent le soin dans la durée, le Soin Signature se décline en packs dégressifs : 3 séances à 850 € (283 € la séance), 5 séances à 1 390 € (278 € la séance) ou 10 séances à 2 590 € (259 € la séance), au lieu de 290 € la séance. Chaque rendez-vous se réserve en ligne sur Planity, où le cabinet affiche une note de 5,0 / 5. Une praticienne, une méthode, un lieu, pour que le corps se souvienne.`,
  },

  faqs: [
    { q: 'Le drainage lymphatique aide-t-il vraiment pour les jambes lourdes ?', a: 'Le Drainage Lymphatique méthode Renata França (1h, 160 €) relance la circulation par des mouvements rythmiques et précis. Il allège la sensation de jambes lourdes et de gonflement. C’est un soin de bien-être, sans visée médicale.' },
    { q: 'Combien coûte une séance de drainage lymphatique à Paris 7e ?', a: 'Le Drainage Lymphatique seul est à 160 € (1h). Le Miracle Face est à 95 € (30 min), le Combo Détox corps + visage à 220 € (1h30) et le Soin Signature à 290 € (2h, 260 € 1re séance). Le Soin Signature se prend aussi en packs : 3 séances à 850 € (283 € la séance), jusqu’à 259 € la séance pour 10 séances.' },
    { q: 'C’est quoi le Miracle Face ?', a: 'Le Miracle Face (30 min, 95 €) est un drainage du visage et du crâne. Il détend les traits, élimine les tensions et ravive l’éclat. Il se pratique en soin express ou en complément d’un drainage corps.' },
    { q: 'Quelle est la différence entre le Soin Signature et un drainage simple ?', a: 'Le Drainage Lymphatique (1h, 160 €) se concentre sur la circulation. Le Soin Signature (2h, 290 €) ajoute le breathwork et le travail énergétique au drainage Renata França : l’expérience la plus complète de L’Art de la Circulation.' },
    { q: 'Comment se déroule une séance de drainage lymphatique ?', a: 'La séance commence par un échange pour cerner votre besoin du moment. Vous êtes ensuite installée confortablement, et la praticienne travaille par mouvements lents et doux, dans le sens de la circulation lymphatique, sur les zones concernées. Aucune douleur, aucune pression profonde : seulement un geste rythmique et précis, pour une sensation de légèreté immédiate.' },
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
    title: 'Lymphatic Drainage in Paris 7th — Certified Renata França Method',
    description:
      'Renata França lymphatic drainage in Paris 7th (75007). Signature Treatment, Miracle Face, Detox Combo from €95. Left Bank studio, by appointment.',
  },

  header: {
    label: 'Practice 01 / 04',
    h1: 'Treatments & lymphatic drainage.',
    quote:
      '“Touch is a language. I learn to speak it with patience, so the body remembers.”',
    intro:
      'Certified in the Renata França method since 2025, every treatment begins with a conversation. To understand where you are, what you are looking for. Then we let the silence take over.',
    methodLabel: 'Renata França method',
    sinceLabel: 'since 2025',
  },

  photo: {
    oilTexture: 'Oil · texture',
    alt1: 'Renata França lymphatic drainage at Daphné Lachavanne’s studio, Paris 7th',
    alt2: 'Detail of a body drainage treatment, wellbeing studio in Paris 7th',
    alt3: 'Daphné Lachavanne’s treatment studio, 3 rue Valadon, Paris 7th',
  },

  catalogue: {
    label: '(  Catalogue  )',
    all: 'All treatments · 30 min to 2 hrs',
    reserve: 'Book →',
  },

  soins: [
    {
      key: 'signature',
      name: 'Signature Treatment',
      sub: 'Drainage + breathwork + energy work · 2 hrs',
      text: 'The most complete treatment. Renata França lymphatic drainage, guided breathing and work on the energy centres. To free the three bodies in a single session. €260 for the first session.',
    },
    {
      key: 'drainage',
      name: 'Lymphatic Drainage',
      sub: 'Renata França method · 1 hr',
      text: 'The original technique, certified since 2025. Rhythmic, precise movements that revive lymphatic circulation, lighten, reduce swelling and regenerate.',
    },
    {
      key: 'miracleFace',
      name: 'Miracle Face',
      sub: 'Facial drainage · 30 min',
      text: 'A drainage of the face and scalp. It releases the features, eases tension and restores radiance and volume. Ideal as an express treatment or alongside a body session.',
    },
    {
      key: 'comboDetox',
      name: 'Detox Combo',
      sub: 'Body + Face · 1 hr 30',
      text: 'A full body and face drainage in a single session. The signature treatment for a deep detox, the most requested before an event.',
    },
  ],

  packagesLabel: '(  Packs  )',

  packages: [
    { key: 'pack3', name: '3-session Pack', detail: 'Signature Treatment · 2 hrs · €283 per session' },
    { key: 'pack5', name: '5-session Pack', detail: 'Signature Treatment · 2 hrs · €278 per session' },
    { key: 'pack10', name: '10-session Pack', detail: 'Signature Treatment · 2 hrs · €259 per session' },
  ],

  prose: {
    label: 'Lymphatic drainage in Paris 7th',
    text: `At 3 Rue Valadon, on the Left Bank of Paris, Renata França lymphatic drainage is practised in a private studio in the 7th arrondissement, by appointment only. Certified since 2025, Daphné Lachavanne works through rhythmic movements and precise pressure that revive circulation, decongest the tissues and leave the body with a genuine sense of lightness.

Every session begins with a moment of listening, to understand where the body stands that day. Then comes the settling in — lying down, in soft light and a silence that invites you to let go. The movements are slow and gentle, following the direction of lymphatic flow, along the lymphatic vessels, from the extremities towards the lymph nodes: a light pressure, never a deep massage, to stimulate the lymphatic system without ever forcing it. The areas worked vary with the treatment chosen — legs and stomach for the Lymphatic Drainage, face and scalp for the Miracle Face — but the gesture stays the same: rhythmic, precise, entirely manual.

The benefits are felt from the very first session. Lymphatic drainage eases the sensation of heavy, swollen legs, stimulates lymph circulation and supports the elimination of toxins, reduces water retention and leaves the body with a genuine sense of lightness. On the face, it relaxes the features, softens puffiness and dark circles, and revives the complexion’s radiance. A wellbeing treatment, with no medical purpose — designed to support the body day to day, not to replace medical advice when in doubt.

The Lymphatic Drainage (1 hr, €160) eases heavy legs and feelings of swelling: it relieves, refines the silhouette and soothes. On the stomach, this draining massage helps reduce bloating and regain lightness.

For the face, the Miracle Face (30 min, €95) drains the face and scalp, relaxes the features, redraws the contour and revives radiance. The Detox Combo (1 hr 30, €220) brings body and face together in a single session, ideal in preparation for an event. The Signature Treatment (2 hrs, €290) extends the gesture with breathwork and energy work, the most complete experience of L’Art de la Circulation, the concept born in 2025.

Between sessions, a few simple gestures extend the effect of the drainage: gentle, slow movements upward, good hydration to help the lymphatic system flush out toxins, and the habit, at the end of the day, of raising the legs for a few minutes to ease the sensation of heavy legs.

For those who make treatment part of a longer journey, the Signature Treatment comes in tiered packs: 3 sessions at €850 (€283 each), 5 sessions at €1,390 (€278 each) or 10 sessions at €2,590 (€259 each), instead of €290 per session. Each appointment is booked online on Planity, where the studio holds a rating of 5.0 / 5. One practitioner, one method, one place, so the body remembers.`,
  },

  faqs: [
    { q: 'Does lymphatic drainage really help with heavy legs?', a: 'Renata França lymphatic drainage (1 hr, €160) revives circulation through rhythmic, precise movements. It eases the sensation of heavy, swollen legs. It is a wellbeing treatment, with no medical purpose.' },
    { q: 'How much does a lymphatic drainage session cost in Paris 7th?', a: 'The Lymphatic Drainage alone is €160 (1 hr). The Miracle Face is €95 (30 min), the body + face Detox Combo €220 (1 hr 30) and the Signature Treatment €290 (2 hrs, €260 first session). The Signature Treatment also comes in packs: 3 sessions at €850 (€283 each), down to €259 per session for 10 sessions.' },
    { q: 'What is the Miracle Face?', a: 'The Miracle Face (30 min, €95) is a drainage of the face and scalp. It relaxes the features, eases tension and revives radiance. It is offered as an express treatment or alongside a body drainage.' },
    { q: 'What is the difference between the Signature Treatment and a simple drainage?', a: 'The Lymphatic Drainage (1 hr, €160) focuses on circulation. The Signature Treatment (2 hrs, €290) adds breathwork and energy work to the Renata França drainage: the most complete experience of L’Art de la Circulation.' },
    { q: 'How does a lymphatic drainage session unfold?', a: 'The session starts with a conversation to understand what you need in the moment. You are then comfortably settled in, and the practitioner works with slow, gentle movements, following the direction of lymphatic circulation, on the areas concerned. No pain, no deep pressure: just a rhythmic, precise gesture, for an immediate sense of lightness.' },
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
