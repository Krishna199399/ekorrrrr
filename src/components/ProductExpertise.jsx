'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, Shield, ShoppingBag, Eye, ArrowRight } from 'lucide-react';

const CATEGORY_DETAILS = {
  skincare: {
    title: 'Skincare Formulations',
    desc: 'Clinical, aesthetic, and botanical formulations built with highly stable active ingredients.',
    img: '/cat_skincare.png',
    items: [
      { name: 'Anti-Aging Serums', desc: 'Retinol, Bakuchiol, and Peptide delivery systems.' },
      { name: 'Barrier Repair Creams', desc: 'Ceramide NP, Squalane, and Niacinamide emulsions.' },
      { name: 'Hydrating Boosters', desc: 'Multi-weight Hyaluronic Acid and Glycerin complexes.' },
      { name: 'Brightening Treatments', desc: 'Vitamin C (Ascorbic Acid) and Kojic Acid stable formulations.' }
    ]
  },
  haircare: {
    title: 'Haircare Formulations',
    desc: 'Scalp therapies, nourishing conditioners, and styling science engineered for efficacy.',
    img: '/cat_haircare.png',
    items: [
      { name: 'Scalp Revitalizing Serums', desc: 'Caffeine, Peptides, and Rosemary scalp treatments.' },
      { name: 'Deep Conditioning Masks', desc: 'Keratin, Argan Oil, and Amino Acid complex reconstructors.' },
      { name: 'Sulfate-Free Shampoos', desc: 'Mild surfactants (Glucosides, Isethionates) that protect hair dye.' },
      { name: 'Anti-Frizz Oils', desc: 'Lightweight silicone-free dry oils with botanical esters.' }
    ]
  },
  bodycare: {
    title: 'Bodycare Formulations',
    desc: 'Sensory-driven formulations developed for body wellness and daily care routines.',
    img: '/cat_bodycare.png',
    items: [
      { name: 'Smoothing Body Lotions', desc: 'Salicylic Acid (BHA) and Lactic Acid (AHA) enriched lotions.' },
      { name: 'Calming Massage Oils', desc: 'Lavender, Centella Asiatica, and Sweet Almond blends.' },
      { name: 'Nourishing Body Butters', desc: 'Shea Butter and Cocoa Butter-rich moisturising systems.' },
      { name: 'Exfoliating Body Scrubs', desc: 'Sugar and salt-based exfoliators with rinse-off technology.' }
    ]
  },
  luxury: {
    title: 'Luxury & Premium Cosmetics',
    desc: 'Premium cosmetic formulations featuring rare botanicals and elevated sensory experiences.',
    img: '/cat_luxury.png',
    items: [
      { name: '24K Gold Cellular Serums', desc: 'Gold-infused serums with Coenzyme Q10 and Rose Distillate.' },
      { name: 'Bio-Fermented Elixirs', desc: 'Fermented actives designed for advanced skin conditioning.' },
      { name: 'Silk Protein Night Creams', desc: 'Rich creams infused with silk proteins and orchid extracts.' },
      { name: 'Premium Face Oils', desc: 'Squalane, Rosehip, and Marula oil blends for enhanced radiance.' }
    ]
  },
  color: {
    title: 'Color Cosmetics',
    desc: 'Pigmented formulations that combine cosmetic performance with skincare benefits.',
    img: '/cat_color.png',
    items: [
      { name: 'Serum Foundations', desc: 'SPF-integrated foundations with Hyaluronic Acid and Niacinamide.' },
      { name: 'Hydrating Lip Oils', desc: 'Tinted lip oils enriched with jojoba, avocado, and peptide complexes.' },
      { name: 'Liquid Illuminators', desc: 'Lightweight highlighting formulas with refined mica pigments.' },
      { name: 'Setting Sprays', desc: 'Long-wear setting sprays with Centella extract technology.' }
    ]
  }
};

const INDUSTRY_ITEMS = [
  { key: 'd2c', title: 'D2C Beauty Brands', desc: 'We help digital-first beauty brands accelerate product launches through stable formulation libraries, ingredient sourcing support, packaging guidance, and commercialization planning.' },
  { key: 'dermatology', title: 'Dermatology Companies', desc: 'We develop clinical cosmetic formulations centered around dermatologist-backed active ingredients, scientific validation, stability testing, and patient-focused product performance.' },
  { key: 'wellness', title: 'Wellness & Ayurveda Brands', desc: 'We combine traditional botanical knowledge with modern formulation science to create clean, effective, and scalable wellness products.' },
  { key: 'spa', title: 'Spa & Salon Chains', desc: 'We formulate professional-grade products designed for treatment rooms, salons, spas, and wellness centers, focusing on performance, consistency, and sensory appeal.' },
  { key: 'ecommerce', title: 'Ecommerce Brands', desc: 'We assist high-growth ecommerce businesses with private label development, manufacturing strategies, scalable production systems, and supply chain planning.' },
  { key: 'pharma', title: 'Pharma Companies', desc: 'We support pharmaceutical organizations through advanced cosmetic product development, cleanroom manufacturing strategies, regulatory alignment, and quality-focused production planning.' },
  { key: 'retail', title: 'Luxury Retail Chains', desc: 'We create premium beauty concepts supported by sophisticated formulations, packaging compatibility assessments, and prestige product positioning.' }
];

