import React from 'react';
import { Star, MessageSquare, PhoneCall, Mail, Calendar, MapPin, ArrowRight } from 'lucide-react';
import ctaBottles from '../assets/ChatGPT Image Jun 1, 2026, 08_11_46 PM.png';

const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    role: 'Head of R&D',
    company: 'LuxeSkin Labs, USA',
    avatar: '/images/assets/avatar_sarah.png',
    text: 'EGC Ekora Global Consulting is more than a service provider — they are a true innovation partner. Their scientific expertise and end-to-end support helped us launch with confidence in highly competitive markets.'
  },
  {
    name: 'Marco Bianchil',
    role: 'CEO',
    company: 'Bella Vita Cosmetics, Italy',
    avatar: '/images/assets/avatar_marco.png',
    text: 'From formulation to factory setup and regulatory compliance, their team delivered beyond expectations. Their attention to detail and global knowledge are unmatched.'
  },
  {
    name: 'Mei Ling Tan',
    role: 'VP Operations',
    company: 'NaturaGlow, Singapore',
    avatar: '/images/assets/avatar_mei.png',
    text: 'Their regulatory expertise and understanding of global standards made our international expansion smooth and risk-free. A reliable partner we can always count on.'
  }
];

const LOGOS = [
  'LUXE SKIN LABS', 'BELLA VITA COSMETICS', 'NATURAGLOW BEAUTY', 
  'PURE ESSENCE BOTANICALS', 'GLOWIX BEAUTY', 'DERMA FUTURE SCIENCE', 'VELVETIQUE PARIS'
];

