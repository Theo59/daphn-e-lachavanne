// Homepage — desktop + mobile variants.

function HomeDesktop() {
  return (
    <DesktopFrame height={2400}>
      <DesktopNav active="home" dark={true} />

      {/* HERO — full bleed video placeholder + signature gradient overlay */}
      <section style={{ position: 'relative', height: 864, background: '#0d0a1f', overflow: 'hidden' }}>
        <Photo src="media/yoga-childpose.jpg" aspect="16/9" filter="grayscale(1) contrast(0.9) brightness(0.7)"
          style={{ position: 'absolute', inset: 0, height: '100%' }} />
        <GradientBlob style={{ mixBlendMode: 'screen', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,10,31,0.4) 0%, transparent 30%, transparent 60%, rgba(13,10,31,0.6) 100%)' }} />
        {/* Centered breathing word */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#fff', textAlign: 'center' }}>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 24 }}>
            ◦  yoga · breathwork · pilates · soins  ◦
          </span>
          <h1 style={{
            fontFamily: '"Tenor Sans", serif', fontSize: 132, lineHeight: 0.95,
            letterSpacing: '-0.01em', fontWeight: 400, margin: 0, maxWidth: 1100,
          }}>
            Respirer,<br />
            <em style={{ fontStyle: 'italic', fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>habiter</em> le corps.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85, marginTop: 36, maxWidth: 480, fontStyle: 'italic' }}>
            Je vous accueille au Loft, à Genève, pour une pratique du souffle et du mouvement —
            douce, ancrée, sensorielle.
          </p>
        </div>
        {/* Bottom marquee of hours */}
        <div style={{ position: 'absolute', bottom: 28, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.7)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: '"Tenor Sans", serif' }}>
          <span>Genève · Le Loft</span>
          <span style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <span>Faites défiler</span>
            <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.5)' }} />
          </span>
          <span>Saison · printemps 26</span>
        </div>
      </section>

      {/* INTRO — sensorial editorial */}
      <section style={{ padding: '120px 56px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Bienvenue</span>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 56, lineHeight: 1.05, fontWeight: 300, margin: '24px 0 0', fontStyle: 'italic' }}>
            « Entre l'inspire<br />et l'expire,<br />une pause naturelle. »
          </h2>
        </div>
        <div style={{ paddingTop: 60 }}>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: Brand.ink, maxWidth: 540 }}>
            Mon travail prend racine dans la respiration. Le pranayama, le souffle yogi en trois temps,
            le silence comme un instrument de musique. Tout part de là — et tout y revient.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: Brand.muted, maxWidth: 540, marginTop: 20 }}>
            Au Loft, je propose des séances individuelles et collectives. Chaque rencontre est
            singulière, lente, attentive. Une pratique qui se déploie dans le corps comme une
            couleur vivante.
          </p>
          <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 44, fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.ink, textDecoration: 'none', borderBottom: `1px solid ${Brand.ink}`, paddingBottom: 6 }}>
            Mon histoire <Sym kind="arrow" size={20} />
          </a>
        </div>
      </section>

      {/* PRACTICES — four large cards with vertical labels */}
      <section style={{ padding: '0 56px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0, fontWeight: 400 }}>(  Pratiques  )</h3>
          <span style={{ fontSize: 13, color: Brand.muted, maxWidth: 420, lineHeight: 1.6 }}>
            Quatre disciplines, une même attention au souffle. Choisissez celle qui appelle votre corps aujourd'hui.
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { name: 'Yoga', sym: 'spiral', src: 'media/yoga-bow.jpg', desc: 'Vinyasa, hatha, yin. Postures et souffle.' },
            { name: 'Breathwork', sym: 'breath', kind: 'video', desc: 'Respiration consciente. Libérer, recentrer.' },
            { name: 'Pilates', sym: 'wave', src: 'media/yoga-childpose.jpg', desc: 'Force, alignement, fluidité du mouvement.' },
            { name: 'Soins', sym: 'sun', kind: 'video', desc: 'Massages, énergétique, accompagnement.' },
          ].map((p, i) => (
            <a key={i} style={{ textDecoration: 'none', color: Brand.ink, position: 'relative', cursor: 'pointer' }}>
              {p.src ? <Photo src={p.src} aspect="3/4" /> : <PhotoSlot label={p.name} kind={p.kind} aspect="3/4" />}
              <div style={{ paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, margin: 0, fontWeight: 400 }}>{p.name}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: Brand.muted, margin: '8px 0 0', maxWidth: 240 }}>{p.desc}</p>
                </div>
                <Sym kind={p.sym} size={28} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LOFT — full-bleed dark band with video */}
      <section style={{ background: Brand.ink, color: '#fff', padding: '120px 56px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>—  Le lieu</span>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 88, lineHeight: 0.95, margin: '24px 0', fontWeight: 400 }}>Le Loft</h3>
            <p style={{ fontSize: 17, lineHeight: 1.85, opacity: 0.85, maxWidth: 460 }}>
              Un espace baigné de lumière au cœur de Genève. Parquet en chêne, plantes,
              tapis de pratique. C'est ici que je travaille, enseigne, accueille.
            </p>
            <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 32, fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', padding: '14px 24px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 999 }}>
              Visiter le Loft
            </a>
          </div>
          <PhotoSlot label="Le Loft · vidéo d'ambiance" kind="video" aspect="16/10" />
        </div>
      </section>

      {/* QUOTES — testimonials, three columns */}
      <section style={{ padding: '120px 56px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 48px', fontWeight: 400 }}>(  Mots reçus  )</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {[
            ['Une bulle suspendue. Je repars chaque fois plus légère, plus juste.', 'Camille · soin énergétique'],
            ['La respiration que Daphné transmet a changé mon rapport au stress.', 'Antoine · breathwork'],
            ['Un yoga lent, profond, presque méditatif. Le Loft est un refuge.', 'Léa · yin yoga'],
          ].map(([q, a], i) => (
            <figure key={i} style={{ margin: 0 }}>
              <Sym kind="dot" size={32} />
              <blockquote style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 26, fontStyle: 'italic', lineHeight: 1.4, fontWeight: 300, margin: '20px 0 24px' }}>
                « {q} »
              </blockquote>
              <figcaption style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: Brand.muted, fontFamily: '"Tenor Sans", serif' }}>{a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ padding: '0 56px 120px' }}>
        <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', padding: '100px 80px', color: '#fff', minHeight: 360 }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(120deg, ${Brand.orange} 0%, #c9285f 50%, ${Brand.blue} 100%)` }} />
          <GradientBlob variant="mix" animated={true} style={{ opacity: 0.6, mixBlendMode: 'overlay' }} />
          <div style={{ position: 'relative', maxWidth: 720 }}>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 64, lineHeight: 1, margin: 0, fontWeight: 400 }}>
              Réservez<br />votre première séance.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 24, opacity: 0.9, maxWidth: 480 }}>
              Une séance d'échange offerte avant chaque suivi. Pour comprendre votre demande,
              ajuster, et trouver ensemble la bonne pratique.
            </p>
            <a style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 36, fontFamily: '"Tenor Sans", serif', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.ink, textDecoration: 'none', padding: '16px 28px', background: '#fff', borderRadius: 999 }}>
              Prendre rendez-vous <Sym kind="arrow" size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </DesktopFrame>
  );
}

