import React from 'react';
import AtAGlance from '../components/AtAGlance';
import ContactForm from '../components/ContactForm';
import { Award, ShieldCheck, Users, BrainCircuit } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <BrainCircuit size={28} style={{ color: '#b5893b' }} />,
      title: 'Scientific Rigor',
      desc: 'Every formulation undergoes rigorous stability testing, rheological modeling, and active concentration audits in our R&D Lab.'
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#b5893b' }} />,
      title: 'Absolute Traceability',
      desc: 'From organic botanical harvesting to sterile cleanroom packaging, we maintain strict documentation loops to exceed GMP standards.'
    },
    {
      icon: <Award size={28} style={{ color: '#b5893b' }} />,
      title: 'Luxury Aesthetics',
      desc: 'We merge advanced chemical science with premium sensory experiences, designing formulations that wow consumers at first touch.'
    }
  ];

  const team = [
    {
      name: 'Dr. Elena Rostova',
      role: 'Chief Scientific Officer (CSO)',
      bio: 'Ph.D. in Cosmeceutical Chemistry from University of Milan. Former lead researcher at L\'Oreal R&I, specializing in bio-peptides and active liposome delivery systems.'
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Cleanroom Engineering',
      bio: '20+ years of cleanroom architectural design. Former senior automation engineer at Bayer, designing pharmaceutical cleanrooms globally.'
    },
    {
      name: 'Priya Nair',
      role: 'Director of Regulatory Affairs',
      bio: 'Expert in CDSCO, US FDA, and EU COSMOS cosmetics compliance audits. Coordinates international compliance dossiers for high-growth export brands.'
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
            Inside Ekora Global Consulting
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 54px)', margin: '15px 0', lineHeight: 1.1 }}>
            Our Scientific Heritage
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Bridging the gap between boutique molecular breakthroughs and high-volume, ISO 22716-compliant cleanroom manufacturing environments.
          </p>
        </div>
      </div>

      {/* 2. Core Philosophy & Values */}
      <div style={{ padding: '80px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: 0 }}>
            Our Core Values
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid rgba(181, 137, 59, 0.1)',
              textAlign: 'left'
            }}>
              <div style={{ marginBottom: '20px' }}>{v.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1b0b30', margin: '0 0 10px 0' }}>{v.title}</h3>
              <p style={{ color: '#7c728a', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Original At A Glance Component (Founders story, cleanroom heritage) */}
      <AtAGlance />

      {/* 4. Leadership & Executive Team */}
      <div style={{ padding: '80px 40px', background: 'linear-gradient(135deg, #ebe5f7 0%, #e3dcf2 100%)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
              Scientific Panel & Leadership
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
              Meet Our Pioneers
            </h2>
            <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {team.map((member, i) => (
              <div key={i} style={{
                background: '#fbfaf7',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.04)',
                textAlign: 'left',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  paddingBottom: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#1b0b30',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Users size={20} style={{ color: '#b5893b' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1b0b30', margin: 0 }}>{member.name}</h4>
                    <span style={{ fontSize: '12px', color: '#b5893b', fontWeight: '600' }}>{member.role}</span>
                  </div>
                </div>
                <p style={{ color: '#7c728a', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Lead Contact Form */}
      <ContactForm />
    </div>
  );
}
