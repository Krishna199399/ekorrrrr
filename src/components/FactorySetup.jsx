import React, { useState } from 'react';
import { X, Wrench, Factory, Activity, ClipboardList, Check, ArrowRight } from 'lucide-react';
import factoryConveyor from '../assets/ChatGPT Image Jun 1, 2026, 07_14_44 PM.png';
import facBoutique from '../assets/fac_boutique.png';
import facCosmetic from '../assets/fac_cosmetic.png';
import facIndustrial from '../assets/fac_industrial.png';
import facTurnkey from '../assets/fac_turnkey.png';


const FACTORY_DETAILS = {
  boutique: {
    title: 'Boutique R&D Plant',
    capacity: '5,000 - 10,000 bottles/day',
    img: facBoutique,
    icon: <Wrench size={32} style={{ color: '#b5893b' }} />,
    specs: {
      area: '2,500 - 5,000 sq. ft.',
      cleanroom: 'ISO 8 (Class 100,000) compounding; ISO 7 (Class 10,000) filling.',
      machinery: 'Semi-automated vacuum mixers (100L-300L), manual nozzle liquid/cream filling, tabletop capping, manual carton labelers.',
      timeline: '4 - 6 months from blueprint to validation.'
    },
    useCase: 'Ideal for pilot batches, clinical product testing, startup brand runs, and low-volume premium cosmetic formulations.'
  },
  manufacturing: {
    title: 'Cosmetic Manufacturing Plant',
    capacity: '10,000 - 50,000 bottles/day',
    img: facCosmetic,
    icon: <Factory size={32} style={{ color: '#b5893b' }} />,
    specs: {
      area: '10,000 - 25,000 sq. ft.',
      cleanroom: 'ISO 8 compounding; ISO 7 positive pressure filling rooms with centralized HEPA filter HVAC systems.',
      machinery: 'Automated compounding vacuum emulsifiers (500L-1000L), multi-nozzle rotary filling, inline capping & induction sealing, automated labeling.',
      timeline: '8 - 10 months from blueprint to validation.'
    },
    useCase: 'Best for growing D2C brands, contract manufacturers, and companies looking to automate compounding and primary packaging flows.'
  },
  industrial: {
    title: 'Global Industrial Plant',
    capacity: '50,000 - 100,000+ bottles/day',
    img: facIndustrial,
    icon: <Activity size={32} style={{ color: '#b5893b' }} />,
    specs: {
      area: '40,000 - 100,000+ sq. ft.',
      cleanroom: 'Full ISO 7/8 pharmaceutical-grade cosmetic cleanrooms with air showers, sanitizing vestibules, and centralized HVAC zoning.',
      machinery: 'Industrial compounding suites (2000L-5000L), automated tube fillers, high-speed cartoning lines, robotic case packing, centralized RO water loops.',
      timeline: '12 - 18 months from blueprint to validation.'
    },
    useCase: 'Designed for MNC brands, large private label conglomerates, and multinational chemical exporters.'
  },
  turnkey: {
    title: 'Turnkey Project Execution',
    capacity: 'End-to-End Service',
    img: facTurnkey,
    icon: <ClipboardList size={32} style={{ color: '#b5893b' }} />,
    specs: {
      area: 'Varies by plant scale.',
      cleanroom: 'Design, installation, ducting, testing, and validation certification.',
      machinery: 'Supplier identification, FAT/SAT coordination, calibration verification, and chemical start-up calibration.',
      timeline: 'Coordinates with plant scale milestones.'
    },
    useCase: 'For brands that want a single advisory partner to handle soil testing, architectural mapping, civil engineering oversight, HVAC installation, equipment sourcing, and FDA/BIS validation audits.'
  }
};

const DELIVERABLES = [
  'GMP & ISO Compliant Factories',
  'Advanced Cleanroom & HVAC Systems',
  'Water Treatment & Utility Systems',
  'Automated Manufacturing Lines',
  'Quality Control & Microbiology Labs',
  'Documentation & Compliance Support',
  'Training, Handover & Post-Launch Support'
];

