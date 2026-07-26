/**
 * Dictionnaire de la page Yoga (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Les données non-textuelles (chemins d'icônes des principes) ne sont PAS ici :
 * elles vivent dans la vue (YogaView.astro), indexées par la clé stable `key`.
 */

const fr = {
  meta: {
    title: 'Cours de yoga particulier Paris 7e | Daphné Lachavanne',
    description:
      'Cours particuliers de yoga (vinyasa, hatha, yin) à Paris 7e, rive gauche. 1h à 90 € (130 € en duo), en cabinet privé sur rendez-vous.',
  },

  header: {
    label: 'Pratique 02 / 04',
    h1: 'Yoga',
    quote: '« La posture juste commence par le souffle juste. »',
    sub: 'Cours particuliers uniquement. Vinyasa, hatha, yin, adaptés à votre corps, votre niveau, votre moment. Une heure d’attention complète, sans comparaison.',
  },

  photos: {
    alt1: 'Posture de yoga en cours particulier, cabinet de Daphné Lachavanne à Paris 7e',
    alt2: 'Asana de yoga vinyasa, cours privé à Paris rive gauche',
    alt3: 'Pratique de pranayama et yoga hatha, Paris 7e',
  },

  approche: {
    label: '(  Approche  )',
    title: 'Une pratique du souffle, du sol vers le ciel.',
  },

  // Les principes : texte traduisible + clé stable (l'icône est dans la vue).
  principles: [
    { key: 'pranayama', title: 'Pranayama', text: 'Le souffle yogi en trois temps : diaphragmatique, thoracique, claviculaire. Tout part de là.' },
    { key: 'posture', title: 'Posture', text: 'Asanas tenues, ajustées, accompagnées. Pas de performance, juste de la justesse.' },
    { key: 'meditation', title: 'Méditation', text: 'Quelques minutes assises, pour laisser le corps se poser et la pratique s’intégrer.' },
  ],

  tarif: {
    label: '(  Tarif & Réservation  )',
    titleLine1: 'Sur',
    titleLine2: 'rendez-vous.',
    body: 'Séances individuelles au cabinet. Réservation via Planity.',
    reserve: 'Réserver →',
    rows: [
      { title: 'Cours particulier', detail: '1h · au cabinet', price: '90 €' },
      { title: 'Duo', detail: '1h · 2 personnes', price: '130 €' },
      { title: 'Forfait 5 séances', detail: 'valable 3 mois', price: '400 €' },
    ],
  },

  prose: {
    label: 'Le yoga en cours particulier à Paris 7e',
    text: `Le yoga avec Daphné Lachavanne se vit en cours particulier, dans un cabinet privé du 7e arrondissement de Paris, au 3 rue Valadon, sur la rive gauche. Une seule personne, une heure d’attention complète, sans miroir ni comparaison. Formée au yoga lors d’un cursus de 200 heures en Inde en 2017, elle enseigne le vinyasa, le hatha et le yin, et choisit le style selon votre corps, votre niveau et votre énergie du jour.

Chaque séance repose sur trois piliers. Le pranayama d’abord : le souffle yogi en trois temps (diaphragmatique, thoracique, claviculaire) qui pose le système nerveux et prépare le mouvement. La posture ensuite : des asanas tenues, ajustées et accompagnées, où l’on cherche la justesse plutôt que la performance. La méditation enfin : quelques minutes assises, en pleine conscience, pour laisser la pratique s’intégrer.

Ce format en cours particulier convient au yoga débutant comme à une pratique avancée. Rien n’est standardisé : le rythme, les transitions et les appuis se construisent autour de vous. C’est aussi un espace pour celles et ceux qui n’osent pas le cours collectif, ou qui cherchent un suivi régulier auprès d’un professeur de yoga privé à Paris.

Les tarifs sont clairs : le cours particulier d’une heure est à 90 € (130 € en duo), et le forfait de 5 séances, valable 3 mois, à 400 €. Les séances ont lieu au cabinet, uniquement sur rendez-vous. La réservation se fait en ligne via Planity, où la pratique est notée 5,0 / 5. Pour toute question préalable, l’échange peut commencer par e-mail à hello@daphnelachavanne.com.

Le yoga se combine naturellement avec le Pilates, le breathwork ou les soins de drainage lymphatique proposés au même cabinet, pour une même attention portée au corps et au souffle.`,
  },

  faqs: [
    { q: 'À qui s’adressent les cours de yoga ?', a: 'À tous. Comme il s’agit de cours particuliers, la séance s’adapte à votre corps, votre niveau et votre moment, yoga débutant comme pratique confirmée. Le style, vinyasa, hatha ou yin, est choisi avec vous.' },
    { q: 'Où ont lieu les cours ? Proposez-vous des cours à domicile ?', a: 'Les cours particuliers de yoga ont lieu au cabinet privé du 7e, au 3 rue Valadon, sur la rive gauche à Paris, uniquement sur rendez-vous.' },
    { q: 'Combien coûte un cours et comment réserver ?', a: 'Le cours particulier d’une heure est à 90 € (130 € en duo). Le forfait de 5 séances, valable 3 mois, est à 400 €. La réservation se fait en ligne sur Planity.' },
    { q: 'Que comprend une séance de yoga ?', a: 'Trois temps : le pranayama (souffle yogi en trois temps), la posture (asanas ajustées et accompagnées) et quelques minutes de méditation en pleine conscience pour intégrer la pratique.' },
    { q: 'Peut-on pratiquer le yoga enceinte ?', a: 'Le format individuel permet d’adapter la pratique à chaque étape de la vie. Pour une grossesse ou une situation particulière, un échange préalable par e-mail à hello@daphnelachavanne.com permet de préparer la séance ensemble.' },
    { q: 'Faut-il de l’expérience ou du matériel ?', a: 'Aucune expérience n’est requise. La pratique se construit autour de vous, au sol, à votre rythme, dans un cadre privé à Paris 7e.' },
  ],

  schema: {
    name: 'Cours de yoga particulier à Paris 7e',
    serviceType: 'Cours de yoga',
    description:
      'Cours particuliers de yoga (vinyasa, hatha, yin) et pranayama à Paris 7e, au cabinet de Daphné Lachavanne, sur rendez-vous.',
  },
};

