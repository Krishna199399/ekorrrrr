'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, PhoneCall, ArrowRight, ChevronDown } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSimulator } from '../context/SimulatorContext';
import { SERVICES_DATA } from '../data/servicesData';

// ─────────────────────────────────────────────────────────────────────────────
// Mega Menu — 3 column groupings
// ─────────────────────────────────────────────────────────────────────────────
const MEGA_COLUMNS = [
  {
    label: 'R&D & Formulation Laboratory',
    color: '#7b5cb7',
    slugs: [
      'cosmetic-research-product-development',
      'cosmetic-stability-testing-shelf-life-validation',
      'ingredient-sourcing-support',
      'cosmetic-innovation-rd-productivity-consulting',
    ],
  },
  {
    label: 'Industrial Engineering & Setup',
    color: '#b5893b',
    slugs: [
      'plant-setup-factory-planning',
      'turnkey-cosmetic-project-solutions',
      'cosmetic-manufacturing-consulting',
      'scale-up-commercialization-support',
    ],
  },
  {
    label: 'Regulatory & Quality Audits',
    color: '#5a8a6b',
    slugs: [
      'regulatory-compliance-support',
      'export-documentation-support',
    ],
  },
  {
    label: 'Brand, DPR & Business Advisory',
    color: '#c06b8a',
    slugs: [
      'private-label-contract-manufacturing',
      'cosmetic-dpr-business-consulting',
      'technical-recruitment-team-building',
      'packaging-development-sourcing',
      'branding-go-to-market-consulting',
    ],
  },
];

// Pre-build lookup map
const SERVICE_MAP = Object.fromEntries(SERVICES_DATA.map((s) => [s.slug, s]));

