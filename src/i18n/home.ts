/**
 * Dictionnaire de la page d'accueil (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Certaines valeurs contiennent du HTML inline (`<em>`, `<br />`) ; elles sont
 * rendues via `set:html` dans la vue (contenu de confiance, édité ici).
 */

const fr = {
  meta: {
    title: 'Daphné Lachavanne, praticienne bien-être Paris 7e',
    description:
      'Praticienne bien-être à Paris 7e : soins drainage Renata França, breathwork, yoga et pilates, 3 rue Valadon. Drainage 1h à 150 €. Réservez en ligne.',
  },

  hero: {
    label: '◦  soins · breathwork · yoga · pilates  ◦',
    titleLine1: 'L’art de',
    titleLine2: 'la circulation.',
    sub: 'Je vous accueille dans mon cabinet du 7e arrondissement pour des soins sur-mesure, du mouvement à l’énergie.',
    footer: 'Paris · 7e arrondissement',
    imgAlt:
      'Daphné Lachavanne, praticienne bien-être : soins, breathwork, yoga et pilates à Paris 7e',
  },

  welcome: {
    label: 'Bienvenue',
    quote: '« Entre le corps<br />et l’âme, il y a<br />le souffle. »',
    body1Html:
      'Certifiée méthode Renata França depuis 2013, j’ai développé <em>L’Art de la Circulation</em>, une approche globale qui unit le mouvement, le souffle et le travail énergétique.',
    body2:
      'Pour libérer les trois corps : physique, mental, émotionnel. Chaque séance est conçue pour vous, selon votre moment, votre demande, votre corps.',
    link: 'Mon histoire',
  },

  practices: {
    label: '(  Pratiques  )',
    caption: 'Quatre disciplines, une même attention au corps.',
    // L'ordre suit l'affichage ; `key` mappe la route (localisée dans la vue).
    items: [
      { key: 'soins', name: 'Soins', desc: 'Drainage lymphatique, massage holistique, soin énergétique.' },
      { key: 'breathwork', name: 'Breathwork', desc: 'Respiration consciente. Libérer, recentrer, régénérer.' },
      { key: 'yoga', name: 'Yoga', desc: 'Cours particuliers : postures, souffle, méditation.' },
      { key: 'pilates', name: 'Pilates', desc: 'Corps profond, alignement durable, fluidité.' },
    ],
  },

  cabinet: {
    label: 'Le lieu',
    titleLine1: 'Mon',
    titleLine2: 'cabinet.',
    body: '3 Rue Valadon, Paris 7e. Un espace confidentiel, sur rendez-vous, pensé pour la qualité de présence et la profondeur du soin.',
    caption: 'Le cabinet · Paris 7e',
    imgAlt:
      'Le cabinet de Daphné Lachavanne, 3 rue Valadon à Paris 7e, espace de soin confidentiel sur la rive gauche',
  },

  testimonials: {
    label: '(  Mots reçus  )',
    rating: '5,0 / 5 · Planity',
    items: [
      { quote: 'Une expérience transformatrice. Daphné a une façon unique d’écouter le corps, son drainage est une révélation.', author: 'L.M. · drainage lymphatique' },
      { quote: 'Son approche touche autant le corps que l’énergie. On repart transformé, allégé, différent.', author: 'S.T. · soin signature' },
      { quote: 'Un regard très fin, une présence rare. Je repars chaque fois plus légère, plus juste.', author: 'C.R. · soin signature' },
    ],
  },

  prose: {
    label: 'Bien-être, soins & mouvement à Paris 7e',
    text: `Daphné Lachavanne est praticienne bien-être à Paris 7e, sur la rive gauche. Son cabinet, au 3 rue Valadon dans le 75007, est un espace confidentiel qui se visite uniquement sur rendez-vous. On y vient pour ralentir, écouter son corps et le remettre en mouvement, dans une attention rare au geste comme au silence.

Certifiée méthode Renata França depuis 2013, Daphné a réuni en 2025 son savoir-faire sous un même nom : L’Art de la Circulation. Une approche holistique qui relie le mouvement, le souffle et le travail énergétique, pensée pour libérer les trois corps (physique, mental et émotionnel) sans jamais promettre autre chose qu’un mieux-être.

Quatre pratiques se répondent au cabinet. Les soins, d’abord, avec le drainage lymphatique méthode Renata França (1h, 150 €), le Soin Signature qui mêle drainage, breathwork et énergétique (2h, 280 €), le Miracle Face, drainage du visage et du crâne (40 min, 90 €) et le Combo Détox corps et visage (1h30, 200 €). Des forfaits prolongent le suivi sur la saison. Le breathwork ensuite (cohérence cardiaque à cinq respirations par minute, souffle holotropique, pranayama avancé) en séance individuelle (1h, 90 €) ou en cercle fermé de quatre à six personnes (2h, 60 € par personne). Le yoga enfin, en cours particuliers (vinyasa, hatha, yin), et le Pilates au sol, en privé ou en duo, pour un alignement et un renforcement profonds.

Centre bien-être holistique à taille humaine, ce studio de la rive gauche associe soins de drainage et yoga dans un même lieu, pour le corps et l’esprit. Réservation en ligne sur Planity, ou par e-mail à hello@daphnelachavanne.com.`,
  },

  faqs: [
    { q: 'Où se trouve le cabinet de Daphné Lachavanne ?', a: 'Au 3 rue Valadon, 75007 Paris, sur la rive gauche, dans le 7e arrondissement. C’est un cabinet privé qui se visite uniquement sur rendez-vous.' },
    { q: 'Comment prendre rendez-vous ?', a: 'La réservation se fait en ligne sur Planity (planity.com/daphne-lachavanne-75007-paris) ou par e-mail à hello@daphnelachavanne.com. Le cabinet reçoit sur rendez-vous.' },
    { q: 'Quelles pratiques propose Daphné Lachavanne ?', a: 'Quatre pratiques au même endroit : les soins (drainage lymphatique méthode Renata França, Soin Signature, Miracle Face, Combo Détox), le breathwork, le yoga et le Pilates.' },
    { q: 'Combien coûte un soin ?', a: 'Le drainage lymphatique Renata França est à 150 € (1h), le Soin Signature à 280 € (2h), le Miracle Face à 90 € (40 min) et le Combo Détox à 200 € (1h30). Des forfaits existent, comme le Forfait Découverte de 3 drainages à 420 €.' },
    { q: 'Le yoga et le Pilates se pratiquent-ils en cours collectif ?', a: 'Non. Le yoga (vinyasa, hatha, yin) se donne en cours particuliers individuels au cabinet. Le Pilates, lui, se pratique en cours particulier, en privé ou en duo. Le cours de yoga comme le Pilates sont à 90 € l’heure (130 € en duo).' },
    { q: 'Qu’est-ce que L’Art de la Circulation ?', a: 'C’est l’approche créée par Daphné Lachavanne en 2025, qui unit le mouvement, le souffle et le travail énergétique pour aider le corps à mieux circuler, dans une démarche de bien-être.' },
  ],

  ctaBand: {
    titleLine1: 'Réservez',
    titleLine2: 'votre première séance.',
    text: 'Un échange offert avant chaque suivi. Pour comprendre votre demande, ajuster, et trouver ensemble la bonne pratique.',
  },
};

