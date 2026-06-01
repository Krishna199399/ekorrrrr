import React from 'react';
import FactorySetup from '../components/FactorySetup';
import ContactForm from '../components/ContactForm';
import { PencilRuler, Wind, Droplet, ArrowRight, Layers } from 'lucide-react';

export default function PortfolioPage() {
  const specs = [
    {
      icon: <Wind size={22} style={{ color: '#b5893b' }} />,
      title: 'ISO 7/8 HVAC Engineering',
      desc: 'Zoned air-handler systems with terminal HEPA filtration. We calibrate positive pressure boundaries (+15 Pa) to block external dust ingress.'
    },
    {
      icon: <Droplet size={22} style={{ color: '#b5893b' }} />,
      title: 'USP Purified Water Loops',
      desc: 'Double-pass Reverse Osmosis (RO) systems combined with Electro-Deionization (EDI), circulating water at >1.5 m/s to prevent biofilm.'
    },
    {
      icon: <Layers size={22} style={{ color: '#b5893b' }} />,
      title: 'Compounding Zoning layouts',
      desc: 'Segregated raw material weighing booths, wet mixing zones, clean packing corridors, and finished product quarantine clean rooms.'
    }
  ];

  const projects = [
    {
      title: 'Milan Luxury Skin Lab (Italy)',
      scale: 'Boutique (8,500 sq ft)',
      focus: 'High-end bio-peptides & active serums',
      result: 'ISO 22716 certification audited within 6 months. High-speed sterile compounding lines.'
    },
    {
      title: 'Bengaluru Industrial Scale-up (India)',
      scale: 'Industrial (45,000 sq ft)',
      focus: 'High-volume skincare & body wash compounding',
      result: 'Integrated 3-ton vacuum emulsifiers and automatic multi-track sachet packing machinery.'
    },
    {
      title: 'Munich Green Cosmetics Hub (Germany)',
      scale: 'Turnkey (12,000 sq ft)',
      focus: 'ECOCERT COSMOS approved organic emulsions',
      result: 'Zero-discharge waste filtration systems, energy-saving heat exchangers, and ISO 8 compounding zone.'
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
            Cleanroom blueprints & manufacturing plants
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 54px)', margin: '15px 0', lineHeight: 1.1 }}>
            Factory & Blueprint Portfolio
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Review cleanroom schematics, HVAC layouts, Purified Water loops, and scale cases designed and built by EGC engineers.
          </p>
        </div>
      </div>

      {/* 2. Engineering Specifications */}
      <div style={{ padding: '80px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
            Cleanroom Blueprint Guidelines
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
            GMP Facility Architecture
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {specs.map((sp, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '8px',
              padding: '35px',
              border: '1px solid rgba(181, 137, 59, 0.12)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              textAlign: 'left'
            }}>
              <div style={{
                background: 'rgba(181, 137, 59, 0.1)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>{sp.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', color: '#1b0b30', margin: '0 0 10px 0' }}>{sp.title}</h3>
              <p style={{ color: '#7c728a', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>{sp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Original Factory Setup component */}
      <FactorySetup />

      {/* 4. Project Case Studies */}
      <div style={{ padding: '80px 40px', background: 'linear-gradient(135deg, #ebe5f7 0%, #e3dcf2 100%)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
              Built Project Histories
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
              Factory Setup Case Studies
            </h2>
            <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {projects.map((proj, i) => (
              <div key={i} style={{
                background: '#fbfaf7',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.04)',
                textAlign: 'left',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <h4 style={{ fontSize: '16.5px', fontWeight: 'bold', color: '#1b0b30', margin: '0 0 15px 0', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '10px' }}>
                  {proj.title}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#7c728a' }}>
                  <span><strong>Scale Tier:</strong> {proj.scale}</span>
                  <span><strong>Product Focus:</strong> {proj.focus}</span>
                  <span><strong>Operational Result:</strong> {proj.result}</span>
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
