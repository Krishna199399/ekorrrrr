'use client';

import React, { useState } from 'react';
import { X, Globe2, Landmark, FileCheck2, ArrowRight } from 'lucide-react';

const COMPLIANCE_DETAILS = {
  na: {
    title: 'North America Compliance',
    regulatoryBody: 'Food and Drug Administration (FDA) & MoCRA 2022',
    img: '/region_na.png',
    overview: 'The Modernization of Cosmetics Regulation Act of 2022 (MoCRA) represents the most significant expansion of FDA authority over cosmetics since 1938.',
    checklists: [
      'FDA Facility Registration: Required for all manufacturing facilities processing cosmetics for US distribution, updated biennially.',
      'Product Listing: Every cosmetic product and its specific ingredients must be listed with the FDA.',
      'Safety Substantiation: Brands must maintain detailed scientific records proving the safety of each formulation.',
      'Allergen Disclosure: Mandatory declaration of fragrance allergens on product packaging once guidelines are finalized.',
      'Adverse Event Reporting: Required submission of serious adverse event reports to the FDA within 15 days.'
    ]
  },
  eu: {
    title: 'Europe Compliance',
    regulatoryBody: 'European Commission - CPNP Portal',
    img: '/region_eu.png',
    overview: 'European Union cosmetics regulations are among the strictest in the world, focused heavily on ingredient banning, consumer safety, and product transparency.',
    checklists: [
      'Responsible Person (RP): A designated entity established in the EU to guarantee product compliance.',
      'Product Information File (PIF): A comprehensive file containing description, safety assessment (CPSR), GMP compliance, and proof of effect.',
      'Cosmetic Product Safety Report (CPSR): A scientific safety evaluation signed off by a qualified toxicologist.',
      'CPNP Notification: Online submission of product details and packaging layout prior to market entry.',
      'Banned Substances Vetting: Compliance checks against Annex II (banned) and Annex III (restricted) ingredient registers.'
    ]
  },
  in: {
    title: 'India Compliance',
    regulatoryBody: 'Central Drugs Standard Control Organization (CDSCO) & Bureau of Indian Standards (BIS)',
    img: '/region_in.png',
    overview: 'Importing or manufacturing cosmetics in India requires registration under the Drugs and Cosmetics Act, complying with specific quality standards.',
    checklists: [
      'CDSCO Registration Certificate: Mandatory registration for all imported cosmetics via Form COS-1.',
      'BIS Quality Standards: Formulation alignment with Bureau of Indian Standards (IS 4707 Part 1 and 2 for colorants and ingredients).',
      'Heavy Metals & Micro Testing: Laboratory verification of lead, arsenic, mercury, and microbial limits.',
      'Local Manufacturing License: Form COS-8 or COS-5 licensing for domestic cleanrooms.',
      'Legal Metrology Declarations: Precise retail package labelling showing net contents, dates, and maximum retail price (MRP).'
    ]
  }
};

