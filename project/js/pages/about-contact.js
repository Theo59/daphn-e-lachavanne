// À propos & Contact — desktop + mobile.

function FormField({ label, placeholder, multiline = false } = {}) {
  if (multiline) {
    return `<label style="display:block">
      <span style="display:block;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.muted};margin-bottom:10px">${label}</span>
      <textarea placeholder="${placeholder}" rows="4" style="width:100%;padding:14px 0;border:0;border-bottom:1px solid ${Brand.ink};background:transparent;font-family:'Tenor Sans',serif;font-size:16px;color:${Brand.ink};outline:none;resize:vertical"></textarea>
    </label>`;
  }
  return `<label style="display:block">
    <span style="display:block;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.muted};margin-bottom:10px">${label}</span>
    <input type="text" placeholder="${placeholder}" style="width:100%;padding:12px 0;border:0;border-bottom:1px solid ${Brand.ink};background:transparent;font-family:'Tenor Sans',serif;font-size:16px;color:${Brand.ink};outline:none"/>
  </label>`;
}

function AboutDesktop() {
  const parcours = [
    ['2013', 'Certification méthode Renata França', 'Paris'],
    ['2017', 'Formation yoga 200h', 'Inde'],
    ['2019', 'Breathwork holotropique', 'Amsterdam'],
    ['2022', 'Reiki & magnétisme', 'Paris'],
    ['2023', 'Collaboration sportive', 'Nike · Paris'],
    ['2025', "Création de L'Art de la Circulation", 'Paris'],
  ];

  return DesktopFrame({ height: 2400, children: `
    ${DesktopNav({ active: 'about' })}

    <section style="padding:140px 56px 80px;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center">
      <div>
        <span style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  À propos</span>
        <h1 style="font-family:'Tenor Sans',serif;font-size:132px;line-height:0.9;margin:32px 0 0;font-weight:400;letter-spacing:-0.02em">
          Daphné<br><em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">Lachavanne.</em>
        </h1>
        <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:26px;line-height:1.4;font-weight:300;margin:40px 0 0;max-width:480px">
          Praticienne certifiée méthode Renata França.<br>Paris, depuis 2013.
        </p>
      </div>
      ${Photo({ src: 'media/photo 1.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
    </section>

    <section style="padding:80px 56px 120px;display:grid;grid-template-columns:1fr 2fr;gap:80px">
      <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;font-weight:400">(  Mon histoire  )</h2>
      <div style="font-size:17px;line-height:1.85;color:${Brand.ink};max-width:640px">
        <p style="margin-top:0;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:28px;line-height:1.4;font-weight:300">
          J'ai rencontré le soin par le corps sportif. Danseuse, puis athlète, j'ai cherché ce qui soigne vraiment — pas seulement en surface.
        </p>
        <p>
          En 2013, la méthode Renata França a tout changé. Le drainage lymphatique comme art, comme langage, comme écoute du corps. Depuis, j'ai construit une pratique qui dépasse le massage : yoga, breathwork, énergétique, pilates. Chaque discipline m'a appris quelque chose sur la circulation — de l'énergie, du sang, du souffle, des émotions.
        </p>
        <p style="color:${Brand.muted}">
          En 2025, j'ai formalisé cette approche sous le nom <em>L'Art de la Circulation</em>. Parce que tout, dans le corps, demande à circuler — et que mon rôle est de lever les obstacles qui freinent ce mouvement naturel.
        </p>
      </div>
    </section>

    <section style="padding:0 56px 120px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 48px;font-weight:400;padding-bottom:24px;border-bottom:1px solid ${Brand.ink}">(  Parcours  )</h3>
      <div>
        ${parcours.map(([y, t, l]) => `
          <div style="display:grid;grid-template-columns:120px 1fr 1fr 60px;gap:32px;align-items:baseline;padding:28px 0;border-bottom:1px solid ${Brand.rule}">
            <span style="font-family:'Tenor Sans',serif;font-size:24px">${y}</span>
            <span style="font-family:'Tenor Sans',serif;font-size:22px;font-weight:400">${t}</span>
            <span style="font-size:13px;color:${Brand.muted};letter-spacing:0.1em;text-transform:uppercase">${l}</span>
            ${Sym({ kind: 'dot', size: 20 })}
          </div>
        `).join('')}
      </div>
    </section>

    <section style="padding:0 0 100px">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0">
        ${Photo({ src: 'media/photo 1.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
        ${Photo({ src: 'media/6.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
        ${Photo({ src: 'media/9.jpg', aspect: '3/4', filter: 'grayscale(1) contrast(0.95)' })}
        ${Photo({ src: 'media/photo 3.jpg', aspect: '3/4', filter: 'contrast(1.1) brightness(0.82)' })}
      </div>
    </section>

    <section style="padding:60px 56px 120px;text-align:center;position:relative;overflow:hidden">
      ${GradientBlob({ variant: 'doux', style: { opacity: 0.18, transform: 'translateY(20%)' } })}
      <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:56px;line-height:1.25;font-weight:300;max-width:1000px;margin:0 auto;position:relative">
        « Une couleur vivante, qui se transforme et évolue —<br>une vibration qui éveille les sens, une énergie en expansion. »
      </p>
      <p style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted};margin-top:32px;position:relative">—  D.L.</p>
    </section>

    ${Footer()}
  ` });
}