export default function Testimonials() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" style={{
      background: '#fbfaf7',
      padding: '80px 40px',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Testimonials Title Row */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#b5893b', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Trusted by Global Leaders
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#1b0b30', fontWeight: '600', margin: 0 }}>
            Proven Excellence. Trusted Worldwide.
          </h2>
          <p style={{ fontSize: '16px', color: '#5c526b', maxWidth: '700px', margin: 0, lineHeight: '1.6' }}>
            We partner with visionary beauty brands, manufacturers, and organizations around the world to deliver innovative solutions, ensure compliance, and drive sustainable growth.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }} className="reviews-grid">
          {REVIEWS.map((rev, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1px solid #e2dfd8',
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 8px 24px rgba(27, 11, 48, 0.02)',
              position: 'relative'
            }}>
              {/* Quote icon background */}
              <MessageSquare size={80} style={{ color: 'rgba(181, 137, 59, 0.03)', position: 'absolute', right: '20px', top: '20px', pointerEvents: 'none' }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', color: '#b5893b' }}>
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="#b5893b" />)}
              </div>

              {/* Text */}
              <p style={{ fontSize: '14px', color: '#5c526b', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                "{rev.text}"
              </p>

              {/* User info */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', borderTop: '1px solid #e2dfd8', paddingTop: '15px' }}>
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #b5893b', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1b0b30', margin: 0 }}>{rev.name}</h4>
                  <span style={{ fontSize: '12px', color: '#7c728a' }}>{rev.role}, <strong style={{ color: '#b5893b' }}>{rev.company}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Marquee */}
        <div style={{
          marginTop: '20px',
          borderTop: '1px solid rgba(181, 137, 59, 0.2)',
          borderBottom: '1px solid rgba(181, 137, 59, 0.2)',
          padding: '30px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            animation: 'marquee 25s linear infinite',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#7c728a',
            letterSpacing: '2px'
          }}>
            {LOGOS.concat(LOGOS).map((logo, idx) => (
              <span key={idx} style={{ padding: '0 40px', borderRight: '1px solid rgba(181, 137, 59, 0.3)' }}>
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          background: 'radial-gradient(circle at left, #2d184d 0%, #1b0b30 100%)',
          borderRadius: '20px',
          padding: '60px 80px',
          color: 'white',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '50px',
          alignItems: 'center',
          textAlign: 'left',
          boxShadow: '0 20px 45px rgba(27,11,48,0.25)'
        }} className="cta-banner">
          
          {/* Left CTA Graphic (Premium Styled & Floating - Enlarged) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '340px',
            alignItems: 'center',
            padding: '20px 0'
          }} className="cta-graphic-container">
            {/* Soft gold glowing blur background */}
            <div style={{
              position: 'absolute',
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(181, 137, 59, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            
            {/* Elegant rotated border frame */}
            <div style={{
              position: 'absolute',
              width: '100%',
              maxWidth: '380px',
              height: '250px',
              border: '1px solid rgba(181, 137, 59, 0.35)',
              borderRadius: '24px',
              transform: 'rotate(5deg) translateY(12px) translateX(8px)',
              zIndex: 1,
              pointerEvents: 'none',
              transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.6s'
            }} className="cta-frame-back" />
            
            <img 
              src={ctaBottles} 
              alt="Luxury EGC Gold formulations bottles" 
              style={{ 
                width: '100%', 
                maxWidth: '380px', 
                height: 'auto', 
                borderRadius: '20px', 
                boxShadow: '0 25px 55px rgba(0,0,0,0.5)',
                transform: 'rotate(-3deg) translateY(-8px)',
                zIndex: 2,
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              className="cta-image-floating"
            />
          </div>

          {/* Right CTA Text & Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#b5893b', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Let's Build the Future of Beauty Together
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'white', fontWeight: '600', margin: 0, lineHeight: 1.2 }}>
              Ready to Bring Your Vision to Life?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '1.5' }}>
              Whether you're developing a new brand, expanding globally, or optimizing your manufacturing — we're here to help.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginTop: '10px'
            }} className="cta-contacts-grid">
              
              <div 
                onClick={handleScrollToContact}
                style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}
              >
                <Calendar size={18} style={{ color: '#b5893b' }} />
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', color: 'white' }}>Book a Consultation</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>1-on-1 expert meeting</span>
                </div>
              </div>

              <a 
                href="mailto:info@egcekora.com"
                style={{ display: 'flex', gap: '10px', alignItems: 'center', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}
              >
                <Mail size={18} style={{ color: '#b5893b' }} />
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', color: 'white' }}>Email Us</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>info@egcekora.com</span>
                </div>
              </a>

              <a 
                href="tel:+12125557890"
                style={{ display: 'flex', gap: '10px', alignItems: 'center', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}
              >
                <PhoneCall size={18} style={{ color: '#b5893b' }} />
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', color: 'white' }}>Call Us</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>+1 (212) 555-7890</span>
                </div>
              </a>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}>
                <MapPin size={18} style={{ color: '#b5893b' }} />
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', color: 'white' }}>Corporate HQ</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>No. 39/3, Richmond Rd, Bengaluru</span>
                </div>
              </div>

            </div>

            <button
              onClick={handleScrollToContact}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                background: '#b5893b',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                marginTop: '10px',
                boxShadow: '0 4px 15px rgba(181, 137, 59, 0.3)'
              }}
              onMouseEnter={(e) => e.target.style.background = '#9c732c'}
              onMouseLeave={(e) => e.target.style.background = '#b5893b'}
            >
              Get Consultation
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee animation & CTA animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cta-banner {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cta-banner:hover {
          box-shadow: 0 20px 45px rgba(27,11,48,0.3) !important;
        }
        .cta-banner:hover .cta-image-floating {
          transform: rotate(0deg) translateY(-16px) scale(1.04) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.55) !important;
        }
        .cta-banner:hover .cta-frame-back {
          transform: rotate(7deg) translateY(18px) translateX(10px) scale(0.96) !important;
          border-color: rgba(181, 137, 59, 0.6) !important;
        }
        @media (max-width: 900px) {
          .cta-banner {
            grid-template-columns: 1fr !important;
            padding: 40px !important;
          }
          .cta-graphic-container {
            min-height: 250px !important;
            margin-bottom: 20px;
          }
        }
        @media (max-width: 500px) {
          .cta-contacts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
