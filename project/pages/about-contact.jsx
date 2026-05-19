// À propos & Contact pages — desktop + mobile.

function AboutDesktop() {
  return (
    <DesktopFrame height={2400}>
      <DesktopNav active="about" />
      {/* Hero — large portrait + text */}
      <section style={{ padding: '140px 56px 80px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  À propos</span>
          <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 132, lineHeight: 0.9, margin: '32px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
            Daphné<br />
            <em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300 }}>Lachavanne.</em>
          </h1>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.4, fontWeight: 300, margin: '40px 0 0', maxWidth: 480 }}>
            Praticienne en yoga, breathwork, pilates &amp; soins.<br />
            Genève, depuis 2017.
          </p>
        </div>
        <PhotoSlot label="Portrait · vidéo intime" kind="video" aspect="3/4" />
      </section>

      {/* Manifeste — long form intime */}
      <section style={{ padding: '80px 56px 120px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0, fontWeight: 400 }}>(  Mon histoire  )</h2>
        <div style={{ fontSize: 17, lineHeight: 1.85, color: Brand.ink, maxWidth: 640 }}>
          <p style={{ marginTop: 0, fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, fontWeight: 300 }}>
            J'ai d'abord rencontré le yoga par hasard, à dix-neuf ans, dans un sous-sol parisien.
            Je suis ressortie avec l'impression d'avoir trouvé une langue.
          </p>
          <p>
            Depuis, je n'ai pas arrêté d'apprendre. Vinyasa et hatha en Inde, yin auprès de Sarah Powers,
            breathwork avec Dan Brulé, pilates en formation continue à Lausanne. Le toucher est venu
            plus tard — par besoin, par envie de fermer la boucle entre la respiration et la matière.
          </p>
          <p style={{ color: Brand.muted }}>
            Au Loft, je travaille seule. Petit comité, écoute longue, transmissions adaptées. Je ne crois pas aux
            méthodes universelles ; je crois aux corps, aux personnes, aux moments. Ce que je propose se règle au
            cas par cas — et c'est précisément ce qui me passionne.
          </p>
        </div>
      </section>

      {/* Timeline — formations */}
      <section style={{ padding: '0 56px 120px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 48px', fontWeight: 400, paddingBottom: 24, borderBottom: `1px solid ${Brand.ink}` }}>(  Parcours  )</h3>
        <div>
          {[
            ['2017', 'Première certification 200h vinyasa', 'Goa, Inde'],
            ['2019', 'Yin yoga · Sarah Powers', 'Costa Rica'],
            ['2020', 'Pilates mat & matériel', 'Lausanne'],
            ['2022', 'Breathwork holotropique', 'Berlin'],
            ['2023', 'Massage holistique & énergétique', 'Genève'],
            ['2024', 'Ouverture du Loft', 'Genève'],
          ].map(([y, t, l], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 60px', gap: 32, alignItems: 'baseline', padding: '28px 0', borderBottom: `1px solid ${Brand.rule}` }}>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 24 }}>{y}</span>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, fontWeight: 400 }}>{t}</span>
              <span style={{ fontSize: 13, color: Brand.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</span>
              <Sym kind="dot" size={20} />
            </div>
          ))}
        </div>
      </section>

      {/* Photo bande horizontale */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          <Photo src="media/yoga-childpose.jpg" aspect="3/4" />
          <PhotoSlot label="Le Loft · matin" kind="photo" aspect="3/4" />
          <PhotoSlot label="Atelier · vidéo" kind="video" aspect="3/4" />
          <Photo src="media/yoga-bow.jpg" aspect="3/4" />
        </div>
      </section>

      {/* Citation finale */}
      <section style={{ padding: '60px 56px 120px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GradientBlob variant="doux" style={{ opacity: 0.18, transform: 'translateY(20%)' }} />
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 56, lineHeight: 1.25, fontWeight: 300, maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
          « Une couleur vivante, qui se transforme et évolue —<br />
          une vibration qui éveille les sens, une énergie en expansion. »
        </p>
        <p style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted, marginTop: 32, position: 'relative' }}>—  D.L.</p>
      </section>

      <Footer />
    </DesktopFrame>
  );
}

function AboutMobile() {
  return (
    <MobileFrame height={1900}>
      <MobileNav />
      <section style={{ padding: '110px 24px 32px' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  À propos</span>
        <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 64, lineHeight: 0.9, margin: '20px 0 24px', fontWeight: 400, letterSpacing: '-0.02em' }}>
          Daphné<br /><em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300 }}>Lachavanne.</em>
        </h1>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, fontWeight: 300, margin: 0 }}>
          Praticienne en yoga, breathwork, pilates &amp; soins. Genève, depuis 2017.
        </p>
      </section>
      <section style={{ padding: '20px 24px 40px' }}>
        <PhotoSlot label="Portrait · vidéo" kind="video" aspect="3/4" />
      </section>
      <section style={{ padding: '0 24px 40px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 20px', fontWeight: 400 }}>(  Mon histoire  )</h3>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, fontWeight: 300, margin: '0 0 16px' }}>
          J'ai rencontré le yoga par hasard, à dix-neuf ans, dans un sous-sol parisien.
          Je suis ressortie avec l'impression d'avoir trouvé une langue.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: Brand.muted }}>
          Depuis, je n'ai pas arrêté d'apprendre. Vinyasa, hatha, yin, breathwork, pilates,
          puis le toucher — par besoin de fermer la boucle entre respiration et matière.
        </p>
      </section>
      <section style={{ padding: '0 24px 40px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 16px', fontWeight: 400, paddingBottom: 12, borderBottom: `1px solid ${Brand.ink}` }}>(  Parcours  )</h3>
        {[
          ['2017', 'Vinyasa · Goa'],
          ['2019', 'Yin yoga · Costa Rica'],
          ['2020', 'Pilates · Lausanne'],
          ['2022', 'Breathwork · Berlin'],
          ['2023', 'Massage holistique'],
          ['2024', 'Ouverture du Loft'],
        ].map(([y, t], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: `1px solid ${Brand.rule}` }}>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, color: Brand.muted }}>{y}</span>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 15 }}>{t}</span>
          </div>
        ))}
      </section>
      <section style={{ padding: '20px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <GradientBlob variant="doux" style={{ opacity: 0.2 }} />
        <p style={{ position: 'relative', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 24, lineHeight: 1.35, fontWeight: 300, textAlign: 'center', margin: 0 }}>
          « Une couleur vivante, une énergie en expansion. »
        </p>
      </section>
    </MobileFrame>
  );
}

