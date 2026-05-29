import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'About Us', target: 'about' },
  { label: 'Services', target: 'capabilities' },
  { label: 'Product Expertise', target: 'expertise' },
  { label: 'Global Markets', target: 'global' },
  { label: 'R&D Innovation', target: 'rd' },
  { label: 'Factory Setup', target: 'factory' },
  { label: 'Testimonials', target: 'testimonials' },
  { label: 'Contact', target: 'contact' }
];

export default function Navbar({ onOpenSimulator }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(181, 137, 59, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      zIndex: 50,
      transition: 'all 0.3s ease'
    }}>
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick('home')}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
      >
        <svg viewBox="0 0 100 100" style={{ width: '38px', height: '38px', fill: '#b5893b' }}>
          <path d="M50 15 C35 30, 20 45, 20 60 C20 75, 30 85, 50 85 C70 85, 80 75, 80 60 C80 45, 65 30, 50 15 Z M50 25 C60 38, 72 50, 72 60 C72 70, 62 77, 50 77 C38 77, 28 70, 28 60 C28 50, 40 38, 50 25 Z" />
          <path d="M50 35 C45 42, 42 48, 42 55 C42 62, 47 67, 50 67 C53 67, 58 62, 58 55 C58 48, 55 42, 50 35 Z" fill="#b5893b" opacity="0.8" />
        </svg>
        <div>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 'bold', color: '#b5893b', letterSpacing: '1px', display: 'block', lineHeight: 1.1 }}>EGC</span>
          <span style={{ fontSize: '8px', color: '#2d2736', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>Ekora Global Consulting</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="desktop-menu">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            onClick={() => handleNavClick(item.target)}
            className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 4px',
              borderBottom: activeSection === item.target ? '2px solid #b5893b' : '2px solid transparent'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} className="desktop-actions">
        <button
          onClick={onOpenSimulator}
          style={{
            padding: '8px 16px',
            background: 'transparent',
            color: '#b5893b',
            border: '1px solid #b5893b',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          className="enter-lab-btn"
        >
          Enter R&D Lab
        </button>
        <button
          onClick={() => handleNavClick('contact')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: '#b5893b',
            color: '#fbfaf7',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          Get Consultation
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#1b0b30',
          cursor: 'pointer',
          display: 'none'
        }}
        className="mobile-toggle"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          background: '#ffffff',
          borderBottom: '1px solid rgba(181, 137, 59, 0.3)',
          padding: '20px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 49
        }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '10px 0',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                fontSize: '15px'
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSimulator(); }}
              style={{
                padding: '12px',
                background: 'transparent',
                color: '#b5893b',
                border: '1px solid #b5893b',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Enter R&D Lab
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                padding: '12px',
                background: '#b5893b',
                color: '#fbfaf7',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}

      {/* Inline styles for responsive menu */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