function AboutMobile() {
  return MobileFrame({ height: 1900, children: `
    ${MobileNav()}
    <section style="padding:110px 24px 32px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  À propos</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:64px;line-height:0.9;margin:20px 0 24px;font-weight:400;letter-spacing:-0.02em">
        Daphné<br><em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">Lachavanne.</em>
      </h1>
      <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:18px;line-height:1.4;font-weight:300;margin:0">
        Praticienne certifiée méthode Renata França. Paris, depuis 2013.
      </p>
    </section>
    <section style="padding:20px 24px 40px">
      ${Photo({ src: 'media/photo 1.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
    </section>
    <section style="padding:0 24px 40px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 20px;font-weight:400">(  Mon histoire  )</h3>
      <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:20px;line-height:1.4;font-weight:300;margin:0 0 16px">
        J'ai rencontré le soin par le corps sportif. En 2013, la méthode Renata França a tout changé.
      </p>
      <p style="font-size:14px;line-height:1.75;color:${Brand.muted}">
        Depuis, j'ai construit une pratique qui dépasse le massage — yoga, breathwork, énergétique, pilates.
        En 2025, j'ai formalisé cette approche sous le nom <em>L'Art de la Circulation</em>.
      </p>
    </section>
    <section style="padding:0 24px 40px">
      <h3 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 16px;font-weight:400;padding-bottom:12px;border-bottom:1px solid ${Brand.ink}">(  Parcours  )</h3>
      ${[
        ['2013', 'Renata França · Paris'],
        ['2017', 'Yoga 200h · Inde'],
        ['2019', 'Breathwork · Amsterdam'],
        ['2022', 'Reiki · Paris'],
        ['2023', 'Nike · Paris'],
        ['2025', "L'Art de la Circulation"],
      ].map(([y, t]) => `
        <div style="display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid ${Brand.rule}">
          <span style="font-family:'Tenor Sans',serif;font-size:14px;color:${Brand.muted}">${y}</span>
          <span style="font-family:'Tenor Sans',serif;font-size:15px">${t}</span>
        </div>
      `).join('')}
    </section>
    <section style="padding:20px 24px 60px;position:relative;overflow:hidden">
      ${GradientBlob({ variant: 'doux', style: { opacity: 0.2 } })}
      <p style="position:relative;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:24px;line-height:1.35;font-weight:300;text-align:center;margin:0">
        « Une couleur vivante, une énergie en expansion. »
      </p>
    </section>
  ` });
}

function ContactDesktop() {
  return DesktopFrame({ height: 1700, children: `
    ${DesktopNav({ active: 'contact' })}

    <section style="padding:160px 56px 80px">
      <span style="font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Réservation</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:200px;line-height:0.9;margin:32px 0 0;font-weight:400;letter-spacing:-0.02em">
        Écrire,<br><em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">réserver.</em>
      </h1>
    </section>

    <section style="padding:0 56px 100px;display:grid;grid-template-columns:1.2fr 1fr;gap:80px">
      <div>
        <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 32px;font-weight:400">(  Un message  )</h2>
        <div style="display:grid;gap:24px">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
            ${FormField({ label: 'Prénom', placeholder: 'Daphné' })}
            ${FormField({ label: 'Nom', placeholder: 'Lachavanne' })}
          </div>
          ${FormField({ label: 'Email', placeholder: 'vous@email.com' })}
          ${FormField({ label: 'Soin souhaité', placeholder: 'Soin Signature · Drainage · Miracle Face…' })}
          ${FormField({ label: 'Votre message', placeholder: "Dites-moi où vous en êtes, ce que vous cherchez…", multiline: true })}
          <button style="align-self:flex-start;padding:16px 32px;background:${Brand.ink};color:#fff;border:0;border-radius:999px;font-family:'Tenor Sans',serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer">Envoyer →</button>
        </div>
      </div>

      <div>
        <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 32px;font-weight:400">(  Réservation en ligne  )</h2>
        <div style="position:relative;padding:36px 32px;border-radius:4px;color:#fff;overflow:hidden;min-height:280px">
          <div style="position:absolute;inset:0;background:linear-gradient(160deg,${Brand.orange} 0%,#c9285f 50%,${Brand.blue} 100%)"></div>
          ${GradientBlob({ variant: 'mix', style: { opacity: 0.5, mixBlendMode: 'overlay' } })}
          <div style="position:relative">
            <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85">Disponibilités en direct</span>
            <h3 style="font-family:'Tenor Sans',serif;font-size:36px;line-height:1;margin:12px 0 16px;font-weight:400">Planity</h3>
            <p style="font-size:14px;line-height:1.65;opacity:0.9;margin:0">Choisissez votre soin, un créneau, et confirmez en deux minutes. Annulation gratuite jusqu'à 24h avant.</p>
            <a href="https://www.planity.com/daphne-lachavanne-75007-paris" style="margin-top:28px;display:inline-flex;align-items:center;gap:12px;padding:14px 26px;background:#fff;color:${Brand.ink};border-radius:999px;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none">
              Réserver sur Planity ${Sym({ kind: 'arrow', size: 16 })}
            </a>
          </div>
        </div>

        <div style="margin-top:40px">
          <h2 style="font-family:'Tenor Sans',serif;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;font-weight:400">(  Le cabinet  )</h2>
          <p style="font-family:'Tenor Sans',serif;font-size:22px;line-height:1.4;margin:0 0 16px;font-weight:400">3 Rue Valadon<br>75007 Paris</p>
          <p style="font-size:13.5px;line-height:1.7;color:${Brand.muted};margin:0">
            Lundi 15h – 22h30<br>
            Mardi – Samedi 8h – 22h30<br>
            Dimanche fermé<br><br>
            Sur rendez-vous uniquement
          </p>
        </div>
      </div>
    </section>

    <section style="padding:0 56px 80px">
      <div style="position:relative;height:320px;border-radius:4px;overflow:hidden;background:#e8e3da">
        <svg width="100%" height="100%" viewBox="0 0 1200 320" style="position:absolute;inset:0">
          <g stroke="rgba(13,10,31,0.15)" fill="none" stroke-width="1">
            ${[...Array(15)].map((_, i) => `<line x1="0" x2="1200" y1="${i*22}" y2="${i*22}"/>`).join('')}
            ${[...Array(25)].map((_, i) => `<line x1="${i*52}" x2="${i*52}" y1="0" y2="320"/>`).join('')}
          </g>
          <path d="M 0 180 Q 300 160 600 200 T 1200 180" stroke="rgba(255,113,0,0.4)" stroke-width="2" fill="none"/>
          <circle cx="420" cy="175" r="14" fill="${Brand.orange}"/>
          <circle cx="420" cy="175" r="28" fill="rgba(255,113,0,0.2)"/>
        </svg>
        <div style="position:absolute;bottom:24px;left:24px;background:#fff;padding:14px 20px;border-radius:4px;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
          <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${Brand.muted};display:block;margin-bottom:4px">Le cabinet</span>
          <span style="font-family:'Tenor Sans',serif;font-size:16px">3 Rue Valadon, Paris 7e</span>
        </div>
      </div>
    </section>

    ${Footer()}
  ` });
}

