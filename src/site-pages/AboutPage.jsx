'use client';

import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { 
  Lightbulb, Shield, Award, Users, Leaf, TrendingUp,
  FlaskConical, Wrench, Factory, FileCheck, Target,
  ChevronDown, ArrowRight, Globe
} from 'lucide-react';

const CORE_VALUES = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovation',
    desc: 'Encouraging continuous improvement through research, scientific advancement, and industry awareness.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Integrity',
    desc: 'Building long-term relationships through transparency, accountability, and ethical business practices.'
  },
  {
    icon: <Award size={28} />,
    title: 'Quality',
    desc: 'Promoting high standards across product development, manufacturing, and operational processes.'
  },
  {
    icon: <Users size={28} />,
    title: 'Collaboration',
    desc: 'Working closely with clients, partners, and industry stakeholders to achieve shared goals.'
  },
  {
    icon: <Leaf size={28} />,
    title: 'Sustainability',
    desc: 'Supporting responsible practices that contribute to long-term environmental and business value.'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Growth',
    desc: 'Helping businesses create scalable systems, products, and strategies for future expansion.'
  }
];

const EXPERTISE_AREAS = [
  {
    icon: <FlaskConical size={24} />,
    title: 'Product Development',
    desc: 'Supporting concept creation, formulation planning, ingredient selection, prototype development, and product optimization.'
  },
  {
    icon: <Wrench size={24} />,
    title: 'Manufacturing Consulting',
    desc: 'Guiding production planning, operational workflows, process efficiency, and manufacturing readiness.'
  },
  {
    icon: <Factory size={24} />,
    title: 'Factory Setup & Infrastructure Planning',
    desc: 'Supporting businesses with facility planning, cleanroom concepts, equipment selection, utility requirements, and scale-up strategies.'
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Regulatory & Compliance Support',
    desc: 'Helping businesses understand documentation requirements, compliance frameworks, and market-specific regulatory expectations.'
  },
  {
    icon: <Target size={24} />,
    title: 'Commercialization & Growth Strategy',
    desc: 'Aligning product development initiatives with manufacturing capability, market readiness, and long-term business objectives.'
  }
];

const CAPABILITIES = [
  'Cosmetic Product Development Consulting',
  'Formulation Strategy Support',
  'Ingredient Research & Evaluation',
  'Manufacturing Readiness Planning',
  'Factory Setup Consulting',
  'Compliance Guidance',
  'Product Commercialization Support',
  'Packaging Direction',
  'Contract Manufacturing Support',
  'Business Expansion Advisory'
];

const WHY_EGC = [
  'Industry-focused consulting approach',
  'Product development and manufacturing expertise',
  'Understanding of commercialization challenges',
  'Practical operational insights',
  'Scalable business-oriented solutions',
  'Long-term partnership mindset',
  'Focus on quality, innovation, and sustainable growth'
];

