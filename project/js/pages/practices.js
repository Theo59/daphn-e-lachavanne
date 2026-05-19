// Yoga · Breathwork · Pilates — desktop + mobile.

function PracticePageDesktop({ idx, name, italic, quote, intro, approach, tarif, photos } = {}) {
  return DesktopFrame({ height: 2200, children: `
    ${DesktopNav({ active: name.toLowerCase() })}

    <section style="position:relative;padding:160px 56px 80px">
      <span style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Pratique ${idx} / 04</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:200px;line-height:0.9;margin:32px 0 0;font-weight:400;letter-spacing:-0.02em">
        ${name}<em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">.</em>
      </h1>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:60px">
        <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:32px;line-height:1.35;font-weight:300;margin:0">« ${quote} »</p>
        <p style="font-size:16px;line-height:1.85;color:${Brand.muted};padding-top:12px">${intro}</p>
      </div>
    </section>

    <section style="padding:40px 56px 100px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">
        ${photos.map(p => p.src
          ? Photo({ src: p.src, aspect: p.aspect || '3/4', filter: p.filter || 'grayscale(1) contrast(0.95)' })
          : PhotoSlot({ label: p.label, kind: p.kind, aspect: p.aspect || '3/4' })
        ).join('')}
      </div>
    </section>

    <section style="padding:0 56px 100px;display:grid;grid-template-columns:1fr 2fr;gap:80px">
      <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;font-weight:400">(  Approche  )</h2>
      <div>
        <h3 style="font-family:'Cormorant Garamond',serif;font-size:48px;font-style:italic;font-weight:300;line-height:1.1;margin:0 0 40px">${italic}</h3>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;padding-top:20px;border-top:1px solid ${Brand.rule}">
          ${approach.map(pr => `
            <div style="padding-top:24px">
              ${Sym({ kind: pr.sym, size: 28 })}
              <h4 style="font-family:'Tenor Sans',serif;font-size:18px;font-weight:400;margin:16px 0 8px">${pr.title}</h4>
              <p style="font-size:13.5px;line-height:1.7;color:${Brand.muted};margin:0">${pr.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section style="background:${Brand.ink};color:#fff;padding:100px 56px">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:80px;align-items:start">
        <div>
          <span style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.6">(  Tarif &amp; Réservation  )</span>
          <h3 style="font-family:'Tenor Sans',serif;font-size:56px;line-height:1;margin:24px 0 20px;font-weight:400">Sur<br>rendez-vous.</h3>
          <p style="font-size:14px;line-height:1.8;opacity:0.7;max-width:280px">Séances individuelles uniquement, au cabinet. Réservation directe via Planity.</p>
        </div>
        <div>
          ${tarif.map((t, i) => `
            <div style="display:grid;grid-template-columns:1fr 1fr 100px;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid rgba(255,255,255,0.15)">
              <span style="font-family:'Tenor Sans',serif;font-size:22px">${t.title}</span>
              <span style="font-size:13px;opacity:0.7">${t.detail}</span>
              <div style="text-align:right">
                <div style="font-family:'Tenor Sans',serif;font-size:20px">${t.price}</div>
                <a style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;color:#fff;border-bottom:1px solid rgba(255,255,255,0.4);padding-bottom:2px">Réserver →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${Footer()}
  ` });
}

function PracticePageMobile({ idx, name, quote, intro, approach, tarif, photos } = {}) {
  return MobileFrame({ height: 1900, children: `
    ${MobileNav()}
    <section style="padding:110px 24px 32px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Pratique ${idx} / 04</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:80px;line-height:0.9;margin:20px 0 28px;font-weight:400;letter-spacing:-0.02em">${name}.</h1>
      <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:22px;line-height:1.4;font-weight:300;margin:0 0 20px">« ${quote} »</p>
      <p style="font-size:14px;line-height:1.75;color:${Brand.muted};margin:0">${intro}</p>
    </section>
    <section style="padding:20px 24px 40px">
      ${photos[0] && (photos[0].src
        ? Photo({ src: photos[0].src, aspect: '4/5', filter: photos[0].filter || 'grayscale(1) contrast(0.95)' })
        : PhotoSlot({ label: photos[0].label, kind: photos[0].kind, aspect: '4/5' }))}
    </section>
    <section style="padding:0 24px 40px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;font-weight:400">(  Approche  )</h3>
      <div style="display:flex;flex-direction:column;gap:24px">
        ${approach.map(pr => `
          <div style="display:grid;grid-template-columns:36px 1fr;gap:16px;padding-top:16px;border-top:1px solid ${Brand.rule}">
            ${Sym({ kind: pr.sym, size: 28 })}
            <div>
              <h4 style="font-family:'Tenor Sans',serif;font-size:16px;font-weight:400;margin:0 0 6px">${pr.title}</h4>
              <p style="font-size:13px;line-height:1.65;color:${Brand.muted};margin:0">${pr.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <section style="background:${Brand.ink};color:#fff;padding:40px 24px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.6">(  Tarif  )</span>
      <h3 style="font-family:'Tenor Sans',serif;font-size:40px;line-height:1;margin:12px 0 20px;font-weight:400">Sur rendez-vous.</h3>
      ${tarif.map(t => `
        <div style="display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.15);align-items:baseline">
          <div>
            <div style="font-family:'Tenor Sans',serif;font-size:17px">${t.title}</div>
            <div style="font-size:11px;opacity:0.6;margin-top:2px">${t.detail}</div>
          </div>
          <span style="font-family:'Tenor Sans',serif;font-size:18px">${t.price}</span>
        </div>
      `).join('')}
    </section>
  ` });
}

// ---------- Yoga ----------
const YOGA_DATA = {
  idx: '02', name: 'Yoga',
  italic: 'Une pratique du souffle, du sol vers le ciel.',
  quote: "La posture juste commence par le souffle juste.",
  intro: "Cours particuliers uniquement. Vinyasa, hatha, yin — adaptés à votre corps, votre niveau, votre moment. Une heure d'attention complète, sans comparaison.",
  approach: [
    { sym: 'breath', title: 'Pranayama', text: "Le souffle yogi en trois temps : diaphragmatique, thoracique, claviculaire. Tout part de là." },
    { sym: 'spiral', title: 'Posture', text: "Asanas tenues, ajustées, accompagnées. Pas de performance — juste de la justesse." },
    { sym: 'dot', title: 'Méditation', text: "Quelques minutes assises, pour laisser le corps se poser et la pratique s'intégrer." },
  ],
  tarif: [
    { title: 'Cours particulier', detail: '1h · au cabinet', price: '90 €' },
    { title: 'Forfait 5 séances', detail: 'valable 3 mois', price: '400 €' },
  ],
  photos: [
    { src: 'media/9.jpg' },
    { src: 'media/10.jpg' },
    { src: 'media/11.jpg' },
  ],
};

// ---------- Breathwork ----------
const BREATH_DATA = {
  idx: '03', name: 'Breathwork',
  italic: "Le souffle, comme un instrument que l'on apprend à jouer.",
  quote: "Entre l'inspire et l'expire, une pause naturelle — comme le silence en musique.",
  intro: "Respiration consciente, holotropique, cohérence cardiaque. En individuel ou en cercle fermé. Selon ce que vous traversez, on choisit ensemble la pratique.",
  approach: [
    { sym: 'breath', title: 'Cohérence', text: "Cinq inspirations par minute. Le rythme cardiaque s'aligne, le système nerveux s'apaise." },
    { sym: 'wave', title: 'Holotropique', text: "Un souffle ample, continu. Pour traverser, libérer, parfois pleurer. Toujours en sécurité." },
    { sym: 'sun', title: 'Pranayama avancé', text: "Techniques de rétention, Tummo, Wim Hof. Pour l'éveil cellulaire et la vitalité profonde." },
  ],
  tarif: [
    { title: 'Séance individuelle', detail: '1h · au cabinet', price: '90 €' },
    { title: 'Cercle de souffle', detail: '4–6 personnes · 2h', price: '60 €/pers.' },
  ],
  photos: [
    { src: 'media/photo 2.jpg', filter: 'contrast(1.1) brightness(0.82)' },
    { src: 'media/photo 3.jpg', filter: 'contrast(1.1) brightness(0.82)' },
    { kind: 'video', label: 'Cercle de souffle' },
  ],
};

// ---------- Pilates ----------
const PILATES_DATA = {
  idx: '04', name: 'Pilates',
  italic: 'Force, alignement, fluidité. Le mouvement comme une écriture.',
  quote: "Le mouvement précis est plus efficace que le mouvement fort.",
  intro: "Cours particuliers au sol et avec petit matériel. Travail postural, respiratoire et musculaire profond. En privé ou en duo — pour ajuster avec une précision millimétrique.",
  approach: [
    { sym: 'triangle', title: 'Alignement', text: "Trouver l'axe, le centre, la verticale. Avant tout autre mouvement." },
    { sym: 'wave', title: 'Fluidité', text: "Enchaînements lents, précis. Le contraire de la performance — et plus exigeant." },
    { sym: 'plus', title: 'Renforcement', text: "Profond, durable, jamais brutal. Pour tenir le corps dans la durée." },
  ],
  tarif: [
    { title: 'Cours particulier', detail: '1h · au cabinet', price: 'Sur devis' },
    { title: 'Duo', detail: '1h · 2 personnes', price: 'Sur devis' },
  ],
  photos: [
    { src: 'media/12.jpg' },
    { src: 'media/11.jpg' },
    { kind: 'video', label: 'Pilates · séance' },
  ],
};

const YogaDesktop    = () => PracticePageDesktop(YOGA_DATA);
const YogaMobile     = () => PracticePageMobile(YOGA_DATA);
const BreathDesktop  = () => PracticePageDesktop(BREATH_DATA);
const BreathMobile   = () => PracticePageMobile(BREATH_DATA);
const PilatesDesktop = () => PracticePageDesktop(PILATES_DATA);
const PilatesMobile  = () => PracticePageMobile(PILATES_DATA);

Object.assign(window, { YogaDesktop, YogaMobile, BreathDesktop, BreathMobile, PilatesDesktop, PilatesMobile });
