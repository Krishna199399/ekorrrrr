'use client';

import React, { useState } from 'react';
import { X, Award, Globe, Database, Building2, Users, ShieldCheck, Heart } from 'lucide-react';

const STATS_DETAILS = {
  clients: {
    title: '100+ Global Clients',
    icon: <Users size={32} style={{ color: '#b5893b' }} />,
    content: 'EGC partners with leading cosmetic startups, established D2C brands, and international luxury retail conglomerates. We guide beauty operators from concept formulation through manufacturing and regulatory compliance in global markets.'
  },
  formulations: {
    title: '500+ Formulations Developed',
    icon: <Database size={32} style={{ color: '#b5893b' }} />,
    content: 'Our advanced R&D laboratory has engineered a library of over 500 premium formulations. This includes clinical skincare, natural haircare, bio-cellular serums, organic cosmetics, and high-performance sunscreens.'
  },
  factories: {
    title: '50+ Factories Planned',
    icon: <Building2 size={32} style={{ color: '#b5893b' }} />,
    content: 'We specialize in factory architecture and cleanroom engineering. EGC has successfully designed and scaled over 50 state-of-the-art manufacturing plants, aligning them with global GMP, ISO 22716, and FDA guidelines.'
  },
  countries: {
    title: '20+ Countries Served',
    icon: <Globe size={32} style={{ color: '#b5893b' }} />,
    content: 'EGC has global regulatory compliance capabilities. We have successfully exported and registered products in over 20 countries, guiding brands through MoCRA (USA), CPNP (Europe), CDSCO (India), and NMPA (China) registration portals.'
  },
  team: {
    title: 'Expert R&D Team',
    icon: <Users size={32} style={{ color: '#b5893b' }} />,
    content: 'Our team comprises PhD cosmetic chemists, pharmaceutical scientists, cleanroom architects, and global regulatory officers. We invest heavily in scientific training and cleanroom design expertise.'
  },
  quality: {
    title: 'Quality Assurance Protocol',
    icon: <ShieldCheck size={32} style={{ color: '#b5893b' }} />,
    content: 'We implement rigorous QA/QC measures at every phase. From stability testing and ingredient compatibility analysis to microbial challenge testing, EGC ensures every batch exceeds international safety limits.'
  },
  standards: {
    title: 'Global Certifications',
    icon: <Award size={32} style={{ color: '#b5893b' }} />,
    content: 'We design formulations and facilities to align with ISO 9001, ISO 22716 (Cosmetic GMP), FDA Facility Registration, USDA Organic, ECOCERT COSMOS, and BIS compliance frameworks.'
  }
};

const STAT_ITEMS = [
  { key: 'clients', label: 'Global Clients', value: '100+', desc: 'Trusted by cosmetic brands and manufacturers worldwide', icon: <Users size={20} /> },
  { key: 'formulations', label: 'Formulations Developed', value: '500+', desc: 'Clinical, cosmetic, herbal, and premium formulations', icon: <Database size={20} /> },
  { key: 'factories', label: 'Factories Planned', value: '50+', desc: 'GMP-compliant manufacturing blueprints and production facilities', icon: <Building2 size={20} /> },
  { key: 'countries', label: 'Countries Supported', value: '20+', desc: 'Global regulatory and export consulting expertise', icon: <Globe size={20} /> },
  { key: 'team', label: 'Expert Technical Team', value: 'Chemists', desc: 'Experienced formulation scientists and industry specialists', icon: <Users size={20} /> },
  { key: 'quality', label: 'Quality Assured Processes', value: 'Vetted', desc: 'Stable, scalable, and commercially viable product systems', icon: <ShieldCheck size={20} /> },
  { key: 'standards', label: 'Global Standards Alignment', value: 'Certified', desc: 'FDA, BIS, GMP, ISO, and international compliance frameworks', icon: <Award size={20} /> }
];

