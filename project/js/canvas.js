// Simplified design canvas — no drag/drop, no zoom, just the visual grid.
// Daphné Lachavanne — vanilla JS.

// ---------- Brand kit artboard components ----------

function Swatch({ color, name, hex } = {}) {
  return `<div style="aspect-ratio:2/1;background:${color};border-radius:4px;position:relative;padding:14px;color:#fff">
    <span style="position:absolute;bottom:12px;left:14px;font-family:'Tenor Sans',serif;font-size:14px">${name}</span>
    <span style="position:absolute;bottom:12px;right:14px;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.1em;opacity:0.7">${hex}</span>
  </div>`;
}

function BrandKitArtboard() {
  const gradientVariants = ['doux', 'intense', 'aerien', 'mix'];
  return `<div style="width:100%;height:100%;background:#f7f4ee;padding:40px;font-family:'Inter',system-ui">
    <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(13,10,31,0.55)">(  Colorimétrie  )</span>
    <h2 style="font-family:'Tenor Sans',serif;font-size:32px;margin:12px 0 32px;font-weight:400">Une couleur vivante.</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      ${Swatch({ color: '#ff7100', name: 'Orange', hex: '#ff7100' })}
      ${Swatch({ color: '#16066e', name: 'Bleu profond', hex: '#16066e' })}
    </div>
    <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:32px 0 16px;color:rgba(13,10,31,0.55)">Univers pictural · dégradés</h3>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${gradientVariants.map(v => `
        <div style="position:relative;aspect-ratio:1;border-radius:4px;overflow:hidden">
          ${GradientBlob({ variant: v, animated: false })}
          <span style="position:absolute;bottom:8px;left:8px;font-family:'Tenor Sans',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#fff;mix-blend-mode:difference">${v}</span>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function SymbolsArtboard() {
  const symbols = ['breath', 'spiral', 'sun', 'wave', 'triangle', 'dot', 'arrow', 'plus'];
  return `<div style="width:100%;height:100%;background:#f7f4ee;padding:40px">
    <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(13,10,31,0.55)">(  Bibliothèque de symboles  )</span>
    <h2 style="font-family:'Tenor Sans',serif;font-size:32px;margin:12px 0 32px;font-weight:400">La signature.</h2>
    <div style="margin-bottom:32px">
      ${Logo({ size: 26 })}
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
      ${symbols.map(k => `
        <div style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:4px">
          ${Sym({ kind: k, size: 36, color: '#0d0a1f' })}
        </div>
      `).join('')}
    </div>
  </div>`;
}

function TypoArtboard() {
  return `<div style="width:100%;height:100%;background:#f7f4ee;padding:40px">
    <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(13,10,31,0.55)">(  Typographie  )</span>
    <h1 style="font-family:'Tenor Sans',serif;font-size:64px;line-height:1;margin:20px 0 8px;font-weight:400;letter-spacing:-0.01em">Tenor Sans</h1>
    <p style="font-family:'Tenor Sans',serif;font-size:13px;letter-spacing:0.2em;color:rgba(13,10,31,0.55);margin:0">Display · titres</p>
    <h2 style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:56px;line-height:1;margin:40px 0 8px;font-weight:300">Cormorant</h2>
    <p style="font-family:'Tenor Sans',serif;font-size:13px;letter-spacing:0.2em;color:rgba(13,10,31,0.55);margin:0">Italique · accents poétiques</p>
    <h3 style="font-family:'Inter',sans-serif;font-size:22px;line-height:1.5;margin:40px 0 8px;font-weight:400">Inter — corps de texte, lecture longue, lisible à toutes tailles.</h3>
    <p style="font-family:'Tenor Sans',serif;font-size:13px;letter-spacing:0.2em;color:rgba(13,10,31,0.55);margin:0">Sans-serif · paragraphes</p>
  </div>`;
}

// ---------- Artboard wrapper ----------

function Artboard({ label, width, height, content } = {}) {
  return `<div style="display:inline-block;vertical-align:top">
    <div style="font-size:12px;color:rgba(60,50,40,0.7);margin-bottom:8px;font-family:-apple-system,sans-serif">${label}</div>
    <div style="width:${width}px;height:${height}px;overflow:hidden;border-radius:6px;box-shadow:0 8px 30px rgba(0,0,0,0.12)">
      ${content}
    </div>
  </div>`;
}

// ---------- Section wrapper ----------

function Section({ id, title, subtitle, artboards } = {}) {
  return `<div id="${id}" style="margin-bottom:100px">
    <div style="margin-bottom:32px">
      <h2 style="font-size:20px;font-weight:500;color:rgba(40,30,20,0.85);margin:0 0 4px;font-family:-apple-system,sans-serif">${title}</h2>
      ${subtitle ? `<p style="font-size:13px;color:rgba(60,50,40,0.6);margin:0;font-family:-apple-system,sans-serif">${subtitle}</p>` : ''}
    </div>
    <div style="display:flex;gap:40px;flex-wrap:wrap;align-items:flex-start">
      ${artboards}
    </div>
  </div>`;
}

// ---------- Main render ----------

function renderCanvas() {
  const pages = [
    {
      id: 'home', title: '01 · Homepage',
      desc: "L'entrée. Hero vidéo, manifeste, pratiques, Loft, social proof, CTA.",
      desktop: HomeDesktop, mobile: HomeMobile, dh: 2400, mh: 1900,
    },
    {
      id: 'soins', title: '02 · Soins',
      desc: 'Catalogue détaillé, durées, tarifs et forfaits dégradés.',
      desktop: SoinsDesktop, mobile: SoinsMobile, dh: 2200, mh: 2000,
    },
    {
      id: 'yoga', title: '03 · Yoga',
      desc: 'Pranayama, posture, méditation. Planning hebdomadaire.',
      desktop: YogaDesktop, mobile: YogaMobile, dh: 2200, mh: 1900,
    },
    {
      id: 'breathwork', title: '04 · Breathwork',
      desc: 'Cohérence, holotropique, tummo. Cercles au Loft.',
      desktop: BreathDesktop, mobile: BreathMobile, dh: 2200, mh: 1900,
    },
    {
      id: 'pilates', title: '05 · Pilates',
      desc: 'Alignement, fluidité, renforcement. Mat & matériel.',
      desktop: PilatesDesktop, mobile: PilatesMobile, dh: 2200, mh: 1900,
    },
    {
      id: 'about', title: '06 · À propos',
      desc: 'Portrait, manifeste intime, parcours.',
      desktop: AboutDesktop, mobile: AboutMobile, dh: 2400, mh: 1900,
    },
    {
      id: 'contact', title: '07 · Contact',
      desc: "Booking, formulaire, plan d'accès au Loft.",
      desktop: ContactDesktop, mobile: ContactMobile, dh: 1700, mh: 1800,
    },
  ];

  // Navigation bar
  const navLinks = [
    { href: '#brand', label: 'Univers' },
    ...pages.map(p => ({ href: '#' + p.id, label: p.title })),
  ];

  const nav = `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(240,238,233,0.92);backdrop-filter:blur(8px);border-bottom:1px solid rgba(60,50,40,0.1);padding:0 40px;height:44px;display:flex;align-items:center;gap:24px;font-family:-apple-system,sans-serif;font-size:12px">
    <span style="font-family:'Tenor Sans',serif;font-size:13px;color:rgba(40,30,20,0.85);flex-shrink:0">Daphné Lachavanne</span>
    <div style="width:1px;height:16px;background:rgba(60,50,40,0.2)"></div>
    ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(60,50,40,0.65);text-decoration:none;white-space:nowrap">${l.label}</a>`).join('')}
  </nav>`;

  // Brand section
  const brandSection = Section({
    id: 'brand',
    title: 'Univers',
    subtitle: 'Couleurs, typographies, signature graphique extraites de la charte',
    artboards: [
      Artboard({ label: 'Colorimétrie & dégradés', width: 720, height: 500, content: BrandKitArtboard() }),
      Artboard({ label: 'Iconographie', width: 500, height: 500, content: SymbolsArtboard() }),
      Artboard({ label: 'Typographie', width: 600, height: 500, content: TypoArtboard() }),
    ].join(''),
  });

  // Page sections
  const pageSections = pages.map(p => Section({
    id: p.id,
    title: p.title,
    subtitle: p.desc,
    artboards: [
      Artboard({ label: 'Desktop · 1440', width: 1440, height: p.dh, content: p.desktop() }),
      Artboard({ label: 'Mobile · 375', width: 375, height: p.mh, content: p.mobile() }),
    ].join(''),
  })).join('');

  const html = `
    ${nav}
    <div style="min-height:100vh;background:#f0eee9;font-family:-apple-system,sans-serif;padding:80px 40px 120px">
      <!-- Header -->
      <div style="margin-bottom:80px;padding-top:20px">
        <h1 style="font-size:28px;font-weight:500;color:rgba(40,30,20,0.85);margin:0 0 4px;font-family:-apple-system,sans-serif">Daphné Lachavanne</h1>
        <p style="font-size:14px;color:rgba(60,50,40,0.6);margin:0;font-family:-apple-system,sans-serif">Maquettes site web · 7 pages · desktop + mobile</p>
      </div>

      ${brandSection}
      ${pageSections}
    </div>
  `;

  document.getElementById('root').innerHTML = html;
}

// Run on load
renderCanvas();