function HomeMobile() {
  return (
    <MobileFrame height={1900}>
      <MobileNav dark={true} />
      {/* Hero */}
      <section style={{ position: 'relative', height: 640, background: '#0d0a1f', overflow: 'hidden' }}>
        <Photo src="media/yoga-childpose.jpg" aspect="3/5" filter="grayscale(1) contrast(0.9) brightness(0.65)" style={{ position: 'absolute', inset: 0, height: '100%' }} />
        <GradientBlob style={{ mixBlendMode: 'screen', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, padding: '140px 24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff' }}>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 16 }}>
            yoga · breathwork · pilates · soins
          </span>
          <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 56, lineHeight: 0.95, margin: 0, fontWeight: 400 }}>
            Respirer,<br /><em style={{ fontStyle: 'italic', fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>habiter</em> le corps.
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 20, opacity: 0.88, fontStyle: 'italic' }}>
            Je vous accueille au Loft, à Genève. Une pratique du souffle, lente et sensorielle.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Bienvenue</span>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 32, lineHeight: 1.1, fontWeight: 300, margin: '20px 0 24px', fontStyle: 'italic' }}>
          « Entre l'inspire et l'expire, une pause naturelle. »
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: Brand.muted }}>
          Mon travail prend racine dans la respiration. Au Loft, je propose des séances
          individuelles et collectives — chaque rencontre, singulière et attentive.
        </p>
      </section>

      {/* Practices stack */}
      <section style={{ padding: '0 24px 60px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 24px', fontWeight: 400 }}>(  Pratiques  )</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { name: 'Yoga', sym: 'spiral', src: 'media/yoga-bow.jpg' },
            { name: 'Breathwork', sym: 'breath', kind: 'video' },
            { name: 'Pilates', sym: 'wave', src: 'media/yoga-childpose.jpg' },
            { name: 'Soins', sym: 'sun', kind: 'video' },
          ].map((p, i) => (
            <a key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr auto', gap: 16, alignItems: 'center', textDecoration: 'none', color: Brand.ink, padding: '12px 0', borderBottom: `1px solid ${Brand.rule}` }}>
              <div style={{ width: 110 }}>
                {p.src ? <Photo src={p.src} aspect="1/1" /> : <PhotoSlot label="" kind={p.kind} aspect="1/1" />}
              </div>
              <div>
                <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, margin: 0, fontWeight: 400 }}>{p.name}</h4>
                <p style={{ fontSize: 12, color: Brand.muted, margin: '4px 0 0' }}>Découvrir →</p>
              </div>
              <Sym kind={p.sym} size={24} />
            </a>
          ))}
        </div>
      </section>

      {/* Loft */}
      <section style={{ background: Brand.ink, color: '#fff', padding: '60px 24px', position: 'relative' }}>
        <div>
          <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>—  Le lieu</span>
          <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 56, lineHeight: 0.95, margin: '16px 0 20px', fontWeight: 400 }}>Le Loft</h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85, marginBottom: 28 }}>
            Un espace baigné de lumière au cœur de Genève. Parquet en chêne, plantes, tapis de pratique.
          </p>
          <PhotoSlot label="Le Loft · vidéo" kind="video" aspect="4/3" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', padding: '48px 28px', color: '#fff', minHeight: 280 }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(140deg, ${Brand.orange} 0%, #c9285f 50%, ${Brand.blue} 100%)` }} />
          <GradientBlob variant="mix" style={{ opacity: 0.5, mixBlendMode: 'overlay' }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 32, lineHeight: 1, margin: 0, fontWeight: 400 }}>
              Réservez votre première séance.
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginTop: 16, opacity: 0.9 }}>
              Une séance d'échange offerte avant chaque suivi.
            </p>
            <a style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.ink, textDecoration: 'none', padding: '12px 22px', background: '#fff', borderRadius: 999 }}>
              Prendre rendez-vous →
            </a>
          </div>
        </div>
      </section>
    </MobileFrame>
  );
}

Object.assign(window, { HomeDesktop, HomeMobile });
