'use client';

import React, { useState } from 'react';
import { X, Award, ShieldAlert, ArrowUp, Mail, Phone, Globe, Calendar, FileText, MapPin } from 'lucide-react';
import Link from 'next/link';

const CERT_DETAILS = {
  gmp: {
    title: 'GMP (Good Manufacturing Practices) Certified',
    authority: 'ISO 22716 Guidelines',
    desc: 'Ensures that cosmetic compounding, storage, and packaging processes are controlled according to rigorous hygiene, sanitation, and documentation guidelines.'
  },
  iso22716: {
    title: 'ISO 22716 Certification',
    authority: 'Bureau Veritas / SGS Audited',
    desc: 'The international standard for cosmetic manufacturing safety. Audits raw material validation, ventilation controls, and equipment sanitation schedules.'
  },
  iso9001: {
    title: 'ISO 9001:2015 Quality Management',
    authority: 'Quality Management Systems',
    desc: 'Validates that EGC adheres to continuous improvement loops, traceability of raw materials, and customer satisfaction audits.'
  },
  fda: {
    title: 'FDA Registered Facility Alignment',
    authority: 'US FDA Food, Drug & Cosmetic Act',
    desc: 'Compounding rooms and packing lines are mapped to align directly with US FDA sanitary design specifications, including air pressure flow controls.'
  },
  ecocert: {
    title: 'ECOCERT COSMOS Approved Formulations',
    authority: 'Ecocert Greenlife standards',
    desc: 'Validates organic and natural cosmetic formulation profiles, ensuring safe green chemistry, sustainable sourcing, and biodegradable packaging.'
  }
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      alert(`Thank you for subscribing! ${email} has been added to our newsletter list.`);
      setEmail('');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#1b0b30', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px' }}>
      


      {/* 2. Middle Row: Newsletter Signup */}
      <div style={{
        background: '#2d184d',
        padding: '30px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }} className="newsletter-row">
          <div style={{ textAlign: 'left', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#b5893b'
            }}>
              <Mail size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', margin: 0 }}>Stay Ahead in Beauty Innovation</h4>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: '2px 0 0' }}>Subscribe to our newsletter for formulation R&D breakthroughs and market insights.</p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px' }} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                padding: '12px 20px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                borderRadius: '6px',
                fontSize: '13px',
                width: '260px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                background: '#b5893b',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#9c732c'}
              onMouseLeave={(e) => e.target.style.background = '#b5893b'}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* 3. Bottom Row: Links Directory & Map */}
      <div style={{ padding: '60px 40px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr 1fr',
          gap: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: '50px'
        }} className="footer-links-grid">
          
          {/* Logo & Description */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <img 
                src="/logo_white.png"
                alt="EGC Logo" 
                style={{ height: '42px', width: 'auto', display: 'block' }} 
              />
              <span style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: '700', marginTop: '2px', fontFamily: 'Outfit, sans-serif' }}>
                Ekora Global Consulting
              </span>
            </div>
            
            <p style={{ lineHeight: '1.5', color: 'rgba(255,255,255,0.5)' }}>
              The Science of Luxury Beauty. EGC Ekora Global Consulting bridges the gap between boutique chemical breakthroughs and high-volume, GMP-compliant manufacturing environments.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'rgba(255,255,255,0.5)' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={14} style={{ color: '#b5893b' }} />
                <span>+1 (212) 555-7890</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={14} style={{ color: '#b5893b' }} />
                <span>info@egcekora.com</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                <MapPin size={14} style={{ color: '#b5893b', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: '1.4' }}>No. 39/3, 1st Floor, Richmond Town, Richmond Road, Bengaluru - 560025</span>
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '5px' }}>
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ), 
                  href: 'https://linkedin.com' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ), 
                  href: 'https://instagram.com' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  ), 
                  href: 'https://youtube.com' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  ), 
                  href: 'https://x.com' 
                }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    background: 'rgba(255,255,255,0.04)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b5893b'; e.currentTarget.style.background = 'rgba(181,137,59,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Directory Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            textAlign: 'left'
          }} className="footer-links-columns">
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textTransform: 'uppercase' }}>Company</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Our Mission</Link></li>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Leadership</Link></li>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Careers</Link></li>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>News & Press</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textTransform: 'uppercase' }}>Our Services</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>R&D & Formulation</Link></li>
                <li><Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Factory Setup</Link></li>
                <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Regulatory</Link></li>
                <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Product Dev</Link></li>
                <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Private Label</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textTransform: 'uppercase' }}>Resources</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                <li><Link href="/rd-lab" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Insights / Blog</Link></li>
                <li><Link href="/rd-lab" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>White Papers</Link></li>
                <li><Link href="/rd-lab" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Case Studies</Link></li>
                <li><Link href="/rd-lab" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>FAQs</Link></li>
                <li><Link href="/rd-lab" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Glossary</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textTransform: 'uppercase' }}>Support</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                <li><button onClick={handleScrollToContact} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Contact Us</button></li>
                <li><button onClick={handleScrollToContact} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Client Portal</button></li>
                <li><button onClick={handleScrollToContact} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Documentation</button></li>
                <li><button onClick={handleScrollToContact} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Training</button></li>
              </ul>
            </div>
          </div>

          {/* Global Presence Map */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', margin: 0 }}>Global Presence</h5>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span><strong>North America:</strong> USA</span>
              <span><strong>Europe:</strong> Italy • France • Germany</span>
              <span><strong>Asia (Corporate HQ):</strong> No. 39/3, Richmond Rd, Bengaluru</span>
            </div>
          </div>

        </div>

        {/* 4. Bottom Certifications row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          paddingTop: '30px',
          alignItems: 'center'
        }} className="footer-certs-row">
          
          <div style={{ textAlign: 'left', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Our Certifications:</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['gmp', 'iso22716', 'iso9001', 'fda', 'ecocert'].map((cert) => (
                <button
                  key={cert}
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '9px',
                    fontWeight: 'bold',
                    color: '#b5893b',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(181,137,59,0.1)'; e.target.style.borderColor = '#b5893b'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {cert.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '11px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.4' }} className="footer-eco-text">
            <strong>Committed to a Sustainable Future:</strong> We integrate green chemistry, responsible sourcing, and eco-conscious packaging audits across our formulation value chain.
          </div>

        </div>

        {/* 5. Copyright Bar */}
        <div style={{
          marginTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '11px'
        }} className="copyright-bar">
          <span>© 2026 EGC Ekora Global Consulting. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Award size={32} style={{ color: '#b5893b' }} />
              <div style={{ textAlign: 'left' }}>
                <h2 className="info-modal-title" style={{ margin: 0 }}>
                  {CERT_DETAILS[selectedCert].title}
                </h2>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  Audit Scope: {CERT_DETAILS[selectedCert].authority}
                </span>
              </div>
              <button onClick={() => setSelectedCert(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '15px', color: '#2d2736', lineHeight: '1.6' }}>
                {CERT_DETAILS[selectedCert].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back to top button floating styling */}
      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 1024px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-certs-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            text-align: left !important;
          }
          .footer-eco-text {
            text-align: left !important;
          }
          .copyright-bar {
            flex-direction: column !important;
            gap: 10px !important;
            text-align: left !important;
          }
        }
        @media (max-width: 768px) {
          footer > div:first-of-type {
            padding: 24px 20px !important;
          }
          footer > div + div {
            padding: 40px 20px 28px !important;
          }
          .newsletter-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .newsletter-form {
            width: 100% !important;
          }
          .newsletter-form input {
            width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          .footer-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-cta-buttons {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .newsletter-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .newsletter-form {
            width: 100% !important;
            flex-direction: column !important;
          }
          .newsletter-form input {
            width: 100% !important;
          }
          .footer-links-columns {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div:first-of-type {
            padding: 20px 16px !important;
          }
          footer > div + div {
            padding: 36px 16px 24px !important;
          }
          .footer-links-columns {
            grid-template-columns: 1fr 1fr !important;
          }
          .newsletter-form {
            flex-direction: column !important;
          }
        }
      `}} />
    </footer>
  );
}
