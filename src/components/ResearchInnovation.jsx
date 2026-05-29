import React, { useState } from 'react';
import { 
  X, FlaskConical, Atom, Orbit, TestTube, Microscope, 
  ShieldCheck, FileText, Hexagon, Droplet, Leaf, 
  Recycle, Play, ArrowRight 
} from 'lucide-react';
import rdScientist from '../assets/rd_scientist.png';
import rdShelves from '../assets/rd_shelves.png';

const RESEARCH_DETAILS = {
  formulation: {
    title: 'Advanced Formulation Science',
    icon: <Hexagon size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'Innovative active delivery systems and performance optimization for superior consumer results.',
    content: 'We research advanced colloidal chemistry, lipid nanoparticles, and encapsulation systems. This allows active ingredients like Retinol or L-Ascorbic Acid to penetrate deeper into the skin layers while maintaining absolute stability in the container.'
  },
  biotech: {
    title: 'Skin & Hair Biotechnology',
    icon: <Droplet size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'Biotechnology-driven solutions for skin barrier repair, anti-aging, and scalp health.',
    content: 'Our biotechnology division focuses on peptide synthesis, bio-fermentation, and cellular growth factors. We study hair follicle stimulation and keratin structures to create clinically validated hair regrowth and density treatments.'
  },
  natural: {
    title: 'Natural & Clean Innovation',
    icon: <Leaf size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'Researching natural actives and clean beauty solutions with proven efficacy and sustainability.',
    content: 'We isolate botanical active compounds using green extraction methods (CO2 extraction, cold pressing). We formulate cosmetic preservation systems using plant-derived esters and organic compounds, avoiding synthetic parabens or formaldehydes.'
  },
  stability: {
    title: 'Stability & Safety Assessment',
    icon: <ShieldCheck size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'Advanced testing protocols ensuring product safety, stability, and regulatory compliance.',
    content: 'We conduct accelerated aging tests (oven runs at 45°C), UV exposure evaluations, and packaging compatibility checks. Our team performs microbial challenge tests (USP <51>) to ensure shelf life and contamination prevention.'
  },
  clinical: {
    title: 'Clinical & Efficacy Studies',
    icon: <Microscope size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'In-vitro, ex-vivo & in-vivo studies to validate claims and deliver trusted performance.',
    content: 'EGC designs in-vitro and in-vivo clinical protocols. We measure skin hydration indices, sebum reduction percentages, wrinkle depth metrics, and skin tone changes using high-tech diagnostic cameras and skin hydration sensors.'
  },
  sustainable: {
    title: 'Sustainable Innovation',
    icon: <Recycle size={28} style={{ color: '#7b5cb7' }} />,
    shortDesc: 'Eco-friendly technologies and sustainable packaging solutions for a better tomorrow.',
    content: 'We focus on circular beauty. We research biodegradable surfactants, upcycled food waste actives (e.g., coffee ground extracts, fruit seed oils), and PCR (Post-Consumer Recycled) packaging compatibility.'
  }
};

const STATS = [
  { label: 'Research Scientists', value: '10+', icon: <FlaskConical size={22} style={{ color: '#7b5cb7' }} /> },
  { label: 'Active R&D Projects', value: '25+', icon: <Atom size={22} style={{ color: '#7b5cb7' }} /> },
  { label: 'Ingredient Studies', value: '200+', icon: <Orbit size={22} style={{ color: '#7b5cb7' }} /> },
  { label: 'New Formulations', value: '15+', icon: <TestTube size={22} style={{ color: '#7b5cb7' }} /> }
];

