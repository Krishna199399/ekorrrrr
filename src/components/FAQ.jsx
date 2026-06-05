'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: 'What does EGC Ekora Global Consulting do?',
    answer: 'EGC provides cosmetic product development, manufacturing consulting, factory setup planning, regulatory compliance support, commercialization strategy, and business advisory services for beauty and personal care companies.'
  },
  {
    question: 'Do you help with cosmetic manufacturing facility setup?',
    answer: 'Yes. We assist with factory planning, cleanroom design, equipment selection, workflow optimization, GMP alignment, and turnkey manufacturing project execution.'
  },
  {
    question: 'Can EGC support regulatory approvals and compliance?',
    answer: 'Yes. We provide guidance for FDA, MoCRA, CDSCO, BIS, EU CPNP, and other international cosmetic regulatory requirements.'
  },
  {
    question: 'Do you work with startups and emerging beauty brands?',
    answer: 'Yes. We support startups, D2C brands, private label businesses, manufacturers, wellness brands, dermatology companies, and multinational organizations.'
  },
  {
    question: 'Can you help commercialize a cosmetic product?',
    answer: 'Yes. Our team supports formulation development, scale-up, manufacturing planning, packaging strategy, compliance readiness, and go-to-market execution.'
  },
  {
    question: 'Do you support international expansion?',
    answer: 'Yes. We assist businesses with export readiness, international compliance requirements, product registration guidance, documentation support, and market-entry strategies.'
  },
  {
    question: 'Why choose EGC Ekora Global Consulting?',
    answer: 'EGC combines formulation science, manufacturing expertise, factory planning, regulatory consulting, and commercialization support under one advisory platform, helping cosmetic businesses move from concept to market with confidence.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{
      background: '#fbfaf7',
      padding: '80px 40px',
      borderBottom: '1px solid rgba(181, 137, 59, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* Title Section */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#b5893b', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Common Questions
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#1b0b30', fontWeight: '600', margin: 0 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '16px', color: '#5c526b', maxWidth: '700px', margin: 0, lineHeight: '1.6' }}>
            Get quick answers to the most common questions about our services, processes, and how we can help your cosmetic business succeed.
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                border: '1px solid #e2dfd8',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(27, 11, 48, 0.02)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '24px 30px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#faf9f6'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <HelpCircle size={20} style={{ color: '#b5893b', flexShrink: 0 }} />
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#1b0b30', 
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    color: '#b5893b', 
                    flexShrink: 0,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </button>

              {/* Answer */}
              <div 
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, padding 0.3s ease'
                }}
              >
                <div style={{
                  padding: openIndex === index ? '0 30px 24px 62px' : '0 30px 0 62px',
                  fontSize: '15px',
                  color: '#5c526b',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #1b0b30 0%, #2d184d 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 10px 30px rgba(27, 11, 48, 0.2)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'white', fontWeight: '600', margin: '0 0 12px 0' }}>
            Still Have Questions?
          </h3>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px auto' }}>
            Our team is here to help. Get in touch with our cosmetic industrial consultants and receive personalized answers to your specific needs.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '14px 32px',
              background: '#b5893b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 15px rgba(181, 137, 59, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#9c732c';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(181, 137, 59, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#b5893b';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(181, 137, 59, 0.3)';
            }}
          >
            Contact Our Team
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 768px) {
          #faq {
            padding: 56px 20px !important;
          }
          #faq h2 {
            font-size: clamp(24px, 6vw, 38px) !important;
          }
          #faq h3 {
            font-size: 14px !important;
          }
        }
        @media (max-width: 500px) {
          #faq {
            padding: 44px 16px !important;
          }
          #faq button {
            padding: 20px !important;
          }
          #faq .answer {
            padding: 0 20px 20px 48px !important;
          }
        }
      `}} />
    </section>
  );
}
