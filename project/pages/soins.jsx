// Soins page — desktop + mobile.
// Editorial layout : grand titre, liste des soins, durées/tarifs/packages.

const SOINS = [
  { name: 'Soin signature', subtitle: 'Massage holistique · 90 min', price: '180 CHF', text: 'Une lecture complète du corps. Mobilisations douces, pressions, respiration partagée. Pour relâcher en profondeur.' },
  { name: 'Énergétique', subtitle: 'Reiki & lithothérapie · 60 min', price: '140 CHF', text: 'Travail subtil sur les centres d\'énergie. Idéal en transition, après un événement, ou en accompagnement régulier.' },
  { name: 'Drainage', subtitle: 'Lymphatique manuel · 75 min', price: '160 CHF', text: 'Mouvement lent, circulaire. Pour relancer, alléger, redonner du flux. Un soin printanier.' },
  { name: 'Massage profond', subtitle: 'Tissus & fascia · 75 min', price: '160 CHF', text: 'Pour les corps sportifs, tendus, qui ont besoin de défaire. Travail localisé, attentif, ferme.' },
];

const PACKAGES = [
  { name: 'Trio découverte', detail: '3 soins au choix · valable 6 mois', price: '480 CHF', save: '−30 CHF' },
  { name: 'Saison', detail: '6 soins · valable 1 an', price: '900 CHF', save: '−180 CHF' },
  { name: 'Suivi', detail: '10 soins · valable 1 an', price: '1 400 CHF', save: '−400 CHF' },
];

function SoinsDesktop() {
  return (
    <DesktopFrame height={2200}>
      <DesktopNav active="soins" />
      {/* Header */}
      <section style={{ padding: '160px 56px 100px', position: 'relative' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Pratique 01 / 04</span>
        <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 200, lineHeight: 0.9, margin: '32px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}>
          Soins.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 60 }}>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 32, lineHeight: 1.35, fontWeight: 300, margin: 0, maxWidth: 520 }}>
            « Le toucher est une langue. J'apprends à la parler avec patience —
            pour que le corps se souvienne. »
          </p>
          <div style={{ paddingTop: 12 }}>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: Brand.muted }}>
              Chaque soin commence par un échange. Comprendre où vous en êtes,
              ce que vous cherchez, ce que vous fuyez. Puis nous laissons le silence prendre le relais.
            </p>
          </div>
        </div>
      </section>

      {/* Featured photo */}
      <section style={{ padding: '0 56px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
          <PhotoSlot label="Geste de soin · vidéo" kind="video" aspect="16/10" />
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <PhotoSlot label="Détail · main" kind="photo" aspect="auto" style={{ height: '100%' }} />
            <PhotoSlot label="Huile · texture" kind="photo" aspect="auto" style={{ height: '100%' }} />
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section style={{ padding: '0 56px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, paddingBottom: 24, borderBottom: `1px solid ${Brand.ink}` }}>
          <h2 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0, fontWeight: 400 }}>(  Catalogue  )</h2>
          <span style={{ fontSize: 13, color: Brand.muted }}>Tous les soins · 30 à 90 min</span>
        </div>
        <div>
          {SOINS.map((s, i) => (
            <article key={i} style={{ display: 'grid', gridTemplateColumns: '60px 2fr 3fr 1fr', gap: 32, alignItems: 'flex-start', padding: '36px 0', borderBottom: `1px solid ${Brand.rule}` }}>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 13, color: Brand.muted, paddingTop: 6 }}>0{i + 1}</span>
              <div>
                <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 36, margin: 0, fontWeight: 400, lineHeight: 1.05 }}>{s.name}</h3>
                <p style={{ fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: Brand.muted, margin: '10px 0 0' }}>{s.subtitle}</p>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: Brand.ink, margin: 0, maxWidth: 520 }}>{s.text}</p>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, display: 'block', marginBottom: 12 }}>{s.price}</span>
                <a style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: Brand.ink, textDecoration: 'none', borderBottom: `1px solid ${Brand.ink}`, paddingBottom: 4 }}>Réserver →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages — gradient cards */}
      <section style={{ padding: '0 56px 120px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 48px', fontWeight: 400 }}>(  Forfaits  )</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {PACKAGES.map((p, i) => (
            <div key={i} style={{ position: 'relative', padding: '40px 32px 36px', minHeight: 280, color: '#fff', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: i === 0 ? `linear-gradient(160deg, ${Brand.orange}, #ff3d8a)` : i === 1 ? `linear-gradient(160deg, #ff3d8a, ${Brand.blue})` : `linear-gradient(160deg, #6b2dc9, ${Brand.blue})` }} />
              <GradientBlob variant={i === 0 ? 'uni-orange' : i === 1 ? 'doux' : 'uni-blue'} style={{ opacity: 0.5, mixBlendMode: 'overlay' }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: 220 }}>
                <div>
                  <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>{p.save}</span>
                  <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 36, lineHeight: 1, margin: '12px 0 14px', fontWeight: 400 }}>{p.name}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.9, margin: 0 }}>{p.detail}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 32 }}>
                  <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 28 }}>{p.price}</span>
                  <Sym kind="arrow" size={22} color="#fff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </DesktopFrame>
  );
}

