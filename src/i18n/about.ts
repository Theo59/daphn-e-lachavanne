/**
 * Dictionnaire de la page « À propos » (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Certaines valeurs contiennent du HTML inline (`<br />`, guillemets) ; elles sont
 * rendues via `set:html` dans la vue (contenu de confiance, édité ici) et leur clé
 * est suffixée par « Html ».
 *
 * « L’Art de la Circulation » est un nom de marque : conservé en français dans les
 * deux langues.
 */

const fr = {
  meta: {
    title: 'À propos | Daphné Lachavanne, bien-être Paris 7e',
    description:
      'Daphné Lachavanne, praticienne yoga, breathwork et soins certifiée Renata França à Paris 7e. Plus de dix ans au service du bien-être féminin.',
  },

  header: {
    label: 'À propos',
    titleLine1: 'Daphné',
    titleLine2: 'Lachavanne.',
    subtitleHtml: 'Yoga · Breathwork · Soins Renata França.<br />Paris, depuis 2014.',
    imgAlt:
      'Portrait de Daphné Lachavanne, praticienne bien-être yoga, breathwork et soins à Paris 7e',
  },

  story: {
    label: '(  Mon histoire  )',
    lead: 'Depuis plus de dix ans, j’accompagne à travers le yoga, le pilates, le breathwork et le drainage lymphatique. J’aime créer des espaces où chacun peut se reconnecter à soi.',
    body1:
      'Je me suis particulièrement consacrée au bien-être féminin et à l’accompagnement des douleurs propres aux femmes — endométriose, tensions pelviennes, fatigue chronique — avec une approche holistique qui unit mouvement, respiration et soin.',
    body2:
      'En 2025, j’ai formalisé cette vision sous le nom L’Art de la Circulation. Parce que tout, dans le corps, demande à circuler, et que mon rôle est de lever les obstacles qui freinent ce mouvement naturel.',
  },

  timeline: {
    label: '(  Parcours  )',
    items: [
      { year: '2014', event: 'Certification yoga Yoga Alliance 300h · Vinyasa, Hatha', place: 'Berlin' },
      { year: '2015', event: 'Formation Pilates Teacher Training 50h', place: 'Berlin' },
      { year: '2015–2016', event: 'Spécialisation Yoga Prénatal & Postnatal', place: 'Berlin' },
      { year: '2022', event: 'Formation Breathwork Teacher Training', place: 'Paris' },
      { year: '2025', event: '4 certifications Renata França', place: 'Paris' },
      { year: '2025', event: 'Fondation de L’Art de la Circulation · Omvida', place: 'Paris' },
    ],
  },

  photos: {
    alt1: 'Daphné Lachavanne au cabinet Omvida, soins de drainage Paris 7e',
    alt2: 'Daphné Lachavanne, Omvida 3 rue Valadon, Paris 7e',
    alt3: 'Daphné Lachavanne, pratique du yoga à Paris',
    alt4: 'Daphné Lachavanne, bien-être Paris 7e',
    alt5: 'Daphné Lachavanne, praticienne certifiée Paris',
    alt6: 'Daphné Lachavanne, L’Art de la Circulation',
  },

  quote: {
    textHtml:
      '« Une couleur vivante, qui se transforme et évolue,<br />une vibration qui éveille les sens, une énergie en expansion. »',
    author: 'D.L.',
  },

  prose: {
    label: 'Daphné Lachavanne, praticienne bien-être à Paris 7e',
    text: `Daphné Lachavanne est une praticienne bien-être installée à Paris 7e, au cabinet Omvida, 3 Rue Valadon, accessible uniquement sur rendez-vous. Depuis plus de dix ans, elle accompagne à travers le yoga, le pilates, le breathwork et le drainage lymphatique, avec une attention particulière au bien-être féminin et à l’accompagnement des douleurs propres aux femmes.

Son parcours de formation commence en 2014 avec une certification Yoga Alliance 300h (Vinyasa, Hatha), suivie d’une formation Pilates 50h en 2015, puis de spécialisations en yoga prénatal et postnatal. En 2022, elle complète sa pratique par une formation de Breathwork Teacher Training. En 2025, elle obtient quatre certifications Renata França — Miracle Face, Drainage, Remodelage et Relaxant — et fonde L’Art de la Circulation à Omvida, Paris 7e.

Praticienne de drainage lymphatique certifiée Renata França, professeure de yoga (Vinyasa, Hatha, Yin, prénatal, postnatal) et de breathwork à Paris 7e, elle conçoit chaque rendez-vous sur mesure. Le Drainage Lymphatique méthode Renata França dure 1h (160 €) ; le Soin Signature, qui associe drainage, breathwork et travail énergétique, dure 2h (290 €). Les cours particuliers de yoga et les séances individuelles de breathwork se déroulent au cabinet, à 90 € l’heure.

Les réservations se font en ligne via Planity ou par e-mail à hello@daphnelachavanne.com. Avant chaque suivi, un échange permet de comprendre votre demande et d’ajuster la pratique au plus juste.`,
  },

  faqs: [
    { q: 'Daphné Lachavanne est-elle certifiée à la méthode Renata França ?', a: 'Oui. Daphné est praticienne certifiée méthode Renata França depuis 2025, avec quatre spécialités : Miracle Face, Drainage, Remodelage et Relaxant.' },
    { q: 'Où se trouve le cabinet de Daphné Lachavanne ?', a: 'Au cabinet Omvida, 3 Rue Valadon, 75007 Paris, dans le 7e arrondissement. C’est un espace privé, accessible uniquement sur rendez-vous.' },
    { q: 'Quel est le parcours de Daphné Lachavanne ?', a: 'Certification yoga Yoga Alliance 300h (2014), formation Pilates 50h (2015), spécialisation yoga prénatal & postnatal (2015–2016), formation Breathwork Teacher Training (2022), puis quatre certifications Renata França et fondation de L’Art de la Circulation (2025).' },
    { q: 'Daphné donne-t-elle des cours de yoga et de breathwork ?', a: 'Oui, en cours particuliers au cabinet Omvida, Paris 7e. Le yoga (vinyasa, hatha, yin, prénatal, postnatal) et le breathwork individuel sont à 90 € l’heure ; un cercle de souffle de 4 à 6 personnes (2h) est à 60 € par personne.' },
    { q: 'Quels soins propose Daphné Lachavanne ?', a: 'Le Drainage Lymphatique Renata França (1h, 160 €), le Soin Signature (2h, 290 €), le Miracle Face (30 min, 95 €) et le Combo Détox (1h30, 220 €), complétés par des packs Soin Signature dégressifs.' },
    { q: 'Comment prendre rendez-vous avec Daphné Lachavanne ?', a: 'En ligne sur Planity ou par e-mail à hello@daphnelachavanne.com. Les séances se déroulent sur rendez-vous, au cabinet Omvida, Paris 7e.' },
  ],
};