const en = {
  meta: {
    title: 'Daphné Lachavanne, wellbeing practitioner Paris 7th',
    description:
      'Wellbeing practitioner in Paris 7th: Renata França drainage treatments, breathwork, yoga and pilates, 3 rue Valadon. Drainage 1 hr, €150. Book online.',
  },

  hero: {
    label: '◦  treatments · breathwork · yoga · pilates  ◦',
    titleLine1: 'The art of',
    titleLine2: 'circulation.',
    sub: 'I welcome you to my studio in the 7th arrondissement for bespoke treatments, from movement to energy.',
    footer: 'Paris · 7th arrondissement',
    imgAlt:
      'Daphné Lachavanne, wellbeing practitioner: treatments, breathwork, yoga and pilates in Paris 7th',
  },

  welcome: {
    label: 'Welcome',
    quote: '“Between the body<br />and the soul, there is<br />the breath.”',
    body1Html:
      'Certified in the Renata França method since 2013, I developed <em>L’Art de la Circulation</em>, a holistic approach uniting movement, breath and energy work.',
    body2:
      'To free the three bodies: physical, mental, emotional. Each session is designed for you, according to your moment, your need, your body.',
    link: 'My story',
  },

  practices: {
    label: '(  Practices  )',
    caption: 'Four disciplines, one same attention to the body.',
    items: [
      { key: 'soins', name: 'Treatments', desc: 'Lymphatic drainage, holistic massage, energy treatment.' },
      { key: 'breathwork', name: 'Breathwork', desc: 'Conscious breathing. Release, recentre, regenerate.' },
      { key: 'yoga', name: 'Yoga', desc: 'Private lessons: postures, breath, meditation.' },
      { key: 'pilates', name: 'Pilates', desc: 'Deep core, lasting alignment, fluidity.' },
    ],
  },

  cabinet: {
    label: 'The place',
    titleLine1: 'My',
    titleLine2: 'studio.',
    body: '3 Rue Valadon, Paris 7th. A private space, by appointment, designed for quality of presence and depth of care.',
    caption: 'The studio · Paris 7th',
    imgAlt:
      'Daphné Lachavanne’s studio, 3 rue Valadon in Paris 7th, a private treatment space on the Left Bank',
  },

  testimonials: {
    label: '(  Kind words  )',
    rating: '5.0 / 5 · Planity',
    items: [
      { quote: 'A transformative experience. Daphné has a unique way of listening to the body — her drainage is a revelation.', author: 'L.M. · lymphatic drainage' },
      { quote: 'Her approach reaches the body as much as the energy. You leave transformed, lighter, different.', author: 'S.T. · signature treatment' },
      { quote: 'A very fine eye, a rare presence. Each time I leave lighter, more aligned.', author: 'C.R. · signature treatment' },
    ],
  },

  prose: {
    label: 'Wellbeing, treatments & movement in Paris 7th',
    text: `Daphné Lachavanne is a wellbeing practitioner in the 7th arrondissement of Paris, on the Left Bank. Her studio, at 3 rue Valadon in the 75007, is a private space open by appointment only. People come here to slow down, listen to the body and set it back in motion, with a rare attentiveness to gesture as much as to silence.

Certified in the Renata França method since 2013, in 2025 Daphné brought her craft together under a single name: L’Art de la Circulation. A holistic approach that links movement, breath and energy work, designed to free the three bodies (physical, mental and emotional) without ever promising anything more than a greater sense of wellbeing.

Four practices answer one another at the studio. Treatments first, with Renata França lymphatic drainage (1 hr, €150), the Signature Treatment blending drainage, breathwork and energy work (2 hrs, €280), the Miracle Face, a drainage of the face and scalp (40 min, €90) and the Detox Combo for body and face (1 hr 30, €200). Packages extend the journey across the season. Then breathwork (cardiac coherence at five breaths per minute, holotropic breathing, advanced pranayama) in a one-to-one session (1 hr, €90) or in a closed circle of four to six people (2 hrs, €60 per person). Lastly yoga, in private lessons (vinyasa, hatha, yin), and mat Pilates, one-to-one or in pairs, for deep alignment and strengthening.

A human-scale holistic wellbeing centre, this Left Bank studio brings drainage treatments and yoga together in one place, for body and mind. Book online on Planity, or by email at hello@daphnelachavanne.com.`,
  },

  faqs: [
    { q: 'Where is Daphné Lachavanne’s studio?', a: 'At 3 rue Valadon, 75007 Paris, on the Left Bank, in the 7th arrondissement. It is a private studio open by appointment only.' },
    { q: 'How do I book an appointment?', a: 'Booking is done online on Planity (planity.com/daphne-lachavanne-75007-paris) or by email at hello@daphnelachavanne.com. The studio is by appointment only.' },
    { q: 'What practices does Daphné Lachavanne offer?', a: 'Four practices in one place: treatments (Renata França lymphatic drainage, Signature Treatment, Miracle Face, Detox Combo), breathwork, yoga and Pilates.' },
    { q: 'How much does a treatment cost?', a: 'Renata França lymphatic drainage is €150 (1 hr), the Signature Treatment €280 (2 hrs), the Miracle Face €90 (40 min) and the Detox Combo €200 (1 hr 30). Packages are available, such as the Discovery package of 3 drainages at €420.' },
    { q: 'Are yoga and Pilates taught in group classes?', a: 'No. Yoga (vinyasa, hatha, yin) is taught in private one-to-one lessons at the studio. Pilates is taught privately too, one-to-one or in pairs. Both the 1-hour yoga and Pilates lessons are €90 (€130 in pairs).' },
    { q: 'What is L’Art de la Circulation?', a: 'It is the approach created by Daphné Lachavanne in 2025, uniting movement, breath and energy work to help the body circulate better, as part of a wellbeing practice.' },
  ],

  ctaBand: {
    titleLine1: 'Book',
    titleLine2: 'your first session.',
    text: 'A complimentary conversation before every journey. To understand your needs, adjust, and find the right practice together.',
  },
} satisfies typeof fr;

export const home = { fr, en };
