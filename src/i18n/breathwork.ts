/**
 * Dictionnaire de la page Breathwork (FR + EN).
 *
 * ÉDITION : pour changer un texte, modifie directement la valeur dans `fr` ou `en`.
 * `en` est typé `satisfies typeof fr` : oublier une clé = erreur au build.
 *
 * Les données non-textuelles (icônes des cartes « principes ») ne sont PAS ici :
 * elles vivent dans la vue (map PRINCIPLE_ICONS indexée par `key`).
 * Les valeurs suffixées « Html » contiennent du HTML inline rendu via `set:html`.
 */

const fr = {
  meta: {
    title: 'Séance breathwork Paris 7e, cohérence cardiaque',
    description:
      'Séances de breathwork à Paris 7e : cohérence cardiaque, holotropique et pranayama. En individuel (1h, 90 €) ou en cercle. Réservez votre séance en ligne.',
  },

  header: {
    label: 'Pratique 03 / 04',
    title: 'Breathwork',
    quote:
      '« Entre l’inspire et l’expire, une pause naturelle, comme le silence en musique. »',
    sub: 'Respiration consciente, holotropique, cohérence cardiaque. En individuel ou en cercle fermé. Selon ce que vous traversez, on choisit ensemble la pratique.',
  },

  gallery: {
    photo1Alt:
      'Séance de breathwork et respiration consciente, cabinet de Daphné Lachavanne à Paris 7e',
    photo2Alt: 'Respiration holotropique guidée, cabinet bien-être Paris rive gauche',
    photo3Alt: 'Cercle de souffle — respiration consciente en groupe, cabinet de Daphné Lachavanne à Paris 7e',
    videoBadge: 'vidéo',
    videoLabel: 'Cercle de souffle',
  },

  approach: {
    label: '(  Approche  )',
    title: 'Le souffle, comme un instrument que l’on apprend à jouer.',
  },

  // `key` mappe l'icône (dans la vue). title + text sont traduisibles.
  principles: [
    {
      key: 'coherence',
      title: 'Cohérence',
      text: "Cinq inspirations par minute. Le rythme cardiaque s'aligne, le système nerveux s'apaise.",
    },
    {
      key: 'holotropic',
      title: 'Holotropique',
      text: 'Un souffle ample, continu. Pour traverser, libérer, parfois pleurer. Toujours en sécurité.',
    },
    {
      key: 'pranayama',
      title: 'Pranayama avancé',
      text: "Techniques de rétention, Tummo, Wim Hof. Pour l'éveil cellulaire et la vitalité profonde.",
    },
  ],

  pricing: {
    label: '(  Tarif & Réservation  )',
    titleHtml: 'Sur<br />rendez-vous.',
    text: 'Séances individuelles au cabinet. Réservation via Planity.',
    book: 'Réserver →',
  },

  // `price` est un champ « traduisible » (format monétaire). detail traduisible aussi.
  tarifs: [
    { key: 'solo', title: 'Séance individuelle', detail: '1h · au cabinet', price: '90 €' },
    { key: 'circle', title: 'Cercle de souffle', detail: '4 à 6 personnes · 2h', price: '60 €/pers.' },
  ],

  prose: {
    label: 'Le breathwork à Paris 7e',
    text: `Le breathwork, c'est l'art d'habiter sa respiration. Au cabinet de Daphné Lachavanne, au 3 rue Valadon dans le 7e arrondissement de Paris, chaque séance commence par une écoute : selon ce que vous traversez, on choisit ensemble la pratique. Une séance de breathwork à Paris 7e se déroule dans un espace privé, sur rendez-vous, loin de l'agitation de la ville.

Trois chemins se dessinent. La cohérence cardiaque d'abord : cinq respirations par minute, un rythme qui aligne le cœur et apaise le système nerveux. C'est l'exercice de respiration pour la gestion du stress le plus accessible, celui qui se glisse ensuite dans le quotidien. La respiration holotropique ensuite, un souffle ample et continu pour traverser, libérer, parfois pleurer, toujours en sécurité. Daphné s'est formée à cette pratique à Amsterdam en 2019. Le pranayama avancé enfin, avec ses techniques de rétention, de Tummo et de méthode Wim Hof, pour la vitalité profonde.

Le breathwork individuel à Paris 7e dure une heure et se pratique à 90 €. Pour celles et ceux qui préfèrent l'élan du groupe, le cercle de respiration breathwork accueille quatre à six personnes pendant deux heures, à 60 € par personne. Un cercle fermé, intime, où le souffle de chacun soutient celui des autres.

Cet atelier de respiration consciente s'inscrit dans la démarche de Daphné Lachavanne, praticienne bien-être et créatrice de « L'Art de la Circulation ». Ici, on ne promet pas de guérir : on propose de circuler, de l'inspire à l'expire, du tendu vers le posé. La réservation se fait en ligne via Planity, ou par e-mail à hello@daphnelachavanne.com.

Le breathwork se combine naturellement avec le yoga, le Pilates ou les soins de drainage lymphatique proposés au même cabinet, pour une même attention portée au corps et au souffle.`,
  },

  faqs: [
    {
      q: "C'est quoi une séance de breathwork, concrètement ?",
      a: "C'est un temps guidé où l'on travaille la respiration consciente. Au cabinet du 7e, on choisit ensemble entre cohérence cardiaque, respiration holotropique ou pranayama avancé selon ce que vous traversez. La séance individuelle dure 1h (90 €).",
    },
    {
      q: 'La cohérence cardiaque aide-t-elle vraiment contre le stress ?',
      a: "La cohérence cardiaque repose sur un rythme de cinq respirations par minute. Le rythme cardiaque s'aligne et le système nerveux s'apaise. C'est un exercice de respiration simple pour la gestion du stress, que l'on peut ensuite reprendre seul au quotidien.",
    },
    {
      q: 'La respiration holotropique, est-ce sans risque ?',
      a: "Le souffle holotropique est ample et continu, pratiqué toujours dans un cadre sécurisé et accompagné. Daphné s'est formée à cette approche à Amsterdam en 2019. Il s'agit d'un accompagnement bien-être, sans promesse médicale ni thérapeutique.",
    },
    {
      q: 'Comment fonctionne le cercle de souffle ?',
      a: "Le cercle de respiration breathwork réunit 4 à 6 personnes pendant 2h, en cercle fermé, à 60 € par personne. C'est un format collectif et intime où le souffle de chacun soutient celui du groupe.",
    },
    {
      q: 'Où et comment réserver à Paris 7e ?',
      a: 'Le cabinet se trouve au 3 rue Valadon, 75007 Paris, en privé et sur rendez-vous uniquement. La réservation se fait en ligne via Planity, ou par e-mail à hello@daphnelachavanne.com.',
    },
    {
      q: "Faut-il de l'expérience pour faire du breathwork ?",
      a: "Non. La séance s'ajuste à chacun, du tout premier souffle conscient aux techniques avancées comme le Tummo ou la méthode Wim Hof. On commence là où vous en êtes, en individuel ou en cercle.",
    },
  ],

  schema: {
    name: 'Séances de breathwork à Paris 7e',
    serviceType: 'Breathwork / respiration consciente',
    description:
      'Séances de breathwork à Paris 7e : cohérence cardiaque, respiration holotropique et pranayama avancé, en individuel ou en cercle de souffle.',
  },
};