const en = {
  meta: {
    title: 'About | Daphné Lachavanne, wellbeing Paris 7th',
    description:
      'Daphné Lachavanne, yoga, breathwork and Renata França certified practitioner in Paris 7th. Over ten years dedicated to feminine wellbeing.',
  },

  header: {
    label: 'About',
    titleLine1: 'Daphné',
    titleLine2: 'Lachavanne.',
    subtitleHtml: 'Yoga · Breathwork · Renata França Treatments.<br />Paris, since 2014.',
    imgAlt:
      'Portrait of Daphné Lachavanne, yoga, breathwork and treatments practitioner in Paris 7th',
  },

  story: {
    label: '(  My story  )',
    lead: 'For over ten years, I have been accompanying people through yoga, pilates, breathwork and lymphatic drainage. I love creating spaces where everyone can reconnect with themselves.',
    body1:
      'I have dedicated myself particularly to feminine wellbeing and to supporting women with their specific pain — endometriosis, pelvic tension, chronic fatigue — with a holistic approach that unites movement, breath and care.',
    body2:
      'In 2025, I formalised this vision under the name L’Art de la Circulation. Because everything in the body asks to circulate, and my role is to clear the obstacles that hold back this natural movement.',
  },

  timeline: {
    label: '(  Journey  )',
    items: [
      { year: '2014', event: 'Yoga Alliance 300h certification · Vinyasa, Hatha', place: 'Berlin' },
      { year: '2015', event: 'Pilates Teacher Training 50h', place: 'Berlin' },
      { year: '2015–2016', event: 'Prenatal & Postnatal Yoga specialisation', place: 'Berlin' },
      { year: '2022', event: 'Breathwork Teacher Training', place: 'Paris' },
      { year: '2025', event: '4 Renata França certifications', place: 'Paris' },
      { year: '2025', event: 'Founding of L’Art de la Circulation · Omvida', place: 'Paris' },
    ],
  },

  photos: {
    alt1: 'Daphné Lachavanne at Omvida studio, drainage treatments Paris 7th',
    alt2: 'Daphné Lachavanne, Omvida 3 rue Valadon, Paris 7th',
    alt3: 'Daphné Lachavanne practising yoga in Paris',
    alt4: 'Daphné Lachavanne, wellbeing Paris 7th',
    alt5: 'Daphné Lachavanne, certified practitioner Paris',
    alt6: 'Daphné Lachavanne, L’Art de la Circulation',
  },

  quote: {
    textHtml:
      '"A living colour, shifting and evolving,<br />a vibration that awakens the senses, an energy in expansion."',
    author: 'D.L.',
  },

  prose: {
    label: 'Daphné Lachavanne, wellbeing practitioner in Paris 7th',
    text: `Daphné Lachavanne is a wellbeing practitioner based in Paris 7th, at the Omvida studio, 3 Rue Valadon, open by appointment only. For over ten years, she has been accompanying people through yoga, pilates, breathwork and lymphatic drainage, with particular attention to feminine wellbeing and supporting women with their specific pain.

Her training journey began in 2014 with a Yoga Alliance 300h certification (Vinyasa, Hatha), followed by a 50h Pilates training in 2015, then specialisations in prenatal and postnatal yoga. In 2022, she deepened her practice with a Breathwork Teacher Training. In 2025, she obtained four Renata França certifications — Miracle Face, Drainage, Remodelling and Relaxation — and founded L’Art de la Circulation at Omvida, Paris 7th.

A certified Renata França lymphatic drainage practitioner, a yoga teacher (Vinyasa, Hatha, Yin, prenatal, postnatal) and breathwork teacher in Paris 7th, she designs every appointment to measure. The Renata França lymphatic drainage lasts 1 hr (€160); the Signature Treatment, which combines drainage, breathwork and energy work, lasts 2 hrs (€290). Private yoga lessons and individual breathwork sessions take place at the studio, at €90 per hour.

Bookings are made online via Planity or by email at hello@daphnelachavanne.com. Before every journey, a conversation helps to understand your needs and tune the practice precisely.`,
  },

  faqs: [
    { q: 'Is Daphné Lachavanne certified in the Renata França method?', a: 'Yes. Daphné has been a certified Renata França practitioner since 2025, with four specialities: Miracle Face, Drainage, Remodelling and Relaxation.' },
    { q: 'Where is Daphné Lachavanne’s studio?', a: 'At the Omvida studio, 3 Rue Valadon, 75007 Paris, in the 7th arrondissement. It is a private space, open by appointment only.' },
    { q: 'What is Daphné Lachavanne’s background?', a: 'Yoga Alliance 300h certification (2014), Pilates training 50h (2015), prenatal & postnatal yoga specialisation (2015–2016), Breathwork Teacher Training (2022), then four Renata França certifications and founding of L’Art de la Circulation (2025).' },
    { q: 'Does Daphné teach yoga and breathwork lessons?', a: 'Yes, in private lessons at the Omvida studio, Paris 7th. Yoga (vinyasa, hatha, yin, prenatal, postnatal) and one-to-one breathwork are €90 per hour; a breath circle of 4 to 6 people (2 hrs) is €60 per person.' },
    { q: 'What treatments does Daphné Lachavanne offer?', a: 'Renata França lymphatic drainage (1 hr, €160), the Signature Treatment (2 hrs, €290), the Miracle Face (30 min, €95) and the Detox Combo (1 hr 30, €220), rounded out by tiered Signature Treatment packs.' },
    { q: 'How do I book an appointment with Daphné Lachavanne?', a: 'Online on Planity or by email at hello@daphnelachavanne.com. Sessions are by appointment, at the Omvida studio, Paris 7th.' },
  ],
} satisfies typeof fr;

export const about = { fr, en };