function ContactMobile() {
  return MobileFrame({ height: 1800, children: `
    ${MobileNav()}
    <section style="padding:110px 24px 32px">
      <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${Brand.muted}">—  Réservation</span>
      <h1 style="font-family:'Tenor Sans',serif;font-size:76px;line-height:0.9;margin:20px 0 0;font-weight:400;letter-spacing:-0.02em">
        Écrire,<br><em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">réserver.</em>
      </h1>
    </section>
    <section style="padding:20px 24px 32px">
      <div style="position:relative;padding:24px 22px;border-radius:4px;color:#fff;overflow:hidden;min-height:200px">
        <div style="position:absolute;inset:0;background:linear-gradient(140deg,${Brand.orange} 0%,#c9285f 50%,${Brand.blue} 100%)"></div>
        <div style="position:relative">
          <span style="font-family:'Tenor Sans',serif;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85">Disponibilités en direct</span>
          <h3 style="font-family:'Tenor Sans',serif;font-size:28px;line-height:1;margin:8px 0 12px;font-weight:400">Planity</h3>
          <p style="font-size:12px;line-height:1.6;opacity:0.9;margin:0">Choisissez un soin, un créneau, confirmez en deux minutes.</p>
          <a style="margin-top:18px;display:inline-flex;padding:11px 20px;background:#fff;color:${Brand.ink};border-radius:999px;font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none">Réserver →</a>
        </div>
      </div>
    </section>
    <section style="padding:0 24px 40px">
      <h2 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 20px;font-weight:400">(  Un message  )</h2>
      <div style="display:grid;gap:18px">
        ${FormField({ label: 'Prénom', placeholder: 'Daphné' })}
        ${FormField({ label: 'Email', placeholder: 'vous@email.com' })}
        ${FormField({ label: 'Soin souhaité', placeholder: 'Soin Signature · Drainage…' })}
        ${FormField({ label: 'Message', placeholder: "Dites-moi où vous en êtes…", multiline: true })}
        <button style="align-self:flex-start;padding:14px 26px;background:${Brand.ink};color:#fff;border:0;border-radius:999px;font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase">Envoyer →</button>
      </div>
    </section>
    <section style="padding:0 24px 60px">
      <h2 style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 16px;font-weight:400">(  Le cabinet  )</h2>
      <p style="font-family:'Tenor Sans',serif;font-size:18px;line-height:1.4;margin:0 0 12px;font-weight:400">3 Rue Valadon<br>75007 Paris</p>
      <p style="font-size:12.5px;line-height:1.7;color:${Brand.muted};margin:0">
        Lundi 15h – 22h30<br>Mardi – Samedi 8h – 22h30<br>Dimanche fermé
      </p>
    </section>
  ` });
}

Object.assign(window, { AboutDesktop, AboutMobile, ContactDesktop, ContactMobile });
