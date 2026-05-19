// Yoga · Breathwork · Pilates pages — desktop + mobile.
// Shared structure : hero typo géant, citation, schedule, philosophie.

function PracticePageDesktop({ idx, name, italic, gradientVariant, quote, intro, schedule, photos }) {
  return (
    <DesktopFrame height={2200}>
      <DesktopNav active={name.toLowerCase()} />
      {/* Hero */}
      <section style={{ position: 'relative', padding: '160px 56px 80px' }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Pratique {idx} / 04</span>
          <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 200, lineHeight: 0.9, margin: '32px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
            {name}<em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300 }}>.</em>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 60 }}>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 32, lineHeight: 1.35, fontWeight: 300, margin: 0 }}>« {quote} »</p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: Brand.muted, paddingTop: 12 }}>{intro}</p>
          </div>
        </div>
      </section>

      {/* Photo collage */}
      <section style={{ padding: '40px 56px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {photos.map((p, i) => p.src
            ? <Photo key={i} src={p.src} aspect={p.aspect || '3/4'} />
            : <PhotoSlot key={i} label={p.label} kind={p.kind} aspect={p.aspect || '3/4'} />
          )}
        </div>
      </section>

      {/* Approche — bullets */}
      <section style={{ padding: '0 56px 100px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0, fontWeight: 400 }}>(  Approche  )</h2>
        <div>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 48, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.1, margin: '0 0 40px' }}>
            {italic}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, paddingTop: 20, borderTop: `1px solid ${Brand.rule}` }}>
            {schedule.principles.map((pr, i) => (
              <div key={i} style={{ paddingTop: 24 }}>
                <Sym kind={pr.sym} size={28} />
                <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 18, fontWeight: 400, margin: '16px 0 8px' }}>{pr.title}</h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: Brand.muted, margin: 0 }}>{pr.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning */}
      <section style={{ background: Brand.ink, color: '#fff', padding: '100px 56px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>(  Planning  )</span>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 56, lineHeight: 1, margin: '24px 0 20px', fontWeight: 400 }}>Cette semaine.</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.7, maxWidth: 280 }}>
              Cours collectifs au Loft. Réservation en ligne — 8 places maximum.
            </p>
          </div>
          <div>
            {schedule.classes.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 90px 1fr 1fr 100px', gap: 24, alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6 }}>{c.day}</span>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 18 }}>{c.time}</span>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22 }}>{c.title}</span>
                <span style={{ fontSize: 13, opacity: 0.7 }}>{c.duration} · {c.level}</span>
                <a style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'right', textDecoration: 'none', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: 4 }}>Réserver →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </DesktopFrame>
  );
}

function PracticePageMobile({ idx, name, gradientVariant, quote, intro, schedule, photos }) {
  return (
    <MobileFrame height={1900}>
      <MobileNav />
      <section style={{ padding: '110px 24px 32px' }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Pratique {idx} / 04</span>
          <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 80, lineHeight: 0.9, margin: '20px 0 28px', fontWeight: 400, letterSpacing: '-0.02em' }}>{name}.</h1>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, fontWeight: 300, margin: '0 0 20px' }}>« {quote} »</p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: Brand.muted, margin: 0 }}>{intro}</p>
        </div>
      </section>
      <section style={{ padding: '20px 24px 40px' }}>
        {photos[0] && (photos[0].src ? <Photo src={photos[0].src} aspect="4/5" /> : <PhotoSlot label={photos[0].label} kind={photos[0].kind} aspect="4/5" />)}
      </section>
      <section style={{ padding: '0 24px 40px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 24px', fontWeight: 400 }}>(  Approche  )</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {schedule.principles.map((pr, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, paddingTop: 16, borderTop: `1px solid ${Brand.rule}` }}>
              <Sym kind={pr.sym} size={28} />
              <div>
                <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 16, fontWeight: 400, margin: '0 0 6px' }}>{pr.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: Brand.muted, margin: 0 }}>{pr.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: Brand.ink, color: '#fff', padding: '40px 24px', position: 'relative' }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>(  Planning  )</span>
          <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 40, lineHeight: 1, margin: '12px 0 20px', fontWeight: 400 }}>Cette semaine.</h3>
          {schedule.classes.slice(0, 4).map((c, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.15)', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6 }}>{c.day} · {c.time}</div>
                <div style={{ fontFamily: '"Tenor Sans", serif', fontSize: 17, marginTop: 4 }}>{c.title}</div>
              </div>
              <span style={{ fontSize: 11, opacity: 0.7 }}>{c.duration}</span>
            </div>
          ))}
        </div>
      </section>
    </MobileFrame>
  );
}

