// Daphné Lachavanne — Brand kit (vanilla JS)
// Tokens, helpers, Logo, GradientBlob, Sym, PhotoSlot, Photo

// ---------- Style helper ----------
const UNITLESS = new Set(['opacity','zIndex','fontWeight','flex','flexGrow','flexShrink','order','lineHeight','aspectRatio','strokeWidth','strokeOpacity','fillOpacity','stopOpacity']);

function st(obj) {
  if (!obj) return '';
  return Object.entries(obj).map(([k, v]) => {
    const prop = k.replace(/([A-Z])/g, m => '-' + m.toLowerCase());
    const val = (typeof v === 'number' && v !== 0 && !UNITLESS.has(k)) ? v + 'px' : v;
    return `${prop}:${val}`;
  }).join(';');
}

// ---------- UID helper (for SVG filter IDs) ----------
let _uid = 0;
function uid() { return 'u' + (++_uid); }

// ---------- Tokens ----------
const Brand = {
  orange: '#ff7100',
  blue: '#16066e',
  ink: '#0d0a1f',
  paper: '#f7f4ee',
  cream: '#efeae0',
  warm: '#1a0f3a',
  muted: 'rgba(13,10,31,0.55)',
  rule: 'rgba(13,10,31,0.12)',
};
window.Brand = Brand;

// ---------- Logo ----------
// Utilise le vrai logomark PNG de la charte. `dark` inverse le mark en blanc.
function Logo({ size = 22, dark = false, style = {} } = {}) {
  const markH = Math.round(size * 2);
  const imgStyle = `height:${markH}px;width:auto;display:block${dark ? ';filter:brightness(0) invert(1)' : ''}`;
  const spanStyle = st({
    display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.55),
    fontFamily: '"Tenor Sans", serif', fontSize: size, letterSpacing: '0.04em',
    lineHeight: 1, color: 'currentColor', ...style,
  });
  return `<span style="${spanStyle}"><img src="media/Logo_noir.png" alt="" aria-hidden="true" style="${imgStyle}"/><span style="display:inline-flex;gap:0.06em"><span>daphné</span><span style="opacity:0.7">lachavanne</span></span></span>`;
}

// ---------- GradientBlob ----------
function GradientBlob({ variant: variantProp, className = '', style = {}, animated = true } = {}) {
  const variant = variantProp || 'intense';
  const id = uid();
  const presets = {
    doux:         { stops: [['0%', Brand.orange, 0.85], ['55%', '#ff3d8a', 0.7], ['100%', Brand.blue, 0.95]], blur: 20 },
    intense:      { stops: [['0%', '#ffb347', 1], ['40%', Brand.orange, 1], ['100%', Brand.blue, 1]], blur: 6 },
    aerien:       { stops: [['0%', '#ffd6a0', 0.9], ['60%', '#c9a4ff', 0.7], ['100%', Brand.blue, 0.85]], blur: 28 },
    'uni-orange': { stops: [['0%', '#ffb347', 1], ['100%', Brand.orange, 1]], blur: 8 },
    'uni-blue':   { stops: [['0%', '#3b1ec9', 1], ['100%', Brand.blue, 1]], blur: 8 },
    mix:          { stops: [['0%', Brand.orange, 1], ['50%', '#a01dbb', 1], ['100%', Brand.blue, 1]], blur: 4 },
  };
  const p = presets[variant] || presets.doux;
  const stopTags = p.stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('');
  const animTags = animated ? `
    <animate attributeName="cx" values="280;320;280" dur="14s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="380;420;380" dur="11s" repeatCount="indefinite"/>
    <animate attributeName="rx" values="300;340;300" dur="13s" repeatCount="indefinite"/>
  ` : '';
  const wrapStyle = st({ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style });
  return `<div class="${className}" style="${wrapStyle}"><svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" style="display:block"><defs><radialGradient id="${id}-rg" cx="50%" cy="50%" r="65%">${stopTags}</radialGradient><filter id="${id}-bl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${p.blur}"/></filter></defs><g filter="url(#${id}-bl)"><ellipse cx="300" cy="400" rx="320" ry="380" fill="url(#${id}-rg)">${animTags}</ellipse></g></svg></div>`;
}