export default function GlobalMarkets() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showGlobalOverview, setShowGlobalOverview] = useState(false);

  return (
    <section id="global" style={{
      background: '#faf7f2',
      padding: '0 0 80px 0',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Immersive Banner Header */}
      <div className="global-banner">
        
        {/* RIGHT IMMERSIVE IMAGE LAYER (60% width block) */}
        <div className="global-banner-right">
          <img 
            src="/global_globe_new.png"
            alt="EGC global compliance distribution" 
            className="global-banner-img"
          />
          
          {/* Layered Overlays */}
          <div className="global-ov-left" />
          <div className="global-ov-bottom" />
          <div className="global-ov-top" />
        </div>

        {/* LEFT CONTENT PANEL (40% width block, overlapping slightly into image space) */}
        <div className="global-banner-left">
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
              Global Distribution
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
              Global Regulatory Compliance
            </h2>
            
            {/* Gold separator line */}
            <div style={{
              width: '40px',
              height: '1.5px',
              background: 'linear-gradient(90deg, #C89B3C 0%, #e8cc7a 100%)',
              borderRadius: '2px'
            }} />

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#5c526b', fontSize: '15px', lineHeight: '1.75', margin: 0 }}>
              <p style={{ margin: 0 }}>
                Expanding cosmetic products into international markets requires careful regulatory planning, documentation support, compliance validation, and region-specific product adaptation.
              </p>
              <p style={{ margin: 0 }}>
                EGC Ekora Global Consulting supports cosmetic brands and manufacturers with international compliance consulting and export readiness solutions for successful global market expansion.
              </p>
            </div>

            {/* Premium Gold Button */}
            <button
              onClick={() => setShowGlobalOverview(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #C89B3C 0%, #a87c28 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '13.5px',
                cursor: 'pointer',
                width: 'fit-content',
                marginTop: '10px',
                boxShadow: '0 4px 14px rgba(200,155,60,0.3)',
                transition: 'transform 0.18s, box-shadow 0.18s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(200,155,60,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(200,155,60,0.3)';
              }}
            >
              Explore Global Markets
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* REGIONAL CARDS DECK (Centered inside 1440px page container) */}
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '20px'
        }} className="regions-grid">
          {Object.keys(COMPLIANCE_DETAILS).map((key) => {
            const region = COMPLIANCE_DETAILS[key];
            return (
              <div
                key={key}
                onClick={() => setSelectedRegion(key)}
                style={{
                  background: 'white',
                  border: '1px solid #e2dfd8',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(27, 11, 48, 0.02)',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
                className="region-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#b5893b';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(27, 11, 48, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2dfd8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(27, 11, 48, 0.02)';
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={region.img} 
                    alt={region.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#b5893b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {key === 'na' ? 'North America' : key === 'eu' ? 'Europe' : 'India'}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1b0b30', margin: 0 }}>
                    {region.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#7c728a', lineHeight: '1.4', margin: 0 }}>
                    Vetting directives including {key === 'na' ? 'MoCRA and FDA listings' : key === 'eu' ? 'CPNP notifications and CPSR safety reports' : 'CDSCO importer licensing and BIS chemical compliance limits'}.
                  </p>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#b5893b', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                    View Compliance Handbook →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Regional Compliance Modal */}
      {selectedRegion && (
        <div className="modal-overlay" onClick={() => setSelectedRegion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Landmark size={32} style={{ color: '#b5893b' }} />
              <div style={{ textAlign: 'left' }}>
                <h2 className="info-modal-title" style={{ margin: 0 }}>
                  {COMPLIANCE_DETAILS[selectedRegion].title}
                </h2>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  Authority: {COMPLIANCE_DETAILS[selectedRegion].regulatoryBody}
                </span>
              </div>
              <button onClick={() => setSelectedRegion(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '15px', color: '#2d2736', lineHeight: '1.6', marginBottom: '20px', background: '#f2efe9', padding: '15px', borderRadius: '6px', borderLeft: '3px solid #b5893b' }}>
                {COMPLIANCE_DETAILS[selectedRegion].overview}
              </p>
              
              <p style={{ fontWeight: '700', color: '#1b0b30', fontSize: '16px', marginBottom: '12px' }}>
                Compliance & Quality Requirements:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {COMPLIANCE_DETAILS[selectedRegion].checklists.map((check, i) => {
                  const [title, desc] = check.split(': ');
                  return (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'start', fontSize: '14px' }}>
                      <FileCheck2 size={16} style={{ color: '#2e7d32', flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ color: '#2d2736', margin: 0 }}>
                        <strong style={{ color: '#1b0b30' }}>{title}:</strong> {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Overview Modal */}
      {showGlobalOverview && (
        <div className="modal-overlay" onClick={() => setShowGlobalOverview(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Globe2 size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>Global Export & Advisory Network</h2>
              <button onClick={() => setShowGlobalOverview(false)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
              <p style={{ fontSize: '15px', color: '#2d2736', lineHeight: '1.6' }}>
                EGC Ekora Global Consulting operates a proprietary international regulatory intelligence desk. We maintain relationships with testing laboratories, safety assessors, and regional legal representatives globally.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }} className="global-overview-grid">
                <div style={{ padding: '15px', border: '1px solid #e2dfd8', borderRadius: '8px', background: 'white' }}>
                  <h4 style={{ fontWeight: '700', color: '#b5893b', marginBottom: '8px' }}>Regulatory Testing</h4>
                  <p style={{ fontSize: '13px', color: '#7c728a', lineHeight: '1.4' }}>
                    We coordinate heavy metal screenings, microbial limit verifications, skin compatibility patching, and SPF ratings in accredited ISO 17025 laboratories.
                  </p>
                </div>
                <div style={{ padding: '15px', border: '1px solid #e2dfd8', borderRadius: '8px', background: 'white' }}>
                  <h4 style={{ fontWeight: '700', color: '#b5893b', marginBottom: '8px' }}>Customs Clearance</h4>
                  <p style={{ fontSize: '13px', color: '#7c728a', lineHeight: '1.4' }}>
                    We verify cosmetic classification codes, safety data sheets (SDS) formatting, and import certificate clearances to ensure seamless global shipments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html:`
        .global-banner {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 480px;
          overflow: hidden;
          background: #faf7f2;
          border-bottom: 1px solid rgba(181, 137, 59, 0.08);
        }
        .global-banner-left {
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
        .global-banner-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 62%;
          z-index: 1;
          overflow: hidden;
        }
        .global-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }
        .global-ov-left {
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
        .global-ov-bottom {
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
        .global-ov-top {
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
          .global-banner {
            flex-direction: column;
            min-height: auto;
          }
          .global-banner-left {
            width: 100%;
            padding: 56px 24px 36px;
            background: #faf7f2;
          }
          .global-banner-right {
            position: relative;
            width: 100%;
            height: 60vw;
            min-height: 280px;
          }
          .global-ov-left {
            background: linear-gradient(to bottom,
              #faf7f2 0%,
              rgba(250, 247, 242, 0.88) 12%,
              transparent 35%
            );
          }
        }
        @media (max-width: 900px) {
          .regions-grid {
            grid-template-columns: 1fr !important;
          }
          .global-overview-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          #global {
            padding-bottom: 56px !important;
          }
          #global > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
            margin-top: 40px !important;
          }
          .global-banner-left {
            padding: 44px 20px 32px !important;
          }
          .regions-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .global-banner-left {
            padding: 36px 16px 28px !important;
          }
        }
      `}} />
    </section>
  );
}
