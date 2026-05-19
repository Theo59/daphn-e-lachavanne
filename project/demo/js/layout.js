// layout.js — Navigation + Footer (demo interactif)

// ---------- Navigation ----------

function renderNav(activePage) {
  const items = [
    ['home',       'Accueil'],
    ['soins',      'Soins'],
    ['yoga',       'Yoga'],
    ['breathwork', 'Breathwork'],
    ['pilates',    'Pilates'],
    ['about',      'À propos'],
    ['contact',    'Réserver'],
  ];

  const links = items.map(([id, label]) => `
    <li>
      <a href="#${id}" class="nav__link${activePage === id ? ' nav__link--active' : ''}">${label}</a>
    </li>
  `).join('');

  const isHero = (activePage === 'home');

  return `
    <nav class="nav ${isHero ? 'nav--hero' : 'nav--light'}" id="main-nav" data-page="${activePage}">
      <a href="#home" class="nav__logo">${Logo({ size: 16, dark: isHero })}</a>
      <ul class="nav__links">${links}</ul>
      <a href="#contact" class="nav__cta">Réserver</a>
      <button class="nav__hamburger" id="hamburger-btn" aria-label="Ouvrir le menu">
        <span></span><span></span>
      </button>
    </nav>
  `;
}

// ---------- Footer ----------

function renderFooter() {
  return `
    <div class="footer">
      <div>
        ${Logo({ size: 15 })}
        <p style="margin-top:18px;line-height:1.7;color:rgba(13,10,31,0.55);max-width:260px;font-size:13px">
          Soins, drainage lymphatique,<br>yoga &amp; breathwork. Paris 7e.
        </p>
      </div>
      <div>
        <span class="footer__col-title">Pratiques</span>
        <div class="footer__links">
          <a href="#soins">Soins</a>
          <a href="#breathwork">Breathwork</a>
          <a href="#yoga">Yoga</a>
          <a href="#pilates">Pilates</a>
        </div>
      </div>
      <div>
        <span class="footer__col-title">Cabinet</span>
        <div style="display:flex;flex-direction:column;gap:8px;color:rgba(13,10,31,0.55);line-height:1.7;font-size:13px">
          <span>3 Rue Valadon<br>75007 Paris</span>
          <a href="https://maps.google.com/?q=3+Rue+Valadon+75007+Paris" target="_blank" style="color:#0d0a1f;text-decoration:none;transition:opacity .2s" onmouseenter="this.style.opacity='.6'" onmouseleave="this.style.opacity='1'">Itinéraire →</a>
        </div>
      </div>
      <div>
        <span class="footer__col-title">Suivre</span>
        <div class="footer__links">
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
          <a href="#contact">Newsletter</a>
          <a href="https://www.planity.com/daphne-lachavanne-75007-paris" target="_blank">Planity</a>
        </div>
      </div>
    </div>
    <div style="padding:0 3.5rem 28px;font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.15em;color:rgba(13,10,31,0.35)">
      © 2026 Daphné Lachavanne
    </div>
  `;
}

// ---------- Init interactions ----------

function initNavInteractions() {
  const nav        = document.getElementById('main-nav');
  const hamburger  = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose= document.getElementById('mobile-close');
  const mobileLinks= mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__link') : [];

  if (!nav) return;

  // Scroll → switch nav style on hero page
  const page = nav.dataset.page;
  if (page === 'home') {
    function onScroll() {
      if (window.scrollY > 60) {
        nav.classList.remove('nav--hero');
        nav.classList.add('nav--light');
        // Update logo color
        const logo = nav.querySelector('.nav__logo');
        if (logo) logo.innerHTML = Logo({ size: 16, dark: false });
      } else {
        nav.classList.remove('nav--light');
        nav.classList.add('nav--hero');
        const logo = nav.querySelector('.nav__logo');
        if (logo) logo.innerHTML = Logo({ size: 16, dark: true });
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Cleanup on next page load
    nav._cleanupScroll = () => window.removeEventListener('scroll', onScroll);
  }

  // Mobile menu open
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    });
  }

  // Mobile menu close
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  // Close on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }
}

Object.assign(window, { renderNav, renderFooter, initNavInteractions });