function SoinsMobile() {
  return (
    <MobileFrame height={2000}>
      <MobileNav />
      <section style={{ padding: '110px 24px 32px' }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: Brand.muted }}>—  Pratique 01 / 04</span>
        <h1 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 84, lineHeight: 0.9, margin: '20px 0 32px', fontWeight: 400, letterSpacing: '-0.02em' }}>Soins.</h1>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, fontWeight: 300, margin: 0 }}>
          « Le toucher est une langue. J'apprends à la parler avec patience. »
        </p>
      </section>

      <section style={{ padding: '20px 24px 40px' }}>
        <PhotoSlot label="Geste de soin · vidéo" kind="video" aspect="4/5" />
      </section>

      <section style={{ padding: '0 24px 40px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 8px', fontWeight: 400, paddingBottom: 16, borderBottom: `1px solid ${Brand.ink}` }}>(  Catalogue  )</h3>
        {SOINS.map((s, i) => (
          <article key={i} style={{ padding: '24px 0', borderBottom: `1px solid ${Brand.rule}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, color: Brand.muted }}>0{i+1}</span>
              <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 16 }}>{s.price}</span>
            </div>
            <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 26, margin: '0 0 6px', fontWeight: 400 }}>{s.name}</h3>
            <p style={{ fontFamily: '"Tenor Sans", serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: Brand.muted, margin: '0 0 12px' }}>{s.subtitle}</p>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: Brand.ink, margin: 0 }}>{s.text}</p>
          </article>
        ))}
      </section>

      <section style={{ padding: '20px 24px 40px' }}>
        <h3 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0 0 24px', fontWeight: 400 }}>(  Forfaits  )</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PACKAGES.map((p, i) => (
            <div key={i} style={{ position: 'relative', padding: '24px 24px', color: '#fff', borderRadius: 4, overflow: 'hidden', minHeight: 140 }}>
              <div style={{ position: 'absolute', inset: 0, background: i === 0 ? `linear-gradient(120deg, ${Brand.orange}, #ff3d8a)` : i === 1 ? `linear-gradient(120deg, #ff3d8a, ${Brand.blue})` : `linear-gradient(120deg, #6b2dc9, ${Brand.blue})` }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.85 }}>{p.save}</span>
                <h4 style={{ fontFamily: '"Tenor Sans", serif', fontSize: 26, lineHeight: 1, margin: '8px 0 8px', fontWeight: 400 }}>{p.name}</h4>
                <p style={{ fontSize: 12, opacity: 0.9, margin: 0 }}>{p.detail}</p>
                <span style={{ fontFamily: '"Tenor Sans", serif', fontSize: 22, marginTop: 12, display: 'block' }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MobileFrame>
  );
}

Object.assign(window, { SoinsDesktop, SoinsMobile });
