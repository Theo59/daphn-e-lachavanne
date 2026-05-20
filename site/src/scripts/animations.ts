// Animations — scroll reveal, hero entrance, parallax, progress bar, custom cursor

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const SELECTORS = [
    '.page-header .label',
    '.page-header .t-label',
    '.page-header h1',
    '.page-header .grid-2 > *',
    'section .label:not(nav *)',
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

  const allEls = new Set<Element>();
  SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => allEls.add(el));
  });

  const STAGGER_PARENTS = ['.grid-3', '.grid-4', '.grid-2', '.photo-grid-4', '.service-icon-grid'];
  STAGGER_PARENTS.forEach(sel => {
    document.querySelectorAll(sel).forEach(parent => {
      Array.from(parent.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--stagger-delay', `${i * 0.1}s`);
        (child as HTMLElement).dataset.stagger = 'true';
      });
    });
  });

  allEls.forEach(el => {
    if (!(el as HTMLElement).dataset.revealed) {
      el.classList.add('reveal');
      (el as HTMLElement).dataset.revealed = '1';
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.style.transitionDelay = el.dataset.stagger ? (el.style.getPropertyValue('--stagger-delay') || '0s') : '0s';
        el.classList.add('reveal--visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  allEls.forEach(el => observer.observe(el));
}

// ============================================================
// HERO ENTRANCE
// ============================================================
function initHeroEntrance() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const sequences: { sel: string; delay: number }[] = [
    { sel: '.hero__label',        delay: 200 },
    { sel: '.hero__title',        delay: 450 },
    { sel: '.hero__sub',          delay: 750 },
    { sel: '.hero__content .btn', delay: 950 },
    { sel: '.hero__footer',       delay: 1100 },
  ];

  sequences.forEach(({ sel, delay }) => {
    const el = hero.querySelector(sel);
    if (!el) return;
    el.classList.add('hero-seq');
    setTimeout(() => el.classList.add('hero-seq--visible'), delay);
  });
}

// ============================================================
// PARALLAX HERO
// ============================================================
function initParallax(): (() => void) | undefined {
  const heroBg = document.querySelector<HTMLElement>('.hero__bg');
  if (!heroBg) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

// ============================================================
// PROGRESS BAR
// ============================================================
function initProgressBar(): (() => void) | undefined {
  let bar = document.getElementById('nav-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'nav-progress';
    bar.className = 'nav-progress';
    document.body.appendChild(bar);
  }
  const barEl = bar;

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    barEl.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

// ============================================================
// NAV SCROLL (hero → light)
// ============================================================
function initNavScroll() {
  const nav = document.querySelector<HTMLElement>('.nav');
  if (!nav || !nav.classList.contains('nav--hero')) return;

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.remove('nav--hero');
      nav.classList.add('nav--light');
    } else {
      nav.classList.remove('nav--light');
      nav.classList.add('nav--hero');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ============================================================
// PAGE SWEEP (liens internes)
// ============================================================
function initPageSweep() {
  let sweep = document.getElementById('page-sweep');
  if (!sweep) {
    sweep = document.createElement('div');
    sweep.id = 'page-sweep';
    sweep.className = 'page-sweep';
    document.body.appendChild(sweep);
  }
  const sweepEl = sweep;

  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
    const href = link.getAttribute('href') || '';
    // Only intercept same-origin, non-hash, non-external links
    if (
      href.startsWith('/') &&
      !href.startsWith('//') &&
      !link.hasAttribute('target') &&
      !link.hasAttribute('download')
    ) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dest = href;
        sweepEl.classList.remove('page-sweep--out');
        sweepEl.classList.add('page-sweep--in');
        setTimeout(() => {
          window.location.href = dest;
        }, 300);
      });
    }
  });
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
function initCustomCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const dot = document.createElement('div');
  dot.className = 'custom-cursor__dot';
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateDot() {
    dotX += (mouseX - dotX) * 0.12;
    dotY += (mouseY - dotY) * 0.12;
    dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    requestAnimationFrame(animateDot);
  }
  animateDot();

  const hoverSel = 'a, button, .practice-card, .forfait, .soin-row, .nav__link';
  document.addEventListener('mouseover', e => {
    if ((e.target as Element).closest(hoverSel)) {
      cursor.classList.add('custom-cursor--hover');
      dot.classList.add('custom-cursor__dot--hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if ((e.target as Element).closest(hoverSel)) {
      cursor.classList.remove('custom-cursor--hover');
      dot.classList.remove('custom-cursor__dot--hover');
    }
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    initHeroEntrance();
    initNavScroll();
    initParallax();
    initProgressBar();
    initCustomCursor();
    setTimeout(initScrollReveal, 60);
  });

  // Page-enter class on main
  const main = document.querySelector('main');
  if (main) main.classList.add('page-enter');
});