export default function FactorySetup() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  return (
    <section id="factory" style={{
      background: '#fbfaf7',
      padding: '0 0 80px 0',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Immersive Banner Header */}
      <div className="factory-banner">
        
        {/* RIGHT IMMERSIVE IMAGE LAYER (60% width block) */}
        <div className="factory-banner-right">
          <img 
            src={factoryConveyor} 
            alt="EGC sterile cosmetic conveyor compounding unit" 
            className="factory-banner-img"
          />
          
          {/* Layered Overlays */}
          <div className="factory-ov-left" />
          <div className="factory-ov-bottom" />
          <div className="factory-ov-top" />
        </div>

        {/* LEFT CONTENT PANEL (40% width block) */}
        <div className="factory-banner-left">
          <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            gap: '18px', 
            position: 'relative', 
            zIndex: 3, 
            width: '100%',
            maxWidth: '520px',
            textAlign: 'left'
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
              Factory Setup Planning
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
              State-of-the-Art Factory Blueprinting
            </h2>
            
            {/* Gold separator line */}
            <div style={{
              width: '40px',
              height: '1.5px',
              background: 'linear-gradient(90deg, #C89B3C 0%, #e8cc7a 100%)',
              borderRadius: '2px'
            }} />

            {/* Paragraph */}
            <p style={{ fontSize: '14.5px', color: '#5c526b', lineHeight: '1.7', margin: 0 }}>
              We design and build world-class cosmetic manufacturing facilities aligned with GMP and ISO standards — while optimizing workflow efficiency, cleanroom zoning, utility planning, and scalable production capacity for future growth.
            </p>

            {/* View Factory Setup Solutions Button */}
            <button
              onClick={() => setShowFullSpecs(true)}
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
                boxShadow: '0 4px 14px rgba(200, 155, 60, 0.3)',
                transition: 'transform 0.18s, box-shadow 0.18s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(200, 155, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(200, 155, 60, 0.3)';
              }}
            >
              View Factory Setup Solutions
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Factory Solutions & Checklist Grid */}
      <div style={{ 
        maxWidth: '1440px', 
        margin: '60px auto 0', 
        padding: '0 40px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px' 
      }}>
        
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: '#1b0b30', textAlign: 'left', margin: 0 }}>
          Our Factory Solutions
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.6fr',
          gap: '40px'
        }} className="factory-body-grid">
            
            {/* 4 Plant Scale Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }} className="plant-cards-grid">
              {Object.keys(FACTORY_DETAILS).map((key) => {
                const plant = FACTORY_DETAILS[key];
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedPlant(key)}
                    style={{
                      background: 'white',
                      border: '1px solid #e2dfd8',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 5px 15px rgba(27,11,48,0.02)',
                      transition: 'all 0.3s ease',
                      textAlign: 'left'
                    }}
                    className="plant-card"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#b5893b';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(181,137,59,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2dfd8';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ height: '140px', overflow: 'hidden' }}>
                      <img 
                        src={plant.img} 
                        alt={plant.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1b0b30', margin: 0 }}>
                        {plant.title}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#b5893b', fontWeight: 'bold' }}>
                        Capacity: {plant.capacity}
                      </p>
                      <p style={{ fontSize: '12px', color: '#7c728a', lineHeight: '1.4', margin: 0 }}>
                        {plant.useCase.substring(0, 80)}...
                      </p>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#b5893b', marginTop: '5px', display: 'inline-flex', alignItems: 'center' }}>
                        View Engineering Specs →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sourced Delivery Checklist */}
            <div style={{
              background: 'white',
              border: '1px solid #e2dfd8',
              borderRadius: '12px',
              padding: '30px 25px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 5px 15px rgba(27,11,48,0.02)'
            }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#b5893b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                What We Deliver
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {DELIVERABLES.map((del, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'start', fontSize: '14px' }}>
                    <div style={{ background: '#fbf5e6', padding: '3px', borderRadius: '50%', color: '#b5893b', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={12} />
                    </div>
                    <span style={{ color: '#2d2736', fontWeight: '500' }}>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      {/* Plant Specification Modal */}
      {selectedPlant && (
        <div className="modal-overlay" onClick={() => setSelectedPlant(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {FACTORY_DETAILS[selectedPlant].icon}
              <div style={{ textAlign: 'left' }}>
                <h2 className="info-modal-title" style={{ margin: 0 }}>
                  {FACTORY_DETAILS[selectedPlant].title}
                </h2>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  Capacity: {FACTORY_DETAILS[selectedPlant].capacity}
                </span>
              </div>
              <button onClick={() => setSelectedPlant(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ textAlign: 'left' }}>
              <p style={{ fontStyle: 'italic', color: '#7c728a', fontSize: '15px', marginBottom: '20px' }}>
                "{FACTORY_DETAILS[selectedPlant].useCase}"
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderBottom: '1px solid #e2dfd8', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: '700', color: '#1b0b30' }}>Area Required</span>
                  <span style={{ color: '#2d2736' }}>{FACTORY_DETAILS[selectedPlant].specs.area}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderBottom: '1px solid #e2dfd8', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: '700', color: '#1b0b30' }}>Cleanroom Class</span>
                  <span style={{ color: '#2d2736' }}>{FACTORY_DETAILS[selectedPlant].specs.cleanroom}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderBottom: '1px solid #e2dfd8', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: '700', color: '#1b0b30' }}>Core Machinery</span>
                  <span style={{ color: '#2d2736', fontSize: '14px', lineHeight: '1.4' }}>{FACTORY_DETAILS[selectedPlant].specs.machinery}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', paddingBottom: '10px' }}>
                  <span style={{ fontWeight: '700', color: '#1b0b30' }}>Build Timeline</span>
                  <span style={{ color: '#2d2736' }}>{FACTORY_DETAILS[selectedPlant].specs.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Guidelines Modal */}
      {showFullSpecs && (
        <div className="modal-overlay" onClick={() => setShowFullSpecs(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Factory size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>EGC Factory Engineering Standards</h2>
              <button onClick={() => setShowFullSpecs(false)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
              <p style={{ fontSize: '15px', color: '#2d2736', lineHeight: '1.6' }}>
                We design and layout manufacturing facilities to strictly adhere to international quality guidelines. Every floor plan we map is optimized for material segregation, sterile compounding, and dust extraction.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                <div style={{ padding: '15px', background: 'white', border: '1px solid #e2dfd8', borderRadius: '6px' }}>
                  <strong style={{ color: '#1b0b30' }}>Material Flow (Unidirectional):</strong>
                  <p style={{ fontSize: '13px', color: '#7c728a', marginTop: '4px' }}>
                    Raw materials enter at one end, move through weighing, compounding, filling, labeling, and secondary packing, exiting as finished goods at the other end. This eliminates cross-contamination risks.
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'white', border: '1px solid #e2dfd8', borderRadius: '6px' }}>
                  <strong style={{ color: '#1b0b30' }}>RO Water Purification:</strong>
                  <p style={{ fontSize: '13px', color: '#7c728a', marginTop: '4px' }}>
                    Water is the primary ingredient in cosmetic creams and lotions. We plan pharmaceutical-grade stainless steel RO loops with continuous circulation and UV sterilization to prevent biofilm formation.
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'white', border: '1px solid #e2dfd8', borderRadius: '6px' }}>
                  <strong style={{ color: '#1b0b30' }}>HVAC and Air Filtration:</strong>
                  <p style={{ fontSize: '13px', color: '#7c728a', marginTop: '4px' }}>
                    Air handling units (AHUs) maintain cleanroom pressure differentials, preventing dust from compounding suites entering the sterile primary filling areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .factory-banner {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 480px;
          overflow: hidden;
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181, 137, 59, 0.08);
        }
        .factory-banner-left {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
          position: relative;
          padding: 80px 20px 80px 8%;
        }
        .factory-banner-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 58%;
          z-index: 1;
          overflow: hidden;
        }
        .factory-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }
        .factory-ov-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            #fbfaf7 0%,
            rgba(251, 250, 247, 0.94) 10%,
            rgba(251, 250, 247, 0.4) 26%,
            transparent 45%
          );
          z-index: 2;
          pointer-events: none;
        }
        .factory-ov-bottom {
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
        .factory-ov-top {
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
        @media (max-width: 900px) {
          .factory-banner {
            flex-direction: column;
            min-height: auto;
          }
          .factory-banner-left {
            width: 100%;
            padding: 56px 24px 36px;
          }
          .factory-banner-right {
            position: relative;
            width: 100%;
            height: 60vw;
            min-height: 280px;
          }
          .factory-ov-left {
            background: linear-gradient(to bottom,
              #fbfaf7 0%,
              rgba(251, 250, 247, 0.88) 12%,
              transparent 35%
            );
          }
          .factory-body-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .plant-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
