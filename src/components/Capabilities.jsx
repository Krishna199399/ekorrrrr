'use client';

import React, { useState } from 'react';
import { X, FlaskConical, Building, Compass, FileText, Check } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'rnd',
    num: '01',
    title: 'Cosmetic R&D & Formulation',
    img: '/photo_2026-05-30_02-33-38.jpg',
    icon: <FlaskConical size={20} />,
    color: '#8a6bbd', // purple accent matching mockup
    bullets: [
      'Customized formulation development',
      'Ingredient compatibility analysis',
      'Texture optimization & prototyping',
      'Stability testing & validation support'
    ],
    fullBullets: [
      'Customized formulation development for skincare, haircare, body care, luxury cosmetics, and personal care products.',
      'Ingredient compatibility analysis to assess active ingredient synergies, chemical stability, pH compatibility, and formulation performance.',
      'Texture optimization and prototype development focused on sensory experience, absorption, spreadability, and fragrance integration.',
      'Stability testing and validation support including microbial challenge studies, freeze-thaw testing, accelerated aging studies, and compatibility assessments.'
    ]
  },
  {
    id: 'setup',
    num: '02',
    title: 'Plant Setup & Factory Planning',
    img: '/photo_2026-05-30_02-23-41.jpg',
    icon: <Building size={20} />,
    color: '#d69e45', // gold accent
    bullets: [
      'Factory layout & cleanroom zoning',
      'Machinery selection & utility planning',
      'Workflow optimization',
      'Production infrastructure support'
    ],
    fullBullets: [
      'Factory layout development aligned with GMP and ISO 22716 manufacturing requirements.',
      'Machinery selection and utility planning including automated mixers, homogenizers, filling lines, water treatment systems, and packaging equipment.',
      'Workflow optimization through intelligent zoning, material movement planning, storage management, and contamination control strategies.',
      'Production infrastructure planning covering pilot laboratories, quality control facilities, HVAC systems, cleanrooms, and utility networks.'
    ]
  },
  {
    id: 'turnkey',
    num: '03',
    title: 'Turnkey Project Solutions',
    img: '/photo_2026-05-30_02-23-54.jpg',
    icon: <Compass size={20} />,
    color: '#7b5cb7',
    bullets: [
      'End-to-end project execution',
      'Vendor coordination & install support',
      'Commercial production setup',
      'Operational planning & training'
    ],
    fullBullets: [
      'Complete project management from facility planning and construction through commercial production readiness.',
      'Vendor coordination, equipment sourcing, installation oversight, validation support, and commissioning assistance.',
      'Commercial production scale-up from laboratory prototypes to large-volume manufacturing operations.',
      'SOP development, workforce training, operational planning, safety systems, and quality management frameworks.'
    ]
  },
  {
    id: 'compliance',
    num: '04',
    title: 'Regulatory, BIS & FDA Compliance',
    img: '/photo_2026-05-30_02-24-14.jpg',
    icon: <FileText size={20} />,
    color: '#d69e45',
    bullets: [
      'Cosmetic compliance documentation',
      'Product registration guidance',
      'Label review & claim verification',
      'Export documentation & coordination'
    ],
    fullBullets: [
      'Preparation of Product Information Files (PIF), ingredient safety assessments, and technical documentation.',
      'Guidance for FDA facility registrations, MoCRA compliance, CDSCO registrations, and international market approvals.',
      'Label review and claims verification to ensure regulatory compliance and consumer transparency.',
      'Export documentation support including Free Sale Certificates, MSDS documentation, customs requirements, and international compliance records.'
    ]
  }
];