const FAQS = [
  {
    q: 'What does EGC Ekora Global Consulting do?',
    a: 'EGC provides consulting support across cosmetic product development, manufacturing planning, factory setup, compliance guidance, commercialization strategy, and business growth initiatives.'
  },
  {
    q: 'Who does EGC work with?',
    a: 'We work with startups, beauty brands, manufacturers, wellness companies, private label businesses, investors, and organizations operating within the cosmetic and personal care industry.'
  },
  {
    q: 'Does EGC support cosmetic manufacturing projects?',
    a: 'Yes. We provide consulting support for manufacturing planning, operational readiness, factory setup initiatives, and production scale-up strategies.'
  },
  {
    q: 'Can EGC support businesses entering new markets?',
    a: 'Yes. We help businesses evaluate opportunities, align products with market requirements, and prepare for expansion initiatives.'
  },
  {
    q: 'Why choose EGC Ekora Global Consulting?',
    a: 'Businesses choose EGC for its combination of industry knowledge, practical consulting expertise, technical understanding, and long-term business-focused approach.'
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
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="about-hero-content">
          <span className="about-eyebrow">Who We Are</span>
          <h1 className="about-title">About EGC Ekora Global Consulting</h1>
          <h2 className="about-subtitle">Building the Future of Cosmetic Innovation, Manufacturing & Business Growth</h2>
          <div className="about-gold-line" />
          
          <div className="about-hero-text">
            <p>
              The beauty and personal care industry continues to evolve through scientific innovation, changing consumer expectations, regulatory advancements, and increasing demand for high-quality products.
            </p>
            <p>
              Success in this industry requires more than formulation expertise alone. It demands a deep understanding of product development, manufacturing operations, compliance requirements, commercialization planning, and long-term business strategy.
            </p>
            <p>
              EGC Ekora Global Consulting was established to help businesses navigate this journey with confidence.
            </p>
            <p>
              We work with cosmetic brands, manufacturers, wellness companies, entrepreneurs, investors, and private label businesses to transform ideas into commercially viable products and scalable beauty businesses.
            </p>
            <p>
              By combining technical expertise with practical industry understanding, we help organizations make informed decisions across every stage of product and business development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="section-container">
          <div className="vm-grid">
            <div className="vm-card">
              <span className="vm-eyebrow">Our Vision</span>
              <div className="gold-line-left" />
              <p className="vm-text">
                To become a trusted global consulting partner for cosmetic businesses seeking innovation, manufacturing excellence, regulatory confidence, and sustainable growth.
              </p>
            </div>
            <div className="vm-card">
              <span className="vm-eyebrow">Our Mission</span>
              <div className="gold-line-left" />
              <p className="vm-text">
                To bridge the gap between cosmetic science, manufacturing capability, and commercial success by providing practical consulting solutions that help businesses build competitive and future-ready beauty brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="founders-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title">Founder's Message</h2>
            <div className="gold-line-center" />
          </div>
          
          <div className="founders-content">
            <p>
              The cosmetic industry presents significant opportunities for businesses willing to invest in innovation, quality, and long-term value creation.
            </p>
            <p>
              However, developing successful products and building sustainable operations often requires navigating complex technical, regulatory, manufacturing, and commercial challenges.
            </p>
            <p>
              EGC was founded with the belief that businesses should have access to practical guidance that combines scientific understanding with real-world execution.
            </p>
            <p>
              Our objective is simple. Help beauty businesses make better decisions, reduce risk, improve product quality, and build stronger foundations for long-term growth.
            </p>
            <p>
              <strong>We believe every successful cosmetic brand begins with clarity, expertise, and the right strategic direction.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Our Foundation</span>
            <h2 className="section-title">Core Values</h2>
            <div className="gold-line-center" />
          </div>
          
          <div className="values-grid">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="expertise-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our Expertise</h2>
            <div className="gold-line-center" />
            <p className="section-subtitle">
              Our consulting capabilities span multiple areas of the cosmetic and personal care industry.
            </p>
          </div>
          
          <div className="expertise-grid">
            {EXPERTISE_AREAS.map((area, idx) => (
              <div key={idx} className="expertise-card">
                <div className="expertise-icon">{area.icon}</div>
                <h3 className="expertise-title">{area.title}</h3>
                <p className="expertise-desc">{area.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="expertise-footer">
            Businesses exploring our specialized consulting solutions can learn more through our service offerings across product development, manufacturing, and operational planning.
          </p>
        </div>
      </section>

      {/* Infrastructure & Capabilities */}
      <section className="capabilities-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Our Capabilities</span>
            <h2 className="section-title">Infrastructure & Capabilities</h2>
            <div className="gold-line-center" />
            <p className="section-subtitle">
              Modern cosmetic businesses require access to technical knowledge, industry insights, and scalable development frameworks.
            </p>
          </div>
          
          <div className="capabilities-content">
            <p className="capabilities-intro">Our capabilities include:</p>
            <div className="capabilities-grid">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="capability-item">
                  <div className="capability-bullet" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
            <p className="capabilities-footer">
              This integrated approach allows us to support businesses at different stages of growth while maintaining alignment between technical, operational, and commercial objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="global-network-section">
        <div className="section-container">
          <div className="global-content">
            <div className="global-icon-wrapper">
              <Globe size={64} style={{ color: '#b5893b' }} />
            </div>
            <div className="global-text">
              <h2 className="global-title">Global Network</h2>
              <div className="gold-line-left" />
              <p>The beauty industry is increasingly global.</p>
              <p>
                Consumer trends, ingredient innovations, manufacturing partnerships, and regulatory frameworks continue to influence opportunities across international markets.
              </p>
              <p>
                EGC supports businesses seeking growth opportunities across India and emerging international markets through industry connections, market understanding, and strategic consulting support.
              </p>
              <p>
                Our work is focused on helping businesses develop solutions that remain relevant, scalable, and competitive across diverse market environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose EGC */}
      <section className="why-egc-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why Businesses Choose EGC</h2>
            <div className="gold-line-center" />
            <p className="section-subtitle">
              Businesses partner with EGC because they require more than technical support.<br />
              They need practical guidance that considers the complete business ecosystem.
            </p>
          </div>
          
          <div className="why-egc-box">
            <h3 className="why-egc-box-title">What Sets Us Apart</h3>
            <div className="why-egc-list">
              {WHY_EGC.map((item, idx) => (
                <div key={idx} className="why-egc-item">
                  <div className="why-egc-check">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="why-egc-footer">
              <p>Our objective is not simply to help businesses launch products.</p>
              <p><strong>Our objective is to help businesses build stronger, more resilient, and commercially successful cosmetic ventures.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-glow" />
        <div className="section-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Let's Build the Next Stage of Your Business</h2>
            <p className="about-cta-text">
              Whether you are developing a new cosmetic product, strengthening manufacturing capabilities, planning a production facility, or exploring growth opportunities within the beauty and wellness industry, EGC is ready to support your journey.
            </p>
            <button onClick={handleScrollToContact} className="about-cta-button">
              Start Your Cosmetic Journey
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq-section">
        <div className="section-container faq-container">
          <div className="section-header">
            <span className="section-eyebrow">Have Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-line-center" />
          </div>
          
          <div className="faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button onClick={() => toggleFaq(idx)} className="faq-toggle">
                    <span className="faq-question">{faq.q}</span>
                    <ChevronDown size={20} className="faq-chevron" />
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

      {/* Contact Form */}
      <ContactForm />


      {/* Styles */}
      <style dangerouslySetInnerHTML={{__html:`
        .about-page-container {
          background: #fbfaf7;
          padding-top: 80px;
        }

        /* Hero Section */
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
          background: radial-gradient(circle at center, rgba(181, 137, 59, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .about-eyebrow {
          color: #b5893b;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 12px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 20px;
        }
        .about-title {
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 52px);
          margin: 0 0 15px 0;
          line-height: 1.2;
          font-weight: 600;
        }
        .about-subtitle {
          font-family: var(--font-serif);
          font-size: clamp(20px, 3vw, 28px);
          margin: 0 0 25px 0;
          line-height: 1.3;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }
        .about-gold-line {
          width: 50px;
          height: 2px;
          background: #b5893b;
          margin: 0 auto 35px;
        }
        .about-hero-text {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          text-align: left;
        }
        .about-hero-text p {
          margin: 0;
        }

        /* Common Section Styles */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .faq-container {
          max-width: 900px !important;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: clamp(28px, 4vw, 40px);
          color: #1b0b30;
          margin: 0;
          font-weight: 600;
          line-height: 1.25;
        }
        .gold-line-center {
          width: 40px;
          height: 2px;
          background: #b5893b;
          margin: 18px auto 0;
        }
        .gold-line-left {
          width: 40px;
          height: 2px;
          background: #b5893b;
          margin: 18px 0;
        }
        .section-subtitle {
          font-size: 16px;
          color: #5c526b;
          line-height: 1.6;
          margin: 20px auto 0;
          max-width: 700px;
        }

        /* Vision & Mission */
        .vision-mission-section {
          padding: 80px 0;
          background: #fbfaf7;
        }
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .vm-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 8px 24px rgba(27, 11, 48, 0.03);
        }
        .vm-eyebrow {
          font-size: 13px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .vm-text {
          font-size: 15.5px;
          color: #2d2736;
          line-height: 1.7;
          margin: 0;
        }

        /* Founder's Message */
        .founders-section {
          padding: 80px 0;
          background: #f5f2eb;
          border-top: 1px solid rgba(181, 137, 59, 0.15);
          border-bottom: 1px solid rgba(181, 137, 59, 0.15);
        }
        .founders-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 15.5px;
          line-height: 1.7;
          color: #2d2736;
        }
        .founders-content p {
          margin: 0;
        }

        /* Core Values */
        .core-values-section {
          padding: 80px 0;
          background: #fbfaf7;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .value-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 12px;
          padding: 35px 25px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }
        .value-card:hover {
          transform: translateY(-6px);
          border-color: #b5893b;
          box-shadow: 0 12px 30px rgba(181, 137, 59, 0.1);
        }
        .value-icon {
          color: #b5893b;
          background: rgba(181, 137, 59, 0.08);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .value-title {
          font-size: 18px;
          font-weight: 700;
          color: #1b0b30;
          margin: 0 0 12px 0;
        }
        .value-desc {
          font-size: 14px;
          color: #5c526b;
          line-height: 1.6;
          margin: 0;
        }

        /* Expertise */
        .expertise-section {
          padding: 80px 0;
          background: #f5f2eb;
          border-top: 1px solid rgba(181, 137, 59, 0.15);
          border-bottom: 1px solid rgba(181, 137, 59, 0.15);
        }
        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 35px;
        }
        .expertise-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 12px;
          padding: 30px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }
        .expertise-card:hover {
          transform: translateY(-4px);
          border-color: #b5893b;
          box-shadow: 0 12px 30px rgba(181, 137, 59, 0.08);
        }
        .expertise-icon {
          color: #b5893b;
          background: rgba(181, 137, 59, 0.08);
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .expertise-title {
          font-size: 17px;
          font-weight: 700;
          color: #1b0b30;
          margin: 0 0 8px 0;
        }
        .expertise-desc {
          font-size: 14px;
          color: #5c526b;
          line-height: 1.6;
          margin: 0;
        }
        .expertise-footer {
          text-align: center;
          font-size: 15px;
          color: #5c526b;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Capabilities */
        .capabilities-section {
          padding: 80px 0;
          background: #fbfaf7;
        }
        .capabilities-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .capabilities-intro {
          font-size: 16px;
          font-weight: 700;
          color: #1b0b30;
          margin: 0 0 25px 0;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 30px;
          margin-bottom: 30px;
        }
        .capability-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #2d2736;
          line-height: 1.5;
        }
        .capability-bullet {
          width: 6px;
          height: 6px;
          background: #b5893b;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .capabilities-footer {
          font-size: 15px;
          color: #5c526b;
          line-height: 1.7;
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid #e2dfd8;
        }

        /* Global Network */
        .global-network-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1b0b30 0%, #2d184d 100%);
          color: white;
        }
        .global-content {
          display: flex;
          gap: 50px;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .global-icon-wrapper {
          flex-shrink: 0;
        }
        .global-text {
          flex: 1;
        }
        .global-title {
          font-family: var(--font-serif);
          font-size: 32px;
          margin: 0 0 10px 0;
          font-weight: 600;
        }
        .global-text p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin: 12px 0 0 0;
        }

        /* Why EGC */
        .why-egc-section {
          padding: 80px 0;
          background: #fbfaf7;
        }
        .why-egc-box {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 16px;
          padding: 50px;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(27, 11, 48, 0.04);
        }
        .why-egc-box-title {
          font-family: var(--font-serif);
          font-size: 24px;
          color: #1b0b30;
          margin: 0 0 30px 0;
          text-align: center;
          font-weight: 600;
        }
        .why-egc-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }
        .why-egc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #2d2736;
          line-height: 1.5;
        }
        .why-egc-check {
          color: #b5893b;
          font-weight: 700;
          font-size: 18px;
          width: 24px;
          height: 24px;
          background: rgba(181, 137, 59, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .why-egc-footer {
          padding-top: 25px;
          border-top: 1px solid #e2dfd8;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .why-egc-footer p {
          font-size: 15px;
          color: #5c526b;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section */
        .about-cta-section {
          padding: 80px 40px;
          background: radial-gradient(circle at center, #2d184d 0%, #1b0b30 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .about-cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(181, 137, 59, 0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-cta-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .about-cta-title {
          font-family: var(--font-serif);
          font-size: clamp(26px, 4vw, 38px);
          margin: 0 0 20px 0;
          line-height: 1.25;
          font-weight: 600;
        }
        .about-cta-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0 0 30px 0;
        }
        .about-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: #b5893b;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(181, 137, 59, 0.3);
        }
        .about-cta-button:hover {
          background: #9c732c;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(181, 137, 59, 0.4);
        }

        /* FAQ */
        .about-faq-section {
          padding: 80px 0;
          background: #fbfaf7;
          border-top: 1px solid rgba(181, 137, 59, 0.15);
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          border-color: #b5893b;
          box-shadow: 0 6px 18px rgba(181, 137, 59, 0.08);
        }
        .faq-toggle {
          width: 100%;
          padding: 22px 24px;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }
        .faq-question {
          font-weight: 700;
          font-size: 15px;
          color: #1b0b30;
          line-height: 1.4;
          padding-right: 15px;
        }
        .faq-chevron {
          color: #b5893b;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-item.open .faq-answer-wrapper {
          max-height: 400px;
        }
        .faq-answer-inner {
          padding: 0 24px 22px;
          border-top: 1px solid #f0ede6;
        }
        .faq-answer-inner p {
          margin: 15px 0 0 0;
          font-size: 14px;
          color: #5c526b;
          line-height: 1.7;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .vm-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .expertise-grid {
            grid-template-columns: 1fr;
          }
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .global-content {
            flex-direction: column;
            text-align: center;
          }
          .gold-line-left {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 768px) {
          .section-container {
            padding: 0 20px;
          }
          .about-hero {
            padding: 60px 20px;
          }
          .vision-mission-section,
          .founders-section,
          .core-values-section,
          .expertise-section,
          .capabilities-section,
          .global-network-section,
          .why-egc-section,
          .about-cta-section,
          .about-faq-section {
            padding: 56px 0;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .vm-card,
          .why-egc-box {
            padding: 30px;
          }
        }
        @media (max-width: 500px) {
          .about-hero {
            padding: 44px 16px;
          }
          .section-container {
            padding: 0 16px;
          }
          .vm-card,
          .why-egc-box {
            padding: 24px;
          }
          .about-cta-section {
            padding: 44px 16px;
          }
        }
      `}} />
    </div>
  );
}
