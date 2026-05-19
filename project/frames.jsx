// Page frames — Desktop (1440) and Mobile (375) browser/phone chrome.
// Daphné Lachavanne — soft, editorial.

function DesktopFrame({ children, url = 'daphnelachavanne.com', height = 900 }) {
  return (
    <div style={{
      width: 1440, height, background: Brand.paper,
      boxShadow: '0 30px 80px rgba(13,10,31,0.18), 0 8px 24px rgba(13,10,31,0.08)',
      borderRadius: 6, overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif',
      color: Brand.ink, position: 'relative',
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 36, background: '#e8e3da', display: 'flex', alignItems: 'center',
        padding: '0 14px', gap: 8, borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8755a' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8c668' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#9bc774' }} />
        <div style={{
          flex: 1, marginLeft: 18, height: 22, background: 'rgba(255,255,255,0.7)',
          borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 12px',
          fontSize: 11, color: 'rgba(13,10,31,0.55)', letterSpacing: '0.04em',
        }}>{url}</div>
      </div>
      <div style={{ height: height - 36, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

function MobileFrame({ children, height = 812 }) {
  return (
    <div style={{
      width: 375, height, background: Brand.paper,
      boxShadow: '0 24px 60px rgba(13,10,31,0.22), 0 6px 18px rgba(13,10,31,0.1)',
      borderRadius: 36, overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif',
      color: Brand.ink, position: 'relative', border: '8px solid #1a1612',
    }}>
      {/* Status bar */}
      <div style={{
        height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px 0', fontSize: 13, fontWeight: 600,
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, color: Brand.ink,
      }}>
        <span style={{ fontFamily: '"Tenor Sans", serif', fontWeight: 400 }}>9:41</span>
        <div style={{
          position: 'absolute', left: '50%', top: 6, transform: 'translateX(-50%)',
          width: 100, height: 22, background: '#1a1612', borderRadius: 12,
        }} />
        <span style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 11 }}>
          <span>●●●●</span><span>􀞂</span>
        </span>
      </div>
      <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

// Desktop nav — discreet, all-caps, generous spacing.
function DesktopNav({ active = 'home', dark = false }) {
  const ink = dark ? '#fff' : Brand.ink;
  const mute = dark ? 'rgba(255,255,255,0.6)' : 'rgba(13,10,31,0.55)';
  const items = [
    ['home', 'Accueil'], ['soins', 'Soins'], ['yoga', 'Yoga'],
    ['breathwork', 'Breathwork'], ['pilates', 'Pilates'],
    ['about', 'À propos'], ['contact', 'Contact'],
  ];
  return (
    <nav style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 56px', color: ink,
    }}>
      <Logo size={18} />
      <div style={{ display: 'flex', gap: 28 }}>
        {items.map(([k, l]) => (
          <a key={k} style={{
            fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.18em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: k === active ? ink : mute,
            borderBottom: k === active ? `1px solid ${ink}` : '1px solid transparent',
            paddingBottom: 2,
          }}>{l}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ fontSize: 11, letterSpacing: '0.2em', color: mute, fontFamily: '"Tenor Sans", serif' }}>FR · EN</span>
        <a style={{
          fontFamily: '"Tenor Sans", serif', fontSize: 12, letterSpacing: '0.18em',
          textTransform: 'uppercase', textDecoration: 'none', color: ink,
          padding: '10px 18px', border: `1px solid ${ink}`, borderRadius: 999,
        }}>Réserver</a>
      </div>
    </nav>
  );
}

// Mobile nav — minimal hamburger + signature.
function MobileNav({ dark = false }) {
  const ink = dark ? '#fff' : Brand.ink;
  return (
    <div style={{
      position: 'absolute', top: 44, left: 0, right: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 22px', color: ink,
    }}>
      <Logo size={13} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ width: 22, height: 1, background: ink }} />
        <span style={{ width: 14, height: 1, background: ink, alignSelf: 'flex-end' }} />
      </div>
    </div>
  );
}

function Footer({ dark = false }) {
  const ink = dark ? '#fff' : Brand.ink;
  const mute = dark ? 'rgba(255,255,255,0.5)' : 'rgba(13,10,31,0.5)';
  return (
    <footer style={{
      padding: '60px 56px 32px', color: ink,
      display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40,
      borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(13,10,31,0.12)'}`,
      fontSize: 13,
    }}>
      <div>
        <Logo size={16} />
        <p style={{ marginTop: 18, lineHeight: 1.7, color: mute, maxWidth: 280 }}>
          Studio de yoga, breathwork, pilates &amp; soins.<br />
          Le Loft — Genève.
        </p>
      </div>
      <div>
        <div style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: mute, marginBottom: 14 }}>Pratiques</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a style={{ color: ink, textDecoration: 'none' }}>Yoga</a>
          <a style={{ color: ink, textDecoration: 'none' }}>Breathwork</a>
          <a style={{ color: ink, textDecoration: 'none' }}>Pilates</a>
          <a style={{ color: ink, textDecoration: 'none' }}>Soins</a>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: mute, marginBottom: 14 }}>Le Loft</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, color: mute, lineHeight: 1.7 }}>
          <span>Rue du Stand 12<br />1204 Genève</span>
          <a style={{ color: ink, textDecoration: 'none' }}>Itinéraire →</a>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: '"Tenor Sans", serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: mute, marginBottom: 14 }}>Suivre</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a style={{ color: ink, textDecoration: 'none' }}>Instagram</a>
          <a style={{ color: ink, textDecoration: 'none' }}>Newsletter</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { DesktopFrame, MobileFrame, DesktopNav, MobileNav, Footer });