const en = {
  meta: {
    title: 'Private yoga lessons Paris 7th | Daphné Lachavanne',
    description:
      'Private yoga lessons (vinyasa, hatha, yin) and pranayama in Paris 7th, Left Bank. 1 hr, €90 (€130 in pairs), in a private studio by appointment. Book online.',
  },

  header: {
    label: 'Practice 02 / 04',
    h1: 'Yoga',
    quote: '“The right posture begins with the right breath.”',
    sub: 'Private lessons only. Vinyasa, hatha, yin, tailored to your body, your level, your moment. One hour of full attention, without comparison.',
  },

  photos: {
    alt1: 'Yoga posture in a private lesson, Daphné Lachavanne’s studio in Paris 7th',
    alt2: 'Vinyasa yoga asana, private lesson in Paris Left Bank',
    alt3: 'Pranayama and hatha yoga practice, Paris 7th',
  },

  approche: {
    label: '(  Approach  )',
    title: 'A practice of breath, from the ground toward the sky.',
  },

  principles: [
    { key: 'pranayama', title: 'Pranayama', text: 'The yogic breath in three parts: diaphragmatic, thoracic, clavicular. Everything starts there.' },
    { key: 'posture', title: 'Posture', text: 'Asanas held, adjusted, guided. No performance, only precision.' },
    { key: 'meditation', title: 'Meditation', text: 'A few minutes seated, to let the body settle and the practice take root.' },
  ],

  tarif: {
    label: '(  Pricing & Booking  )',
    titleLine1: 'By',
    titleLine2: 'appointment.',
    body: 'One-to-one sessions at the studio. Booking via Planity.',
    reserve: 'Book →',
    rows: [
      { title: 'Private lesson', detail: '1 hr · at the studio', price: '€90' },
      { title: 'In pairs', detail: '1 hr · 2 people', price: '€130' },
      { title: '5-session package', detail: 'valid 3 months', price: '€400' },
    ],
  },

  prose: {
    label: 'Private yoga lessons in Paris 7th',
    text: `Yoga with Daphné Lachavanne is experienced in private lessons, in a private studio in the 7th arrondissement of Paris, at 3 rue Valadon, on the Left Bank. One person, one hour of full attention, with no mirror and no comparison. Trained in yoga through a 200-hour course in India in 2017, she teaches vinyasa, hatha and yin, and chooses the style according to your body, your level and your energy of the day.

Each session rests on three pillars. Pranayama first: the yogic breath in three parts (diaphragmatic, thoracic, clavicular) that settles the nervous system and prepares the movement. Then posture: asanas held, adjusted and guided, where we seek precision rather than performance. And finally meditation: a few minutes seated, in mindfulness, to let the practice take root.

This private-lesson format suits beginner yoga as much as an advanced practice. Nothing is standardised: the pace, the transitions and the supports are built around you. It is also a space for those who do not dare join a group class, or who are looking for regular guidance from a private yoga teacher in Paris.

The pricing is clear: the one-hour private lesson is €90 (€130 in pairs), and the 5-session package, valid 3 months, is €400. Sessions take place at the studio, by appointment only. Booking is done online via Planity, where the practice is rated 5.0 / 5. For any question beforehand, the conversation can begin by email at hello@daphnelachavanne.com.

Yoga pairs naturally with Pilates, breathwork or the lymphatic drainage treatments offered at the same studio, all sharing the same attention to body and breath.`,
  },

  faqs: [
    { q: 'Who are the yoga lessons for?', a: 'Everyone. As they are private lessons, the session adapts to your body, your level and your moment, from beginner yoga to experienced practice. The style — vinyasa, hatha or yin — is chosen with you.' },
    { q: 'Where do the lessons take place? Do you offer lessons at home?', a: 'Private yoga lessons take place at the private studio in the 7th, at 3 rue Valadon, on the Left Bank in Paris, by appointment only.' },
    { q: 'How much does a lesson cost and how do I book?', a: 'The one-hour private lesson is €90 (€130 in pairs). The 5-session package, valid 3 months, is €400. Booking is done online on Planity.' },
    { q: 'What does a yoga session include?', a: 'Three movements: pranayama (yogic breath in three parts), posture (adjusted and guided asanas) and a few minutes of mindful meditation to integrate the practice.' },
    { q: 'Can you practise yoga while pregnant?', a: 'The one-to-one format makes it possible to adapt the practice to every stage of life. For a pregnancy or a particular situation, a prior exchange by email at hello@daphnelachavanne.com lets us prepare the session together.' },
    { q: 'Do you need experience or equipment?', a: 'No experience is required. The practice is built around you, on the mat, at your own pace, in a private setting in Paris 7th.' },
  ],

  schema: {
    name: 'Private yoga lessons in Paris 7th',
    serviceType: 'Yoga lessons',
    description:
      'Private yoga lessons (vinyasa, hatha, yin) and pranayama in Paris 7th, at Daphné Lachavanne’s studio, by appointment.',
  },
} satisfies typeof fr;

export const yoga = { fr, en };
