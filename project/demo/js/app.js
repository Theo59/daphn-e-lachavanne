// app.js — Routeur hash + initialisation

const ROUTES = {
  'home':       { render: renderHome,       footer: true },
  'soins':      { render: renderSoins,      footer: true },
  'yoga':       { render: renderYoga,       footer: true },
  'breathwork': { render: renderBreathwork, footer: true },
  'pilates':    { render: renderPilates,    footer: true },
  'about':      { render: renderAbout,      footer: true },
  'contact':    { render: renderContact,    footer: true },
};

let currentPage = null;

function getPage() {
  const hash = window.location.hash.replace('#', '') || 'home';
  return ROUTES[hash] ? hash : 'home';
}

function navigate(page, animate = false) {
  if (page === currentPage) return;

  const route     = ROUTES[page];
  const navRoot   = document.getElementById('nav-root');
  const pageEl    = document.getElementById('page');
  const footerEl  = document.getElementById('footer-root');

  // Nettoyage scroll listener précédent
  const oldNav = document.getElementById('main-nav');
  if (oldNav && oldNav._cleanupScroll) oldNav._cleanupScroll();

  function doRender() {
    currentPage = page;

    // Render nav
    navRoot.innerHTML = renderNav(page);

    // Render page
    pageEl.innerHTML = `<div class="page-enter">${route.render()}</div>`;

    // Render footer
    footerEl.innerHTML = route.footer ? renderFooter() : '';

    // Init nav interactions
    initNavInteractions();

    // Init animations
    initAnimations();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Transition sweep sur les navigations volontaires (pas le premier chargement)
  if (animate && typeof triggerPageTransition === 'function') {
    triggerPageTransition(doRender);
  } else {
    doRender();
  }
}

// Hash router — animate=true sur les navigations volontaires
window.addEventListener('hashchange', () => {
  navigate(getPage(), true);
});

// Init au chargement
window.addEventListener('DOMContentLoaded', () => {
  navigate(getPage(), false);
  // Curseur custom (desktop)
  initCustomCursor();
});
