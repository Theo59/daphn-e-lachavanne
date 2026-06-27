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
      'Daphné Lachavanne, praticienne certifiée méthode Renata França depuis 2013, vous reçoit à Paris 7e. Drainage lymphatique dès 150 €. Prenez rendez-vous.',
  },

  header: {
    label: 'À propos',
    titleLine1: 'Daphné',
    titleLine2: 'Lachavanne.',
    subtitleHtml: 'Praticienne certifiée méthode Renata França.<br />Paris, depuis 2013.',
    imgAlt:
      'Portrait de Daphné Lachavanne, praticienne bien-être certifiée méthode Renata França à Paris 7e',
  },

  story: {
    label: '(  Mon histoire  )',
    lead: 'J’ai rencontré le soin par le corps sportif. Danseuse, puis athlète, j’ai cherché ce qui soigne vraiment, pas seulement en surface.',
    body1:
      'En 2013, la méthode Renata França a tout changé. Le drainage lymphatique comme art, comme langage, comme écoute du corps. Depuis, j’ai construit une pratique qui dépasse le massage : yoga, breathwork, énergétique, pilates.',
    body2:
      'En 2025, j’ai formalisé cette approche sous le nom L’Art de la Circulation. Parce que tout, dans le corps, demande à circuler, et que mon rôle est de lever les obstacles qui freinent ce mouvement naturel.',
  },

  timeline: {
    label: '(  Parcours  )',
    items: [
      { year: '2013', event: 'Certification méthode Renata França', place: 'Paris' },
      { year: '2017', event: 'Formation yoga 200h', place: 'Inde' },
      { year: '2019', event: 'Breathwork holotropique', place: 'Amsterdam' },
      { year: '2022', event: 'Reiki &amp; magnétisme', place: 'Paris' },
      { year: '2023', event: 'Collaboration sportive · Nike', place: 'Paris' },
      { year: '2025', event: 'Création de L’Art de la Circulation', place: 'Paris' },
    ],
  },

  photos: {
    alt1: 'Daphné Lachavanne au cabinet, soins de drainage Paris 7e',
    alt2: 'Daphné Lachavanne, cabinet 3 rue Valadon, Paris 7e',
    alt3: 'Daphné Lachavanne, pratique du yoga à Paris',
  },

  quote: {
    textHtml:
      '« Une couleur vivante, qui se transforme et évolue,<br />une vibration qui éveille les sens, une énergie en expansion. »',
    author: 'D.L.',
  },

  prose: {
    label: 'Daphné Lachavanne, praticienne bien-être à Paris 7e',
    text: `Daphné Lachavanne est une praticienne bien-être installée à Paris 7e, au 3 Rue Valadon, dans un cabinet privé accessible uniquement sur rendez-vous. Son chemin prend une direction décisive en 2013, année de sa certification à la méthode Renata França. Devenue praticienne certifiée Renata França à Paris, elle fait du drainage lymphatique un véritable langage, attentif au rythme, au souffle et aux tissus.

Le parcours de cette praticienne bien-être à Paris 7e s’est ensuite enrichi au fil des années : une formation de yoga 200h en Inde en 2017, le breathwork holotropique à Amsterdam en 2019, puis le Reiki et le magnétisme à Paris en 2022. En 2023, une collaboration sportive avec Nike prolonge ce dialogue entre performance et récupération. En 2025, elle réunit l’ensemble de cette approche sous un même nom : L’Art de la Circulation.

Praticienne de drainage lymphatique formée à Paris, professeur de yoga et de breathwork à Paris 7e, elle conçoit chaque rendez-vous sur mesure. Le Drainage Lymphatique méthode Renata França dure 1h (150 €) ; le Soin Signature, qui associe drainage, breathwork et travail énergétique, dure 2h (300 €). Les cours particuliers de yoga (vinyasa, hatha, yin) et les séances individuelles de breathwork se déroulent au cabinet, à 90 € l’heure. Elle accompagne aussi sur la durée, à travers des packs Soin Signature dégressifs.

Les réservations se font en ligne via Planity ou par e-mail à hello@daphnelachavanne.com. Avant chaque suivi, un échange permet de comprendre votre demande et d’ajuster la pratique au plus juste.`,
  },

  faqs: [
    { q: 'Daphné Lachavanne est-elle certifiée à la méthode Renata França ?', a: 'Oui. Daphné est praticienne certifiée méthode Renata França depuis 2013, formée à Paris. C’est le socle de sa pratique du drainage lymphatique.' },
    { q: 'Où se trouve le cabinet de Daphné Lachavanne ?', a: 'Au 3 Rue Valadon, 75007 Paris, dans le 7e arrondissement. C’est un espace privé, accessible uniquement sur rendez-vous.' },
    { q: 'Quel est le parcours de Daphné Lachavanne ?', a: 'Formation yoga 200h en Inde (2017), breathwork holotropique à Amsterdam (2019), Reiki et magnétisme à Paris (2022), collaboration avec Nike (2023), puis création de L’Art de la Circulation en 2025.' },
    { q: 'Daphné donne-t-elle des cours de yoga et de breathwork ?', a: 'Oui, en cours particuliers au cabinet de Paris 7e. Le yoga (vinyasa, hatha, yin) et le breathwork individuel sont à 90 € l’heure ; un cercle de souffle de 4 à 6 personnes (2h) est à 60 € par personne.' },
    { q: 'Quels soins propose Daphné Lachavanne ?', a: 'Le Drainage Lymphatique Renata França (1h, 150 €), le Soin Signature (2h, 300 €), le Miracle Face (40 min, 90 €) et le Combo Détox (1h30, 200 €), complétés par des packs Soin Signature dégressifs.' },
    { q: 'Comment prendre rendez-vous avec Daphné Lachavanne ?', a: 'En ligne sur Planity ou par e-mail à hello@daphnelachavanne.com. Les séances se déroulent sur rendez-vous, au cabinet de Paris 7e.' },
  ],
};

