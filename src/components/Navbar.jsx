'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useSimulator } from '../context/SimulatorContext';

const NAV_ITEMS = [
  { label: 'ABOUT', target: 'about' },
  { label: 'SERVICES', target: 'capabilities' },
  { label: 'PRODUCT EXPERTISE', target: 'expertise' },
  { label: 'R&D LAB', target: 'rd' },
  { label: 'PORTFOLIO', target: 'factory' }
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { openSimulator } = useSimulator();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (target === 'home') {
      router.push('/');
    } else if (target === 'about') {
      router.push('/about');
    } else if (target === 'capabilities') {
      router.push('/services');
    } else if (target === 'expertise') {
      router.push('/product-expertise');
    } else if (target === 'rd') {
      router.push('/rd-lab');
    } else if (target === 'factory') {
      router.push('/portfolio');
    } else if (target === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getActiveSection = () => {
    if (pathname === '/about') return 'about';
    if (pathname === '/services') return 'capabilities';
    if (pathname === '/product-expertise') return 'expertise';
    if (pathname === '/rd-lab') return 'rd';
    if (pathname === '/portfolio') return 'factory';
    if (pathname === '/') return 'home';
    return '';
  };

  const activeSection = getActiveSection();

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
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer' }}
      >
        <img 
          src="/logo_black.png"
          alt="EGC Logo" 
          style={{ height: '48px', width: 'auto', display: 'block' }} 
        />
        <span style={{ fontSize: '8px', color: '#2d2736', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: '700', marginTop: '2px', fontFamily: 'Outfit, sans-serif' }}>
          Ekora Global Consulting
        </span>
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
          onClick={openSimulator}
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
        }} className="mobile-menu-drawer">
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
              onClick={() => { setMobileMenuOpen(false); openSimulator(); }}
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
      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 1024px) {
          .desktop-menu, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          nav {
            padding: 0 16px !important;
          }
          .mobile-menu-drawer {
            padding: 20px 16px !important;
          }
        }
      `}} />
    </nav>
  );
}