function ContactDesktop() {
  return (
    <DesktopFrame height={1700}>
      <DesktopNav active="contact" />
      <section style={{ padding: '160px 56px 80px' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Contact</span>
        <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 200, lineHeight: 0.9, margin: '32px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
          Écrire,<br />
          <em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300 }}>réserver.</em>
        </h1>
      </section>

      <section style={{ padding: '0 56px 100px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80 }}>
        {/* Form */}
        <div>
          <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 32px', fontWeight: 400 }}>(  Un message  )</h2>
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <FormField label="Prénom" placeholder="Daphné" />
              <FormField label="Nom" placeholder="Lachavanne" />
            </div>
            <FormField label="Email" placeholder="vous@email.com" />
            <FormField label="Pratique souhaitée" placeholder="Yoga · Breathwork · Pilates · Soin" />
            <FormField label="Votre message" placeholder="Dites-moi où vous en êtes, ce que vous cherchez…" multiline />
            <button style={{ alignSelf: 'flex-start', padding: '16px 32px', background: Brand.ink, color: '#fff', border: 0, borderRadius: 999, fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Envoyer →
            </button>
          </div>
        </div>

        {/* Booking + infos */}
        <div>
          <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 32px', fontWeight: 400 }}>(  Réservation  )</h2>
          <div style={{ position: 'relative', padding: '36px 32px', borderRadius: 4, color: '#fff', overflow: 'hidden', minHeight: 280 }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${Brand.orange} 0%, #c9285f 50%, ${Brand.blue} 100%)` }} />
            <GradientBlob variant="mix" style={{ opacity: 0.5, mixBlendMode: 'overlay' }} />
            <div style={{ position: 'relative' }}>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.85 }}>Disponibilités en direct</span>
              <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 36, lineHeight: 1, margin: '12px 0 16px', fontWeight: 400 }}>Calendrier</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, opacity: 0.9, margin: 0 }}>
                Choisissez votre pratique, un créneau, et confirmez en deux minutes.
                Annulation gratuite jusqu'à 24h avant la séance.
              </p>
              <a style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 26px', background: '#fff', color: Brand.ink, borderRadius: 999, fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Voir le calendrier <Sym kind="arrow" size={16} />
              </a>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 24px', fontWeight: 400 }}>(  Le Loft  )</h2>
            <p style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, lineHeight: 1.4, margin: '0 0 16px', fontWeight: 400 }}>
              Rue du Stand 12<br />1204 Genève
            </p>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: Brand.muted, margin: 0 }}>
              hello@daphnelachavanne.com<br />
              +41 22 000 00 00<br /><br />
              Du lundi au samedi · 7h–20h<br />
              Sur rendez-vous uniquement
            </p>
          </div>
        </div>
      </section>

      {/* Map placeholder — abstract gradient */}
      <section style={{ padding: '0 56px 80px' }}>
        <div style={{ position: 'relative', height: 320, borderRadius: 4, overflow: 'hidden', background: '#e8e3da' }}>
          {/* Abstract street pattern */}
          <svg width="100%" height="100%" viewBox="0 0 1200 320" style={{ position: 'absolute', inset: 0 }}>
            <g stroke="rgba(13,10,31,0.15)" fill="none" strokeWidth="1">
              {[...Array(15)].map((_, i) => <line key={'h'+i} x1={0} x2={1200} y1={i*22} y2={i*22} />)}
              {[...Array(25)].map((_, i) => <line key={'v'+i} x1={i*52} x2={i*52} y1={0} y2={320} />)}
            </g>
            <path d="M 0 180 Q 300 160 600 200 T 1200 180" stroke="rgba(255,113,0,0.4)" strokeWidth="2" fill="none" />
            <circle cx="620" cy="170" r="14" fill={Brand.orange} />
            <circle cx="620" cy="170" r="28" fill="rgba(255,113,0,0.2)" />
          </svg>
          <div style={{ position: 'absolute', bottom: 24, left: 24, background: '#fff', padding: '14px 20px', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.muted, display: 'block', marginBottom: 4 }}>Le Loft</span>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 16 }}>Rue du Stand 12, Genève</span>
          </div>
        </div>
      </section>

      <Footer />
    </DesktopFrame>
  );
}

