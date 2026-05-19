// pages.js — Les 7 pages du site démo (avec assets de la charte)

// ============================================================
// HOMEPAGE
// ============================================================
function renderHome() {
  const practices = [
    { id: 'soins',      name: 'Soins',      src: '../media/photo 1.jpg', filter: 'contrast(1.05) brightness(0.88)', desc: 'Drainage lymphatique, massage holistique, soin énergétique.' },
    { id: 'breathwork', name: 'Breathwork', src: '../media/photo 3.jpg', filter: 'contrast(1.1) brightness(0.82)',  desc: 'Respiration consciente. Libérer, recentrer, régénérer.' },
    { id: 'yoga',       name: 'Yoga',       src: '../media/10.jpg',       filter: 'grayscale(1) contrast(0.95)',     desc: 'Cours particuliers — postures, souffle, méditation.' },
    { id: 'pilates',    name: 'Pilates',    src: '../media/12.jpg',       filter: 'grayscale(1) contrast(0.95)',     desc: 'Corps profond, alignement durable, fluidité.' },
  ];

  const testimonials = [
    { q: "Une expérience transformatrice. Daphné a une façon unique d'écouter le corps — son drainage est une révélation.", a: 'L.M. · drainage lymphatique' },
    { q: "Son approche touche autant le corps que l'énergie. On repart transformé, allégé, différent.", a: 'S.T. · soin signature' },
    { q: "Un regard très fin, une présence rare. Je repars chaque fois plus légère, plus juste.", a: 'C.R. · soin signature' },
  ];

  return `
    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg">
        <img src="../media/photo 2.jpg" alt="Daphné Lachavanne" style="filter:contrast(1.1) brightness(0.72)">
      </div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <span class="hero__label">◦  soins · breathwork · yoga · pilates  ◦</span>
        <h1 class="hero__title">
          L'art de<br>
          <em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">la circulation.</em>
        </h1>
        <p class="hero__sub">
          Je vous accueille dans mon cabinet du 7e arrondissement pour des soins sur-mesure —
          du mouvement à l'énergie.
        </p>
        <div style="margin-top:36px">
          <a href="#contact" class="btn btn--outline-white">Prendre rendez-vous</a>
        </div>
      </div>
      <div class="hero__footer">
        <span>Paris · 7e arrondissement</span>
        <span style="display:flex;gap:14px;align-items:center">
          <span>Défiler</span>
          <span style="width:24px;height:1px;background:currentColor;display:inline-block"></span>
        </span>
        <span>Saison · printemps 26</span>
      </div>
    </section>

    <!-- MANIFESTE -->
    <section class="section" style="position:relative;overflow:hidden">
      <!-- fond formes en décoration -->
      <div style="position:absolute;right:-120px;top:-80px;width:500px;opacity:0.12;pointer-events:none;transform:rotate(-15deg)">
        <img src="../media/fond formes.png" alt="" style="width:100%;display:block">
      </div>
      <div class="container" style="position:relative">
        <div class="grid-2" style="align-items:center">
          <div>
            <span class="t-label">— Bienvenue</span>
            <h2 style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(32px,4vw,56px);line-height:1.1;font-weight:300;margin-top:20px">
              « Entre le corps<br>et l'âme, il y a<br>le souffle. »
            </h2>
          </div>
          <div>
            <p style="font-size:17px;line-height:1.85;color:#0d0a1f">
              Certifiée méthode Renata França depuis 2013, j'ai développé <em>L'Art de la Circulation</em> —
              une approche globale qui unit le mouvement, le souffle et le travail énergétique.
            </p>
            <p style="font-size:17px;line-height:1.85;color:rgba(13,10,31,0.55);margin-top:16px">
              Pour libérer les trois corps : physique, mental, émotionnel. Chaque séance
              est conçue pour vous — selon votre moment, votre demande, votre corps.
            </p>
            <a href="#about" class="link-arrow" style="margin-top:36px">
              Mon histoire ${Sym({ kind: 'arrow', size: 18 })}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- PRATIQUES — icon grid style charte -->
    <section class="service-icon-section" style="position:relative;overflow:hidden">
      <!-- fond 3 (lavande) en arrière-plan -->
      <div class="service-icon-section__bg">
        <img src="../media/fond 3.png" alt="">
      </div>
      <!-- en-tête -->
      <div class="container" style="position:relative;padding-top:56px;padding-bottom:40px;border-bottom:1px solid rgba(13,10,31,0.1)">
        <div style="display:flex;justify-content:space-between;align-items:baseline">
          <h3 class="t-label" style="font-size:12px">(  Pratiques  )</h3>
          <span style="font-size:13px;color:rgba(13,10,31,0.6);max-width:360px;line-height:1.5;text-align:right">
            Quatre disciplines, une même attention au corps.
          </span>
        </div>
      </div>
      <!-- grille icônes -->
      <div class="service-icon-grid service-icon-grid--sep" style="position:relative">
        ${practices.map(p => `
          <a href="#${p.id}" class="service-icon-card">
            <div class="service-icon-card__icon">
              <img src="${(() => {
                const icons = { soins: '../media/Design sans titre (34).png', breathwork: '../media/illustration_select_21.png', yoga: '../media/illustration_select_30.png', pilates: '../media/illustration_select_38.png' };
                return icons[p.id] || '';
              })()}" alt="${p.name}">
            </div>
            <div class="service-icon-card__meta">
              <h4 class="service-icon-card__name">${p.name}</h4>
              <p class="service-icon-card__desc">${p.desc}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- CABINET -->
    <section class="section section--dark" style="position:relative;overflow:hidden">
      <!-- fond 2 de la charte (orange chaud + lumière) -->
      <div style="position:absolute;inset:0">
        <img src="../media/fond 2.png" alt="" style="width:100%;height:100%;object-fit:cover;display:block">
        <div style="position:absolute;inset:0;background:rgba(13,10,31,0.5)"></div>
      </div>
      <div class="container" style="position:relative">
        <div class="grid-2" style="align-items:center">
          <div>
            <span class="t-label">— Le lieu</span>
            <h3 style="font-family:'Tenor Sans',serif;font-size:clamp(56px,7vw,88px);line-height:0.95;margin:20px 0 24px;font-weight:400">
              Mon<br>cabinet.
            </h3>
            <p style="font-size:17px;line-height:1.85;opacity:0.85;max-width:440px">
              3 Rue Valadon, Paris 7e. Un espace confidentiel, sur rendez-vous,
              pensé pour la qualité de présence et la profondeur du soin.
            </p>
            <a href="#contact" class="btn btn--outline-white" style="margin-top:28px">Prendre rendez-vous</a>
          </div>
          ${PhotoSlot({ label: 'Le cabinet · Paris 7e', kind: 'video', aspect: '16/10' })}
        </div>
      </div>
    </section>

    <!-- TÉMOIGNAGES -->
    <section class="section" style="position:relative;overflow:hidden">
      <!-- cercle calligraphique en fond -->
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:600px;height:600px;opacity:0.07;pointer-events:none">
        <img src="../media/cercle tracé.png" alt="" style="width:100%;height:100%;object-fit:contain">
      </div>
      <div class="container" style="position:relative">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:44px">
          <h3 class="t-label">(  Mots reçus  )</h3>
          <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.2em;color:rgba(13,10,31,0.55)">5,0 / 5 · Planity</span>
        </div>
        <div class="grid-3">
          ${testimonials.map(t => `
            <figure class="testimonial">
              ${ChartreIcon({ kind: 'cercle', size: 32 })}
              <blockquote>« ${t.q} »</blockquote>
              <figcaption>${t.a}</figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA — fondu orange doux (slide 18 charte) -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="cta-band">
          <!-- Fondu orange fluide (dégradé UNI charte, sans traits) -->
          <div style="position:absolute;inset:0;overflow:hidden;border-radius:6px">
            <img src="../media/fond orange doux.png" alt="" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
          <!-- Overlay léger pour lisibilité texte -->
          <div style="position:absolute;inset:0;background:rgba(13,10,31,0.18);border-radius:6px"></div>
          <div class="cta-band__content">
            <h3 class="cta-band__title">Réservez<br>votre première séance.</h3>
            <p class="cta-band__text">Un échange offert avant chaque suivi. Pour comprendre votre demande, ajuster, et trouver ensemble la bonne pratique.</p>
            <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank" class="btn btn--white" style="margin-top:32px">
              Réserver sur Planity ${Sym({ kind: 'arrow', size: 16 })}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// SOINS
// ============================================================
function renderSoins() {
  const soins = [
    { name: 'Soin Signature',       sub: 'Drainage + breathwork + énergétique · 2h', price: '280 €', text: "Le soin le plus complet. Drainage lymphatique Renata França, respiration guidée et travail sur les centres énergétiques. Pour libérer les trois corps en une seule séance." },
    { name: 'Drainage Lymphatique', sub: 'Méthode Renata França · 1h',               price: '150 €', text: "La technique originale, certifiée depuis 2013. Mouvements rythmiques et précis qui relancent la circulation lymphatique, allègent, désenflent et régénèrent." },
    { name: 'Miracle Face',         sub: 'Drainage facial · 40 min',                  price: '90 €',  text: "Drainage du visage et du crâne. Détonifie les traits, élimine les tensions, redonne de l'éclat et du volume. Idéal en soin express ou en complément corps." },
    { name: 'Combo Détox',          sub: 'Corps + Visage · 1h30',                     price: '200 €', text: "Drainage complet corps et visage en une session. Le traitement signature pour une détox profonde — le soin le plus demandé en préparation d'événement." },
  ];

  const packages = [
    { name: 'Découverte',   detail: '3 Drainages Lymphatiques · valable 3 mois', price: '420 €', save: '−30 €', fond: 'orange doux' },
    { name: 'Suivi Saison', detail: '5 soins au choix · valable 6 mois',         price: '680 €', save: '−70 €', fond: '2' },
    { name: 'Intensif',     detail: '3 Soins Signature · valable 2 mois',        price: '780 €', save: '−60 €', fond: 'orange doux' },
  ];

  return `
    <!-- EN-TÊTE -->
    <div class="page-header" style="position:relative;overflow:hidden">
      <!-- Soleil radial de la charte en décoration -->
      <div style="position:absolute;right:3.5rem;top:50%;transform:translateY(-50%);opacity:0.06;pointer-events:none">
        ${ChartreIcon({ kind: 'soins', size: 340 })}
      </div>
      <div class="container" style="position:relative">
        <span class="t-label">— Pratique 01 / 04</span>
        <h1>Soins.</h1>
        <div class="grid-2" style="margin-top:48px">
          <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(22px,2.5vw,32px);line-height:1.35;font-weight:300;margin:0">
            « Le toucher est une langue. J'apprends à la parler avec patience — pour que le corps se souvienne. »
          </p>
          <div>
            <p style="font-size:16px;line-height:1.85;color:rgba(13,10,31,0.55)">
              Certifiée méthode Renata França depuis 2013, chaque soin commence par un échange.
              Comprendre où vous en êtes, ce que vous cherchez. Puis nous laissons le silence prendre le relais.
            </p>
            <div style="margin-top:20px;display:flex;align-items:center;gap:16px">
              <span class="t-label">Méthode Renata França</span>
              <span style="width:28px;height:1px;background:rgba(13,10,31,0.4);display:inline-block"></span>
              <span class="t-label">depuis 2013</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PHOTOS -->
    <section class="section--sm">
      <div class="container">
        <div class="photo-grid-soins">
          ${Photo({ src: '../media/photo 1.jpg', aspect: '16/10', filter: 'contrast(1.05) brightness(0.9)' })}
          <div class="photo-grid-soins__right">
            ${Photo({ src: '../media/6.jpg', aspect: 'auto', filter: 'contrast(1.05) brightness(0.9)', style: { height: '100%' } })}
            ${PhotoSlot({ label: 'Huile · texture', kind: 'photo', aspect: 'auto', style: { height: '100%' } })}
          </div>
        </div>
      </div>
    </section>

    <!-- CATALOGUE — icon grid + détail -->
    <section class="service-icon-section" style="position:relative;overflow:hidden">
      <!-- fond 3 en arrière-plan léger -->
      <div class="service-icon-section__bg" style="opacity:0.55">
        <img src="../media/fond 3.png" alt="">
      </div>
      <div style="position:relative">
        <!-- en-tête -->
        <div class="container" style="padding-top:56px;padding-bottom:40px;border-bottom:1px solid rgba(13,10,31,0.1)">
          <div style="display:flex;justify-content:space-between;align-items:baseline">
            <h2 class="t-label">(  Catalogue  )</h2>
            <span style="font-size:13px;color:rgba(13,10,31,0.55)">Tous les soins · 40 min à 2h</span>
          </div>
        </div>
        <!-- icon grid des soins -->
        <div class="service-icon-grid service-icon-grid--sep" style="grid-template-columns:repeat(4,1fr)">
          ${soins.map((s, i) => {
            const icons = ['../media/Design sans titre (34).png','../media/cercle tracé.png','../media/rond.png','../media/illustration_select_21.png'];
            return `
            <div class="service-icon-card">
              <div class="service-icon-card__icon">
                <img src="${icons[i]}" alt="${s.name}">
              </div>
              <div class="service-icon-card__meta">
                <h4 class="service-icon-card__name">${s.name}</h4>
                <p class="service-icon-card__sub">${s.sub}</p>
              </div>
            </div>`;
          }).join('')}
        </div>
        <!-- détail des soins -->
        <div class="container" style="padding-top:0;padding-bottom:0">
          ${soins.map((s, i) => `
            <div class="soin-row">
              <span class="soin-row__num">0${i+1}</span>
              <div>
                <h3 class="soin-row__name">${s.name}</h3>
                <p class="soin-row__sub">${s.sub}</p>
              </div>
              <p class="soin-row__text">${s.text}</p>
              <div class="soin-row__price">
                <span class="soin-row__price-val">${s.price}</span>
                <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank" class="link-arrow" style="font-size:10px">Réserver →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FORFAITS — fonds de la charte -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <h3 class="t-label" style="margin-bottom:32px">(  Forfaits  )</h3>
        <div class="grid-3">
          ${packages.map(p => `
            <div class="forfait">
              <!-- Fond réel de la charte -->
              <div style="position:absolute;inset:0;overflow:hidden;border-radius:6px">
                <img src="../media/fond ${p.fond}.png" alt="" style="width:100%;height:100%;object-fit:cover">
              </div>
              <div style="position:absolute;inset:0;background:rgba(13,10,31,0.15);border-radius:6px"></div>
              <div class="forfait__content">
                <div>
                  <span class="forfait__save">${p.save}</span>
                  <h4 class="forfait__name">${p.name}</h4>
                  <p class="forfait__detail">${p.detail}</p>
                </div>
                <div class="forfait__bottom">
                  <span class="forfait__price">${p.price}</span>
                  ${Sym({ kind: 'arrow', size: 20, color: '#fff' })}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// PAGE PRATIQUE GÉNÉRIQUE (Yoga / Breathwork / Pilates)
// ============================================================
function renderPractice({ idx, id, name, italic, quote, intro, approach, tarif, photos, fond = 'orange doux' }) {
  return `
    <!-- EN-TÊTE avec grande icône de la charte -->
    <div class="page-header" style="position:relative;overflow:hidden">
      <div style="position:absolute;right:3.5rem;top:50%;transform:translateY(-50%);opacity:0.07;pointer-events:none">
        ${ChartreIcon({ kind: id, size: 320 })}
      </div>
      <div class="container" style="position:relative">
        <span class="t-label">— Pratique ${idx} / 04</span>
        <h1>${name}<em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">.</em></h1>
        <div class="grid-2" style="margin-top:44px">
          <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(22px,2.5vw,32px);line-height:1.35;font-weight:300;margin:0">« ${quote} »</p>
          <p style="font-size:16px;line-height:1.85;color:rgba(13,10,31,0.55)">${intro}</p>
        </div>
      </div>
    </div>

    <!-- PHOTOS -->
    <section class="section--sm">
      <div class="container">
        <div class="grid-3">
          ${photos.map(p => p.src
            ? Photo({ src: p.src, aspect: '3/4', filter: p.filter || 'grayscale(1) contrast(0.95)' })
            : PhotoSlot({ label: p.label || '', kind: p.kind || 'photo', aspect: '3/4' })
          ).join('')}
        </div>
      </div>
    </section>

    <!-- APPROCHE — intro texte + icon grid -->
    <section class="section" style="padding-bottom:0">
      <div class="container">
        <div class="grid-label-content">
          <div>
            <h2 class="t-label" style="margin-bottom:24px">(  Approche  )</h2>
          </div>
          <div>
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,3.5vw,46px);font-style:italic;font-weight:300;line-height:1.15;margin:0">${italic}</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- icon grid des approches sur fond 3 -->
    <div class="service-icon-section" style="position:relative;overflow:hidden;margin-top:40px">
      <div class="service-icon-section__bg" style="opacity:0.5">
        <img src="../media/fond 3.png" alt="">
      </div>
      <div class="service-icon-grid service-icon-grid--3 service-icon-grid--sep" style="position:relative">
        ${approach.map(a => {
          const symIcons = { breath: '../media/illustration_select_21.png', spiral: '../media/illustration_select_30.png', sun: '../media/Design sans titre (34).png', wave: '../media/illustration_select_21.png', triangle: '../media/illustration_select_38.png', dot: '../media/cercle tracé.png', plus: '../media/rond.png', default: '../media/cercle tracé.png' };
          const src = symIcons[a.sym] || symIcons.default;
          return `
          <div class="service-icon-card">
            <div class="service-icon-card__icon">
              <img src="${src}" alt="${a.title}">
            </div>
            <div class="service-icon-card__meta">
              <h4 class="service-icon-card__name">${a.title}</h4>
              <p class="service-icon-card__desc">${a.text}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- TARIFS — fond de la charte -->
    <section class="section" style="position:relative;overflow:hidden;color:#fff">
      <!-- Fond de la charte -->
      <div style="position:absolute;inset:0">
        <img src="../media/fond ${fond}.png" alt="" style="width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:rgba(13,10,31,0.55)"></div>
      </div>
      <div class="container" style="position:relative">
        <div class="grid-label-content">
          <div>
            <span style="font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;opacity:0.65">(  Tarif &amp; Réservation  )</span>
            <h3 style="font-family:'Tenor Sans',serif;font-size:clamp(40px,5vw,56px);line-height:1;margin:20px 0 16px;font-weight:400">Sur<br>rendez-vous.</h3>
            <p style="font-size:14px;line-height:1.8;opacity:0.65;max-width:260px">Séances individuelles au cabinet. Réservation via Planity.</p>
            <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank" class="btn btn--outline-white" style="margin-top:24px">Réserver →</a>
          </div>
          <div>
            ${tarif.map(t => `
              <div class="tarif-row">
                <div>
                  <h4 class="tarif-row__title">${t.title}</h4>
                  <p class="tarif-row__detail">${t.detail}</p>
                </div>
                <div class="tarif-row__right">
                  <span class="tarif-row__price">${t.price}</span>
                  <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank" style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;color:rgba(255,255,255,0.65);border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:2px;transition:color .2s" onmouseenter="this.style.color='#fff'" onmouseleave="this.style.color='rgba(255,255,255,0.65)'">Réserver →</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderYoga() {
  return renderPractice({
    idx: '02', id: 'yoga', name: 'Yoga', fond: '1',
    italic: 'Une pratique du souffle, du sol vers le ciel.',
    quote: 'La posture juste commence par le souffle juste.',
    intro: "Cours particuliers uniquement. Vinyasa, hatha, yin — adaptés à votre corps, votre niveau, votre moment. Une heure d'attention complète, sans comparaison.",
    approach: [
      { sym: 'breath',  title: 'Pranayama', text: "Le souffle yogi en trois temps : diaphragmatique, thoracique, claviculaire. Tout part de là." },
      { sym: 'spiral',  title: 'Posture',   text: "Asanas tenues, ajustées, accompagnées. Pas de performance — juste de la justesse." },
      { sym: 'dot',     title: 'Méditation',text: "Quelques minutes assises, pour laisser le corps se poser et la pratique s'intégrer." },
    ],
    tarif: [
      { title: 'Cours particulier', detail: '1h · au cabinet', price: '90 €' },
      { title: 'Forfait 5 séances', detail: 'valable 3 mois',  price: '400 €' },
    ],
    photos: [
      { src: '../media/9.jpg' },
      { src: '../media/10.jpg' },
      { src: '../media/11.jpg' },
    ],
  });
}

function renderBreathwork() {
  return renderPractice({
    idx: '03', id: 'breathwork', name: 'Breathwork', fond: '3',
    italic: "Le souffle, comme un instrument que l'on apprend à jouer.",
    quote: "Entre l'inspire et l'expire, une pause naturelle — comme le silence en musique.",
    intro: "Respiration consciente, holotropique, cohérence cardiaque. En individuel ou en cercle fermé. Selon ce que vous traversez, on choisit ensemble la pratique.",
    approach: [
      { sym: 'breath', title: 'Cohérence',        text: "Cinq inspirations par minute. Le rythme cardiaque s'aligne, le système nerveux s'apaise." },
      { sym: 'wave',   title: 'Holotropique',      text: "Un souffle ample, continu. Pour traverser, libérer, parfois pleurer. Toujours en sécurité." },
      { sym: 'sun',    title: 'Pranayama avancé',  text: "Techniques de rétention, Tummo, Wim Hof. Pour l'éveil cellulaire et la vitalité profonde." },
    ],
    tarif: [
      { title: 'Séance individuelle', detail: '1h · au cabinet',      price: '90 €' },
      { title: 'Cercle de souffle',   detail: '4–6 personnes · 2h',   price: '60 €/pers.' },
    ],
    photos: [
      { src: '../media/photo 2.jpg', filter: 'contrast(1.1) brightness(0.82)' },
      { src: '../media/photo 3.jpg', filter: 'contrast(1.1) brightness(0.82)' },
      { kind: 'video', label: 'Cercle de souffle' },
    ],
  });
}

function renderPilates() {
  return renderPractice({
    idx: '04', id: 'pilates', name: 'Pilates', fond: '2',
    italic: 'Force, alignement, fluidité. Le mouvement comme une écriture.',
    quote: 'Le mouvement précis est plus efficace que le mouvement fort.',
    intro: "Cours particuliers au sol et avec petit matériel. Travail postural, respiratoire et musculaire profond. En privé ou en duo — pour ajuster avec une précision millimétrique.",
    approach: [
      { sym: 'triangle', title: 'Alignement',    text: "Trouver l'axe, le centre, la verticale. Avant tout autre mouvement." },
      { sym: 'wave',     title: 'Fluidité',      text: "Enchaînements lents, précis. Le contraire de la performance — et plus exigeant." },
      { sym: 'plus',     title: 'Renforcement',  text: "Profond, durable, jamais brutal. Pour tenir le corps dans la durée." },
    ],
    tarif: [
      { title: 'Cours particulier', detail: '1h · au cabinet',  price: 'Sur devis' },
      { title: 'Duo',               detail: '1h · 2 personnes', price: 'Sur devis' },
    ],
    photos: [
      { src: '../media/12.jpg' },
      { src: '../media/11.jpg' },
      { kind: 'video', label: 'Pilates · séance' },
    ],
  });
}

// ============================================================
// À PROPOS
// ============================================================
function renderAbout() {
  const parcours = [
    ['2013', 'Certification méthode Renata França', 'Paris'],
    ['2017', 'Formation yoga 200h', 'Inde'],
    ['2019', 'Breathwork holotropique', 'Amsterdam'],
    ['2022', 'Reiki &amp; magnétisme', 'Paris'],
    ['2023', 'Collaboration sportive', 'Nike · Paris'],
    ['2025', "Création de L'Art de la Circulation", 'Paris'],
  ];

  return `
    <!-- EN-TÊTE PORTRAIT -->
    <div class="page-header">
      <div class="container">
        <div class="grid-2" style="align-items:center">
          <div>
            <span class="t-label">— À propos</span>
            <h1 style="font-size:clamp(64px,9vw,132px);margin-top:24px">
              Daphné<br>
              <em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">Lachavanne.</em>
            </h1>
            <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(18px,2vw,26px);line-height:1.4;font-weight:300;margin-top:32px;color:rgba(13,10,31,0.75)">
              Praticienne certifiée méthode Renata França.<br>Paris, depuis 2013.
            </p>
          </div>
          ${Photo({ src: '../media/photo 1.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
        </div>
      </div>
    </div>

    <!-- HISTOIRE -->
    <section class="section">
      <div class="container">
        <div class="grid-label-content">
          <h2 class="t-label">(  Mon histoire  )</h2>
          <div style="font-size:17px;line-height:1.85;color:#0d0a1f;max-width:640px">
            <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(20px,2.2vw,28px);line-height:1.4;font-weight:300;margin:0 0 24px">
              J'ai rencontré le soin par le corps sportif. Danseuse, puis athlète, j'ai cherché ce qui soigne vraiment — pas seulement en surface.
            </p>
            <p style="margin:0 0 16px">
              En 2013, la méthode Renata França a tout changé. Le drainage lymphatique comme art, comme langage, comme écoute du corps. Depuis, j'ai construit une pratique qui dépasse le massage : yoga, breathwork, énergétique, pilates.
            </p>
            <p style="color:rgba(13,10,31,0.55);margin:0">
              En 2025, j'ai formalisé cette approche sous le nom <em>L'Art de la Circulation</em>. Parce que tout, dans le corps, demande à circuler — et que mon rôle est de lever les obstacles qui freinent ce mouvement naturel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PARCOURS -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <h3 class="t-label" style="padding-bottom:20px;border-bottom:1px solid #0d0a1f;margin-bottom:0">(  Parcours  )</h3>
        ${parcours.map(([y, t, l]) => `
          <div class="timeline-row">
            <span class="timeline-row__year">${y}</span>
            <span class="timeline-row__event">${t}</span>
            <span class="timeline-row__place location">${l}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PHOTOS STRIP -->
    <section class="section--sm" style="padding-left:0;padding-right:0">
      <div class="photo-grid-4">
        ${Photo({ src: '../media/photo 1.jpg', aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
        ${Photo({ src: '../media/6.jpg',       aspect: '3/4', filter: 'contrast(1.05) brightness(0.9)' })}
        ${Photo({ src: '../media/9.jpg',       aspect: '3/4', filter: 'grayscale(1) contrast(0.95)' })}
        ${Photo({ src: '../media/photo 3.jpg', aspect: '3/4', filter: 'contrast(1.1) brightness(0.82)' })}
      </div>
    </section>

    <!-- CITATION — fond 3 doux + cercle tracé -->
    <section class="section" style="position:relative;overflow:hidden">
      <!-- Fond lavande doux de la charte -->
      <div style="position:absolute;inset:0">
        <img src="../media/fond 3.png" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.35">
      </div>
      <!-- Cercle calligraphique -->
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:70vw;max-width:700px;opacity:0.12;pointer-events:none">
        <img src="../media/cercle tracé.png" alt="" style="width:100%;display:block">
      </div>
      <div class="container" style="position:relative;text-align:center">
        <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(24px,4vw,52px);line-height:1.25;font-weight:300;max-width:900px;margin:0 auto">
          « Une couleur vivante, qui se transforme et évolue —<br>une vibration qui éveille les sens, une énergie en expansion. »
        </p>
        <p class="t-label" style="margin-top:28px">— D.L.</p>
      </div>
    </section>
  `;
}

// ============================================================
// CONTACT
// ============================================================
function renderContact() {
  return `
    <!-- EN-TÊTE -->
    <div class="page-header" style="position:relative;overflow:hidden">
      <div style="position:absolute;right:3.5rem;bottom:0;opacity:0.06;pointer-events:none">
        ${ChartreIcon({ kind: 'cercle', size: 300 })}
      </div>
      <div class="container" style="position:relative">
        <span class="t-label">— Réservation</span>
        <h1>
          Écrire,<br>
          <em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300">réserver.</em>
        </h1>
      </div>
    </div>

    <!-- FORMULAIRE + INFOS -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="grid-2">

          <!-- Formulaire -->
          <div>
            <h2 class="t-label" style="margin-bottom:28px">(  Un message  )</h2>
            <form class="form-group" onsubmit="return false">
              <div class="form-row">
                <div class="form-field">
                  <label class="form-field__label">Prénom</label>
                  <input type="text" placeholder="Marie">
                </div>
                <div class="form-field">
                  <label class="form-field__label">Nom</label>
                  <input type="text" placeholder="Dupont">
                </div>
              </div>
              <div class="form-field">
                <label class="form-field__label">Email</label>
                <input type="email" placeholder="vous@email.com">
              </div>
              <div class="form-field">
                <label class="form-field__label">Soin souhaité</label>
                <input type="text" placeholder="Soin Signature · Drainage · Miracle Face…">
              </div>
              <div class="form-field">
                <label class="form-field__label">Votre message</label>
                <textarea rows="4" placeholder="Dites-moi où vous en êtes, ce que vous cherchez…"></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn--dark">Envoyer →</button>
              </div>
            </form>
          </div>

          <!-- Infos + Planity -->
          <div>
            <h2 class="t-label" style="margin-bottom:28px">(  Réservation en ligne  )</h2>

            <!-- CTA Planity — fond 2 de la charte -->
            <div style="position:relative;border-radius:6px;overflow:hidden;min-height:220px;margin-bottom:36px">
              <img src="../media/fond 2.png" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
              <div style="position:absolute;inset:0;background:rgba(13,10,31,0.3)"></div>
              <div style="position:relative;padding:32px;color:#fff">
                <span style="font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85">Disponibilités en direct</span>
                <h3 style="font-family:'Tenor Sans',serif;font-size:34px;line-height:1;margin:10px 0 14px;font-weight:400">Planity</h3>
                <p style="font-size:14px;line-height:1.65;opacity:0.92;margin:0;max-width:340px">Choisissez votre soin, un créneau, et confirmez en deux minutes. Annulation gratuite jusqu'à 24h avant.</p>
                <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank" class="btn btn--white" style="margin-top:22px">
                  Réserver sur Planity ${Sym({ kind: 'arrow', size: 15 })}
                </a>
              </div>
            </div>

            <!-- Infos cabinet -->
            <h2 class="t-label" style="margin-bottom:20px">(  Le cabinet  )</h2>
            <p style="font-family:'Tenor Sans',serif;font-size:22px;line-height:1.4;margin:0 0 14px;font-weight:400">3 Rue Valadon<br>75007 Paris</p>
            <p style="font-size:13.5px;line-height:1.85;color:rgba(13,10,31,0.55);margin:0">
              Lundi 15h – 22h30<br>
              Mardi – Samedi 8h – 22h30<br>
              Dimanche fermé<br><br>
              Sur rendez-vous uniquement
            </p>
            <a href="https://maps.google.com/?q=3+Rue+Valadon+75007+Paris" target="_blank" class="link-arrow" style="margin-top:18px;font-size:11px">
              Itinéraire ${Sym({ kind: 'arrow', size: 16 })}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CARTE -->
    <section class="section--sm" style="padding-top:0">
      <div class="container">
        <div class="map-placeholder">
          <svg width="100%" height="100%" viewBox="0 0 900 300" style="position:absolute;inset:0">
            <rect width="900" height="300" fill="#e8e3da"/>
            <g stroke="rgba(13,10,31,0.12)" fill="none" stroke-width="1">
              ${[...Array(12)].map((_, i) => `<line x1="0" x2="900" y1="${i*28}" y2="${i*28}"/>`).join('')}
              ${[...Array(20)].map((_, i) => `<line x1="${i*50}" x2="${i*50}" y1="0" y2="300"/>`).join('')}
            </g>
            <path d="M 0 160 Q 225 140 450 180 T 900 160" stroke="rgba(255,113,0,0.4)" stroke-width="2" fill="none"/>
            <circle cx="315" cy="158" r="12" fill="${Brand.orange}"/>
            <circle cx="315" cy="158" r="22" fill="rgba(255,113,0,0.2)"/>
          </svg>
          <div style="position:absolute;bottom:20px;left:20px;background:#fff;padding:12px 18px;border-radius:4px;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
            <span class="t-label" style="display:block;margin-bottom:4px">Le cabinet</span>
            <span style="font-family:'Tenor Sans',serif;font-size:15px">3 Rue Valadon, Paris 7e</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Export
Object.assign(window, {
  renderHome, renderSoins,
  renderYoga, renderBreathwork, renderPilates,
  renderAbout, renderContact,
});