// ---------- Sym ----------
function Sym({ kind, size = 48, stroke = 1.2, color = 'currentColor' } = {}) {
  const a = `width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"`;
  switch (kind) {
    case 'breath':
      return `<svg ${a}><ellipse cx="24" cy="24" rx="20" ry="10"/><ellipse cx="24" cy="24" rx="14" ry="6"/><circle cx="24" cy="24" r="1.5" fill="${color}"/></svg>`;
    case 'spiral':
      return `<svg ${a}><path d="M24 24 m-2 0 a2 2 0 1 1 4 0 a4 4 0 1 1 -8 0 a6 6 0 1 1 12 0 a8 8 0 1 1 -16 0 a10 10 0 1 1 20 0 a12 12 0 1 1 -24 0"/></svg>`;
    case 'sun': {
      const lines = [...Array(8)].map((_, i) => {
        const ang = (i * Math.PI) / 4;
        const x1 = (24 + Math.cos(ang) * 10).toFixed(2);
        const y1 = (24 + Math.sin(ang) * 10).toFixed(2);
        const x2 = (24 + Math.cos(ang) * 15).toFixed(2);
        const y2 = (24 + Math.sin(ang) * 15).toFixed(2);
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      }).join('');
      return `<svg ${a}><circle cx="24" cy="24" r="6"/><g>${lines}</g></svg>`;
    }
    case 'wave':
      return `<svg ${a}><path d="M4 28 Q12 18 20 28 T36 28 T52 28"/><path d="M4 36 Q12 26 20 36 T36 36 T52 36" opacity="0.5"/></svg>`;
    case 'triangle':
      return `<svg ${a}><path d="M24 8 L40 38 L8 38 Z"/></svg>`;
    case 'dot':
      return `<svg ${a}><circle cx="24" cy="24" r="2" fill="${color}"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="18" opacity="0.5"/></svg>`;
    case 'arrow':
      return `<svg ${a}><line x1="6" y1="24" x2="42" y2="24"/><path d="M34 16 L42 24 L34 32"/></svg>`;
    case 'plus':
      return `<svg ${a}><line x1="24" y1="10" x2="24" y2="38"/><line x1="10" y1="24" x2="38" y2="24"/></svg>`;
    default:
      return '';
  }
}

// ---------- PhotoSlot ----------
function PhotoSlot({ label = 'Photo', kind = 'photo', aspect = '4/5', style = {} } = {}) {
  const isVideo = kind === 'video';
  const wrapStyle = st({
    position: 'relative', aspectRatio: aspect, width: '100%',
    background: 'linear-gradient(135deg, #2a2520 0%, #4a4238 50%, #1a1612 100%)',
    borderRadius: 2, overflow: 'hidden',
    display: 'flex', alignItems: 'flex-end', padding: 14,
    ...style,
  });
  const videoBadge = isVideo ? `<div style="position:absolute;top:14px;right:14px;display:flex;align-items:center;gap:6px;color:rgba(255,255,255,0.85);font-family:'Tenor Sans',serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase"><span style="width:6px;height:6px;border-radius:50%;background:${Brand.orange};box-shadow:0 0 8px ${Brand.orange}"></span>vidéo</div>` : '';
  return `<div style="${wrapStyle}"><div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.04) 0 1px,transparent 1px 3px);mix-blend-mode:overlay"></div>${videoBadge}<span style="color:rgba(255,255,255,0.7);font-family:'Tenor Sans',serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase">${label}</span></div>`;
}

// ---------- Photo ----------
function Photo({ src, alt = '', aspect = '4/5', filter = 'grayscale(1) contrast(0.95)', style = {} } = {}) {
  const wrapStyle = st({ position: 'relative', aspectRatio: aspect, width: '100%', overflow: 'hidden', background: '#2a2520', ...style });
  return `<div style="${wrapStyle}"><img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;filter:${filter};display:block"/></div>`;
}

Object.assign(window, { st, uid, Brand, Logo, LogoMark, GradientBlob, Sym, PhotoSlot, Photo });