const en = {
  meta: {
    title: 'About | Daphné Lachavanne, wellbeing Paris 7th',
    description:
      'Daphné Lachavanne, certified in the Renata França method since 2013, welcomes you in Paris 7th. Lymphatic drainage, €150. Book an appointment.',
  },

  header: {
    label: 'About',
    titleLine1: 'Daphné',
    titleLine2: 'Lachavanne.',
    subtitleHtml: 'Certified in the Renata França method.<br />Paris, since 2013.',
    imgAlt:
      'Portrait of Daphné Lachavanne, wellbeing practitioner certified in the Renata França method in Paris 7th',
  },

  story: {
    label: '(  My story  )',
    lead: 'I came to care through the athletic body. A dancer, then an athlete, I looked for what truly heals, not only at the surface.',
    body1:
      'In 2013, the Renata França method changed everything. Lymphatic drainage as an art, as a language, as a way of listening to the body. Since then, I have built a practice that reaches beyond massage: yoga, breathwork, energy work, pilates.',
    body2:
      'In 2025, I gave this approach a name: L’Art de la Circulation. Because everything in the body asks to circulate, and my role is to clear the obstacles that hold back this natural movement.',
  },

  timeline: {
    label: '(  Journey  )',
    items: [
      { year: '2013', event: 'Renata França method certification', place: 'Paris' },
      { year: '2017', event: '200-hour yoga training', place: 'India' },
      { year: '2019', event: 'Holotropic breathwork', place: 'Amsterdam' },
      { year: '2022', event: 'Reiki &amp; magnetism', place: 'Paris' },
      { year: '2023', event: 'Sports collaboration · Nike', place: 'Paris' },
      { year: '2025', event: 'Founding of L’Art de la Circulation', place: 'Paris' },
    ],
  },

  photos: {
    alt1: 'Daphné Lachavanne at the studio, drainage treatments Paris 7th',
    alt2: 'Daphné Lachavanne, studio 3 rue Valadon, Paris 7th',
    alt3: 'Daphné Lachavanne practising yoga in Paris',
  },

  quote: {
    textHtml:
      '“A living colour, shifting and evolving,<br />a vibration that awakens the senses, an energy in expansion.”',
    author: 'D.L.',
  },

  prose: {
    label: 'Daphné Lachavanne, wellbeing practitioner in Paris 7th',
    text: `Daphné Lachavanne is a wellbeing practitioner based in Paris 7th, at 3 Rue Valadon, in a private studio open by appointment only. Her path took a decisive turn in 2013, the year she was certified in the Renata França method. As a certified Renata França practitioner in Paris, she has made lymphatic drainage a true language, attentive to rhythm, breath and tissue.

The journey of this Paris 7th wellbeing practitioner has since deepened over the years: a 200-hour yoga training in India in 2017, holotropic breathwork in Amsterdam in 2019, then Reiki and magnetism in Paris in 2022. In 2023, a sports collaboration with Nike extended this dialogue between performance and recovery. In 2025, she brought this whole approach together under a single name: L’Art de la Circulation.

A lymphatic drainage practitioner trained in Paris, a yoga and breathwork teacher in Paris 7th, she designs every appointment to measure. The Renata França lymphatic drainage lasts 1 hr (€150); the Signature Treatment, which combines drainage, breathwork and energy work, lasts 2 hrs (€300). Private yoga lessons (vinyasa, hatha, yin) and one-to-one breathwork sessions take place at the studio, at €90 per hour. She also offers longer-term support through tiered Signature Treatment packs.

Bookings are made online via Planity or by email at hello@daphnelachavanne.com. Before every journey, a conversation helps to understand your needs and tune the practice precisely.`,
  },

  faqs: [
    { q: 'Is Daphné Lachavanne certified in the Renata França method?', a: 'Yes. Daphné has been a certified Renata França method practitioner since 2013, trained in Paris. It is the foundation of her lymphatic drainage practice.' },
    { q: 'Where is Daphné Lachavanne’s studio?', a: 'At 3 Rue Valadon, 75007 Paris, in the 7th arrondissement. It is a private space, open by appointment only.' },
    { q: 'What is Daphné Lachavanne’s background?', a: 'A 200-hour yoga training in India (2017), holotropic breathwork in Amsterdam (2019), Reiki and magnetism in Paris (2022), a collaboration with Nike (2023), then the creation of L’Art de la Circulation in 2025.' },
    { q: 'Does Daphné teach yoga and breathwork lessons?', a: 'Yes, in private lessons at the Paris 7th studio. Yoga (vinyasa, hatha, yin) and one-to-one breathwork are €90 per hour; a breath circle of 4 to 6 people (2 hrs) is €60 per person.' },
    { q: 'What treatments does Daphné Lachavanne offer?', a: 'Renata França lymphatic drainage (1 hr, €150), the Signature Treatment (2 hrs, €300), the Miracle Face (40 min, €90) and the Detox Combo (1 hr 30, €200), rounded out by tiered Signature Treatment packs.' },
    { q: 'How do I book an appointment with Daphné Lachavanne?', a: 'Online on Planity or by email at hello@daphnelachavanne.com. Sessions are by appointment, at the Paris 7th studio.' },
  ],
} satisfies typeof fr;

export const about = { fr, en };
