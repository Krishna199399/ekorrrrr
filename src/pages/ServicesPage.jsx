'use client';

import React from 'react';
import Capabilities from '../components/Capabilities';
import ContactForm from '../components/ContactForm';
import { FlaskConical, PencilRuler, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function ServicesPage() {
  const steps = [
    {
      icon: <FlaskConical size={20} />,
      num: '01',
      title: 'Formulation & Prototyping',
      desc: 'Formulation scientists design sample prototypes based on active concentrations and sensory benchmarks. Stability and microbiological assays are run in-house.'
    },
    {
      icon: <PencilRuler size={20} />,
      num: '02',
      title: 'Cleanroom & HVAC Planning',
      desc: 'Drafting sterile process maps, cleanroom partition coordinates, and mechanical HVAC schematics mapping air change velocities for GMP alignment.'
    },
    {
      icon: <ShieldAlert size={20} />,
      num: '03',
      title: 'CDSCO / FDA Licensing Audit',
      desc: 'Structuring site audit master files, compounding batch cards, CDSCO cosmetics product approval applications, and US FDA facility documentation dossiers.'
    },
    {
      icon: <BadgeCheck size={20} />,
      num: '04',
      title: 'Commercial Scale-Up',
      desc: 'Sourcing industrial machinery (homogenizers, tube-fillers, automatic labelers) and calibrating cleanroom lines for safe high-volume compounding.'
    }
  ];

  return (
    <div className="page-container">
      
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at center, rgba(181,137,59,0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '2px', fontSize: '11px', textTransform: 'uppercase' }}>
            Consultation, formulation, engineering & compliance
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 54px)', margin: '15px 0', lineHeight: 1.1 }}>
            Our Service Offerings
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            We guide beauty formulators, brand owners, and cleanroom operators from original molecular concept to global distribution lines.
          </p>
        </div>
      </div>

      {/* 2. Step-by-Step Project Process */}
      <div className="page-section">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
            Our Project Pipeline
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
            Development Workflow
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
        </div>

        <div className="values-grid">
          {steps.map((s, idx) => (
            <div key={idx} style={{
              background: 'white',
              border: '1px solid rgba(181, 137, 59, 0.12)',
              borderRadius: '8px',
              padding: '35px',
              textAlign: 'left',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '24px',
                fontWeight: '900',
                color: 'rgba(181, 137, 59, 0.15)',
                fontFamily: 'var(--font-serif)'
              }}>
                {s.num}
              </div>
              <div style={{
                background: 'rgba(181, 137, 59, 0.1)',
                color: '#b5893b',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '16.5px', fontWeight: 'bold', color: '#1b0b30', margin: '0 0 10px 0' }}>
                {s.title}
              </h3>
              <p style={{ color: '#7c728a', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Original Capabilities Section */}
      <Capabilities />

      {/* 4. Contact Lead Call-to-action */}
      <ContactForm />

      <style dangerouslySetInnerHTML={{__html:`
        .page-container {
          background: linear-gradient(135deg, #f5f2fc 0%, #ebe5f7 100%);
          color: #2d2736;
          padding-top: 80px;
        }
        .page-hero {
          background: linear-gradient(135deg, #1b0b30 0%, #2d184d 100%);
          color: white;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .page-section {
          padding: 80px 40px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          position: relative;
        }
        @media (max-width: 768px) {
          .page-hero {
            padding: 60px 20px;
          }
          .page-section {
            padding: 48px 20px;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .page-hero {
            padding: 44px 16px;
          }
          .page-section {
            padding: 36px 16px;
          }
        }
      `}} />
    </div>
  );
}
