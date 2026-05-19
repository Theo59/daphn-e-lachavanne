// Soins page — desktop + mobile.

const SOINS = [
  {
    name: 'Soin Signature',
    subtitle: 'Drainage + breathwork + énergétique · 2h',
    price: '280 €',
    text: "Le soin le plus complet. Drainage lymphatique Renata França, respiration guidée et travail sur les centres énergétiques. Pour libérer les trois corps en une seule séance.",
  },
  {
    name: 'Drainage Lymphatique',
    subtitle: 'Méthode Renata França · 1h',
    price: '150 €',
    text: "La technique originale, certifiée depuis 2013. Mouvements rythmiques et précis qui relancent la circulation lymphatique, allègent, désenflent et régénèrent.",
  },
  {
    name: 'Miracle Face',
    subtitle: 'Drainage facial · 40 min',
    price: '90 €',
    text: "Drainage du visage et du crâne. Détonifie les traits, élimine les tensions, redonner de l'éclat et du volume. Idéal en soin express ou en complément corps.",
  },
  {
    name: 'Combo Détox',
    subtitle: 'Corps + Visage · 1h30',
    price: '200 €',
    text: "Drainage complet corps et visage en une session. Le traitement signature pour une détox profonde — le soin le plus demandé en préparation d'événement.",
  },
];

const PACKAGES = [
  { name: 'Découverte', detail: '3 Drainages Lymphatiques · valable 3 mois', price: '420 €', save: '−30 €' },
  { name: 'Suivi Saison', detail: '5 soins au choix · valable 6 mois', price: '680 €', save: '−70 €' },
  { name: 'Intensif', detail: '3 Soins Signature · valable 2 mois', price: '780 €', save: '−60 €' },
];