// ---------- Yoga ----------
const YOGA_DATA = {
  idx: '02', name: 'Yoga', gradientVariant: 'doux',
  italic: 'Une pratique du souffle, du sol vers le ciel.',
  quote: 'C\'est le souffle qui fait circuler l\'énergie vitale dans tout le corps.',
  intro: 'Vinyasa, hatha, yin. Trois portes d\'entrée vers une même attention. Cours collectifs et privés au Loft, pour tous niveaux.',
  schedule: {
    principles: [
      { sym: 'breath', title: 'Pranayama', text: 'Le souffle yogi en trois temps : diaphragmatique, thoracique, claviculaire.' },
      { sym: 'spiral', title: 'Posture', text: 'Asanas tenues, ajustées, accompagnées. Pas de performance, juste de la justesse.' },
      { sym: 'dot', title: 'Méditation', text: 'Quelques minutes assises, pour laisser le tapis devenir une assise intérieure.' },
    ],
    classes: [
      { day: 'Lundi', time: '07:30', title: 'Vinyasa flow', duration: '75 min', level: 'Tous niveaux' },
      { day: 'Mardi', time: '18:30', title: 'Yin & restoratif', duration: '90 min', level: 'Doux' },
      { day: 'Mercredi', time: '12:15', title: 'Hatha lent', duration: '60 min', level: 'Débutant' },
      { day: 'Jeudi', time: '19:00', title: 'Vinyasa intense', duration: '75 min', level: 'Intermédiaire' },
      { day: 'Samedi', time: '10:00', title: 'Hatha & méditation', duration: '90 min', level: 'Tous niveaux' },
    ],
  },
  photos: [
    { src: 'media/yoga-bow.jpg' },
    { kind: 'video', label: 'Pratique · vinyasa' },
    { src: 'media/yoga-childpose.jpg' },
  ],
};

// ---------- Breathwork ----------
const BREATH_DATA = {
  idx: '03', name: 'Breathwork', gradientVariant: 'aerien',
  italic: 'Le souffle, comme un instrument que l\'on apprend à jouer.',
  quote: 'Entre l\'inspire et l\'expire, il y a une pause naturelle, comme le silence en musique.',
  intro: 'Respiration consciente, holotropique, cohérente. Selon ce que vous traversez, on choisit ensemble la pratique. Séances individuelles ou en petit groupe.',
  schedule: {
    principles: [
      { sym: 'breath', title: 'Cohérence', text: 'Cinq inspirations par minute. Le rythme cardiaque s\'aligne, le système nerveux s\'apaise.' },
      { sym: 'wave', title: 'Holotropique', text: 'Un souffle ample, continu. Pour traverser, libérer, parfois pleurer. Toujours en sécurité.' },
      { sym: 'sun', title: 'Tummo', text: 'Inspiration vigoureuse, rétention. Une chaleur intérieure, un éveil cellulaire.' },
    ],
    classes: [
      { day: 'Lundi', time: '20:00', title: 'Cohérence cardiaque', duration: '45 min', level: 'Tous' },
      { day: 'Mercredi', time: '19:30', title: 'Souffle holotropique', duration: '90 min', level: 'Intermédiaire' },
      { day: 'Vendredi', time: '07:00', title: 'Tummo & froid', duration: '60 min', level: 'Avancé' },
      { day: 'Dimanche', time: '11:00', title: 'Cercle de respiration', duration: '120 min', level: 'Tous' },
    ],
  },
  photos: [
    { kind: 'video', label: 'Souffle · vidéo' },
    { kind: 'photo', label: 'Visage · respiration' },
    { kind: 'video', label: 'Cercle au Loft' },
  ],
};

// ---------- Pilates ----------
const PILATES_DATA = {
  idx: '04', name: 'Pilates', gradientVariant: 'intense',
  italic: 'Force, alignement, fluidité. Le mouvement comme une écriture.',
  quote: 'Le corps a sa propre logique. Mon rôle est de l\'écouter, puis de l\'affiner.',
  intro: 'Pilates au sol et avec petit matériel. Travail postural, respiratoire et musculaire profond. En privé ou en duo, pour ajuster avec précision.',
  schedule: {
    principles: [
      { sym: 'triangle', title: 'Alignement', text: 'Trouver l\'axe, le centre, la verticale. Avant tout autre mouvement.' },
      { sym: 'wave', title: 'Fluidité', text: 'Enchaînements lents, précis. Le contraire de la performance — et plus exigeant.' },
      { sym: 'plus', title: 'Renforcement', text: 'Profond, durable, jamais brutal. Pour tenir le corps dans la durée.' },
    ],
    classes: [
      { day: 'Mardi', time: '08:30', title: 'Pilates mat · niveau I', duration: '60 min', level: 'Débutant' },
      { day: 'Jeudi', time: '12:30', title: 'Pilates mat · niveau II', duration: '60 min', level: 'Intermédiaire' },
      { day: 'Vendredi', time: '18:00', title: 'Pilates & souffle', duration: '75 min', level: 'Tous' },
      { day: 'Samedi', time: '11:30', title: 'Privé · sur demande', duration: '60 min', level: '1 à 2 personnes' },
    ],
  },
  photos: [
    { src: 'media/yoga-childpose.jpg' },
    { kind: 'video', label: 'Pilates · roll up' },
    { src: 'media/yoga-bow.jpg' },
  ],
};

const YogaDesktop = () => <PracticePageDesktop {...YOGA_DATA} />;
const YogaMobile = () => <PracticePageMobile {...YOGA_DATA} />;
const BreathDesktop = () => <PracticePageDesktop {...BREATH_DATA} />;
const BreathMobile = () => <PracticePageMobile {...BREATH_DATA} />;
const PilatesDesktop = () => <PracticePageDesktop {...PILATES_DATA} />;
const PilatesMobile = () => <PracticePageMobile {...PILATES_DATA} />;

Object.assign(window, { YogaDesktop, YogaMobile, BreathDesktop, BreathMobile, PilatesDesktop, PilatesMobile });
