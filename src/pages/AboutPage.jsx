'use client';

import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { 
  Compass, FlaskConical, Search, ClipboardList, ShieldCheck, 
  FileText, Factory, Layers, Users, ChevronDown, Check, Sparkles,
  Wrench, HelpCircle, ArrowRight
} from 'lucide-react';

const ECOSYSTEM_ITEMS = [
  { title: 'Product concept development', icon: <Compass size={22} /> },
  { title: 'Customized cosmetic formulation', icon: <FlaskConical size={22} /> },
  { title: 'Ingredient research', icon: <Search size={22} /> },
  { title: 'Prototype development', icon: <ClipboardList size={22} /> },
  { title: 'Stability testing support', icon: <ShieldCheck size={22} /> },
  { title: 'Regulatory guidance', icon: <FileText size={22} /> },
  { title: 'Manufacturing support', icon: <Wrench size={22} /> },
  { title: 'Plant setup consultation', icon: <Factory size={22} /> },
  { title: 'Packaging consultation', icon: <Layers size={22} /> },
  { title: 'Contract manufacturing support', icon: <Users size={22} /> }
];

const TARGET_COMPANIES = [
  'Startups',
  'Cosmetic manufacturers',
  'Beauty brands',
  'Wellness companies',
  'Ayurvedic companies',
  'E-commerce beauty brands',
  'Private label companies'
];

const WHY_WORK_WITH_US = [
  'Industry-focused cosmetic development approach',
  'Expertise across formulation and manufacturing support',
  'End-to-end cosmetic business understanding',
  'Focus on scalable and market-ready cosmetic solutions',
  'Understanding of evolving clean beauty and wellness trends',
  'Practical support across development and operational stages'
];