// Top-level nav items (non-services)
const NAV_ITEMS = [
  { label: 'ABOUT', target: 'about' },
  { label: 'PRODUCT EXPERTISE', target: 'expertise' },
  { label: 'R&D LAB', target: 'rd' },
  { label: 'PORTFOLIO', target: 'factory' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { openSimulator } = useSimulator();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  // Delay-buffer timer ref — prevents accidental close when mouse
  // moves diagonally from SERVICES button down to the mega panel
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up timer on unmount
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    setMegaOpen(false);
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
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isServicesActive =
    pathname === '/services' || pathname.startsWith('/services/');

  const getActiveSection = () => {
    if (pathname === '/about' || pathname === '/about-us') return 'about';
    if (pathname === '/product-expertise') return 'expertise';
    if (pathname === '/rd-lab') return 'rd';
    if (pathname === '/portfolio') return 'factory';
    if (pathname === '/') return 'home';
    return '';
  };

  const activeSection = getActiveSection();

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.99)'
            : 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(181, 137, 59, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          zIndex: 200,
          transition: 'all 0.3s ease',
        }}
      >
        {/* ── Brand Logo ── */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <img
            src="/logo_black.png"
            alt="EGC Logo"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </div>

        {/* ── Desktop Nav Links ── */}
        <div
          style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
          className="desktop-menu"
        >
          {/* ABOUT */}
          <button
            onClick={() => handleNavClick('about')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 10px',
              borderBottom:
                activeSection === 'about'
                  ? '2px solid #b5893b'
                  : '2px solid transparent',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            ABOUT
          </button>

          {/* SERVICES — mega menu trigger */}
          <div
            className="mega-trigger"
            onMouseEnter={openMega}
            onMouseLeave={scheduleMegaClose}
          >
            <button
              onClick={() => handleNavClick('capabilities')}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 10px',
                borderBottom:
                  isServicesActive || megaOpen
                    ? '2px solid #b5893b'
                    : '2px solid transparent',
                fontSize: '13px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: isServicesActive || megaOpen ? '#b5893b' : undefined,
              }}
            >
              SERVICES
              <ChevronDown
                size={13}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: megaOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
          </div>

          {/* PRODUCT EXPERTISE */}
          <button
            onClick={() => handleNavClick('expertise')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 10px',
              borderBottom:
                activeSection === 'expertise'
                  ? '2px solid #b5893b'
                  : '2px solid transparent',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            PRODUCT EXPERTISE
          </button>

          {/* R&D LAB */}
          <button
            onClick={() => handleNavClick('rd')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 10px',
              borderBottom:
                activeSection === 'rd'
                  ? '2px solid #b5893b'
                  : '2px solid transparent',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            R&D LAB
          </button>

          {/* PORTFOLIO */}
          <button
            onClick={() => handleNavClick('factory')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 10px',
              borderBottom:
                activeSection === 'factory'
                  ? '2px solid #b5893b'
                  : '2px solid transparent',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            PORTFOLIO
          </button>
        </div>

        {/* ── Action Buttons ── */}
        <div
          style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}
          className="desktop-actions"
        >
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
              transition: 'all 0.2s',
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
              transition: 'background 0.2s',
            }}
          >
            Get Consultation
            <ArrowRight size={14} />
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#1b0b30',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MEGA MENU PANEL                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <div
        className={`mega-panel ${megaOpen ? 'mega-panel-open' : ''}`}
        onMouseEnter={openMega}
        onMouseLeave={scheduleMegaClose}
      >
        <div className="mega-inner">
          {/* 3 columns */}
          <div className="mega-cols">
            {MEGA_COLUMNS.map((col) => (
              <div key={col.label} className="mega-col">
                {/* Column header */}
                <div className="mega-col-header">
                  <div
                    className="mega-col-dot"
                    style={{ background: col.color }}
                  />
                  <span
                    className="mega-col-label"
                    style={{ color: col.color }}
                  >
                    {col.label}
                  </span>
                </div>
                <div
                  className="mega-col-divider"
                  style={{ background: `${col.color}40` }}
                />

                {/* Service items */}
                <ul className="mega-service-list">
                  {col.slugs.map((slug) => {
                    const svc = SERVICE_MAP[slug];
                    if (!svc) return null;
                    const isActive = pathname === `/services/${slug}`;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className={`mega-service-item ${isActive ? 'mega-item-active' : ''}`}
                          onClick={() => setMegaOpen(false)}
                          style={{
                            '--item-color': col.color,
                          }}
                        >
                          <span
                            className="mega-item-dot"
                            style={{ background: col.color }}
                          />
                          <span className="mega-item-name">{svc.name}</span>
                          <ArrowRight
                            size={12}
                            className="mega-item-arrow"
                            style={{ color: col.color }}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mega-footer">
            <span className="mega-footer-text">
              15 specialized consulting services across 4 practice areas
            </span>
            <Link
              href="/services"
              className="mega-footer-cta"
              onClick={() => setMegaOpen(false)}
            >
              View All Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mega backdrop (closes menu on outside click) */}
      {megaOpen && (
        <div
          className="mega-backdrop"
          onMouseEnter={scheduleMegaClose}
          onClick={() => setMegaOpen(false)}
        />
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MOBILE MENU DRAWER                                                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {/* ABOUT */}
          <button
            onClick={() => handleNavClick('about')}
            className="mobile-nav-item"
          >
            About
          </button>

          {/* SERVICES accordion */}
          <div className="mobile-accordion">
            <button
              className="mobile-nav-item mobile-accordion-toggle"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                style={{
                  transition: 'transform 0.25s',
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#b5893b',
                }}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mobile-services-list">
                {/* Overview link */}
                <Link
                  href="/services"
                  className="mobile-service-overview"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  → View All Services Overview
                </Link>

                {MEGA_COLUMNS.map((col) => (
                  <div key={col.label} className="mobile-service-group">
                    <span
                      className="mobile-group-label"
                      style={{ color: col.color }}
                    >
                      {col.label}
                    </span>
                    {col.slugs.map((slug) => {
                      const svc = SERVICE_MAP[slug];
                      if (!svc) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="mobile-service-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {svc.name}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other nav items */}
          <button
            onClick={() => handleNavClick('expertise')}
            className="mobile-nav-item"
          >
            Product Expertise
          </button>
          <button
            onClick={() => handleNavClick('rd')}
            className="mobile-nav-item"
          >
            R&D Lab
          </button>
          <button
            onClick={() => handleNavClick('factory')}
            className="mobile-nav-item"
          >
            Portfolio
          </button>

          {/* CTA buttons */}
          <div className="mobile-cta-row">
            <button
              onClick={() => { setMobileMenuOpen(false); openSimulator(); }}
              className="mobile-cta-outline"
            >
              Enter R&D Lab
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-cta-fill"
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* STYLES                                                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── Mega trigger wrapper ── */
        .mega-trigger {
          position: relative;
        }

        /* ── Mega Panel ── */
        .mega-panel {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          z-index: 199;
          background: white;
          border-bottom: 1px solid rgba(181,137,59,0.18);
          box-shadow: 0 20px 60px rgba(27,11,48,0.12);
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .mega-panel-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .mega-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 36px 40px 0;
        }

        /* ── Columns ── */
        .mega-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .mega-col {
          padding: 0 32px 32px 0;
        }
        .mega-col:not(:first-child) {
          padding-left: 32px;
          border-left: 1px solid rgba(181,137,59,0.1);
        }
        .mega-col-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .mega-col-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .mega-col-label {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-family: var(--font-sans);
        }
        .mega-col-divider {
          height: 1px;
          margin-bottom: 16px;
        }

        /* ── Service items ── */
        .mega-service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mega-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 7px;
          text-decoration: none;
          color: #2d2736;
          font-size: 13.5px;
          font-weight: 500;
          font-family: var(--font-sans);
          transition: all 0.18s ease;
          position: relative;
        }
        .mega-service-item:hover {
          background: rgba(181,137,59,0.06);
          color: #1b0b30;
          transform: translateX(3px);
        }
        .mega-item-active {
          background: rgba(181,137,59,0.06);
          font-weight: 700;
          color: #1b0b30;
        }
        .mega-item-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.7;
          transition: opacity 0.18s;
        }
        .mega-service-item:hover .mega-item-dot {
          opacity: 1;
        }
        .mega-item-name {
          flex: 1;
          line-height: 1.35;
        }
        .mega-item-arrow {
          opacity: 0;
          transition: opacity 0.18s ease, transform 0.18s ease;
          flex-shrink: 0;
        }
        .mega-service-item:hover .mega-item-arrow {
          opacity: 1;
          transform: translateX(2px);
        }

        /* ── Mega footer strip ── */
        .mega-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          margin-top: 8px;
          border-top: 1px solid rgba(181,137,59,0.12);
        }
        .mega-footer-text {
          font-size: 12px;
          color: #7c728a;
          font-style: italic;
          font-family: var(--font-sans);
        }
        .mega-footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          background: #1b0b30;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 12.5px;
          font-weight: 700;
          font-family: var(--font-sans);
          letter-spacing: 0.3px;
          transition: all 0.2s ease;
        }
        .mega-footer-cta:hover {
          background: #b5893b;
          transform: translateY(-1px);
        }

        /* ── Backdrop ── */
        .mega-backdrop {
          position: fixed;
          inset: 0;
          top: 80px;
          z-index: 198;
          background: transparent;
        }

        /* ── Desktop responsive breakpoints ── */
        @media (max-width: 1024px) {
          .desktop-menu, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .mega-panel {
            display: none !important;
          }
          .mega-backdrop {
            display: none !important;
          }
        }

        /* ── Mobile Drawer ── */
        .mobile-menu-drawer {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 1px solid rgba(181,137,59,0.2);
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 199;
          max-height: calc(100vh - 80px);
          overflow-y: auto;
          box-shadow: 0 8px 24px rgba(27,11,48,0.1);
        }
        .mobile-nav-item {
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 13px 10px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 15px;
          font-weight: 600;
          color: #1b0b30;
          font-family: var(--font-sans);
          width: 100%;
          transition: color 0.2s;
        }
        .mobile-nav-item:hover {
          color: #b5893b;
        }
        .mobile-accordion-toggle {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-services-list {
          padding: 8px 0 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mobile-service-overview {
          display: block;
          padding: 10px 10px;
          font-size: 13px;
          font-weight: 700;
          color: #b5893b;
          text-decoration: none;
          border-bottom: 1px solid rgba(181,137,59,0.15);
          margin-bottom: 8px;
          font-family: var(--font-sans);
        }
        .mobile-service-group {
          margin-bottom: 12px;
        }
        .mobile-group-label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 8px 10px 4px;
          font-family: var(--font-sans);
        }
        .mobile-service-link {
          display: block;
          padding: 8px 10px;
          font-size: 13px;
          color: #2d2736;
          text-decoration: none;
          border-radius: 5px;
          font-family: var(--font-sans);
          transition: all 0.18s;
        }
        .mobile-service-link:hover {
          background: rgba(181,137,59,0.06);
          color: #1b0b30;
          padding-left: 14px;
        }
        .mobile-cta-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 14px;
        }
        .mobile-cta-outline {
          padding: 13px;
          background: transparent;
          color: #b5893b;
          border: 1.5px solid #b5893b;
          border-radius: 5px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .mobile-cta-fill {
          padding: 13px;
          background: #b5893b;
          color: #fbfaf7;
          border: none;
          border-radius: 5px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          font-family: var(--font-sans);
        }

        @media (max-width: 480px) {
          nav {
            padding: 0 16px !important;
          }
          .mobile-menu-drawer {
            padding: 12px 16px 20px;
          }
          .mega-inner {
            padding: 28px 24px 0;
          }
        }
      `}} />
    </>
  );
}
