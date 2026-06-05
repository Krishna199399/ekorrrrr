'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import {
  FlaskConical, Factory, ShieldCheck, Award, ArrowRight,
  TrendingUp, Users, Box, Megaphone, Globe, Check, ChevronDown,
  Building, Compass, FileText, ShieldAlert, BadgeCheck, PencilRuler,
  Clock, Beaker, Zap
} from 'lucide-react';

// Parent categories definition
const SERVICE_CATEGORIES = [
  { id: 'laboratory', title: 'R&D & Formulation Laboratory', icon: <FlaskConical size={20} /> },
  { id: 'engineering', title: 'Industrial Engineering Setup', icon: <Factory size={20} /> },
  { id: 'regulatory', title: 'Regulatory & Quality Audits', icon: <ShieldCheck size={20} /> },
  { id: 'advisory', title: 'Brand, DPR & Business Advisory', icon: <Award size={20} /> }
];

// 15 total capabilities mapped to their parent categories and slugs
const CAPABILITIES_DATA = [
  // 1. R&D & Formulation Laboratory
  {
    category: 'laboratory',
    num: '01',
    title: 'Cosmetic Research & Product Development',
    slug: 'cosmetic-research-product-development',
    desc: 'Developing innovative cosmetic products requires a balance of scientific research, formulation expertise, ingredient intelligence, and efficient development processes. Our team combines advanced biotechnology, AI-assisted formulation insights, and structured laboratory workflows to accelerate product development, improve formulation accuracy, reduce development timelines, and help brands bring market-ready products to consumers with greater confidence.',
    bullets: [
      'AI-driven formulation screening to predict optimal ingredient synergies faster',
      'High-throughput batch testing systems for rapid prototype development and refinement',
      'Lean R&D workflow optimization to reduce bottlenecks and improve efficiency',
      'Digital twin laboratory modelling for virtual performance and stability evaluation',
      'Cross-functional innovation programs connecting formulation science with market needs',
      'Real-time R&D analytics and KPI tracking for continuous improvement and decision-making'
    ]
  },
  {
    category: 'laboratory',
    num: '02',
    title: 'Stability Testing & Shelf-Life Support',
    slug: 'cosmetic-stability-testing-shelf-life-validation',
    desc: 'Supporting product quality, safety, and consistency through rigorous stability evaluations, compatibility reviews, and shelf-life monitoring. Our testing approach helps identify potential formulation risks early, validate packaging compatibility, and ensure products maintain their intended performance, appearance, and consumer experience throughout their lifecycle.',
    bullets: [
      'Accelerated stability testing under high heat, humidity, and environmental stress conditions',
      'Container product compatibility testing to prevent migration, leakage, discoloration, and packaging failures',
      'Real-time shelf-life evaluations and degradation mapping for long term product performance assessment',
      'pH, viscosity, appearance, fragrance, and sensory parameter drift tracking',
      'Environmental stress studies to evaluate formulation resilience during storage and transportation',
      'Stability documentation support for quality assurance and regulatory requirements'
    ]
  },
  {
    category: 'laboratory',
    num: '03',
    title: 'Ingredient Sourcing',
    slug: 'ingredient-sourcing-support',
    desc: 'Access to quality ingredients is essential for developing safe, effective, and commercially successful cosmetic products. We help brands source premium active ingredients, standardized botanical extracts, specialty raw materials, and sustainable compounds through trusted global supplier networks that support product quality, formulation consistency, regulatory compliance, and long-term supply reliability.',
    bullets: [
      'Procurement of dermatologically validated active ingredients for skincare, haircare, and personal care formulations',
      'Sourcing certified organic, vegan, sustainable, and herbal extracts from qualified domestic and international suppliers',
      'Vetting raw material suppliers for quality standards, purity verification, traceability, and regulatory compliance',
      'Evaluation of technical specifications, certificates of analysis, and supporting quality documentation',
      'Identification of innovative actives, peptides, botanical extracts, and performance-driven cosmetic ingredients',
      'Strategic sourcing support to improve supply continuity, procurement efficiency, and cost management'
    ]
  },
  {
    category: 'laboratory',
    num: '04',
    title: 'Cosmetic Innovation & R&D Productivity Consulting',
    slug: 'cosmetic-innovation-rd-productivity-consulting',
    desc: 'Pioneering advanced research frameworks that combine artificial intelligence, biotechnology innovation, digital laboratory systems, and efficient workflows to accelerate product development timelines. Our approach helps cosmetic brands improve R&D productivity, enhance formulation accuracy, streamline decision-making, and bring innovative products to market more efficiently while maintaining quality, consistency, and commercial viability.',
    bullets: [
      'AI-driven formulation intelligence to identify optimal ingredient combinations and accelerate product development',
      'High-throughput prototype development systems for faster evaluation, benchmarking, and decision-making',
      'Lean laboratory workflow optimization to reduce bottlenecks and improve innovation output',
      'Digital twin laboratory modeling for virtual performance simulation before physical testing programs',
      'Cross-functional innovation sprints that align formulation science, manufacturing, and commercial strategy',
      'KPI dashboards and real-time R&D analytics for performance tracking and continuous improvement'
    ]
  },

  // 2. Industrial Engineering Setup
  {
    category: 'engineering',
    num: '01',
    title: 'Plant Setup & Factory Planning',
    slug: 'plant-setup-factory-planning',
    desc: 'Strategic facility planning is essential for building efficient, compliant, and scalable cosmetic manufacturing operations. We help businesses design production facilities that support GMP requirements, operational efficiency, product quality, workforce productivity, and future capacity expansion while minimizing process risks and infrastructure challenges.',
    bullets: [
      'Factory floorplan design aligned with WHO GMP guidelines, production workflows, and material movement requirements',
      'ISO Class 7 and Class 8 cleanroom planning with contamination control and environmental monitoring considerations',
      'Utility planning including purified water systems, clean steam lines, compressed air systems, and process utilities',
      'Optimized workflow routing to improve operational efficiency and prevent cross-contamination risks',
      'Manufacturing zone planning for raw materials, production, quality control, packaging, and finished goods storage',
      'Facility infrastructure planning to support future production expansion and regulatory compliance requirements'
    ]
  },
  {
    category: 'engineering',
    num: '02',
    title: 'Turnkey Cosmetic Project Solutions',
    slug: 'turnkey-cosmetic-project-solutions',
    desc: 'Establishing a cosmetic manufacturing facility requires coordinated execution across infrastructure, equipment, compliance, utilities, and production readiness. Our turnkey project solutions help businesses manage the complete implementation process from initial planning through commercial operations, reducing project risks, delays, and operational inefficiencies.',
    bullets: [
      'Complete project oversight from site selection, facility planning, and infrastructure development to commercial validation',
      'Coordination with architects, construction teams, utility consultants, cleanroom specialists, and machinery vendors',
      'Supervision of equipment installation, commissioning activities, utility integration, and pipeline pressure testing',
      'Commercial trial batch execution to validate production processes, equipment performance, and product consistency',
      'Project scheduling and implementation support to improve timelines, resource allocation, and operational readiness',
      'Production startup assistance to support a smooth transition from project completion to commercial manufacturing'
    ]
  },
  {
    category: 'engineering',
    num: '03',
    title: 'Cosmetic Manufacturing Consulting',
    slug: 'cosmetic-manufacturing-consulting',
    desc: 'Efficient manufacturing operations are critical for maintaining product quality, controlling production costs, and improving operational performance. We help cosmetic manufacturers optimize production processes, strengthen quality systems, improve equipment utilization, and establish manufacturing practices that support consistent and scalable production.',
    bullets: [
      'Optimizing batch mixing workflows, production sequencing, and process efficiency to reduce cycle times and operational bottlenecks',
      'Procurement auditing and technical evaluation of vacuum emulsifiers, mixers, filling lines, and packaging equipment',
      'GMP, ISO 22716, and CDSCO audit readiness assessments to strengthen compliance and quality management systems',
      'Drafting Standard Operating Procedures (SOPs), production guidelines, and quality control documentation for manufacturing teams',
      'Production process evaluation to improve consistency, resource utilization, and overall manufacturing performance',
      'Quality assurance and operational improvement recommendations to support long term manufacturing excellence'
    ]
  },
  {
    category: 'engineering',
    num: '04',
    title: 'Scale Up & Commercialization Support',
    slug: 'scale-up-commercialization-support',
    desc: 'Transitioning a formulation from laboratory development to commercial production requires careful process validation, equipment optimization, and manufacturing planning. We help businesses scale formulations efficiently while maintaining product quality, texture, stability, and performance across larger production volumes and commercial manufacturing environments.',
    bullets: [
      'Compounding intermediate pilot batches to evaluate process parameters before full scale production',
      'Designing heating and cooling profiles, mixing speeds, and shear rates for consistent batch performance',
      'Validating commercial batch uniformity, active ingredient dispersion, and product consistency across production runs',
      'Optimizing formulations to reduce product loss, improve processing efficiency, and minimize tank adhesion',
      'Scale up assessment to identify manufacturing challenges and improve production readiness',
      'Commercialization planning support to align production capabilities with market launch requirements'
    ]
  },

  // 3. Regulatory & Quality Audits
  {
    category: 'regulatory',
    num: '01',
    title: 'Regulatory & Compliance Support',
    slug: 'regulatory-compliance-support',
    desc: 'Navigating cosmetic regulations requires a clear understanding of market specific requirements, documentation standards, and product compliance obligations. We help businesses prepare regulatory submissions, maintain compliance readiness, and streamline approval processes across domestic and international cosmetic markets.',
    bullets: [
      'FDA registration support, MoCRA product listings, and facility compliance guidance for the United States market',
      'EU CPNP notifications and Responsible Person (RP) coordination to support European market access',
      'CDSCO manufacturing licences, import registrations, and regulatory documentation support for India',
      'Product Information File (PIF) preparation, ingredient reviews, and cosmetic safety assessment coordination',
      'Label compliance reviews to verify ingredient declarations, claims, warnings, and regulatory requirements',
      'Regulatory gap assessments and compliance planning for new product launches and market expansion initiatives'
    ]
  },
  {
    category: 'regulatory',
    num: '02',
    title: 'Export Documentation Support',
    slug: 'export-documentation-support',
    desc: 'Successful cosmetic exports require accurate documentation, regulatory compliance, and market-specific labeling to avoid delays and customs-related challenges. We help businesses prepare export documentation, product safety records, and compliance files that support smooth international trade and market entry across multiple global regions.',
    bullets: [
      'Compilation of Certificate of Free Sale (CFS), Certificate of Analysis (COA), and supporting export documentation',
      'Preparation of MSDS and SDS documentation aligned with destination country requirements and safety standards',
      'Review of international product labeling, ingredient declarations, and multilingual compliance disclosures',
      'Support with customs clearance documentation, regulatory verification files, and export compliance requirements',
      'Coordination of product safety records, technical documentation, and market specific certification requirements',
      'Export readiness assessments to support international expansion and cross border regulatory compliance'
    ]
  },

  // 4. Brand, DPR & Business Advisory
  {
    category: 'advisory',
    num: '01',
    title: 'Private Label & Contract Manufacturing Support',
    slug: 'private-label-contract-manufacturing',
    desc: 'Selecting the right manufacturing partner is essential for product quality, cost efficiency, and long-term business growth. We help brands identify, evaluate, and collaborate with contract manufacturers that align with their production requirements, quality expectations, and commercialization goals.',
    bullets: [
      'Identifying third-party manufacturers that match product categories, quality standards, and production capacities',
      'Auditing OEM and ODM facilities for GMP compliance, operational capabilities, and quality systems',
      'Supporting commercial discussions around production costs, minimum order quantities, and manufacturing agreements',
      'Overseeing quality assurance activities during initial production runs and product launches',
      'Evaluating manufacturing partners for scalability, reliability, and long-term business suitability'
    ]
  },
  {
    category: 'advisory',
    num: '02',
    title: 'Cosmetic DPR & Business Consulting',
    slug: 'cosmetic-dpr-business-consulting',
    desc: 'Launching or expanding a cosmetic business requires strategic planning backed by financial, operational, and market insights. We help entrepreneurs, investors, and manufacturers evaluate project feasibility, prepare investment-ready reports, and build practical growth strategies for long-term success.',
    bullets: [
      'Drafting Detailed Project Reports (DPR) to support funding, investment, and business planning requirements',
      'Developing CapEx models covering land, infrastructure, machinery, utilities, and facility setup costs',
      'Preparing OpEx forecasts, ROI calculations, and financial projections for informed decision-making',
      'Conducting market feasibility assessments and competitor analysis to identify business opportunities',
      'Supporting project planning with capacity, scalability, and operational viability evaluations'
    ]
  },
  {
    category: 'advisory',
    num: '03',
    title: 'Technical Recruitment & Team Building Support',
    slug: 'technical-recruitment-team-building',
    desc: 'Building a capable team is essential for successful product development, manufacturing operations, and quality management. We help cosmetic businesses identify, evaluate, and recruit technical professionals with the expertise required to support operational excellence and long-term business growth.',
    bullets: [
      'Hiring senior cosmetic chemists, formulation scientists, quality professionals, and technical specialists',
      'Sourcing plant operators, production supervisors, batch mixers, and cleanroom personnel',
      'Conducting technical competency assessments and structured candidate evaluation processes',
      'Supporting recruitment for laboratory, manufacturing, regulatory, and quality assurance functions',
      'Developing onboarding and operational training programs to improve workforce readiness'
    ]
  },
  {
    category: 'advisory',
    num: '04',
    title: 'Packaging Development & Sourcing',
    slug: 'packaging-development-sourcing',
    desc: 'Packaging plays a critical role in product protection, brand perception, and consumer experience. We help cosmetic businesses select, source, and evaluate packaging solutions that balance functionality, aesthetics, sustainability, and market positioning while ensuring compatibility with product formulations.',
    bullets: [
      'Custom packaging development support, including design coordination, format selection, and packaging strategy',
      'Sourcing airless pumps, jars, tubes, droppers, bottles, and premium packaging components',
      'Identification of sustainable packaging solutions, including PCR materials and environmentally responsible alternatives',
      'Packaging compatibility assessments to ensure formulation stability and product integrity',
      'Supplier evaluation and review of quality testing data, leakage performance, and packaging reliability'
    ]
  },
  {
    category: 'advisory',
    num: '05',
    title: 'Branding & Go-To-Market Consulting',
    slug: 'branding-go-to-market-consulting',
    desc: 'A strong product requires a clear market strategy to achieve commercial success. We help cosmetic brands build compelling market positioning, define their brand identity, and develop go-to-market strategies that support customer acquisition, product visibility, and sustainable business growth.',
    bullets: [
      'Defining brand identity, positioning frameworks, messaging architecture, and value propositions',
      'Developing product launch strategies, campaign planning, and initial inventory recommendations',
      'Conducting market entry assessments, competitor analysis, and target audience validation',
      'Supporting ecommerce growth strategies and distribution channel optimization',
      'Creating brand communication guidelines to maintain consistency across customer touchpoints'
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('laboratory');
  const [openFaq, setOpenFaq] = useState(null);

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 4 steps in workflow
  const workflowSteps = [
    {
      icon: <Beaker size={22} />,
      num: '01',
      title: 'Formulation & Prototype Development',
      desc: 'We develop and refine cosmetic formulations based on product objectives, ingredient compatibility, performance expectations, and consumer preferences. Each formulation undergoes technical evaluation to support stability, safety, and commercial viability.'
    },
    {
      icon: <PencilRuler size={22} />,
      num: '02',
      title: 'Manufacturing & Facility Planning',
      desc: 'Our experts assist with production workflows, cleanroom concepts, utility planning, and facility design to help businesses establish efficient and compliant manufacturing environments.'
    },
    {
      icon: <ShieldAlert size={22} />,
      num: '03',
      title: 'Regulatory & Compliance Readiness',
      desc: 'We support documentation, licensing requirements, product registrations, and compliance planning to help businesses navigate regulatory expectations across domestic and international markets.'
    },
    {
      icon: <Zap size={22} />,
      num: '04',
      title: 'Scale Up & Commercial Production',
      desc: 'From pilot batches to full-scale manufacturing, we help businesses transition formulations into commercially viable products while maintaining consistency, quality, and operational efficiency.'
    }
  ];

  // 5 FAQs from markdown
  const faqs = [
    {
      q: 'What types of cosmetic businesses does EGC support?',
      a: 'EGC Ekora Global Consulting works with cosmetic startups, established beauty brands, private label businesses, contract manufacturers, wellness companies, and investors entering the beauty industry. Our consulting services are designed to support businesses at different stages of product development, manufacturing, compliance, and commercialization.'
    },
    {
      q: 'Can EGC support both product development and manufacturing setup?',
      a: 'Yes. EGC Ekora Global Consulting supports the complete cosmetic business lifecycle, including product research, formulation development, manufacturing planning, factory setup consulting, regulatory guidance, scale-up support, and commercialization strategy. This integrated approach helps businesses maintain alignment across technical and operational functions.'
    },
    {
      q: 'How early should I engage a cosmetic consulting company?',
      a: 'The earlier the better. Engaging a consulting partner during the concept stage helps identify technical challenges, manufacturing requirements, ingredient considerations, regulatory expectations, and cost implications before significant investments are made, reducing development risks and avoiding costly revisions later.'
    },
    {
      q: 'Do you support international cosmetic compliance and exports?',
      a: 'Yes. We assist businesses with export documentation, product registrations, compliance planning, labeling reviews, safety documentation, and market-specific regulatory requirements. This support helps brands prepare for opportunities across domestic and international cosmetic markets.'
    },
    {
      q: 'How can I discuss my cosmetic project with your team?',
      a: 'Businesses looking for guidance on product development, manufacturing, regulatory compliance, or business planning can contact our consulting team directly. For project discussions and consultation requests, call +91 22 5557 8890 or submit an enquiry through our contact page.'
    }
  ];

  // Filter capabilities under active category
  const activeCapabilities = CAPABILITIES_DATA.filter(
    (cap) => cap.category === activeCategory
  );

  return (
    <div className="sp-root">

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="sp-hero">
        <div className="sp-hero-glow" />
        <div className="sp-hero-grid" aria-hidden="true" />
        <div className="sp-hero-container">
          <span className="sp-eyebrow">
            Consultation, Formulation, Engineering & Compliance
          </span>
          <h1 className="sp-hero-title">
            End to End Cosmetic Product Development & Manufacturing Solutions
          </h1>
          <div className="sp-hero-divider" />
          <p className="sp-hero-sub">
            EGC Ekora Global Consulting supports cosmetic brands, manufacturers, investors, and entrepreneurs across the complete product and manufacturing lifecycle. From product development and factory planning to regulatory compliance and commercialization, our team helps businesses transform ideas into scalable and market-ready operations.
          </p>
        </div>
      </section>

      {/* ── 2. DEVELOPMENT WORKFLOW ──────────────────────────────────────── */}
      <section className="sp-section sp-section-light">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">Our Project Pipeline</span>
            <h2 className="sp-section-title">Our Development Workflow</h2>
            <div className="sp-gold-line" />
          </div>
          <div className="sp-workflow-grid">
            {workflowSteps.map((s, idx) => (
              <div key={idx} className="sp-workflow-card">
                <div className="sp-workflow-ghost-num">{s.num}</div>
                <div className="sp-workflow-icon">{s.icon}</div>
                <h3 className="sp-workflow-title">{s.title}</h3>
                <p className="sp-workflow-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES NAVIGATION HUB (Stripe-like Side Tab Navigation) ── */}
      <section className="sp-section sp-section-beige">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">Full Scale Cosmetic Advisory</span>
            <h2 className="sp-section-title">Our Capabilities</h2>
            <div className="sp-gold-line" />
            <p className="sp-section-sub">
              We support the complete cosmetic product lifecycle, from concept development and formulation strategy to manufacturing planning, regulatory guidance, and commercialization support.
            </p>
          </div>

          <div className="sp-capabilities-layout">
            {/* Left Column: Categories Sticky Navigation */}
            <div className="sp-categories-nav">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`sp-category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="sp-category-tab-icon">{cat.icon}</span>
                  <span className="sp-category-tab-text">{cat.title}</span>
                  <ArrowRight size={16} className="sp-category-tab-arrow" />
                </button>
              ))}
            </div>

            {/* Right Column: Capabilities Render Area */}
            <div className="sp-capabilities-content">
              {activeCapabilities.map((cap) => (
                <div key={cap.title} className="sp-capability-card">
                  <div className="sp-cap-card-header">
                    <span className="sp-cap-number">{cap.num}</span>
                    <h3 className="sp-cap-title">{cap.title}</h3>
                  </div>
                  <p className="sp-cap-desc">{cap.desc}</p>
                  
                  <div className="sp-cap-scope-section">
                    <h4 className="sp-cap-scope-title">Scope of Services:</h4>
                    <ul className="sp-cap-scope-list">
                      {cap.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="sp-cap-scope-item">
                          <Check size={14} className="sp-cap-check-icon" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sp-cap-actions">
                    <button onClick={handleContactScroll} className="sp-cta-primary">
                      Get Consultation
                    </button>
                    {cap.slug && (
                      <Link href={`/services/${cap.slug}`} className="sp-cta-ghost">
                        Explore Details <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FAQs SECTION ─────────────────────────────────────────────── */}
      <section className="sp-section sp-section-light">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">Common Queries</span>
            <h2 className="sp-section-title">Questions About Our Cosmetic Consulting Services</h2>
            <div className="sp-gold-line" />
          </div>

          <div className="sp-faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`sp-faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="sp-faq-question">
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`sp-faq-icon ${isOpen ? 'rotate' : ''}`} 
                    />
                  </div>
                  {isOpen && (
                    <div className="sp-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT ────────────────────────────────────────────────────── */}
      <ContactForm />

      {/* ── STYLES ────────────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .sp-root {
          background: #fbfaf7;
          padding-top: 80px;
          font-family: var(--font-sans);
        }

        /* ── Hero ── */
        .sp-hero {
          background: linear-gradient(145deg, #1b0b30 0%, #2d184d 55%, #1b0b30 100%);
          color: white;
          padding: 100px 40px;
          position: relative;
          overflow: hidden;
        }
        .sp-hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(181,137,59,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .sp-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,137,59,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,137,59,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .sp-hero-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .sp-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          padding: 6px 14px;
          border: 1px solid rgba(181,137,59,0.3);
          border-radius: 2px;
        }
        .sp-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 600;
          margin: 0 0 20px 0;
          line-height: 1.2;
          color: #ffffff;
        }
        .sp-hero-divider {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #b5893b, #e8cc7a);
          margin: 0 auto 22px;
          border-radius: 2px;
        }
        .sp-hero-sub {
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 auto;
          max-width: 800px;
        }

        /* ── Sections ── */
        .sp-section {
          padding: 90px 0;
        }
        .sp-section-light {
          background: #ffffff;
        }
        .sp-section-beige {
          background: #fbfaf7;
          border-top: 1px solid rgba(181,137,59,0.1);
          border-bottom: 1px solid rgba(181,137,59,0.1);
        }
        .sp-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .sp-section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .sp-section-eyebrow {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .sp-section-title {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3.5vw, 36px);
          color: #1b0b30;
          font-weight: 600;
          margin: 0;
          line-height: 1.25;
        }
        .sp-gold-line {
          width: 40px;
          height: 2px;
          background: #b5893b;
          margin: 18px auto 0;
          border-radius: 2px;
        }
        .sp-section-sub {
          font-size: 15.5px;
          color: #5c526b;
          line-height: 1.65;
          margin: 18px auto 0;
          max-width: 720px;
        }

        /* ── Workflow Cards ── */
        .sp-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .sp-workflow-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 12px;
          padding: 36px 28px;
          position: relative;
          box-shadow: 0 4px 16px rgba(27,11,48,0.02);
          transition: all 0.3s ease;
        }
        .sp-workflow-card:hover {
          transform: translateY(-5px);
          border-color: #b5893b;
          box-shadow: 0 14px 32px rgba(181,137,59,0.08);
        }
        .sp-workflow-ghost-num {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 800;
          color: rgba(181,137,59,0.07);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }
        .sp-workflow-icon {
          background: rgba(181,137,59,0.08);
          color: #b5893b;
          width: 46px;
          height: 46px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }
        .sp-workflow-title {
          font-size: 17.5px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 0 12px 0;
          line-height: 1.35;
          font-family: var(--font-serif);
        }
        .sp-workflow-desc {
          font-size: 14px;
          color: #5c526b;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Capabilities Layout ── */
        .sp-capabilities-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 48px;
          align-items: start;
          margin-top: 48px;
        }

        /* Left Navigation tabs */
        .sp-categories-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: sticky;
          top: 100px;
        }
        .sp-category-tab {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .sp-category-tab-icon {
          color: #5c526b;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        .sp-category-tab-text {
          font-size: 14.5px;
          font-weight: 600;
          color: #2d2736;
          flex-grow: 1;
          line-height: 1.35;
          transition: color 0.3s ease;
        }
        .sp-category-tab-arrow {
          color: #e2dfd8;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }
        .sp-category-tab:hover {
          border-color: rgba(181, 137, 59, 0.4);
          background: #fdfcf9;
        }
        .sp-category-tab:hover .sp-category-tab-text {
          color: #b5893b;
        }
        .sp-category-tab.active {
          border-color: #b5893b;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(181, 137, 59, 0.08);
        }
        .sp-category-tab.active::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 12px;
          bottom: 12px;
          width: 3.5px;
          background: #b5893b;
          border-radius: 0 4px 4px 0;
        }
        .sp-category-tab.active .sp-category-tab-icon {
          color: #b5893b;
        }
        .sp-category-tab.active .sp-category-tab-text {
          color: #b5893b;
        }
        .sp-category-tab.active .sp-category-tab-arrow {
          color: #b5893b;
          opacity: 1;
          transform: translateX(0);
        }

        /* Right Content Panel */
        .sp-capabilities-content {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .sp-capability-card {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 14px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(27,11,48,0.02);
          transition: all 0.3s ease;
        }
        .sp-capability-card:hover {
          box-shadow: 0 12px 32px rgba(27,11,48,0.05);
          border-color: rgba(181,137,59,0.3);
        }
        .sp-cap-card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .sp-cap-number {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 800;
          color: rgba(181,137,59,0.2);
          line-height: 1;
        }
        .sp-cap-title {
          font-family: var(--font-serif);
          font-size: 22px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0;
          line-height: 1.3;
        }
        .sp-cap-desc {
          font-size: 15px;
          color: #5c526b;
          line-height: 1.7;
          margin: 0 0 28px 0;
        }
        .sp-cap-scope-section {
          background: #fdfcf9;
          border: 1px solid rgba(181,137,59,0.12);
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 28px;
        }
        .sp-cap-scope-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #1b0b30;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sp-cap-scope-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .sp-cap-scope-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #2d2736;
          line-height: 1.45;
        }
        .sp-cap-check-icon {
          color: #b5893b;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .sp-cap-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        /* Buttons overrides */
        .sp-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #b5893b;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(181,137,59,0.2);
        }
        .sp-cta-primary:hover {
          background: #9c732c;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(181,137,59,0.3);
        }
        .sp-cta-ghost {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: transparent;
          color: #b5893b;
          border: 1px solid rgba(181,137,59,0.4);
          border-radius: 6px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sp-cta-ghost:hover {
          background: rgba(181,137,59,0.05);
          border-color: #b5893b;
        }

        /* ── FAQs Section ── */
        .sp-faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sp-faq-item {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .sp-faq-item:hover {
          border-color: #b5893b;
        }
        .sp-faq-item.active {
          border-color: #b5893b;
          box-shadow: 0 6px 20px rgba(181,137,59,0.06);
        }
        .sp-faq-question {
          padding: 20px 24px;
          font-size: 16px;
          font-weight: 600;
          color: #1b0b30;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .sp-faq-icon {
          color: #b5893b;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .sp-faq-icon.rotate {
          transform: rotate(180deg);
        }
        .sp-faq-answer {
          padding: 0 24px 20px 24px;
          border-top: 1px solid rgba(181,137,59,0.08);
          animation: spFadeIn 0.3s ease forwards;
        }
        .sp-faq-answer p {
          font-size: 14.5px;
          color: #5c526b;
          line-height: 1.7;
          margin: 12px 0 0 0;
        }

        @keyframes spFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sp-capabilities-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .sp-categories-nav {
            flex-direction: row;
            overflow-x: auto;
            position: relative;
            top: 0;
            padding-bottom: 12px;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          .sp-category-tab {
            flex-shrink: 0;
            padding: 12px 18px;
            gap: 10px;
          }
          .sp-category-tab-arrow {
            display: none;
          }
          .sp-category-tab.active::before {
            display: none;
          }
          .sp-cap-scope-list {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        @media (max-width: 900px) {
          .sp-workflow-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sp-hero {
            padding: 72px 24px;
          }
          .sp-container {
            padding: 0 24px;
          }
          .sp-section {
            padding: 72px 0;
          }
          .sp-capability-card {
            padding: 28px;
          }
          .sp-cap-scope-section {
            padding: 18px;
          }
        }

        @media (max-width: 520px) {
          .sp-hero {
            padding: 56px 16px;
          }
          .sp-container {
            padding: 0 16px;
          }
          .sp-section {
            padding: 56px 0;
          }
          .sp-workflow-grid {
            grid-template-columns: 1fr;
          }
          .sp-cap-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .sp-cta-primary, .sp-cta-ghost {
            justify-content: center;
          }
        }
      `}} />
    </div>
  );
}
