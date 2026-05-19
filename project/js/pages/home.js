// Homepage — desktop + mobile.

function HomeDesktop() {
  const practices = [
    { name: 'Soins',      sym: 'sun',    src: 'media/photo 1.jpg', filter: 'contrast(1.05) brightness(0.88)', desc: 'Drainage lymphatique, massage holistique, soin énergétique.' },
    { name: 'Breathwork', sym: 'breath', src: 'media/photo 3.jpg', filter: 'contrast(1.1) brightness(0.82)',  desc: 'Respiration consciente. Libérer, recentrer, régénérer.' },
    { name: 'Yoga',       sym: 'spiral', src: 'media/10.jpg',       filter: 'grayscale(1) contrast(0.95)',     desc: 'Cours particuliers — postures, souffle, méditation.' },
    { name: 'Pilates',    sym: 'wave',   src: 'media/12.jpg',       filter: 'grayscale(1) contrast(0.95)',     desc: 'Corps profond, alignement durable, fluidité.' },
  ];
  const testimonials = [
    ["Une expérience transformatrice. Daphné a une façon unique d'écouter le corps — son drainage est une révélation.", 'L.M. · drainage lymphatique'],
    ["Son approche touche autant le corps que l'énergie. On repart transformé, allégé, différent.", 'S.T. · soin signature'],
    ["Un regard très fin, une présence rare. Je repars chaque fois plus légère, plus juste.", 'C.R. · soin signature'],
  ];

  return DesktopFrame({ height: 2400, children: `
    ${DesktopNav({ active: 'home', dark: true })}

    <section style="position:relative;height:864px;background:#0d0a1f;overflow:hidden">
      ${Photo({ src: 'media/photo 2.jpg', aspect: '16/9', filter: 'contrast(1.1) brightness(0.72)', style: { position: 'absolute', inset: 0, height: '100%' } })}
      ${GradientBlob({ style: { mixBlendMode: 'screen', opacity: 0.4 } })}
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,10,31,0.35) 0%,transparent 35%,transparent 55%,rgba(13,10,31,0.65) 100%)"></div>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff;text-align:center">
        <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.4em;text-transform:uppercase;opacity:0.75;margin-bottom:24px">◦  soins · breathwork · yoga · pilates  ◦</span>
        <h1 style="font-family:'Tenor Sans',serif;font-size:132px;line-height:0.95;letter-spacing:-0.01em;font-weight:400;margin:0;max-width:1100px">
          Libérer,<br><em style="font-style:italic;font-family:'Cormorant Garamond',serif;font-weight:300">circuler.</em>
        </h1>
        <p style="font-size:16px;line-height:1.6;opacity:0.85;margin-top:36px;max-width:480px;font-style:italic">
          Je vous accueille dans mon cabinet du 7e arrondissement pour des soins sur-mesure —
          du mouvement à l'énergie.
        </p>
      </div>
      <div style="position:absolute;bottom:28px;left:56px;right:56px;display:flex;justify-content:space-between;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-family:'Tenor Sans',serif">
        <span>Paris · 7e arrondissement</span>
        <span style="display:flex;gap:18px;align-items:center"><span>Faites défiler</span><span style="width:24px;height:1px;background:rgba(255,255,255,0.5);display:inline-block"></span></span>
        <span>Saison · printemps 26</span>
      </div>
    </section>

    <section style="padding:120px 56px;display:grid;grid-template-columns:1fr 1.2fr;gap:80px">
      <div>
        <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Bienvenue</span>
        <h2 style="font-family:'Cormorant Garamond',serif;font-size:56px;line-height:1.05;font-weight:300;margin:24px 0 0;font-style:italic">
          « Entre le corps<br>et l'âme, il y a<br>le souffle. »
        </h2>
      </div>
      <div style="padding-top:60px">
        <p style="font-size:17px;line-height:1.85;color:${Brand.ink};max-width:540px">
          Certifiée méthode Renata França depuis 2013, j'ai développé <em>L'Art de la Circulation</em> —
          une approche globale qui unit le mouvement, le souffle et le travail énergétique.
        </p>
        <p style="font-size:17px;line-height:1.85;color:${Brand.muted};max-width:540px;margin-top:20px">
          Pour libérer les trois corps : physique, mental, émotionnel. Chaque séance
          est conçue pour vous — selon votre moment, votre demande, votre corps.
        </p>
        <a style="display:inline-flex;align-items:center;gap:12px;margin-top:44px;font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.ink};text-decoration:none;border-bottom:1px solid ${Brand.ink};padding-bottom:6px">Mon histoire ${Sym({ kind: 'arrow', size: 20 })}</a>
      </div>
    </section>

    <section style="padding:0 56px 120px">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px">
        <h3 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;font-weight:400">(  Pratiques  )</h3>
        <span style="font-size:13px;color:${Brand.muted};max-width:420px;line-height:1.6">Quatre disciplines, une même attention au corps. Choisissez celle qui appelle votre corps aujourd'hui.</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px">
        ${practices.map(p => `
          <a style="text-decoration:none;color:${Brand.ink};position:relative;cursor:pointer">
            ${Photo({ src: p.src, aspect: '3/4', filter: p.filter })}
            <div style="padding-top:18px;display:flex;justify-content:space-between;align-items:flex-start">
              <div>
                <h4 style="font-family:'Tenor Sans',serif;font-size:22px;margin:0;font-weight:400">${p.name}</h4>
                <p style="font-size:13px;line-height:1.6;color:${Brand.muted};margin:8px 0 0;max-width:240px">${p.desc}</p>
              </div>
              ${Sym({ kind: p.sym, size: 28 })}
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section style="background:${Brand.ink};color:#fff;padding:120px 56px;position:relative">
      <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:80px;align-items:center">
        <div>
          <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.6">—  Le lieu</span>
          <h3 style="font-family:'Tenor Sans',serif;font-size:88px;line-height:0.95;margin:24px 0;font-weight:400">Mon<br>cabinet.</h3>
          <p style="font-size:17px;line-height:1.85;opacity:0.85;max-width:460px">
            3 Rue Valadon, Paris 7e. Un espace confidentiel, sur rendez-vous,
            pensé pour la qualité de présence et la profondeur du soin.
          </p>
          <a style="display:inline-flex;align-items:center;gap:12px;margin-top:32px;font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#fff;text-decoration:none;padding:14px 24px;border:1px solid rgba(255,255,255,0.4);border-radius:999px">Prendre rendez-vous</a>
        </div>
        ${PhotoSlot({ label: 'Le cabinet · Paris 7e', kind: 'video', aspect: '16/10' })}
      </div>
    </section>

    <section style="padding:120px 56px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:48px">
        <h3 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;font-weight:400">(  Mots reçus  )</h3>
        <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;color:${Brand.muted}">5,0 / 5 · Planity</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:48px">
        ${testimonials.map(([q, a]) => `
          <figure style="margin:0">
            ${Sym({ kind: 'dot', size: 32 })}
            <blockquote style="font-family:'Cormorant Garamond',serif;font-size:26px;font-style:italic;line-height:1.4;font-weight:300;margin:20px 0 24px">« ${q} »</blockquote>
            <figcaption style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${Brand.muted};font-family:'Tenor Sans',serif">${a}</figcaption>
          </figure>
        `).join('')}
      </div>
    </section>

    <section style="padding:0 56px 120px">
      <div style="position:relative;border-radius:4px;overflow:hidden;padding:100px 80px;color:#fff;min-height:360px">
        <div style="position:absolute;inset:0;background:linear-gradient(120deg,${Brand.orange} 0%,#c9285f 50%,${Brand.blue} 100%)"></div>
        ${GradientBlob({ variant: 'mix', animated: true, style: { opacity: 0.6, mixBlendMode: 'overlay' } })}
        <div style="position:relative;max-width:720px">
          <h3 style="font-family:'Tenor Sans',serif;font-size:64px;line-height:1;margin:0;font-weight:400">Réservez<br>votre première séance.</h3>
          <p style="font-size:16px;line-height:1.7;margin-top:24px;opacity:0.9;max-width:480px">Un échange offert avant chaque suivi. Pour comprendre votre demande, ajuster, et trouver ensemble la bonne pratique.</p>
          <a style="display:inline-flex;align-items:center;gap:12px;margin-top:36px;font-family:'Tenor Sans',serif;font-size:13px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.ink};text-decoration:none;padding:16px 28px;background:#fff;border-radius:999px">Réserver sur Planity ${Sym({ kind: 'arrow', size: 16 })}</a>
        </div>
      </div>
    </section>

    ${Footer()}
  ` });
}

function HomeMobile() {
  return MobileFrame({ height: 1900, children: `
    ${MobileNav({ dark: true })}
    <section style="position:relative;height:640px;background:#0d0a1f;overflow:hidden">
      ${Photo({ src: 'media/photo 2.jpg', aspect: '3/5', filter: 'contrast(1.1) brightness(0.68)', style: { position: 'absolute', inset: 0, height: '100%' } })}
      ${GradientBlob({ style: { mixBlendMode: 'screen', opacity: 0.45 } })}
      <div style="position:absolute;inset:0;padding:140px 24px 32px;display:flex;flex-direction:column;justify-content:flex-end;color:#fff">
        <span style="font-family:'Tenor Sans',serif;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.8;margin-bottom:16px">soins · breathwork · yoga · pilates</span>
        <h1 style="font-family:'Tenor Sans',serif;font-size:56px;line-height:0.95;margin:0;font-weight:400">Libérer,<br><em style="font-style:italic;font-family:'Cormorant Garamond',serif;font-weight:300">circuler.</em></h1>
        <p style="font-size:14px;line-height:1.6;margin-top:20px;opacity:0.88;font-style:italic">Je vous accueille dans mon cabinet du 7e — soins sur-mesure, du mouvement à l'énergie.</p>
      </div>
    </section>

    <section style="padding:60px 24px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Bienvenue</span>
      <h2 style="font-family:'Cormorant Garamond',serif;font-size:32px;line-height:1.1;font-weight:300;margin:20px 0 24px;font-style:italic">« Entre le corps et l'âme, il y a le souffle. »</h2>
      <p style="font-size:15px;line-height:1.75;color:${Brand.muted}">Certifiée méthode Renata França depuis 2013, j'ai développé <em>L'Art de la Circulation</em> — une approche qui unit mouvement, souffle et travail énergétique.</p>
    </section>

    <section style="padding:0 24px 60px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;font-weight:400">(  Pratiques  )</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${[
          { name: 'Soins',      sym: 'sun',    src: 'media/photo 1.jpg', filter: 'contrast(1.05) brightness(0.88)' },
          { name: 'Breathwork', sym: 'breath', src: 'media/photo 3.jpg', filter: 'contrast(1.1) brightness(0.82)' },
          { name: 'Yoga',       sym: 'spiral', src: 'media/10.jpg',       filter: 'grayscale(1) contrast(0.95)' },
          { name: 'Pilates',    sym: 'wave',   src: 'media/12.jpg',       filter: 'grayscale(1) contrast(0.95)' },
        ].map(p => `
          <a style="display:grid;grid-template-columns:110px 1fr auto;gap:16px;align-items:center;text-decoration:none;color:${Brand.ink};padding:12px 0;border-bottom:1px solid ${Brand.rule}">
            <div style="width:110px">${Photo({ src: p.src, aspect: '1/1', filter: p.filter })}</div>
            <div>
              <h4 style="font-family:'Tenor Sans',serif;font-size:22px;margin:0;font-weight:400">${p.name}</h4>
              <p style="font-size:12px;color:${Brand.muted};margin:4px 0 0">Découvrir →</p>
            </div>
            ${Sym({ kind: p.sym, size: 24 })}
          </a>
        `).join('')}
      </div>
    </section>

    <section style="background:${Brand.ink};color:#fff;padding:60px 24px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.6">—  Le lieu</span>
      <h3 style="font-family:'Tenor Sans',serif;font-size:56px;line-height:0.95;margin:16px 0 20px;font-weight:400">Mon cabinet.</h3>
      <p style="font-size:14px;line-height:1.7;opacity:0.85;margin-bottom:28px">3 Rue Valadon, Paris 7e. Un espace confidentiel, sur rendez-vous.</p>
      ${PhotoSlot({ label: 'Le cabinet · vidéo', kind: 'video', aspect: '4/3' })}
    </section>

    <section style="padding:60px 24px">
      <div style="position:relative;border-radius:4px;overflow:hidden;padding:48px 28px;color:#fff;min-height:280px">
        <div style="position:absolute;inset:0;background:linear-gradient(140deg,${Brand.orange} 0%,#c9285f 50%,${Brand.blue} 100%)"></div>
        ${GradientBlob({ variant: 'mix', style: { opacity: 0.5, mixBlendMode: 'overlay' } })}
        <div style="position:relative">
          <h3 style="font-family:'Tenor Sans',serif;font-size:32px;line-height:1;margin:0;font-weight:400">Réservez votre première séance.</h3>
          <p style="font-size:13px;line-height:1.7;margin-top:16px;opacity:0.9">Un échange offert avant chaque suivi.</p>
          <a style="display:inline-flex;align-items:center;gap:10px;margin-top:24px;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.ink};text-decoration:none;padding:12px 22px;background:#fff;border-radius:999px">Réserver →</a>
        </div>
      </div>
    </section>
  ` });
}

Object.assign(window, { HomeDesktop, HomeMobile });
