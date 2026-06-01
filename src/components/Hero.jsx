import React from 'react';
import { FlaskConical, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroProducts from '../assets/hero_products.png';

/* ─── Laurel Wreath Seal ─────────────────────────────────────────── */
const LaurelSeal = ({ lines }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
    <svg width="18" height="44" viewBox="0 0 18 44" fill="none">
      <path d="M16 40C10 38 6 30 6 18C6 12 8 6 10 2" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="7"  cy="7"  rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-35 7 7)"/>
      <ellipse cx="5"  cy="14" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-20 5 14)"/>
      <ellipse cx="4"  cy="21" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-10 4 21)"/>
      <ellipse cx="5"  cy="28" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(5 5 28)"/>
      <ellipse cx="8"  cy="35" rx="3.5" ry="2"   fill="#C89B3C" transform="rotate(15 8 35)"/>
    </svg>
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '8px',
      fontWeight: '700', letterSpacing: '0.6px', lineHeight: '1.4',
      textTransform: 'uppercase', minWidth: '80px',
    }}>
      {lines.map((l, i) => (
        <span key={i} style={{
          color: i === lines.length - 1 ? '#8a7f98' : '#C89B3C',
          fontWeight: i === lines.length - 1 ? '500' : '700',
          fontSize: i === lines.length - 1 ? '7px' : '8px',
        }}>{l}</span>
      ))}
    </div>
    <svg width="18" height="44" viewBox="0 0 18 44" fill="none" style={{ transform: 'scaleX(-1)' }}>
      <path d="M16 40C10 38 6 30 6 18C6 12 8 6 10 2" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="7"  cy="7"  rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-35 7 7)"/>
      <ellipse cx="5"  cy="14" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-20 5 14)"/>
      <ellipse cx="4"  cy="21" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(-10 4 21)"/>
      <ellipse cx="5"  cy="28" rx="4"   ry="2.5" fill="#C89B3C" transform="rotate(5 5 28)"/>
      <ellipse cx="8"  cy="35" rx="3.5" ry="2"   fill="#C89B3C" transform="rotate(15 8 35)"/>
    </svg>
  </div>
);

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function Hero({ onOpenSimulator }) {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/services');
  };

  return (
    <>
      <style>{`
        /* ── Root ── */
        .hero-root {
          margin-top: 80px;
          height: calc(100vh - 80px);
          min-height: 640px;
          display: flex;
          overflow: hidden;
          position: relative;
          background: linear-gradient(140deg, #fdfcf8 0%, #f6f1e9 100%);
          border-bottom: 1px solid rgba(200,155,60,0.12);
        }

        /* ── Left text panel (40%) ── */
        .hero-left {
          flex: 0 0 40%;
          display: flex;
          align-items: center;
          padding: 72px 56px 72px 68px;
          position: relative;
          z-index: 4;
          /* Soft cream background that fades rightward */
          background: linear-gradient(105deg,
            #fdfcf8 0%,
            #faf7f0 60%,
            rgba(250,247,240,0.92) 85%,
            rgba(250,247,240,0) 100%
          );
        }

        /* Left panel ambient radial glow behind text */
        .hero-left::before {
          content: '';
          position: absolute;
          top: 8%;
          right: -80px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(200,155,60,0.07) 0%, transparent 68%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Right image panel (60%) ── */
        .hero-right {
          flex: 1 1 0;
          position: relative;
          overflow: hidden;
          /* NO clip-path — blending is handled by overlays only */
        }

        /* The actual photograph */
        .hero-right > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Shift slightly right so centre of products is visible,
             toner bottle stays fully framed */
          object-position: 55% center;
          display: block;
        }

        /* ── Layered overlays on the image (stacked z-index order) ── */

        /* 1. Left-edge feather: wide cream→transparent fade for seamless seam */
        .hero-ov-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(253,252,248,1)   0%,
            rgba(253,252,248,0.82) 8%,
            rgba(253,252,248,0.45) 18%,
            rgba(253,252,248,0.12) 30%,
            transparent            44%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* 2. Bottom vignette: grounds the marble surface */
        .hero-ov-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 28%;
          background: linear-gradient(
            to top,
            rgba(240,235,225,0.50) 0%,
            rgba(240,235,225,0.20) 50%,
            transparent           100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* 3. Top vignette: soft studio ceiling light */
        .hero-ov-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 20%;
          background: linear-gradient(
            to bottom,
            rgba(255,253,248,0.40) 0%,
            transparent           100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* 4. Central warm glow: luxury product spotlight */
        .hero-ov-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 62% 58% at 58% 50%,
            rgba(255,238,190,0.13) 0%,
            transparent            70%
          );
          z-index: 3;
          pointer-events: none;
        }

        /* 5. Right-edge subtle dark vignette for depth */
        .hero-ov-right {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to left,
            rgba(20,10,30,0.12) 0%,
            transparent          20%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* ── Thin golden arc seam at the junction ── */
        .hero-seam {
          position: absolute;
          /* sits right at the 40% mark, centered on the boundary */
          left: calc(40% - 32px);
          top: 0;
          width: 64px;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1140px) {
          .hero-left  { flex: 0 0 44%; padding: 60px 44px 60px 52px; }
          .hero-seam  { left: calc(44% - 32px); }
        }
        @media (max-width: 860px) {
          .hero-root  { flex-direction: column; height: auto; min-height: 100svh; }
          .hero-left  { flex: none; width: 100%; padding: 56px 36px 44px; background: #fdfcf8; }
          .hero-left::before { display: none; }
          .hero-right { flex: none; width: 100%; height: 58vw; min-height: 300px; }
          .hero-right > img { object-position: center 30%; }
          .hero-seam  { display: none; }
        }
        @media (max-width: 540px) {
          .hero-left  { padding: 44px 22px 36px; }
          .hero-right { height: 74vw; }
        }
      `}</style>

      <section id="home" className="hero-root">

        {/* ── LEFT: editorial text content ── */}
        <div className="hero-left">
          <div style={{
            display: 'flex', flexDirection: 'column',
            gap: '22px', position: 'relative', zIndex: 1, width: '100%',
          }}>
            {/* Eyebrow */}
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '10.5px', fontWeight: '700',
              color: '#C89B3C', letterSpacing: '3.2px', textTransform: 'uppercase',
            }}>
              The Science of Luxury Beauty
            </span>

            {/* H1 */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(34px, 3.5vw, 58px)',
              fontWeight: '700', color: '#1a0929',
              lineHeight: '1.13', margin: 0,
            }}>
              Engineering<br />
              Excellence In<br />
              Every{' '}
              <span style={{ color: '#C89B3C' }}>
                Drop
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#C89B3C"
                  style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '5px', marginBottom: '3px' }}>
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
              </span>
            </h1>

            {/* Gold rule */}
            <div style={{
              width: '44px', height: '1.5px',
              background: 'linear-gradient(90deg, #C89B3C 0%, #e8cc7a 100%)',
              borderRadius: '2px',
            }} />

            {/* Body copy */}
            <p style={{
              fontSize: '14.5px', lineHeight: '1.78', color: '#5c5069',
              maxWidth: '380px', margin: 0,
            }}>
              We design award-winning cosmetic formulations, plan state-of-the-art
              automated production factories, and guide high-growth D2C brands from
              concept to global distribution.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '11px', flexWrap: 'wrap' }}>
              <button
                onClick={handleExploreClick}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #C89B3C 0%, #a87c28 100%)',
                  color: '#fff', border: 'none', borderRadius: '6px',
                  fontWeight: '600', fontSize: '13.5px', cursor: 'pointer',
                  transition: 'transform 0.18s, box-shadow 0.18s',
                  boxShadow: '0 5px 18px rgba(200,155,60,0.38)',
                  letterSpacing: '0.2px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,155,60,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 18px rgba(200,155,60,0.38)';
                }}
              >
                Explore Services <ArrowRight size={14} />
              </button>

              <button
                onClick={onOpenSimulator}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '11px 22px',
                  background: 'rgba(255,255,255,0.80)', color: '#1a0929',
                  border: '1.5px solid rgba(200,155,60,0.45)', borderRadius: '6px',
                  fontWeight: '600', fontSize: '13.5px', cursor: 'pointer',
                  transition: 'transform 0.18s, background 0.18s',
                  backdropFilter: 'blur(10px)',
                  letterSpacing: '0.2px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f5f0e7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.80)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FlaskConical size={14} style={{ color: '#C89B3C' }} />
                Enter R&D Lab <ArrowRight size={14} />
              </button>
            </div>

            {/* Award seals */}
            <div style={{
              display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center',
              borderTop: '1px solid rgba(200,155,60,0.15)', paddingTop: '20px',
            }}>
              <LaurelSeal lines={['Global', 'Consulting', 'Excellence', 'Awards']} />
              <LaurelSeal lines={['Cosmoprof', 'North America', 'Bologna']} />
              <LaurelSeal lines={['India', 'Business', 'Awards']} />
            </div>
          </div>
        </div>

        {/* ── RIGHT: immersive product image ── */}
        <div className="hero-right">
          <img
            src={heroProducts}
            alt="EGC Premium Cosmetic Products — Laboratory Scene"
          />
          {/* Blending overlays — order matters for z-index stacking */}
          <div className="hero-ov-left"   />
          <div className="hero-ov-bottom" />
          <div className="hero-ov-top"    />
          <div className="hero-ov-glow"   />
          <div className="hero-ov-right"  />
        </div>

        {/* ── Thin elegant golden arc seam at the panel boundary ── */}
        <div className="hero-seam" aria-hidden="true">
          <svg
            viewBox="0 0 64 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              {/* Gold gradient fades at top & bottom for an elegant floating feel */}
              <linearGradient id="seamGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#C89B3C" stopOpacity="0"/>
                <stop offset="15%"  stopColor="#C89B3C" stopOpacity="0.75"/>
                <stop offset="50%"  stopColor="#e8cc7a" stopOpacity="1"/>
                <stop offset="85%"  stopColor="#C89B3C" stopOpacity="0.75"/>
                <stop offset="100%" stopColor="#C89B3C" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="seamGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#C89B3C" stopOpacity="0"/>
                <stop offset="50%"  stopColor="#C89B3C" stopOpacity="0.14"/>
                <stop offset="100%" stopColor="#C89B3C" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Soft glow halo behind the arc line */}
            <path
              d="M 32 0 Q 18 500 32 1000"
              fill="none"
              stroke="url(#seamGlow)"
              strokeWidth="18"
            />
            {/* The crisp 1.2px arc line */}
            <path
              d="M 32 0 Q 18 500 32 1000"
              fill="none"
              stroke="url(#seamGold)"
              strokeWidth="1.2"
            />
          </svg>
        </div>

      </section>
    </>
  );
}
