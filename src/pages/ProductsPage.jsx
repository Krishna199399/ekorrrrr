import React from 'react';
import ProductExpertise from '../components/ProductExpertise';
import ContactForm from '../components/ContactForm';
import { Microscope, Beaker, Check } from 'lucide-react';

export default function ProductsPage() {
  const formulations = [
    {
      title: 'Advanced Peptide Firming Serum',
      actives: '3% Matrixyl Synthe\'6, 1.5% Copper Tripeptide-1',
      viscosity: '1200 - 1500 cPs (fluid serum)',
      ph: '5.2 - 5.5',
      stability: 'Passed 3 months accelerated testing at 45°C'
    },
    {
      title: 'Ceramide Barrier Restoring Cream',
      actives: '2% Ceramide NP/AP/EOP, 1% Cholesterol, 3% Phytosphingosine',
      viscosity: '15,000 - 18,000 cPs (medium cream)',
      ph: '5.5 - 5.8 (biomimetic)',
      stability: 'Passed freeze-thaw cycles (-10°C to 40°C)'
    },
    {
      title: 'Sulfate-Free Hair Thickening Shampoo',
      actives: '1% Caffeine, 0.5% Biotinyl-GHK, 2% Hydrolyzed Rice Protein',
      viscosity: '4500 - 5500 cPs (surfactant gel)',
      ph: '5.0 - 5.3',
      stability: 'Preservative challenge test passed (USP <51>)'
    },
    {
      title: 'Active Bakuchiol Radiance Oil',
      actives: '1.5% Sytenol® A (Bakuchiol), 5% Squalane, 2% Rosehip Oil',
      viscosity: '40 - 60 cPs (light anhydrous oil)',
      ph: 'Anhydrous (N/A)',
      stability: 'Peroxide value < 10 meq O2/kg after light exposure'
    }
  ];

  const activesInfo = [
    {
      name: 'Peptides & Bio-Actives',
      description: 'Used for cell signaling to stimulate collagen and elastin networks. Requires strict pH stabilization during compounding to prevent hydrolysis.',
      benefits: ['Wrinkle reduction', 'Skin firming', 'Elastin boost']
    },
    {
      name: 'Ceramides & Lipids',
      description: 'Mimics the skin natural lipid barrier. Requires high-shear homogenizers to create stable lamellar gel network structures without recrystallization.',
      benefits: ['Barrier restoration', 'Transepidermal water loss reduction', 'Soothing']
    },
    {
      name: 'Encapsulated Vitamin C',
      description: 'Protected within a liposomal envelope to prevent oxidation from light and air. Provides a slow-release profile for maximum bio-availability.',
      benefits: ['Hyperpigmentation control', 'Radical scavenging', 'Brightening']
    }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #f5f2fc 0%, #ebe5f7 100%)', color: '#2d2736', paddingTop: '80px' }}>
      
      {/* 1. Page Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1b0b30 0%, #2d184d 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at center, rgba(181,137,59,0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '2px', fontSize: '11px', textTransform: 'uppercase' }}>
            Formulation chemistry & catalog profiles
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 54px)', margin: '15px 0', lineHeight: 1.1 }}>
            Our Product Expertise
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Explore scientific formulations developed inside our R&D Lab, optimized for stability, absorption, and regulatory approval.
          </p>
        </div>
      </div>

      {/* 2. Formulation Specifications */}
      <div style={{ padding: '80px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
            Formulation Blueprints
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
            Sample Formulation Standards
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {formulations.map((f, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '8px',
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              border: '1px solid rgba(181, 137, 59, 0.12)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1b0b30', margin: '0 0 15px 0', borderBottom: '1px solid rgba(181,137,59,0.2)', paddingBottom: '10px' }}>
                {f.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#7c728a' }}>
                <span><strong>Active Actives:</strong> {f.actives}</span>
                <span><strong>Viscosity Range:</strong> {f.viscosity}</span>
                <span><strong>Target pH:</strong> {f.ph}</span>
                <span><strong>Stability Score:</strong> {f.stability}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Original Product Expertise Section */}
      <ProductExpertise />

      {/* 4. Active Ingredient Guide */}
      <div style={{ padding: '80px 40px', background: 'linear-gradient(135deg, #ebe5f7 0%, #e3dcf2 100%)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
              Raw Material Science
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
              Active Chemistry Breakdown
            </h2>
            <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {activesInfo.map((act, i) => (
              <div key={i} style={{
                background: '#fbfaf7',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.04)',
                textAlign: 'left',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                    <Microscope size={22} style={{ color: '#b5893b' }} />
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1b0b30', margin: 0 }}>{act.name}</h4>
                  </div>
                  <p style={{ color: '#7c728a', fontSize: '13px', lineHeight: '1.6', margin: '0 0 20px 0' }}>{act.description}</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '15px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#1b0b30', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Key Benefits:</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {act.benefits.map((b, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#5c5069' }}>
                        <Check size={12} style={{ color: '#b5893b' }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Contact Lead Form */}
      <ContactForm />
    </div>
  );
}