const FAQS = [
  {
    q: 'What services does EGC Ekora Global Consulting LLP provide?',
    a: 'EGC Ekora Global Consulting LLP provides cosmetic product development, formulation support, manufacturing consultation, plant setup consultation, packaging consultation, and contract manufacturing support for beauty and personal care businesses.'
  },
  {
    q: 'Does EGC Ekora Global Consulting LLP support cosmetic startups?',
    a: 'Yes. We work with startups, beauty brands, cosmetic manufacturers, and private label companies looking to develop scalable and market-ready cosmetic products.'
  },
  {
    q: 'Which cosmetic product categories do you work on?',
    a: 'We support multiple product categories including skincare, haircare, herbal cosmetics, wellness beauty products, baby care products, and premium personal care formulations.'
  },
  {
    q: 'Do you provide support beyond cosmetic formulation development?',
    a: 'Yes. Along with formulation development, we also support businesses through manufacturing guidance, stability testing, plant setup consultation, packaging consultation, and commercialization support.'
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes. Along with India, we also support businesses targeting cosmetic opportunities across Middle Eastern and African markets.'
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page-container">
      
      {/* 1. Page Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-content">
          <span className="about-eyebrow">
            Inside EGC Ekora Global Consulting LLP
          </span>
          <h1 className="about-title">
            About EGC Ekora Global<br />Consulting LLP
          </h1>
          <div className="about-gold-line" />
          
          <div className="about-hero-paragraphs">
            <p>
              The beauty and personal care industry is evolving through innovation, changing consumer preferences, ingredient awareness, and growing demand for high-quality cosmetic products. Businesses today require more than product ideas alone. They need the right balance of cosmetic research, formulation development, manufacturing understanding, and market-focused execution to build products that remain commercially relevant.
            </p>
            <p>
              <strong>EGC Ekora Global Consulting LLP</strong> is a cosmetic consulting company focused on supporting beauty brands, startups, manufacturers, and wellness businesses through different stages of cosmetic product and business development.
            </p>
            <p>
              With a practical and industry-focused approach, we help businesses develop safe, innovative, and market-ready beauty and personal care products aligned with evolving market expectations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Ecosystem section */}
      <section className="about-section bg-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Support Ecosystem</span>
            <h2 className="section-title">
              Building Cosmetic Brands Through Innovation,<br />Research & Manufacturing Expertise
            </h2>
            <div className="gold-line-center" />
            <p className="section-subtitle">
              Building a successful cosmetic product involves multiple stages including product planning, formulation development, ingredient selection, testing, manufacturing support, packaging direction, and operational understanding.
            </p>
          </div>

          <div className="ecosystem-grid">
            {ECOSYSTEM_ITEMS.map((item, idx) => (
              <div key={idx} className="ecosystem-card">
                <div className="ecosystem-icon-wrapper">
                  {item.icon}
                </div>
                <span className="ecosystem-item-title">{item.title}</span>
              </div>
            ))}
          </div>

          <p className="ecosystem-footer-p">
            This end-to-end approach helps businesses move forward with greater clarity across product development, manufacturing planning, and commercialization stages.
          </p>
        </div>
      </section>

      {/* 3. Side by Side Section: Focus Markets vs Target Clients */}
      <section className="about-section bg-beige border-y">
        <div className="section-container">
          <div className="side-by-side-grid">
            
            {/* Left Box: Markets */}
            <div className="info-block">
              <span className="section-eyebrow">Market Focus</span>
              <h3 className="block-title">Focused on Modern Beauty & Personal Care Markets</h3>
              <div className="gold-line-left" />
              
              <div className="block-paragraphs">
                <p>
                  Consumer preferences across the cosmetic industry are increasingly shifting toward clean-label products, herbal formulations, wellness beauty concepts, and performance-driven personal care solutions.
                </p>
                <p>
                  Understanding these evolving trends plays an important role in developing cosmetic products that align with changing market expectations across India, Middle Eastern countries, and emerging African beauty markets.
                </p>
                <p>
                  Our broader focus remains on combining cosmetic product development with practical manufacturing understanding, scalability, quality, and long-term business relevance.
                </p>
              </div>
            </div>

            {/* Right Box: Target clients */}
            <div className="info-block bg-white-card">
              <span className="section-eyebrow">Partner Profiles</span>
              <h3 className="block-title">Working With Growing Beauty Businesses</h3>
              <div className="gold-line-left" />
              <p className="block-intro-text">We work with:</p>
              
              <div className="targets-list">
                {TARGET_COMPANIES.map((target, idx) => (
                  <div key={idx} className="target-item">
                    <Check size={16} className="text-gold" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>

              <p className="block-footer-text">
                Whether the requirement involves launching a new cosmetic product, strengthening manufacturing capabilities, or expanding into new beauty segments, our focus remains on delivering industry-oriented cosmetic solutions backed by research, quality, sustainability, and consumer-focused innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Work With Us section */}
      <section className="about-section bg-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Why EGC?</span>
            <h2 className="section-title">Why Businesses Work With Us</h2>
            <div className="gold-line-center" />
          </div>

          <div className="why-us-grid">
            {WHY_WORK_WITH_US.map((reason, idx) => (
              <div key={idx} className="why-us-card">
                <div className="why-us-number">0{idx + 1}</div>
                <p className="why-us-text">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA banner */}
      <section className="about-cta-banner">
        <div className="about-cta-glow" />
        <div className="about-cta-container">
          <h2 className="cta-title">Let’s Build the Next Stage of Your Cosmetic Brand</h2>
          <p className="cta-desc">
            Whether you are planning to develop a new cosmetic product, strengthen manufacturing operations, or explore opportunities within the beauty and wellness industry, the right technical and operational direction can help create stronger foundations for long-term growth.
          </p>
          <button 
            onClick={handleScrollToContact} 
            className="cta-button"
          >
            Start Your Cosmetic Journey
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 6. FAQ Accordion section */}
      <section className="about-section bg-cream border-t">
        <div className="section-container faq-max-width">
          <div className="section-header">
            <span className="section-eyebrow">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-line-center" />
          </div>

          <div className="faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    onClick={() => toggleFaq(idx)} 
                    className="faq-toggle"
                  >
                    <span className="faq-question">{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Lead Contact Form */}
      <ContactForm />

      <style dangerouslySetInnerHTML={{__html:`
        .about-page-container {
          background: #fbfaf7;
          color: #2d2736;
          padding-top: 80px;
        }

        /* Hero */
        .about-hero {
          background: linear-gradient(135deg, #1b0b30 0%, #2d184d 100%);
          color: white;
          padding: 100px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(181, 137, 59, 0.16) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-hero-content {
          max-width: 840px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .about-eyebrow {
          color: #b5893b;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 11px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 15px;
        }
        .about-title {
          font-family: var(--font-serif);
          font-size: clamp(34px, 4.5vw, 56px);
          margin: 0 0 20px 0;
          line-height: 1.15;
          font-weight: 700;
        }
        .about-gold-line {
          width: 44px;
          height: 1.5px;
          background: linear-gradient(90deg, #C89B3C 0%, #e8cc7a 100%);
          border-radius: 2px;
          margin: 0 auto 30px;
        }
        .about-hero-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15.5px;
          line-height: 1.75;
          text-align: justify;
        }
        .about-hero-paragraphs p {
          margin: 0;
        }

        /* Generic Section styling */
        .about-section {
          padding: 80px 40px;
        }
        .section-container {
          max-width: 1440px;
          margin: 0 auto;
        }
        .faq-max-width {
          max-width: 800px !important;
        }
        .bg-cream {
          background-color: #fbfaf7;
        }
        .bg-beige {
          background-color: #f5f2eb;
        }
        .border-y {
          border-top: 1px solid rgba(181, 137, 59, 0.12);
          border-bottom: 1px solid rgba(181, 137, 59, 0.12);
        }
        .border-t {
          border-top: 1px solid rgba(181, 137, 59, 0.12);
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3vw, 36px);
          color: #1b0b30;
          margin: 0;
          font-weight: 600;
          line-height: 1.25;
        }
        .gold-line-center {
          width: 32px;
          height: 1.5px;
          background: #b5893b;
          margin: 15px auto 0;
        }
        .gold-line-left {
          width: 32px;
          height: 1.5px;
          background: #b5893b;
          margin: 15px 0 20px;
        }
        .section-subtitle {
          color: #5c526b;
          font-size: 15px;
          line-height: 1.6;
          margin: 20px 0 0;
        }

        /* Ecosystem Grid */
        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .ecosystem-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 12px;
          padding: 25px 15px;
          text-align: center;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.01);
        }
        .ecosystem-card:hover {
          border-color: #b5893b;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(181, 137, 59, 0.08);
        }
        .ecosystem-icon-wrapper {
          color: #b5893b;
          background: rgba(181, 137, 59, 0.06);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justifyContent: center;
        }
        .ecosystem-item-title {
          font-size: 13px;
          font-weight: 700;
          color: #1b0b30;
          line-height: 1.35;
        }
        .ecosystem-footer-p {
          text-align: center;
          font-size: 15px;
          color: #5c526b;
          line-height: 1.6;
          max-width: 700px;
          margin: 20px auto 0;
        }

        /* Side by Side Grid */
        .side-by-side-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .info-block {
          text-align: left;
        }
        .block-title {
          font-family: var(--font-serif);
          font-size: 26px;
          color: #1b0b30;
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
        }
        .block-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-size: 14.5px;
          line-height: 1.65;
          color: #5c526b;
        }
        .bg-white-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.02);
        }
        .block-intro-text {
          font-weight: 700;
          color: #1b0b30;
          font-size: 15px;
          margin-bottom: 15px;
        }
        .targets-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 25px;
        }
        .target-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: #2d2736;
          font-weight: 500;
        }
        .text-gold {
          color: #b5893b;
        }
        .block-footer-text {
          font-size: 13.5px;
          color: #7c728a;
          line-height: 1.6;
          border-top: 1px solid #e2dfd8;
          padding-top: 20px;
          margin: 0;
        }

        /* Why us card grid */
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .why-us-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 10px;
          padding: 30px;
          text-align: left;
          box-shadow: 0 4px 10px rgba(0,0,0,0.01);
          transition: all 0.25s ease;
        }
        .why-us-card:hover {
          border-color: #b5893b;
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(181, 137, 59, 0.06);
        }
        .why-us-number {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 800;
          color: rgba(181, 137, 59, 0.15);
          margin-bottom: 10px;
          line-height: 1;
        }
        .why-us-text {
          font-size: 14px;
          font-weight: 600;
          color: #1b0b30;
          line-height: 1.5;
          margin: 0;
        }

        /* CTA Banner */
        .about-cta-banner {
          background: radial-gradient(circle at center, #2d184d 0%, #1b0b30 100%);
          color: white;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .about-cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(181, 137, 59, 0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-cta-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .cta-title {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3.5vw, 40px);
          margin: 0;
          line-height: 1.2;
          font-weight: 600;
        }
        .cta-desc {
          color: rgba(255, 255, 255, 0.75);
          font-size: 15.5px;
          line-height: 1.65;
          margin: 0;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #b5893b;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(181, 137, 59, 0.3);
          margin-top: 10px;
        }
        .cta-button:hover {
          background: #9c732c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(181, 137, 59, 0.4);
        }

        /* FAQ accordion */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .faq-item {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          border-color: #b5893b;
          box-shadow: 0 6px 15px rgba(181, 137, 59, 0.05);
        }
        .faq-toggle {
          width: 100%;
          padding: 20px;
          background: transparent;
          border: none;
          outline: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }
        .faq-question {
          font-weight: 700;
          font-size: 14.5px;
          color: #1b0b30;
          line-height: 1.4;
          padding-right: 15px;
        }
        .faq-chevron {
          color: #b5893b;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .faq-item.open .faq-answer-wrapper {
          max-height: 300px;
        }
        .faq-answer-inner {
          padding: 0 20px 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
        }
        .faq-answer-inner p {
          margin: 0;
          font-size: 13.5px;
          color: #5c526b;
          line-height: 1.6;
          padding-top: 15px;
        }

        /* RESPONSIVE MEDIA QUERIES */
        @media (max-width: 1200px) {
          .ecosystem-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 992px) {
          .ecosystem-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .why-us-grid {
            grid-template-columns: 1fr 1fr;
          }
          .side-by-side-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .about-hero {
            padding: 60px 20px;
          }
          .about-section {
            padding: 48px 20px;
          }
          .about-cta-banner {
            padding: 56px 20px;
          }
          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .why-us-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .targets-list {
            grid-template-columns: 1fr;
          }
          .bg-white-card {
            padding: 24px;
          }
        }
        @media (max-width: 480px) {
          .about-hero {
            padding: 44px 16px;
          }
          .about-section {
            padding: 36px 16px;
          }
          .ecosystem-grid {
            grid-template-columns: 1fr;
          }
          .faq-toggle {
            padding: 16px;
          }
          .faq-answer-inner {
            padding: 0 16px 16px;
          }
          .faq-question {
            font-size: 13.5px;
          }
        }
      `}} />
    </div>
  );
}