function SoinsDesktop() {
  return DesktopFrame({ height: 2200, children: `
    ${DesktopNav({ active: 'soins' })}

    <section style="padding:160px 56px 100px;position:relative">
      <span style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Pratique 01 / 04</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:200px;line-height:0.9;margin:32px 0 0;font-weight:400;letter-spacing:-0.02em">Soins.</h1>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:60px">
        <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:32px;line-height:1.35;font-weight:300;margin:0;max-width:520px">
          « Le toucher est une langue. J'apprends à la parler avec patience — pour que le corps se souvienne. »
        </p>
        <div style="padding-top:12px">
          <p style="font-size:16px;line-height:1.85;color:${Brand.muted}">
            Certifiée méthode Renata França depuis 2013, chaque soin commence par un échange.
            Comprendre où vous en êtes, ce que vous cherchez. Puis nous laissons le silence prendre le relais.
          </p>
          <div style="margin-top:24px;display:flex;align-items:center;gap:16px">
            <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:${Brand.muted}">Méthode Renata França</span>
            <span style="width:32px;height:1px;background:${Brand.muted};display:inline-block"></span>
            <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:${Brand.muted}">depuis 2013</span>
          </div>
        </div>
      </div>
    </section>

    <section style="padding:0 56px 100px">
      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:16px">
        ${Photo({ src: 'media/photo 1.jpg', aspect: '16/10', filter: 'contrast(1.05) brightness(0.9)' })}
        <div style="display:grid;grid-template-rows:1fr 1fr;gap:16px">
          ${Photo({ src: 'media/6.jpg', aspect: 'auto', filter: 'contrast(1.05) brightness(0.9)', style: { height: '100%' } })}
          ${PhotoSlot({ label: 'Huile · texture', kind: 'photo', aspect: 'auto', style: { height: '100%' } })}
        </div>
      </div>
    </section>

    <section style="padding:0 56px 120px">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;padding-bottom:24px;border-bottom:1px solid ${Brand.ink}">
        <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;font-weight:400">(  Catalogue  )</h2>
        <span style="font-size:13px;color:${Brand.muted}">Tous les soins · 40 min à 2h</span>
      </div>
      <div>
        ${SOINS.map((s, i) => `
          <article style="display:grid;grid-template-columns:60px 2fr 3fr 1fr;gap:32px;align-items:flex-start;padding:36px 0;border-bottom:1px solid ${Brand.rule}">
            <span style="font-family:'Tenor Sans',serif;font-size:13px;color:${Brand.muted};padding-top:6px">0${i + 1}</span>
            <div>
              <h3 style="font-family:'Tenor Sans',serif;font-size:36px;margin:0;font-weight:400;line-height:1.05">${s.name}</h3>
              <p style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${Brand.muted};margin:10px 0 0">${s.subtitle}</p>
            </div>
            <p style="font-size:15px;line-height:1.7;color:${Brand.ink};margin:0;max-width:520px">${s.text}</p>
            <div style="text-align:right">
              <span style="font-family:'Tenor Sans',serif;font-size:22px;display:block;margin-bottom:12px">${s.price}</span>
              <a style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.ink};text-decoration:none;border-bottom:1px solid ${Brand.ink};padding-bottom:4px">Réserver →</a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section style="padding:0 56px 120px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 48px;font-weight:400">(  Forfaits  )</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        ${PACKAGES.map((p, i) => `
          <div style="position:relative;padding:40px 32px 36px;min-height:280px;color:#fff;border-radius:4px;overflow:hidden">
            <div style="position:absolute;inset:0;background:${i === 0 ? `linear-gradient(160deg,${Brand.orange},#ff3d8a)` : i === 1 ? `linear-gradient(160deg,#ff3d8a,${Brand.blue})` : `linear-gradient(160deg,#6b2dc9,${Brand.blue})`}"></div>
            ${GradientBlob({ variant: i === 0 ? 'uni-orange' : i === 1 ? 'doux' : 'uni-blue', style: { opacity: 0.5, mixBlendMode: 'overlay' } })}
            <div style="position:relative;display:flex;flex-direction:column;justify-content:space-between;height:100%;min-height:220px">
              <div>
                <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.8">${p.save}</span>
                <h4 style="font-family:'Tenor Sans',serif;font-size:36px;line-height:1;margin:12px 0 14px;font-weight:400">${p.name}</h4>
                <p style="font-size:13px;line-height:1.6;opacity:0.9;margin:0">${p.detail}</p>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:32px">
                <span style="font-family:'Tenor Sans',serif;font-size:28px">${p.price}</span>
                ${Sym({ kind: 'arrow', size: 22, color: '#fff' })}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    ${Footer()}
  ` });
}

function SoinsMobile() {
  return MobileFrame({ height: 2000, children: `
    ${MobileNav()}
    <section style="padding:110px 24px 32px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Pratique 01 / 04</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:84px;line-height:0.9;margin:20px 0 32px;font-weight:400;letter-spacing:-0.02em">Soins.</h1>
      <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:22px;line-height:1.4;font-weight:300;margin:0">
        « Le toucher est une langue. J'apprends à la parler avec patience. »
      </p>
    </section>

    <section style="padding:20px 24px 40px">
      ${Photo({ src: 'media/photo 1.jpg', aspect: '4/5', filter: 'contrast(1.05) brightness(0.9)' })}
    </section>

    <section style="padding:0 24px 40px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 8px;font-weight:400;padding-bottom:16px;border-bottom:1px solid ${Brand.ink}">(  Catalogue  )</h3>
      ${SOINS.map((s, i) => `
        <article style="padding:24px 0;border-bottom:1px solid ${Brand.rule}">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px">
            <span style="font-family:'Tenor Sans',serif;font-size:11px;color:${Brand.muted}">0${i+1}</span>
            <span style="font-family:'Tenor Sans',serif;font-size:16px">${s.price}</span>
          </div>
          <h3 style="font-family:'Tenor Sans',serif;font-size:26px;margin:0 0 6px;font-weight:400">${s.name}</h3>
          <p style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${Brand.muted};margin:0 0 12px">${s.subtitle}</p>
          <p style="font-size:13.5px;line-height:1.7;color:${Brand.ink};margin:0">${s.text}</p>
        </article>
      `).join('')}
    </section>

    <section style="padding:20px 24px 40px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;font-weight:400">(  Forfaits  )</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${PACKAGES.map((p, i) => `
          <div style="position:relative;padding:24px;color:#fff;border-radius:4px;overflow:hidden;min-height:140px">
            <div style="position:absolute;inset:0;background:${i === 0 ? `linear-gradient(120deg,${Brand.orange},#ff3d8a)` : i === 1 ? `linear-gradient(120deg,#ff3d8a,${Brand.blue})` : `linear-gradient(120deg,#6b2dc9,${Brand.blue})`}"></div>
            <div style="position:relative">
              <span style="font-family:'Tenor Sans',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85">${p.save}</span>
              <h4 style="font-family:'Tenor Sans',serif;font-size:26px;line-height:1;margin:8px 0 8px;font-weight:400">${p.name}</h4>
              <p style="font-size:12px;opacity:0.9;margin:0">${p.detail}</p>
              <span style="font-family:'Tenor Sans',serif;font-size:22px;margin-top:12px;display:block">${p.price}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  ` });
}

Object.assign(window, { SoinsDesktop, SoinsMobile });