function FormField({ label, placeholder, multiline = false }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.muted, marginBottom: 10 }}>{label}</span>
      <Tag placeholder={placeholder} rows={multiline ? 4 : undefined} style={{
        width: '100%', padding: multiline ? '14px 0' : '12px 0',
        border: 0, borderBottom: `1px solid ${Brand.ink}`, background: 'transparent',
        fontFamily: '"Tenor Sans", serif', fontSize: 16, color: Brand.ink, outline: 'none',
        resize: multiline ? 'vertical' : 'none',
      }} />
    </label>
  );
}

function ContactMobile() {
  return (
    <MobileFrame height={1800}>
      <MobileNav />
      <section style={{ padding: '110px 24px 32px' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Contact</span>
        <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 76, lineHeight: 0.9, margin: '20px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
          Écrire,<br /><em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 300 }}>réserver.</em>
        </h1>
      </section>
      <section style={{ padding: '20px 24px 32px' }}>
        <div style={{ position: 'relative', padding: '24px 22px', borderRadius: 4, color: '#fff', overflow: 'hidden', minHeight: 200 }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(140deg, ${Brand.orange} 0%, #c9285f 50%, ${Brand.blue} 100%)` }} />
          <div style={{ position: 'relative' }}>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.85 }}>Disponibilités en direct</span>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 28, lineHeight: 1, margin: '8px 0 12px', fontWeight: 400 }}>Calendrier</h3>
            <p style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.9, margin: 0 }}>Choisissez un créneau, confirmez en deux minutes.</p>
            <a style={{ marginTop: 18, display: 'inline-flex', padding: '11px 20px', background: '#fff', color: Brand.ink, borderRadius: 999, fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Voir le calendrier →
            </a>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 24px 40px' }}>
        <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 20px', fontWeight: 400 }}>(  Un message  )</h2>
        <div style={{ display: 'grid', gap: 18 }}>
          <FormField label="Prénom" placeholder="Daphné" />
          <FormField label="Email" placeholder="vous@email.com" />
          <FormField label="Pratique" placeholder="Yoga · Soin · Breathwork…" />
          <FormField label="Message" placeholder="Dites-moi où vous en êtes…" multiline />
          <button style={{ alignSelf: 'flex-start', padding: '14px 26px', background: Brand.ink, color: '#fff', border: 0, borderRadius: 999, fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Envoyer →
          </button>
        </div>
      </section>
      <section style={{ padding: '0 24px 60px' }}>
        <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 16px', fontWeight: 400 }}>(  Le Loft  )</h2>
        <p style={{ fontFamily: '"Tenor Sans", serif', fontSize: 18, lineHeight: 1.4, margin: '0 0 12px', fontWeight: 400 }}>
          Rue du Stand 12<br />1204 Genève
        </p>
        <p style={{ fontSize: 12.5, lineHeight: 1.7, color: Brand.muted, margin: 0 }}>
          hello@daphnelachavanne.com<br />Du lundi au samedi · 7h–20h
        </p>
      </section>
    </MobileFrame>
  );
}

Object.assign(window, { AboutDesktop, AboutMobile, ContactDesktop, ContactMobile });
