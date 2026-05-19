// Page frames — Desktop (1440) and Mobile (375) browser/phone chrome.
// Daphné Lachavanne — vanilla JS

function DesktopFrame({ children, url = 'daphnelachavanne.com', height = 900 } = {}) {
  const outerStyle = `width:1440px;min-height:${height}px;background:${Brand.paper};box-shadow:0 30px 80px rgba(13,10,31,0.18),0 8px 24px rgba(13,10,31,0.08);border-radius:6px;overflow:hidden;font-family:"Inter",system-ui,sans-serif;color:${Brand.ink};position:relative`;
  return `<div style="${outerStyle}">
    <div style="height:36px;background:#e8e3da;display:flex;align-items:center;padding:0 14px;gap:8px;border-bottom:1px solid rgba(0,0,0,0.06)">
      <span style="width:10px;height:10px;border-radius:50%;background:#e8755a;display:inline-block"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#e8c668;display:inline-block"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#9bc774;display:inline-block"></span>
      <div style="flex:1;margin-left:18px;height:22px;background:rgba(255,255,255,0.7);border-radius:4px;display:flex;align-items:center;padding:0 12px;font-size:11px;color:rgba(13,10,31,0.55);letter-spacing:0.04em">${url}</div>
    </div>
    <div style="position:relative">${children}</div>
  </div>`;
}

function MobileFrame({ children, height = 812 } = {}) {
  const outerStyle = `width:375px;min-height:${height}px;background:${Brand.paper};box-shadow:0 24px 60px rgba(13,10,31,0.22),0 6px 18px rgba(13,10,31,0.1);border-radius:36px;overflow:hidden;font-family:"Inter",system-ui,sans-serif;color:${Brand.ink};position:relative;border:8px solid #1a1612`;
  return `<div style="${outerStyle}">
    <div style="height:40px;display:flex;align-items:center;justify-content:space-between;padding:12px 24px 0;font-size:13px;font-weight:600;position:absolute;top:0;left:0;right:0;z-index:5;color:${Brand.ink}">
      <span style="font-family:'Tenor Sans',serif;font-weight:400">9:41</span>
      <div style="position:absolute;left:50%;top:6px;transform:translateX(-50%);width:100px;height:22px;background:#1a1612;border-radius:12px"></div>
      <span style="display:flex;gap:4px;align-items:center;font-size:11px"><span>●●●●</span><span>&#x1F4F6;</span></span>
    </div>
    <div style="position:relative">${children}</div>
  </div>`;
}

// Desktop nav
function DesktopNav({ active = 'home', dark = false } = {}) {
  const ink = dark ? '#fff' : Brand.ink;
  const mute = dark ? 'rgba(255,255,255,0.6)' : 'rgba(13,10,31,0.55)';
  const items = [
    ['home', 'Accueil'], ['soins', 'Soins'], ['yoga', 'Yoga'],
    ['breathwork', 'Breathwork'], ['pilates', 'Pilates'],
    ['about', 'À propos'], ['contact', 'Réserver'],
  ];
  const navLinks = items.map(([k, l]) => {
    const isActive = k === active;
    return `<a style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;color:${isActive ? ink : mute};border-bottom:1px solid ${isActive ? ink : 'transparent'};padding-bottom:2px">${l}</a>`;
  }).join('');
  return `<nav style="position:absolute;top:0;left:0;right:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:28px 56px;color:${ink}">
    ${Logo({ size: 18, dark })}
    <div style="display:flex;gap:28px">${navLinks}</div>
    <div style="display:flex;gap:14px;align-items:center">
      <a style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;color:${ink};padding:10px 18px;border:1px solid ${ink};border-radius:999px">Réserver</a>
    </div>
  </nav>`;
}

// Mobile nav
function MobileNav({ dark = false } = {}) {
  const ink = dark ? '#fff' : Brand.ink;
  return `<div style="position:absolute;top:44px;left:0;right:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:14px 22px;color:${ink}">
    ${Logo({ size: 13, dark })}
    <div style="display:flex;flex-direction:column;gap:4px">
      <span style="width:22px;height:1px;background:${ink};display:block"></span>
      <span style="width:14px;height:1px;background:${ink};align-self:flex-end;display:block"></span>
    </div>
  </div>`;
}

// Footer
function Footer({ dark = false } = {}) {
  const ink = dark ? '#fff' : Brand.ink;
  const mute = dark ? 'rgba(255,255,255,0.5)' : 'rgba(13,10,31,0.5)';
  const border = dark ? 'rgba(255,255,255,0.15)' : 'rgba(13,10,31,0.12)';
  return `<footer style="padding:60px 56px 32px;color:${ink};display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px;border-top:1px solid ${border};font-size:13px">
    <div>
      ${Logo({ size: 16, dark })}
      <p style="margin-top:18px;line-height:1.7;color:${mute};max-width:280px">Soins, drainage lymphatique,<br>yoga &amp; breathwork. Paris 7e.</p>
    </div>
    <div>
      <div style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${mute};margin-bottom:14px">Pratiques</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <a style="color:${ink};text-decoration:none">Soins</a>
        <a style="color:${ink};text-decoration:none">Breathwork</a>
        <a style="color:${ink};text-decoration:none">Yoga</a>
        <a style="color:${ink};text-decoration:none">Pilates</a>
      </div>
    </div>
    <div>
      <div style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${mute};margin-bottom:14px">Cabinet</div>
      <div style="display:flex;flex-direction:column;gap:8px;color:${mute};line-height:1.7">
        <span>3 Rue Valadon<br>75007 Paris</span>
        <a style="color:${ink};text-decoration:none">Itinéraire →</a>
      </div>
    </div>
    <div>
      <div style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${mute};margin-bottom:14px">Suivre</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <a style="color:${ink};text-decoration:none">Instagram</a>
        <a style="color:${ink};text-decoration:none">Newsletter</a>
      </div>
    </div>
  </footer>`;
}

Object.assign(window, { DesktopFrame, MobileFrame, DesktopNav, MobileNav, Footer });