const en = {
  meta: {
    title: 'Breathwork session Paris 7th, cardiac coherence',
    description:
      'Breathwork sessions in Paris 7th: cardiac coherence, holotropic and pranayama. One-to-one (1 hr, €90) or in a circle. Book your session online.',
  },

  header: {
    label: 'Practice 03 / 04',
    title: 'Breathwork',
    quote:
      '“Between the in-breath and the out-breath, a natural pause, like silence in music.”',
    sub: 'Conscious breathing, holotropic, cardiac coherence. One-to-one or in a closed circle. According to what you are going through, we choose the practice together.',
  },

  gallery: {
    photo1Alt:
      "Breathwork and conscious breathing session, Daphné Lachavanne's studio in Paris 7th",
    photo2Alt: 'Guided holotropic breathing, wellbeing studio on the Paris Left Bank',
    photo3Alt: 'Breath circle — conscious group breathing, Daphné Lachavanne’s studio in Paris 7th',
    videoBadge: 'video',
    videoLabel: 'Breath circle',
  },

  approach: {
    label: '(  Approach  )',
    title: 'The breath, like an instrument one learns to play.',
  },

  principles: [
    {
      key: 'coherence',
      title: 'Coherence',
      text: 'Five breaths per minute. The heart rate aligns, the nervous system settles.',
    },
    {
      key: 'holotropic',
      title: 'Holotropic',
      text: 'A full, continuous breath. To move through, release, sometimes weep. Always in safety.',
    },
    {
      key: 'pranayama',
      title: 'Advanced pranayama',
      text: 'Retention techniques, Tummo, Wim Hof. For cellular awakening and deep vitality.',
    },
  ],

  pricing: {
    label: '(  Pricing & Booking  )',
    titleHtml: 'By<br />appointment.',
    text: 'One-to-one sessions at the studio. Booking via Planity.',
    book: 'Book →',
  },

  tarifs: [
    { key: 'solo', title: 'One-to-one session', detail: '1 hr · at the studio', price: '€90' },
    { key: 'circle', title: 'Breath circle', detail: '4 to 6 people · 2 hrs', price: '€60/pers.' },
  ],

  prose: {
    label: 'Breathwork in Paris 7th',
    text: `Breathwork is the art of inhabiting your breath. At Daphné Lachavanne's studio, at 3 rue Valadon in the 7th arrondissement of Paris, every session begins with listening: according to what you are going through, we choose the practice together. A breathwork session in Paris 7th unfolds in a private space, by appointment, far from the bustle of the city.

Three paths take shape. Cardiac coherence first: five breaths per minute, a rhythm that aligns the heart and calms the nervous system. It is the most accessible breathing exercise for managing stress, the one that then slips into everyday life. Holotropic breathing next, a full, continuous breath to move through, release, sometimes weep, always in safety. Daphné trained in this practice in Amsterdam in 2019. Advanced pranayama lastly, with its techniques of retention, Tummo and the Wim Hof method, for deep vitality.

One-to-one breathwork in Paris 7th lasts one hour, priced at €90. For those who prefer the momentum of the group, the breathwork circle welcomes four to six people over two hours, at €60 per person. A closed, intimate circle, where each person's breath supports the others.

This conscious breathing workshop is part of the work of Daphné Lachavanne, wellbeing practitioner and creator of L'Art de la Circulation. Here, there is no promise to heal: the invitation is to circulate, from the in-breath to the out-breath, from tension towards calm. Booking is done online via Planity, or by email at hello@daphnelachavanne.com.

Breathwork pairs naturally with yoga, Pilates or the lymphatic drainage treatments offered at the same studio, all sharing the same attention to body and breath.`,
  },

  faqs: [
    {
      q: 'What does a breathwork session actually involve?',
      a: 'It is a guided time devoted to conscious breathing. At the studio in the 7th, we choose together between cardiac coherence, holotropic breathing or advanced pranayama according to what you are going through. The one-to-one session lasts 1 hr (€90).',
    },
    {
      q: 'Does cardiac coherence really help with stress?',
      a: 'Cardiac coherence rests on a rhythm of five breaths per minute. The heart rate aligns and the nervous system settles. It is a simple breathing exercise for managing stress, one you can then practise on your own in everyday life.',
    },
    {
      q: 'Is holotropic breathing safe?',
      a: 'Holotropic breathing is full and continuous, always practised in a safe, guided setting. Daphné trained in this approach in Amsterdam in 2019. It is a wellbeing practice, with no medical or therapeutic promise.',
    },
    {
      q: 'How does the breath circle work?',
      a: "The breathwork circle brings together 4 to 6 people over 2 hrs, in a closed circle, at €60 per person. It is a collective, intimate format where each person's breath supports the group.",
    },
    {
      q: 'Where and how do I book in Paris 7th?',
      a: 'The studio is at 3 rue Valadon, 75007 Paris, private and by appointment only. Booking is done online via Planity, or by email at hello@daphnelachavanne.com.',
    },
    {
      q: 'Do I need experience to do breathwork?',
      a: 'No. The session adapts to each person, from the very first conscious breath to advanced techniques like Tummo or the Wim Hof method. We start where you are, one-to-one or in a circle.',
    },
  ],

  schema: {
    name: 'Breathwork sessions in Paris 7th',
    serviceType: 'Breathwork / conscious breathing',
    description:
      'Breathwork sessions in Paris 7th: cardiac coherence, holotropic breathing and advanced pranayama, one-to-one or in a breath circle.',
  },
} satisfies typeof fr;

export const breathwork = { fr, en };
