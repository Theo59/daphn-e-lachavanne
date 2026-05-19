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

function navigate(page) {
  if (page === currentPage) return;
  currentPage = page;

  const route     = ROUTES[page];
  const navRoot   = document.getElementById('nav-root');
  const pageEl    = document.getElementById('page');
  const footerEl  = document.getElementById('footer-root');

  // Nettoyage scroll listener précédent
  const oldNav = document.getElementById('main-nav');
  if (oldNav && oldNav._cleanupScroll) {
    oldNav._cleanupScroll();
  }

  // Render nav
  navRoot.innerHTML = renderNav(page);

  // Render page avec animation
  pageEl.innerHTML = `<div class="page-enter">${route.render()}</div>`;

  // Render footer
  footerEl.innerHTML = route.footer ? renderFooter() : '';

  // Init interactions nav (hamburger, scroll)
  initNavInteractions();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Hash router
window.addEventListener('hashchange', () => {
  navigate(getPage());
});

// Init au chargement
window.addEventListener('DOMContentLoaded', () => {
  navigate(getPage());
});