export default function AtAGlance() {
  const [selectedStat, setSelectedStat] = useState(null);

  return (
    <section id="about" style={{
      background: '#fbfaf7',
      padding: '80px 40px',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Main Content Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'stretch'
        }} className="glance-grid">
          
          {/* Left Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#b5893b', letterSpacing: '2px', textTransform: 'uppercase' }}>
              EGC at a Glance
            </span>
            
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#1b0b30', fontWeight: '600', margin: 0, lineHeight: '1.2' }}>
              Pioneering Cosmetic <br />
              Technology & Factory Architecture
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#5c526b', fontSize: '15px', lineHeight: '1.6' }}>
              <p>
                <strong>Founded by entrepreneurs passionate about advancing the beauty and personal care industry</strong>, EGC Ekora Global Consulting was created to help businesses transform ideas into commercially successful products, manufacturing operations, and scalable beauty brands.
              </p>
              <p>
                We combine product development expertise, manufacturing insight, regulatory understanding, and commercialization strategy to support businesses across every stage of growth.
              </p>
              <p>
                From concept creation and formulation development to factory planning, production scale-up, and global market expansion, we partner with cosmetic brands, startups, manufacturers, wellness companies, private label businesses, and international beauty operators.
              </p>
            </div>
            
            {/* Aesthetic Quote card in mockup */}
            <div style={{
              marginTop: '15px',
              padding: '20px',
              background: 'white',
              borderLeft: '4px solid #b5893b',
              borderRadius: '0 8px 8px 0',
              boxShadow: '0 5px 15px rgba(27,11,48,0.02)'
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px', color: '#1b0b30', lineHeight: 1.4, margin: 0 }}>
                "A successful cosmetic product is where innovation, quality, and manufacturing excellence come together."
              </p>
            </div>
          </div>

          {/* Right — Brand Collage Photo (fills full column height) */}
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '420px',
              borderRadius: '18px',
              boxShadow:
                '0 0 0 1px rgba(200,155,60,0.18),' +
                '0 8px 24px rgba(27,11,48,0.08),' +
                '0 32px 60px rgba(27,11,48,0.10)',
              overflow: 'hidden',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow =
                  '0 0 0 1px rgba(200,155,60,0.28),' +
                  '0 12px 32px rgba(27,11,48,0.10),' +
                  '0 40px 72px rgba(27,11,48,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 0 0 1px rgba(200,155,60,0.18),' +
                  '0 8px 24px rgba(27,11,48,0.08),' +
                  '0 32px 60px rgba(27,11,48,0.10)';
              }}
            >
              <img
                src="/egc_collage.png"
                alt="EGC Cosmetic Science — products, laboratory and factory blueprint collage"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
              {/* Subtle vignette overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(200,155,60,0.05) 0%, transparent 50%),' +
                  'linear-gradient(to bottom, transparent 65%, rgba(27,11,48,0.10) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Floating Quote Card overlay */}
              <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '30px',
                width: '280px',
                background: '#ffffff',
                border: '1.5px solid rgba(181, 137, 59, 0.4)',
                borderRadius: '16px',
                padding: '24px 20px',
                boxShadow: '0 10px 30px rgba(27,11,48,0.12)',
                zIndex: 10,
                textAlign: 'left'
              }} className="glance-quote-card">
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '48px',
                  lineHeight: '0.1',
                  color: '#b5893b',
                  display: 'block',
                  marginBottom: '14px',
                  opacity: 0.8
                }}>“</span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15.5px',
                  color: '#1b0b30',
                  lineHeight: '1.45',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  A successful cosmetic product is where innovation, quality, and manufacturing excellence come together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          {STAT_ITEMS.map((item) => (
            <div
              key={item.key}
              onClick={() => setSelectedStat(item.key)}
              style={{
                background: 'white',
                border: '1px solid #e2dfd8',
                borderRadius: '10px',
                padding: '25px 15px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
              }}
              className="stat-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#b5893b';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(181, 137, 59, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2dfd8';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.02)';
              }}
            >
              <div style={{ color: '#b5893b', marginBottom: '4px' }}>
                {item.icon}
              </div>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#1b0b30', fontFamily: 'var(--font-sans)', lineHeight: 1.1 }}>
                {item.value}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#b5893b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '11px', color: '#7c728a', lineHeight: 1.3 }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Detail Modal */}
      {selectedStat && (
        <div className="modal-overlay" onClick={() => setSelectedStat(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {STATS_DETAILS[selectedStat].icon}
              <h2 className="info-modal-title" style={{ margin: 0 }}>{STATS_DETAILS[selectedStat].title}</h2>
              <button onClick={() => setSelectedStat(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body">
              <p style={{ fontSize: '16px', color: '#2d2736', lineHeight: '1.7' }}>
                {STATS_DETAILS[selectedStat].content}
              </p>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 900px) {
          .glance-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          #about {
            padding: 56px 20px !important;
          }
          #about h2 {
            font-size: clamp(26px, 7vw, 40px) !important;
          }
          .stat-card {
            padding: 18px 10px !important;
          }
        }
        @media (max-width: 520px) {
          .glance-quote-card {
            width: calc(100% - 40px) !important;
            right: 20px !important;
            bottom: 20px !important;
            padding: 16px 14px !important;
          }
          .glance-quote-card span {
            font-size: 32px !important;
            margin-bottom: 8px !important;
          }
          .glance-quote-card p {
            font-size: 13.5px !important;
          }
        }
        @media (max-width: 480px) {
          #about {
            padding: 44px 16px !important;
          }
        }
      `}} />
    </section>
  );
}