export default function ProductExpertise() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showFullCatalog, setShowFullCatalog] = useState(false);
  const [showFullSolutions, setShowFullSolutions] = useState(false);

  return (
    <section id="expertise" style={{
      background: '#faf7f2',
      padding: '0 0 80px 0',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Immersive Banner Header */}
      <div className="expertise-banner">
        
        {/* RIGHT IMMERSIVE IMAGE LAYER (60% width block) */}
        <div className="expertise-banner-right">
          <img 
            src="/hero_product_showcase.png"
            alt="EGC cosmetics laboratory product showcase" 
            className="expertise-banner-img"
          />
          
          {/* Layered Overlays */}
          <div className="expertise-ov-left" />
          <div className="expertise-ov-bottom" />
          <div className="expertise-ov-top" />
        </div>

        {/* LEFT CONTENT PANEL (40% width block, overlapping slightly into image space) */}
        <div className="expertise-banner-left">
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
              Product Expertise
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
              Formulation Mastery Across Categories
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
              Our formulation laboratory develops innovative cosmetic and personal care products across multiple beauty, wellness, and consumer care categories for emerging brands, manufacturers, and global beauty businesses.
            </p>

            {/* Premium Gold Catalog Button */}
            <button
              onClick={() => setShowFullCatalog(true)}
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
              View Complete Product Catalog
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* LOWER GRID CONTENT (Centered inside 1440px page container) */}
      <div style={{ 
        maxWidth: '1440px', 
        margin: '60px auto 0', 
        padding: '0 40px',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '60px' 
      }}>
        
        {/* 5 Circular Category Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          marginTop: '10px'
        }} className="category-circles-grid">
          {Object.keys(CATEGORY_DETAILS).map((key) => {
            const cat = CATEGORY_DETAILS[key];
            return (
              <div
                key={key}
                onClick={() => setSelectedCategory(key)}
                style={{
                  background: 'white',
                  border: '1px solid #e2dfd8',
                  borderRadius: '12px',
                  padding: '20px 10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
                }}
                className="category-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#b5893b';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(181, 137, 59, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2dfd8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.01)';
                }}
              >
                {/* Round cropped thumbnail */}
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(181, 137, 59, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1b0b30', margin: 0 }}>
                    {cat.title.split(' ')[0]}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#7c728a' }}>Products</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: Industries We Serve */}
        <div style={{
          marginTop: '30px',
          borderTop: '1px solid rgba(181, 137, 59, 0.2)',
          paddingTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#C89B3C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Industries We Serve
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#1b0b30', fontWeight: '600', margin: 0 }}>
              Empowering Global Beauty Operators
            </h2>
            <p style={{ fontSize: '16px', color: '#5c526b', lineHeight: '1.6', maxWidth: '640px', margin: 0 }}>
              We support businesses across multiple cosmetic and personal care sectors through formulation expertise, manufacturing consulting, regulatory support, factory planning, and commercialization strategies.
            </p>
          </div>

          {/* 7 Columns Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '12px'
          }} className="industries-grid">
            {INDUSTRY_ITEMS.map((ind) => (
              <div
                key={ind.key}
                onClick={() => setSelectedIndustry(ind.key)}
                style={{
                  background: 'white',
                  border: '1px solid #e2dfd8',
                  borderRadius: '10px',
                  padding: '20px 10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
                }}
                className="industry-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#b5893b';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(181, 137, 59, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2dfd8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.01)';
                }}
              >
                <div style={{
                  color: '#b5893b',
                  background: 'rgba(181, 137, 59, 0.05)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShoppingBag size={18} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#1b0b30', lineHeight: '1.3' }}>
                  {ind.title}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowFullSolutions(true)}
            style={{
              padding: '12px 24px',
              border: '1px solid #1B1035',
              background: 'transparent',
              color: '#1B1035',
              fontWeight: '600',
              fontSize: '14px',
              borderRadius: '6px',
              cursor: 'pointer',
              width: 'fit-content',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f0edf5'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}
          >
            Explore Industry Solutions
          </button>
        </div>
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Sparkles size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>
                {CATEGORY_DETAILS[selectedCategory].title}
              </h2>
              <button onClick={() => setSelectedCategory(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body">
              <p style={{ fontStyle: 'italic', color: '#7c728a', fontSize: '15px', marginBottom: '20px' }}>
                "{CATEGORY_DETAILS[selectedCategory].desc}"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {CATEGORY_DETAILS[selectedCategory].items.map((item, idx) => (
                  <div key={idx} style={{ padding: '15px', background: 'white', border: '1px solid #e2dfd8', borderRadius: '8px', display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <div style={{ background: '#fbf5e6', padding: '6px', borderRadius: '50%', color: '#b5893b' }}>
                      <Check size={16} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ fontWeight: '700', color: '#1b0b30', fontSize: '15px' }}>{item.name}</p>
                      <p style={{ color: '#2d2736', fontSize: '14px', marginTop: '4px' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Industry Modal */}
      {selectedIndustry && (
        <div className="modal-overlay" onClick={() => setSelectedIndustry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <ShoppingBag size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>
                {INDUSTRY_ITEMS.find(i => i.key === selectedIndustry).title}
              </h2>
              <button onClick={() => setSelectedIndustry(null)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body">
              <p style={{ fontSize: '16px', color: '#2d2736', lineHeight: '1.7', textAlign: 'left' }}>
                {INDUSTRY_ITEMS.find(i => i.key === selectedIndustry).desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Complete Catalog Modal */}
      {showFullCatalog && (
        <div className="modal-overlay" onClick={() => setShowFullCatalog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Eye size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>Complete Product Formulation Catalog</h2>
              <button onClick={() => setShowFullCatalog(false)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {Object.keys(CATEGORY_DETAILS).map(key => (
                <div key={key} style={{ marginBottom: '30px', textAlign: 'left' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#b5893b', borderBottom: '1px solid #e2dfd8', paddingBottom: '6px', marginBottom: '12px' }}>
                    {CATEGORY_DETAILS[key].title}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="catalog-grid">
                    {CATEGORY_DETAILS[key].items.map((item, i) => (
                      <div key={i} style={{ padding: '12px', background: 'white', border: '1px solid #e2dfd8', borderRadius: '6px' }}>
                        <p style={{ fontWeight: '600', color: '#1b0b30', fontSize: '14px' }}>{item.name}</p>
                        <p style={{ color: '#7c728a', fontSize: '12px', marginTop: '4px' }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Explore Industry Solutions Modal */}
      {showFullSolutions && (
        <div className="modal-overlay" onClick={() => setShowFullSolutions(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="info-modal-header" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Shield size={32} style={{ color: '#b5893b' }} />
              <h2 className="info-modal-title" style={{ margin: 0 }}>Industry Solutions & Operations</h2>
              <button onClick={() => setShowFullSolutions(false)} className="modal-close" style={{ color: 'white' }}>
                <X size={24} />
              </button>
            </div>
            <div className="info-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              {INDUSTRY_ITEMS.map(ind => (
                <div key={ind.key} style={{ borderBottom: '1px solid #e2dfd8', paddingBottom: '15px' }}>
                  <h4 style={{ fontWeight: '700', color: '#b5893b', fontSize: '16px', marginBottom: '6px' }}>
                    {ind.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#2d2736', lineHeight: '1.5' }}>
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html:`
        .expertise-banner {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 480px;
          overflow: hidden;
          background: #faf7f2;
          border-bottom: 1px solid rgba(181, 137, 59, 0.08);
        }
        .expertise-banner-left {
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
        .expertise-banner-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 62%;
          z-index: 1;
          overflow: hidden;
        }
        .expertise-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }
        .expertise-ov-left {
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
        .expertise-ov-bottom {
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
        .expertise-ov-top {
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
          .expertise-banner {
            flex-direction: column;
            min-height: auto;
          }
          .expertise-banner-left {
            width: 100%;
            padding: 56px 24px 36px;
            background: #faf7f2;
          }
          .expertise-banner-right {
            position: relative;
            width: 100%;
            height: 60vw;
            min-height: 280px;
          }
          .expertise-ov-left {
            background: linear-gradient(to bottom,
              #faf7f2 0%,
              rgba(250, 247, 242, 0.88) 12%,
              transparent 35%
            );
          }
        }
        @media (max-width: 1024px) {
          .category-circles-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .industries-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #expertise {
            padding-bottom: 56px !important;
          }
          #expertise > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
            margin-top: 40px !important;
          }
          #expertise h2 {
            font-size: clamp(24px, 6vw, 38px) !important;
          }
          .expertise-banner-left {
            padding: 44px 20px 32px !important;
          }
          .industries-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .category-circles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .catalog-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .expertise-banner-left {
            padding: 36px 16px 28px !important;
          }
          .category-circles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}} />
    </section>
  );
}
