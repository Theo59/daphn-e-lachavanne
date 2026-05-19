// animations.js — Scroll reveal, parallaxe, hero entrance, transitions

// ============================================================
// SCROLL REVEAL — IntersectionObserver
// ============================================================
function initScrollReveal() {
  // Sélecteurs qui reçoivent l'animation de révélation
  const SELECTORS = [
    '.page-header .t-label',
    '.page-header h1',
    '.page-header .grid-2 > *',
    'section .t-label:not(nav *)',
    'section h2:not(nav *)',
    'section h3:not(nav *)',
    '.practice-card',
    '.soin-row',
    '.forfait',
    '.testimonial',
    '.pillar',
    '.timeline-row',
    '.tarif-row',
    '.cta-band__content > *',
    '.grid-label-content > *',
    'section > .container > p',
    'section > .container > .grid-2 > *',
    '.photo-grid-soins > *',
    '.photo-grid-4 > *',
    '.footer > div',
  ];

  const allEls = new Set();
  SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => allEls.add(el));
  });

  // Identifier les grilles pour le stagger
  const STAGGER_PARENTS = ['.grid-3', '.grid-4', '.grid-2', '.photo-grid-4'];
  const staggered = new Set();

  STAGGER_PARENTS.forEach(sel => {
    document.querySelectorAll(sel).forEach(parent => {
      const children = Array.from(parent.children);
      children.forEach((child, i) => {
        child.style.setProperty('--stagger-delay', `${i * 0.1}s`);
        child.dataset.stagger = 'true';
        staggered.add(child);
      });
    });
  });

  // Appliquer les classes de base
  allEls.forEach(el => {
    if (!el.dataset.revealed) {
      el.classList.add('reveal');
      el.dataset.revealed = '1';
    }
  });

  // Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // Délai de stagger si applicable
        const delay = el.dataset.stagger ? el.style.getPropertyValue('--stagger-delay') : '0s';
        el.style.transitionDelay = delay;
        el.classList.add('reveal--visible');
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  allEls.forEach(el => observer.observe(el));

  return observer;
}

// ============================================================
// HERO ENTRANCE — séquence animée au chargement
// ============================================================
function initHeroEntrance() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const sequences = [
    { sel: '.hero__label',       delay: 200 },
    { sel: '.hero__title',       delay: 450 },
    { sel: '.hero__sub',         delay: 750 },
    { sel: '.hero__content .btn',delay: 950 },
    { sel: '.hero__footer',      delay: 1100 },
  ];

  sequences.forEach(({ sel, delay }) => {
    const el = hero.querySelector(sel);
    if (!el) return;
    el.classList.add('hero-seq');
    setTimeout(() => el.classList.add('hero-seq--visible'), delay);
  });
}

// ============================================================
// PARALLAXE HERO
// ============================================================
function initParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  let ticking = false;
  let cleanup;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

// ============================================================
// BARRE DE PROGRESSION DE NAVIGATION
// ============================================================
function initProgressBar() {
  // Créer la barre si elle n'existe pas
  let bar = document.getElementById('nav-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'nav-progress';
    bar.className = 'nav-progress';
    document.body.appendChild(bar);
  }

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

// ============================================================
// TRANSITION DE PAGE — barre orange qui balaie
// ============================================================
let pageTransitionCleanup = null;

function triggerPageTransition(onComplete) {
  let sweep = document.getElementById('page-sweep');
  if (!sweep) {
    sweep = document.createElement('div');
    sweep.id = 'page-sweep';
    sweep.className = 'page-sweep';
    document.body.appendChild(sweep);
  }

  // Reset
  sweep.classList.remove('page-sweep--out');
  sweep.classList.add('page-sweep--in');

  setTimeout(() => {
    if (onComplete) onComplete();
    sweep.classList.remove('page-sweep--in');
    sweep.classList.add('page-sweep--out');
  }, 280);
}

// ============================================================
// COMPTEUR ANIMÉ pour les prix
// ============================================================
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const duration = 900;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// ============================================================
// CURSEUR PERSONNALISÉ (desktop uniquement)
// ============================================================
function initCustomCursor() {
  if (window.matchMedia('(hover: none)').matches) return; // tactile → skip

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const dot = document.createElement('div');
  dot.className = 'custom-cursor__dot';
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Le dot suit avec un léger retard (lerp)
  function animateDot() {
    dotX += (mouseX - dotX) * 0.12;
    dotY += (mouseY - dotY) * 0.12;
    dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    requestAnimationFrame(animateDot);
  }
  animateDot();

  // Agrandir sur les éléments interactifs
  const hoverEls = 'a, button, .practice-card, .forfait, .soin-row, .nav__link';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverEls)) {
      cursor.classList.add('custom-cursor--hover');
      dot.classList.add('custom-cursor__dot--hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverEls)) {
      cursor.classList.remove('custom-cursor--hover');
      dot.classList.remove('custom-cursor__dot--hover');
    }
  });
}

// ============================================================
// TEXTE SPLIT — animation lettre par lettre sur les H1
// ============================================================
function initSplitText() {
  // Seulement sur les page-header h1 (pas le hero qui a sa propre animation)
  const headers = document.querySelectorAll('.page-header h1');
  headers.forEach(h1 => {
    const html = h1.innerHTML;
    // On ne split que les noeuds texte simples (pas les <em>)
    h1.classList.add('split-ready');
  });
}

// ============================================================
// INIT GLOBAL — appelé après chaque changement de page
// ============================================================
let _cleanups = [];

function initAnimations() {
  // Nettoyer les listeners précédents
  _cleanups.forEach(fn => fn && fn());
  _cleanups = [];

  // Lancer toutes les animations
  requestAnimationFrame(() => {
    initHeroEntrance();
    _cleanups.push(initParallax());
    _cleanups.push(initProgressBar());

    // Petit délai pour que le DOM soit peint
    setTimeout(() => {
      initScrollReveal();
    }, 60);
  });
}

Object.assign(window, { initAnimations, triggerPageTransition });
