// Daphné Lachavanne — Brand kit (shared)
// Logo, gradient blobs, tokens, typography. Loaded before pages.

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

// ---------- Logo (signature) ----------
// "daphné lachavanne" in lowercase tenor sans-ish — the brand book shows the
// logo in white only; we render in currentColor so the logo inherits color.
function Logo({ size = 22, mark = true, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: size * 0.5,
      fontFamily: '"Tenor Sans", serif', fontSize: size, letterSpacing: '0.04em',
      lineHeight: 1, color: 'currentColor', ...style,
    }}>
      {mark && <LogoMark size={size * 1.05} />}
      <span style={{ display: 'inline-flex', gap: '0.06em' }}>
        <span>daphné</span>
        <span style={{ opacity: 0.7 }}>lachavanne</span>
      </span>
    </span>
  );
}

// A small mark: a breathing-dot inside an ellipse — the "souffle" symbol.
function LogoMark({ size = 24, color = 'currentColor' }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="14" ry="9" stroke={color} strokeWidth="1" />
      <circle cx="16" cy="16" r="2.5" fill={color} />
    </svg>
  );
}

// ---------- Gradient (univers pictural) ----------
// Soft animated orange↔bleu profond gradient blob. Inline SVG with
// feGaussianBlur for the "doux/intense/aérien" feel from the brand book.
function GradientBlob({
  variant: variantProp, // doux | intense | aerien | uni-orange | uni-blue | mix
  className = '', style = {}, animated = true,
}) {
  // Allow Tweaks-panel global override for the hero variant.
  const variant = variantProp || window.__heroVariant || 'doux';
  const id = React.useId();
  const presets = {
    doux:        { stops: [['0%', Brand.orange, 0.85], ['55%', '#ff3d8a', 0.7], ['100%', Brand.blue, 0.95]], blur: 20 },
    intense:     { stops: [['0%', '#ffb347', 1], ['40%', Brand.orange, 1], ['100%', Brand.blue, 1]], blur: 6 },
    aerien:      { stops: [['0%', '#ffd6a0', 0.9], ['60%', '#c9a4ff', 0.7], ['100%', Brand.blue, 0.85]], blur: 28 },
    'uni-orange':{ stops: [['0%', '#ffb347', 1], ['100%', Brand.orange, 1]], blur: 8 },
    'uni-blue':  { stops: [['0%', '#3b1ec9', 1], ['100%', Brand.blue, 1]], blur: 8 },
    mix:         { stops: [['0%', Brand.orange, 1], ['50%', '#a01dbb', 1], ['100%', Brand.blue, 1]], blur: 4 },
  };
  const p = presets[variant] || presets.doux;
  return (
    <div className={className} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
        <defs>
          <radialGradient id={id + '-rg'} cx="50%" cy="50%" r="65%">
            {p.stops.map(([o, c, a], i) => (
              <stop key={i} offset={o} stopColor={c} stopOpacity={a} />
            ))}
          </radialGradient>
          <filter id={id + '-bl'} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation={p.blur} />
          </filter>
        </defs>
        <g filter={`url(#${id}-bl)`}>
          <ellipse cx="300" cy="400" rx="320" ry="380" fill={`url(#${id}-rg)`}>
            {animated && (
              <>
                <animate attributeName="cx" values="280;320;280" dur="14s" repeatCount="indefinite" />
                <animate attributeName="cy" values="380;420;380" dur="11s" repeatCount="indefinite" />
                <animate attributeName="rx" values="300;340;300" dur="13s" repeatCount="indefinite" />
              </>
            )}
          </ellipse>
        </g>
      </svg>
    </div>
  );
}

// ---------- Symbols (bibliothèque) ----------
// Hand-drawn-feel monoline glyphs inspired by the brand book's "bibliothèque
// de symbole" page — breath / spiral / sun / wave / triangle / dot.
function Sym({ kind, size = 48, stroke = 1.2, color = 'currentColor' }) {
  const props = { width: size, height: size, viewBox: '0 0 48 48', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'breath':  return <svg {...props}><ellipse cx="24" cy="24" rx="20" ry="10" /><ellipse cx="24" cy="24" rx="14" ry="6" /><circle cx="24" cy="24" r="1.5" fill={color} /></svg>;
    case 'spiral':  return <svg {...props}><path d="M24 24 m-2 0 a2 2 0 1 1 4 0 a4 4 0 1 1 -8 0 a6 6 0 1 1 12 0 a8 8 0 1 1 -16 0 a10 10 0 1 1 20 0 a12 12 0 1 1 -24 0" /></svg>;
    case 'sun':     return <svg {...props}><circle cx="24" cy="24" r="6" /><g>{[...Array(8)].map((_,i)=>{const a=(i*Math.PI)/4;return <line key={i} x1={24+Math.cos(a)*10} y1={24+Math.sin(a)*10} x2={24+Math.cos(a)*15} y2={24+Math.sin(a)*15}/>})}</g></svg>;
    case 'wave':    return <svg {...props}><path d="M4 28 Q12 18 20 28 T36 28 T52 28" /><path d="M4 36 Q12 26 20 36 T36 36 T52 36" opacity="0.5" /></svg>;
    case 'triangle':return <svg {...props}><path d="M24 8 L40 38 L8 38 Z" /></svg>;
    case 'dot':     return <svg {...props}><circle cx="24" cy="24" r="2" fill={color} /><circle cx="24" cy="24" r="10" /><circle cx="24" cy="24" r="18" opacity="0.5" /></svg>;
    case 'arrow':   return <svg {...props}><line x1="6" y1="24" x2="42" y2="24" /><path d="M34 16 L42 24 L34 32" /></svg>;
    case 'plus':    return <svg {...props}><line x1="24" y1="10" x2="24" y2="38" /><line x1="10" y1="24" x2="38" y2="24" /></svg>;
    default: return null;
  }
}

// ---------- Photo placeholder ----------
// For shots we don't have. Black-and-white feel with a "video" hint.
function PhotoSlot({ label = 'Photo', kind = 'photo', aspect = '4/5', style = {} }) {
  const isVideo = kind === 'video';
  return (
    <div style={{
      position: 'relative', aspectRatio: aspect, width: '100%',
      background: 'linear-gradient(135deg, #2a2520 0%, #4a4238 50%, #1a1612 100%)',
      borderRadius: 2, overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end', padding: 14,
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)',
        mixBlendMode: 'overlay',
      }} />
      {isVideo && window.__showVideoBadges !== false && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          display: 'flex', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.85)', fontFamily: '"Tenor Sans", serif',
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: Brand.orange, boxShadow: `0 0 8px ${Brand.orange}` }} />
          vidéo
        </div>
      )}
      <span style={{
        color: 'rgba(255,255,255,0.7)', fontFamily: '"Tenor Sans", serif',
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>{label}</span>
    </div>
  );
}

// Real photo wrapper — applies the B&W look from the uploaded shots.
function Photo({ src, alt = '', aspect = '4/5', filter = 'grayscale(1) contrast(0.95)', style = {} }) {
  return (
    <div style={{ position: 'relative', aspectRatio: aspect, width: '100%', overflow: 'hidden', background: '#2a2520', ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter, display: 'block' }} />
    </div>
  );
}

Object.assign(window, { Logo, LogoMark, GradientBlob, Sym, PhotoSlot, Photo });