export default function Capabilities() {
  const [activeCap, setActiveCap] = useState(null);

  return (
    <section id="capabilities" style={{
      background: '#faf7f2',
      padding: '0 0 80px 0',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Immersive Banner Header */}
      <div className="capabilities-banner">
        
        {/* RIGHT IMMERSIVE IMAGE LAYER (60% width block) */}
        <div className="capabilities-banner-right">
          <img 
            src="/services_hero.png"
            alt="EGC cosmetics laboratory capabilities" 
            className="capabilities-banner-img"
          />
          
          {/* Layered Overlays */}
          <div className="capabilities-ov-left" />
          <div className="capabilities-ov-bottom" />
          <div className="capabilities-ov-top" />
        </div>

        {/* LEFT CONTENT PANEL (40% width block, overlapping slightly into image space) */}
        <div className="capabilities-banner-left">
          <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px', 
            position: 'relative', 
            zIndex: 3, 
            width: '100%',
            maxWidth: '540px'
          }}>
            {/* Eyebrow */}
            <span style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: '#C89B3C', 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)'
            }}>
              Our Capabilities
            </span>
            
            {/* Heading */}
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(32px, 3.2vw, 44px)', 
              color: '#1B1035', 
              fontWeight: '600', 
              margin: 0,
              lineHeight: '1.2'
            }}>
              Full-Scale Cosmetic Advisory
            </h2>
            
            {/* Gold separator line */}
            <div style={{
              width: '40px',
              height: '1.5px',
              background: 'linear-gradient(90deg, #C89B3C 0%, #e8cc7a 100%)',
              borderRadius: '2px'
            }} />

            {/* Paragraph */}
            <p style={{ 
              fontSize: '15px', 
              color: '#5c526b', 
              lineHeight: '1.75', 
              margin: 0,
              fontWeight: '400'
            }}>
              We support the complete cosmetic product lifecycle — from concept development and formulation engineering to manufacturing setup, regulatory support, and production planning.
            </p>
          </div>
        </div>

      </div>

      {/* CARDS DECK (Centered inside 1440px page grid) */}
      <div style={{ 
        maxWidth: '1440px', 
        margin: '60px auto 0', 
        padding: '0 40px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }} className="capabilities-cards">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              style={{
                background: 'white',
                border: '1px solid #e2dfd8',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 24px rgba(27, 11, 48, 0.03)',
                transition: 'all 0.3s ease'
              }}
              className="cap-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#b5893b';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(27, 11, 48, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2dfd8';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(27, 11, 48, 0.03)';
              }}
            >
              {/* Card Header Image */}
              <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={cap.img} 
                  alt={cap.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Number tag */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: cap.color,
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}>
                  {cap.num}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: '#b5893b', background: 'rgba(181, 137, 59, 0.08)', padding: '6px', borderRadius: '6px' }}>
                    {cap.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1b0b30', margin: 0, lineHeight: '1.3' }}>
                    {cap.title}
                  </h3>
                </div>

                {/* Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  {cap.bullets.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'start', fontSize: '13px', lineHeight: '1.4', color: '#5c526b' }}>
                      <Check size={14} style={{ color: cap.color, flexShrink: 0, marginTop: '2px' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setActiveCap(cap.id)}
                  style={{
                    padding: '12px 20px',
                    border: '1px solid #e2dfd8',
                    background: 'white',
                    color: '#b5893b',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    width: '100%',
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#b5893b';
                    e.target.style.background = 'rgba(181, 137, 59, 0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e2dfd8';
                    e.target.style.background = 'white';
                  }}
                >
                  Read Scope →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Modal */}
      {activeCap && (
        <div className="modal-overlay" onClick={() => setActiveCap(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div style={{ color: '#b5893b', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '8px' }}>
                {CAPABILITIES.find(c => c.id === activeCap).icon}
              </div>
              <h2 className="info-modal-title" style={{ margin: 0 }}>
                {CAPABILITIES.find(c => c.id === activeCap).title}
              </h2>
              <button onClick={() => setActiveCap(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body">
              <p style={{ fontWeight: '600', color: '#1b0b30', fontSize: '18px', marginBottom: '15px' }}>
                Core Advisory Deliverables:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {CAPABILITIES.find(c => c.id === activeCap).fullBullets.map((bullet, i) => (
                  <li key={i} style={{ fontSize: '16px', color: '#2d2736', lineHeight: '1.6' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html:`
        .capabilities-banner {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 480px;
          overflow: hidden;
          background: #faf7f2;
          border-bottom: 1px solid rgba(181, 137, 59, 0.08);
        }
        .capabilities-banner-left {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
          position: relative;
          padding: 80px 40px 80px 8%;
          background: linear-gradient(100deg,
            #faf7f2 0%,
            #faf7f2 68%,
            rgba(250, 247, 242, 0.96) 82%,
            rgba(250, 247, 242, 0.8) 92%,
            transparent 100%
          );
        }
        .capabilities-banner-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 62%;
          z-index: 1;
          overflow: hidden;
        }
        .capabilities-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }
        .capabilities-ov-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            #faf7f2 0%,
            rgba(250, 247, 242, 0.94) 10%,
            rgba(250, 247, 242, 0.4) 26%,
            transparent 45%
          );
          z-index: 2;
          pointer-events: none;
        }
        .capabilities-ov-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 30%;
          background: linear-gradient(to top,
            rgba(27, 16, 53, 0.06) 0%,
            transparent 100%
          );
          z-index: 2;
          pointer-events: none;
        }
        .capabilities-ov-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 20%;
          background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.22) 0%,
            transparent 100%
          );
          z-index: 2;
          pointer-events: none;
        }
        @media (max-width: 860px) {
          .capabilities-banner {
            flex-direction: column;
            min-height: auto;
          }
          .capabilities-banner-left {
            width: 100%;
            padding: 56px 24px 36px;
            background: #faf7f2;
          }
          .capabilities-banner-right {
            position: relative;
            width: 100%;
            height: 60vw;
            min-height: 280px;
          }
          .capabilities-ov-left {
            background: linear-gradient(to bottom,
              #faf7f2 0%,
              rgba(250, 247, 242, 0.88) 12%,
              transparent 35%
            );
          }
        }
        @media (max-width: 768px) {
          #capabilities {
            padding-bottom: 56px !important;
          }
          #capabilities > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .capabilities-banner-left {
            padding: 44px 20px 32px !important;
          }
          .capabilities-cards {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .capabilities-banner-left {
            padding: 36px 16px 28px !important;
          }
        }
      `}} />
    </section>
  );
}