export default function ResearchInnovation({ onOpenSimulator }) {
  const [selectedResearch, setSelectedResearch] = useState(null);

  return (
    <section id="rd" style={{
      background: '#fbfaf7',
      padding: '0 0 80px 0',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Immersive Banner Header */}
      <div className="rd-banner">
        
        {/* RIGHT IMMERSIVE IMAGE LAYER (60% width block) */}
        <div className="rd-banner-right">
          <img 
            src={rdScientist} 
            alt="EGC R&D scientist in compounding cleanroom" 
            className="rd-banner-img"
          />
          
          {/* Layered Overlays */}
          <div className="rd-ov-left" />
          <div className="rd-ov-bottom" />
          <div className="rd-ov-top" />
        </div>

        {/* LEFT CONTENT PANEL (40% width block, overlapping slightly into image space) */}
        <div className="rd-banner-left">
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
              R&D Innovation
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
              Driving Innovation Through Science
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
              Our advanced R&D environment combines cutting-edge technology, scientific expertise, and a passion for innovation to create safe, effective, and high-performance cosmetic solutions.
            </p>

            {/* Premium Interactive Button */}
            <button
              onClick={onOpenSimulator}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
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
              <FlaskConical size={16} fill="none" />
              Launch Formulation Simulator
              <ArrowRight size={14} />
            </button>

            {/* Features Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              marginTop: '15px',
              borderTop: '1px solid rgba(181, 137, 59, 0.15)',
              paddingTop: '20px',
              textAlign: 'center'
            }} className="rd-features">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Microscope size={20} style={{ color: '#b5893b' }} />
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#1B1035', lineHeight: '1.3' }}>Advanced R&D Labs</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', borderLeft: '1px solid rgba(181, 137, 59, 0.15)' }}>
                <FlaskConical size={20} style={{ color: '#b5893b' }} />
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#1B1035', lineHeight: '1.3' }}>Evidence Based Formulation</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', borderLeft: '1px solid rgba(181, 137, 59, 0.15)' }}>
                <ShieldCheck size={20} style={{ color: '#b5893b' }} />
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#1B1035', lineHeight: '1.3' }}>Safety & Stability Testing</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', borderLeft: '1px solid rgba(181, 137, 59, 0.15)' }}>
                <FileText size={20} style={{ color: '#b5893b' }} />
                <span style={{ fontSize: '10px', fontWeight: '600', color: '#1B1035', lineHeight: '1.3' }}>Innovation & Product Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS FLOATING CARD (Center-Right Panel) */}
        <div className="rd-banner-center">
          <div className="rd-stats-card">
            <div className="rd-stats-grid">
              {STATS.map((stat, idx) => (
                <div key={idx} className="rd-stat-item">
                  <div className="rd-stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <span className="rd-stat-value">{stat.value}</span>
                  <span className="rd-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* CORE RESEARCH AREAS DECK & SHELVES */}
      <div style={{ 
        maxWidth: '1440px', 
        margin: '60px auto 0', 
        padding: '0 40px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px' 
      }}>
        
        {/* Middle Section: Core Research Areas Title */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* OUR CORE RESEARCH AREAS Title with lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            margin: '10px 0 10px'
          }}>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed rgba(123, 92, 183, 0.3)', opacity: 0.8 }} />
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: '700',
              color: '#7b5cb7',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: 0
            }}>
              Our Core Research Areas
            </h3>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed rgba(123, 92, 183, 0.3)', opacity: 0.8 }} />
          </div>

          {/* 6 Cards Grid */}
          <div style={{
            display: 'grid',
            gap: '16px'
          }} className="rd-areas-grid">
            {Object.keys(RESEARCH_DETAILS).map((key) => {
              const res = RESEARCH_DETAILS[key];
              return (
                <div
                  key={key}
                  onClick={() => setSelectedResearch(key)}
                  style={{
                    background: 'white',
                    border: '1px solid #e2dfd8',
                    borderRadius: '8px',
                    padding: '24px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'center'
                  }}
                  className="research-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#7b5cb7';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(123, 92, 183, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2dfd8';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ color: '#7b5cb7', marginBottom: '4px' }}>
                    {res.icon}
                  </div>
                  <h4 style={{ fontSize: '13.5px', fontWeight: '700', color: '#1b0b30', margin: 0, lineHeight: 1.3 }}>
                    {res.title}
                  </h4>
                  <p style={{ fontSize: '11px', color: '#7c728a', lineHeight: '1.45', margin: 0 }}>
                    {res.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom shelves graphic banner */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img 
            src={rdShelves} 
            alt="Where Science Creates Beauty" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block', boxShadow: '0 4px 20px rgba(27, 11, 48, 0.05)' }}
          />
        </div>
      </div>

      {/* Research Detail Modal */}
      {selectedResearch && (
        <div className="modal-overlay" onClick={() => setSelectedResearch(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {RESEARCH_DETAILS[selectedResearch].icon}
              <h2 className="info-modal-title" style={{ margin: 0 }}>
                {RESEARCH_DETAILS[selectedResearch].title}
              </h2>
              <button onClick={() => setSelectedResearch(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '16px', color: '#2d2736', lineHeight: '1.7' }}>
                {RESEARCH_DETAILS[selectedResearch].content}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .rd-banner {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 540px;
          overflow: hidden;
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181, 137, 59, 0.08);
        }
        .rd-banner-left {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
          position: relative;
          padding: 60px 20px 60px 8%;
        }
        .rd-banner-center {
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          position: relative;
          padding-right: 4%;
        }
        .rd-banner-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 55%;
          z-index: 1;
          overflow: hidden;
        }
        .rd-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center left;
          display: block;
        }
        .rd-ov-left {
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
        .rd-ov-bottom {
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
        .rd-ov-top {
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
        .rd-stats-card {
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 15px 35px rgba(27, 11, 48, 0.08);
          width: 100%;
          max-width: 320px;
        }
        .rd-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .rd-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 15px;
        }
        .rd-stat-item:nth-child(1) {
          border-right: 1px solid rgba(181, 137, 59, 0.15);
          border-bottom: 1px solid rgba(181, 137, 59, 0.15);
        }
        .rd-stat-item:nth-child(2) {
          border-bottom: 1px solid rgba(181, 137, 59, 0.15);
        }
        .rd-stat-item:nth-child(3) {
          border-right: 1px solid rgba(181, 137, 59, 0.15);
        }
        .rd-stat-icon-wrapper {
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rd-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #1b0b30;
          display: block;
          line-height: 1.2;
        }
        .rd-stat-label {
          font-size: 10px;
          color: #7c728a;
          text-transform: uppercase;
          font-weight: 600;
          margin-top: 4px;
          letter-spacing: 0.3px;
          line-height: 1.3;
        }
        @media (min-width: 1024px) {
          .rd-areas-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        @media (max-width: 1023px) and (min-width: 768px) {
          .rd-areas-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .rd-areas-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1024px) {
          .rd-banner {
            flex-direction: column;
            min-height: auto;
          }
          .rd-banner-left {
            width: 100%;
            padding: 56px 24px 36px;
          }
          .rd-banner-center {
            width: 100%;
            padding: 0 24px 40px;
            justify-content: center;
          }
          .rd-banner-right {
            position: relative;
            width: 100%;
            height: 60vw;
            min-height: 280px;
          }
          .rd-ov-left {
            background: linear-gradient(to bottom,
              #fbfaf7 0%,
              rgba(251, 250, 247, 0.88) 12%,
              transparent 35%
            );
          }
        }
      `}</style>
    </section>
  );
}
