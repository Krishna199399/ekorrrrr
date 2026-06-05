'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Phone } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import { getRelatedServices } from '../../data/servicesData';
import cosmeticHeroBg from '../../assets/ChatGPT Image Jun 5, 2026, 12_31_38 AM.png';
import heroResearchImg from '../../assets/hero_cosmetic_research.png';
import heroManufacturingImg from '../../assets/hero_manufacturing_consulting.png';
import heroPlantSetupImg from '../../assets/hero_plant_setup.png';
import heroTurnkeyImg from '../../assets/hero_turnkey_project.png';
import heroPrivateLabelImg from '../../assets/hero_private_label.png';
import heroRegulatoryImg from '../../assets/hero_regulatory_compliance.png';
import heroDprImg from '../../assets/hero_dpr_business.png';
import heroRecruitmentImg from '../../assets/hero_recruitment.png';
import heroPackagingImg from '../../assets/hero_packaging.png';
import heroIngredientImg from '../../assets/hero_ingredient_sourcing.png';
import heroBrandingImg from '../../assets/hero_branding_gtm.png';
import heroScaleUpImg from '../../assets/hero_scale_up.png';
import heroExportImg from '../../assets/hero_export_docs.png';
import heroStabilityImg from '../../assets/hero_stability_testing.png';
import heroInnovationImg from '../../assets/hero_innovation_rd.png';
import skincareImg from '../../assets/service_skincare.png';
import haircareImg from '../../assets/service_haircare.png';
import bodycareImg from '../../assets/service_bodycare.png';
import colorImg from '../../assets/service_color.png';
import formulationBespokeImg from '../../assets/formulation_bespoke.png';
import formulationIngredientImg from '../../assets/formulation_ingredient.png';
import formulationPrototypeImg from '../../assets/formulation_prototype.png';
import formulationCommercialImg from '../../assets/formulation_commercial.png';
import facCosmeticImg from '../../assets/fac_cosmetic.png';
import facIndustrialImg from '../../assets/fac_industrial.png';
import facTurnkeyImg from '../../assets/fac_turnkey.png';
import facBoutiqueImg from '../../assets/fac_boutique.png';
import rdScientistImg from '../../assets/rd_scientist.png';
import rdShelvesImg from '../../assets/rd_shelves.png';
import brandingImg from '../../assets/Branding & Go-To-Market Consulting Services.png';
import catLuxuryImg from '../../assets/cat_luxury.png';
import stabilityAcceleratedImg from '../../assets/stability_accelerated_study.png';
import stabilityContainerImg from '../../assets/stability_container_compatibility.png';
import stabilityRealtimeImg from '../../assets/stability_realtime_shelf.jpg';
import stabilityTransportImg from '../../assets/stability_transport_sensory.jpg';
import mfgWorkflowImg from '../../assets/mfg_workflow.png';
import mfgGmpImg from '../../assets/mfg_gmp.png';
import mfgSopImg from '../../assets/mfg_sop.png';
import mfgEquipmentImg from '../../assets/mfg_equipment.png';
import plantLayoutImg from '../../assets/plant_layout.png';
import plantUtilityImg from '../../assets/plant_utility.png';
import plantEquipInstallImg from '../../assets/plant_equipment_install.png';
import plantCommissioningImg from '../../assets/plant_commissioning.png';
import turnkeyProjectImg from '../../assets/turnkey_project.png';
import turnkeyConstructionImg from '../../assets/turnkey_construction.png';
import turnkeyHandoverImg from '../../assets/turnkey_handover.png';
import turnkeyTrainingImg from '../../assets/turnkey_training.png';

// Map categories to their corresponding generated images
const categoryImages = {
  'skincare': skincareImg,
  'haircare': haircareImg,
  'bodycare': bodycareImg,
  'colorcosmetics': colorImg,
};

const getCategoryImage = (title) => {
  if (!title) return null;
  const key = title.toLowerCase().replace(/\s+/g, '');
  return categoryImages[key] || null;
};

// Per-service hero images keyed by slug
const SERVICE_HERO_IMAGES = {
  'cosmetic-research-product-development':         heroResearchImg,
  'cosmetic-manufacturing-consulting':             heroManufacturingImg,
  'plant-setup-factory-planning':                  heroPlantSetupImg,
  'turnkey-cosmetic-project-solutions':            heroTurnkeyImg,
  'private-label-contract-manufacturing':          heroPrivateLabelImg,
  'regulatory-compliance-support':                 heroRegulatoryImg,
  'cosmetic-dpr-business-consulting':              heroDprImg,
  'technical-recruitment-team-building':           heroRecruitmentImg,
  'packaging-development-sourcing':                heroPackagingImg,
  'ingredient-sourcing-support':                   heroIngredientImg,
  'branding-go-to-market-consulting':              heroBrandingImg,
  'scale-up-commercialization-support':            heroScaleUpImg,
  'export-documentation-support':                  heroExportImg,
  'cosmetic-stability-testing-shelf-life-validation': heroStabilityImg,
  'cosmetic-innovation-rd-productivity-consulting':   heroInnovationImg,
};

// Unified image registry — keyed by string token set in each formulationSection.image
const SERVICE_IMAGES = {
  'formulation_bespoke':    formulationBespokeImg,
  'formulation_ingredient': formulationIngredientImg,
  'formulation_prototype':  formulationPrototypeImg,
  'formulation_commercial': formulationCommercialImg,
  'fac_cosmetic':           facCosmeticImg,
  'fac_industrial':         facIndustrialImg,
  'fac_turnkey':            facTurnkeyImg,
  'fac_boutique':           facBoutiqueImg,
  'rd_scientist':           rdScientistImg,
  'rd_shelves':             rdShelvesImg,
  'branding':               brandingImg,
  'cat_luxury':             catLuxuryImg,
  'stability_accelerated':  stabilityAcceleratedImg,
  'stability_container':    stabilityContainerImg,
  'stability_realtime':     stabilityRealtimeImg,
  'stability_transport':    stabilityTransportImg,
  'mfg_workflow':              mfgWorkflowImg,
  'mfg_gmp':                  mfgGmpImg,
  'mfg_sop':                  mfgSopImg,
  'mfg_equipment':            mfgEquipmentImg,
  'plant_layout':             plantLayoutImg,
  'plant_utility':            plantUtilityImg,
  'plant_equipment_install':  plantEquipInstallImg,
  'plant_commissioning':      plantCommissioningImg,
  'turnkey_project':          turnkeyProjectImg,
  'turnkey_construction':     turnkeyConstructionImg,
  'turnkey_handover':         turnkeyHandoverImg,
  'turnkey_training':         turnkeyTrainingImg,
};

// Legacy index fallback map (used when sec.image is not set)
const formulationImages = {
  0: formulationBespokeImg,
  1: formulationIngredientImg,
  2: formulationPrototypeImg,
  3: formulationCommercialImg,
};

// Resolve image: prefer sec.image key, fall back to position index
const getFormulationImage = (sec, index) => {
  if (sec && sec.image && SERVICE_IMAGES[sec.image]) {
    const imgObj = SERVICE_IMAGES[sec.image];
    return imgObj ? (imgObj.src || imgObj) : null;
  }
  const imgObj = formulationImages[index];
  return imgObj ? (imgObj.src || imgObj) : null;
};

// ─────────────────────────────────────────────────────────────────────────────
// ServiceDetailPage — Shared template for all 13 service sub-pages
// ─────────────────────────────────────────────────────────────────────────────
export default function ServiceDetailPage({ service }) {
  const [openFaq, setOpenFaq] = useState(null);
  const relatedServices = getRelatedServices(service);

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`sdp-root ${service.theme === 'light' ? 'sdp-theme-light' : 'sdp-theme-dark'}`}>

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section 
        className="sdp-hero"
        style={service.theme === 'light' ? { backgroundImage: `url("${(SERVICE_HERO_IMAGES[service.slug] ? (SERVICE_HERO_IMAGES[service.slug].src || SERVICE_HERO_IMAGES[service.slug]) : (cosmeticHeroBg.src || cosmeticHeroBg))}")`, backgroundSize: 'cover', backgroundPosition: 'right center' } : {}}
      >
        <div className="sdp-hero-overlay" />
        <div className="sdp-hero-glow" />
        <div className="sdp-hero-content">
          {/* Breadcrumb */}
          <nav className="sdp-breadcrumb">
            <Link href="/" className="sdp-breadcrumb-link">Home</Link>
            <span className="sdp-breadcrumb-sep">›</span>
            <Link href="/services" className="sdp-breadcrumb-link">Services</Link>
            <span className="sdp-breadcrumb-sep">›</span>
            <span className="sdp-breadcrumb-current">{service.name}</span>
          </nav>

          {/* Eyebrow */}
          <span className="sdp-eyebrow">{service.eyebrow}</span>

          {/* H1 */}
          <h1 className="sdp-hero-title">{service.name}</h1>

          {/* Gold divider */}
          <div className="sdp-hero-divider" />

          {/* Tagline */}
          <p className="sdp-hero-tagline">{service.tagline}</p>

          {/* Subtagline if exists */}
          {service.subtagline && (
            <p 
              className="sdp-hero-subtagline" 
              style={
                service.theme === 'light' 
                  ? { fontSize: '16px', color: '#5c526b', marginTop: '-16px', marginBottom: '36px' } 
                  : { fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginTop: '-16px', marginBottom: '36px' }
              }
            >
              {service.subtagline}
            </p>
          )}

          {/* CTA row */}
          <div className="sdp-hero-ctas">
            <button onClick={handleContactScroll} className="sdp-cta-primary">
              Get a Consultation
              <ArrowRight size={18} />
            </button>
            <Link href="/services" className="sdp-cta-ghost">
              <ArrowLeft size={16} />
              All Services
            </Link>
          </div>
        </div>

        {/* Decorative corner grid */}
        <div className="sdp-hero-grid-overlay" aria-hidden="true" />
      </section>

      {/* ─── 2. OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="sdp-overview">
        <div className="sdp-container">
          {service.theme === 'light' && (
            <div className="sdp-separator-quote">
              <span className="sdp-quote-mark">“</span>
            </div>
          )}
          {service.included && service.included.length > 0 ? (
            <div className="sdp-overview-grid">
              {/* Left — intro paragraph with gold accent bar */}
              <div className="sdp-overview-left">
                <div className="sdp-overview-accent-bar" style={{ background: service.color }} />
                <span className="sdp-section-eyebrow">Overview</span>
                <h2 className="sdp-section-title">What We Deliver</h2>
                <p className="sdp-overview-text">{service.intro}</p>
                <button onClick={handleContactScroll} className="sdp-overview-cta">
                  Start a Project Conversation
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right — What's Included checklist */}
              <div className="sdp-overview-right">
                <div className="sdp-included-card">
                  <h3 className="sdp-included-title">What's Included</h3>
                  <ul className="sdp-included-list">
                    {service.included.map((item, i) => (
                      <li key={i} className="sdp-included-item">
                        <span
                          className="sdp-included-check"
                          style={{ background: `${service.color}18`, color: service.color }}
                        >
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="sdp-overview-full">
              <div className="sdp-overview-left" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', paddingLeft: 0 }}>
                <span className="sdp-section-eyebrow">Overview</span>
                <h2 className="sdp-section-title" style={{ textAlign: 'center' }}>What We Deliver</h2>
                <div className="sdp-gold-line" style={{ background: service.color, margin: '18px auto 24px' }} />
                <p className="sdp-overview-text" style={{ fontSize: '16.5px', lineHeight: '1.8' }}>{service.intro}</p>
                <button onClick={handleContactScroll} className="sdp-cta-primary" style={{ marginTop: '16px' }}>
                  Schedule Strategic Consultation
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── CHALLENGES SECTION (OPTIONAL) ────────────────────────────────── */}
      {service.challenges && (
        <section className="sdp-challenges">
          <div className="sdp-container">
            <div className="sdp-challenges-grid">
              <div className="sdp-challenges-left">
                <span className="sdp-section-eyebrow">Industry Obstacles</span>
                <h2 className="sdp-section-title">{service.challenges.title}</h2>
                <div className="sdp-gold-line" style={{ margin: '18px 0 24px 0' }} />
                <p className="sdp-challenges-intro">{service.challenges.intro}</p>
                <div className="sdp-challenges-list">
                  {service.challenges.list.map((item, i) => (
                    <div key={i} className="sdp-challenge-item">
                      <span className="sdp-challenge-bullet">×</span>
                      <span className="sdp-challenge-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sdp-challenges-right">
                <div className="sdp-challenges-solution-card">
                  <h3 className="sdp-challenges-solution-title">The EGC Advantage</h3>
                  <p className="sdp-challenges-solution-text">{service.challenges.outro}</p>
                  <button onClick={handleContactScroll} className="sdp-cta-primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                    Consult with our experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CATEGORIES GRID SECTION (OPTIONAL) ────────────────────────────── */}
      {service.categoriesGrid && (
        <section className="sdp-categories">
          <div className="sdp-container">
            <div className="sdp-section-header">
              <span className="sdp-section-eyebrow" style={{ color: service.color }}>Innovation Segments</span>
              <h2 className="sdp-section-title">{service.categoriesGrid.title}</h2>
              <div className="sdp-gold-line" style={{ background: service.color }} />
              <p className="sdp-categories-desc" style={{ marginTop: '18px', color: '#5c526b', fontSize: '15.5px', lineHeight: '1.7', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                {service.categoriesGrid.desc}
              </p>
            </div>
            
            <div className="sdp-categories-grid">
              {service.categoriesGrid.items.map((cat, i) => {
                const imgObj = getCategoryImage(cat.title);
                const imgUrl = imgObj ? (imgObj.src || imgObj) : null;
                return (
                  <div key={i} className="sdp-category-card" style={{ borderTop: `4px solid ${service.color}` }}>
                    {imgUrl && (
                      <div className="sdp-category-image-wrapper">
                        <img src={imgUrl} alt={cat.title} className="sdp-category-image" />
                      </div>
                    )}
                    <div className="sdp-category-content">
                      <h3 className="sdp-category-title">{cat.title}</h3>
                      <ul className="sdp-category-list">
                        {cat.list.map((item, j) => (
                          <li key={j} className="sdp-category-item">
                            <span className="sdp-category-bullet" style={{ color: service.color }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── 3. PROCESS STEPS ────────────────────────────────────────────── */}
      <section className="sdp-process">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-eyebrow" style={{ color: service.color }}>
              How We Work
            </span>
            <h2 className="sdp-section-title sdp-light">Our Engagement Process</h2>
            <div className="sdp-gold-line" style={{ background: service.color }} />
          </div>

          <div className="sdp-steps-grid">
            {service.steps.map((step, i) => (
              <div key={i} className="sdp-step-card">
                {/* Ghost number */}
                <span className="sdp-step-ghost-num" style={{ color: `${service.color}22` }}>
                  {step.num}
                </span>
                {/* Active number badge */}
                <div
                  className="sdp-step-num-badge"
                  style={{ background: service.color }}
                >
                  {step.num}
                </div>
                <h3 className="sdp-step-title sdp-light">{step.title}</h3>
                <p className="sdp-step-desc">{step.desc}</p>
                {/* Connector arrow — hidden on last card */}
                {i < service.steps.length - 1 && (
                  <div className="sdp-step-connector" aria-hidden="true">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. KEY BENEFITS ─────────────────────────────────────────────── */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="sdp-benefits">
          <div className="sdp-container">
            <div className="sdp-section-header">
              <span className="sdp-section-eyebrow" style={{ color: '#e8cc7a' }}>
                Why It Matters
              </span>
              <h2 className="sdp-section-title sdp-light">Key Benefits</h2>
              <div className="sdp-gold-line" style={{ background: '#b5893b' }} />
            </div>

            <div className="sdp-benefits-grid">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="sdp-benefit-card">
                  <div
                    className="sdp-benefit-num"
                    style={{ color: service.color, borderColor: `${service.color}40` }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="sdp-benefit-title sdp-light">{benefit.title}</h3>
                  <p className="sdp-benefit-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 5. WHO THIS IS FOR ──────────────────────────────────────────── */}
      {service.audience && service.audience.length > 0 && (
        <section className="sdp-audience">
          <div className="sdp-container">
            <div className="sdp-audience-inner">
              <div className="sdp-audience-left">
                <span className="sdp-section-eyebrow">Ideal For</span>
                <h2 className="sdp-section-title">Who This Service Is For</h2>
                <div className="sdp-audience-line" style={{ background: service.color }} />
                <p className="sdp-audience-para">
                  EGC's consulting engagements are tailored to the specific needs of each client. This service is particularly well-suited for organizations at the following stages of the cosmetic business journey.
                </p>
              </div>
              <div className="sdp-audience-tags">
                {service.audience.map((tag, i) => (
                  <span
                    key={i}
                    className="sdp-audience-tag"
                    style={{
                      borderColor: `${service.color}50`,
                      color: service.color,
                      background: `${service.color}0d`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── INDUSTRIES WE SUPPORT (OPTIONAL) ────────────────────────────── */}
      {service.industries && (
        <section className="sdp-audience sdp-industries">
          <div className="sdp-container">
            <div className="sdp-audience-inner">
              <div className="sdp-audience-left">
                <span className="sdp-section-eyebrow">Target Sectors</span>
                <h2 className="sdp-section-title">{service.industries.title}</h2>
                <div className="sdp-audience-line" style={{ background: service.color }} />
                <p className="sdp-audience-para">
                  {service.industries.intro}
                </p>
                <p className="sdp-audience-para" style={{ marginTop: '16px', fontSize: '14.5px', color: '#7c728a' }}>
                  {service.industries.outro}
                </p>
              </div>
              <div className="sdp-audience-tags">
                {service.industries.list.map((tag, i) => (
                  <span
                    key={i}
                    className="sdp-audience-tag"
                    style={{
                      borderColor: `${service.color}50`,
                      color: service.color,
                      background: `${service.color}0d`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── FORMULATION SECTIONS (OPTIONAL) ──────────────────────────────── */}
      {service.formulationSections && (
        <section className="sdp-formulation-deeps">
          <div className="sdp-container">
            <div className="sdp-section-header">
              <span className="sdp-section-eyebrow">Service Deep Dives</span>
              <h2 className="sdp-section-title">Core Development Verticals</h2>
              <div className="sdp-gold-line" />
            </div>

            <div className="sdp-formulation-rows">
              {service.formulationSections.map((sec, i) => {
                const imgUrl = getFormulationImage(sec, i);
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`sdp-formulation-row ${isEven ? 'even' : 'odd'}`}>
                    <div className="sdp-formulation-image-column">
                      {imgUrl ? (
                        <div className="sdp-formulation-img-wrapper">
                          <img src={imgUrl} alt={sec.title} className="sdp-formulation-img" />
                        </div>
                      ) : (
                        <div className="sdp-formulation-img-placeholder" />
                      )}
                    </div>
                    <div className="sdp-formulation-content-column">
                      <h3 className="sdp-formulation-row-title">{sec.title}</h3>
                      <p className="sdp-formulation-row-desc">{sec.desc}</p>
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="sdp-formulation-row-bullets">
                          {sec.bullets.map((bullet, j) => (
                            <li key={j} className="sdp-formulation-row-bullet">
                              <span className="sdp-formulation-bullet-chevron" style={{ color: service.color || '#7c5e23' }}>›</span>
                              <span className="sdp-formulation-bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sec.cta && (
                        <button onClick={handleContactScroll} className="sdp-cta-primary" style={{ marginTop: '28px', alignSelf: 'flex-start' }}>
                          {sec.cta}
                          <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQs SECTION (OPTIONAL) ─────────────────────────────────────── */}
      {service.faqs && (
        <section className="sdp-faqs">
          <div className="sdp-container">
            <div className="sdp-section-header">
              <span className="sdp-section-eyebrow">Common Queries</span>
              <h2 className="sdp-section-title">Frequently Asked Questions</h2>
              <div className="sdp-gold-line" />
            </div>

            <div className="sdp-faq-list">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div 
                    key={i} 
                    className={`sdp-faq-item ${isOpen ? 'active' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="sdp-faq-question">
                      <span>{faq.q}</span>
                      <ChevronDown 
                        size={18} 
                        className={`sdp-faq-icon ${isOpen ? 'rotate' : ''}`} 
                      />
                    </div>
                    {isOpen && (
                      <div className="sdp-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── 6. RELATED SERVICES ─────────────────────────────────────────── */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="sdp-related">
          <div className="sdp-container">
            <div className="sdp-section-header">
              <span className="sdp-section-eyebrow">Explore More</span>
              <h2 className="sdp-section-title">Related Services</h2>
              <div className="sdp-gold-line" />
              <p className="sdp-related-subtitle">
                Businesses often combine these services for an integrated, end-to-end consulting engagement.
              </p>
            </div>

            <div className="sdp-related-grid">
              {relatedServices.map((rel, i) => (
                <Link
                  key={i}
                  href={`/services/${rel.slug}`}
                  className="sdp-related-card"
                >
                  <div
                    className="sdp-related-color-bar"
                    style={{ background: rel.color }}
                  />
                  <span
                    className="sdp-related-eyebrow"
                    style={{ color: rel.color }}
                  >
                    {rel.eyebrow}
                  </span>
                  <h3 className="sdp-related-name">{rel.name}</h3>
                  <p className="sdp-related-tagline">{rel.tagline}</p>
                  <div className="sdp-related-arrow" style={{ color: rel.color }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 7. CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="sdp-cta-band">
        <div className="sdp-cta-band-glow" />
        <div className="sdp-container sdp-cta-band-inner">
          {service.finalCta ? (
            <>
              <div style={{ maxWidth: '680px' }}>
                <h2 className="sdp-cta-band-title">{service.finalCta.title}</h2>
                <p className="sdp-cta-band-text">
                  {service.finalCta.text}
                </p>
              </div>
              <div className="sdp-cta-band-actions">
                <button onClick={handleContactScroll} className="sdp-cta-primary sdp-cta-large">
                  <Phone size={18} />
                  {service.finalCta.btnText}
                </button>
                <Link href="/services" className="sdp-cta-ghost sdp-cta-ghost-light">
                  View All Services
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="sdp-cta-band-title">Ready to Begin?</h2>
                <p className="sdp-cta-band-text">
                  Connect with our consultants to discuss how EGC can support your next project.
                </p>
              </div>
              <div className="sdp-cta-band-actions">
                <button onClick={handleContactScroll} className="sdp-cta-primary sdp-cta-large">
                  <Phone size={18} />
                  Request a Consultation
                </button>
                <Link href="/services" className="sdp-cta-ghost sdp-cta-ghost-light">
                  View All Services
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* ─── STYLES ──────────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── Root ── */
        .sdp-root {
          background: #fbfaf7;
          padding-top: 80px;
          font-family: var(--font-sans);
          color: var(--text-dark);
        }

        /* ── Container ── */
        .sdp-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── Section Headers ── */
        .sdp-section-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .sdp-section-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .sdp-section-title {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3.5vw, 38px);
          color: #1b0b30;
          font-weight: 600;
          margin: 0;
          line-height: 1.25;
        }
        .sdp-section-title.sdp-light {
          color: #ffffff;
        }
        .sdp-gold-line {
          width: 40px;
          height: 2px;
          background: #b5893b;
          margin: 18px auto 0;
          border-radius: 2px;
        }

        /* ─────────────── HERO ─────────────── */
        .sdp-hero {
          background: linear-gradient(145deg, #1b0b30 0%, #2d184d 55%, #1b0b30 100%);
          color: white;
          padding: 80px 40px 90px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .sdp-hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(181,137,59,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .sdp-hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,137,59,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,137,59,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .sdp-hero-container {
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .sdp-hero-content {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Breadcrumb */
        .sdp-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .sdp-breadcrumb-link {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .sdp-breadcrumb-link:hover {
          color: #b5893b;
        }
        .sdp-breadcrumb-sep {
          color: rgba(255,255,255,0.25);
          font-size: 12px;
        }
        .sdp-breadcrumb-current {
          font-size: 12px;
          color: #b5893b;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .sdp-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: #b5893b;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          padding: 6px 14px;
          border: 1px solid rgba(181,137,59,0.35);
          border-radius: 3px;
        }
        .sdp-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(30px, 4.5vw, 52px);
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 24px 0;
          color: #ffffff;
        }
        .sdp-hero-divider {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #b5893b, #e8cc7a);
          margin: 0 auto 24px;
          border-radius: 2px;
        }
        .sdp-hero-tagline {
          font-size: 17px;
          color: rgba(255,255,255,0.78);
          line-height: 1.6;
          margin: 0 auto 36px;
          max-width: 620px;
        }
        .sdp-hero-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .sdp-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #b5893b;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(181,137,59,0.35);
          letter-spacing: 0.3px;
        }
        .sdp-cta-primary:hover {
          background: #9c732c;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(181,137,59,0.45);
        }
        .sdp-cta-primary.sdp-cta-large {
          padding: 16px 32px;
          font-size: 15px;
        }
        .sdp-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: transparent;
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sdp-cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }
        .sdp-cta-ghost-light {
          color: rgba(255,255,255,0.7);
        }

        /* ─────────────── OVERVIEW ─────────────── */
        .sdp-overview {
          padding: 88px 0;
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181,137,59,0.1);
        }
        .sdp-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .sdp-overview-left {
          position: relative;
          padding-left: 24px;
        }
        .sdp-overview-accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          border-radius: 3px;
          background: #b5893b;
        }
        .sdp-overview-text {
          font-size: 15.5px;
          color: #5c526b;
          line-height: 1.8;
          margin: 16px 0 28px 0;
        }
        .sdp-overview-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: #1b0b30;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .sdp-overview-cta:hover {
          background: #2d184d;
          transform: translateY(-2px);
        }
        .sdp-included-card {
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 14px;
          padding: 36px;
          box-shadow: 0 8px 28px rgba(27,11,48,0.04);
        }
        .sdp-included-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 0 24px 0;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(181,137,59,0.15);
        }
        .sdp-included-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sdp-included-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #2d2736;
          line-height: 1.5;
        }
        .sdp-included-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.5px;
        }

        /* ─────────────── PROCESS STEPS ─────────────── */
        .sdp-process {
          padding: 88px 0;
          background: linear-gradient(135deg, #1b0b30 0%, #251140 50%, #1b0b30 100%);
          position: relative;
          overflow: hidden;
        }
        .sdp-process::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,137,59,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,137,59,0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .sdp-process .sdp-container {
          position: relative;
          z-index: 2;
        }
        .sdp-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .sdp-step-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 32px 24px;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .sdp-step-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(181,137,59,0.4);
          transform: translateY(-4px);
        }
        .sdp-step-ghost-num {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: var(--font-serif);
          font-size: 52px;
          font-weight: 800;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .sdp-step-num-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          color: white;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        .sdp-step-title {
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.35;
        }
        .sdp-step-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          margin: 0;
        }
        .sdp-step-connector {
          display: none;
        }

        /* ─────────────── BENEFITS ─────────────── */
        .sdp-benefits {
          padding: 88px 0;
          background: linear-gradient(135deg, #1b0b30 0%, #2d184d 100%);
          border-top: 1px solid rgba(181,137,59,0.15);
        }
        .sdp-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .sdp-benefit-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 36px 30px;
          transition: all 0.3s ease;
        }
        .sdp-benefit-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(181,137,59,0.4);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .sdp-benefit-num {
          font-family: var(--font-serif);
          font-size: 34px;
          font-weight: 800;
          border-bottom: 2px solid;
          padding-bottom: 12px;
          margin-bottom: 20px;
          display: inline-block;
        }
        .sdp-benefit-title {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        .sdp-benefit-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          margin: 0;
        }

        /* ─────────────── AUDIENCE ─────────────── */
        .sdp-audience {
          padding: 88px 0;
          background: #f5f2eb;
          border-top: 1px solid rgba(181,137,59,0.12);
          border-bottom: 1px solid rgba(181,137,59,0.12);
        }
        .sdp-audience-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sdp-audience-left {
          /* left column */
        }
        .sdp-audience-line {
          width: 40px;
          height: 2px;
          margin: 18px 0 20px;
          border-radius: 2px;
        }
        .sdp-audience-para {
          font-size: 15px;
          color: #5c526b;
          line-height: 1.7;
          margin: 0;
        }
        .sdp-audience-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-content: flex-start;
        }
        .sdp-audience-tag {
          display: inline-flex;
          align-items: center;
          padding: 10px 18px;
          border-radius: 100px;
          border: 1.5px solid;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: all 0.2s ease;
        }
        .sdp-audience-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* ─────────────── RELATED SERVICES ─────────────── */
        .sdp-related {
          padding: 88px 0;
          background: #fbfaf7;
        }
        .sdp-related-subtitle {
          font-size: 15px;
          color: #7c728a;
          line-height: 1.6;
          margin: 16px auto 0;
          max-width: 600px;
          text-align: center;
        }
        .sdp-related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 48px;
        }
        .sdp-related-card {
          display: flex;
          flex-direction: column;
          background: white;
          border: 1px solid #e2dfd8;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(27,11,48,0.03);
          position: relative;
        }
        .sdp-related-card:hover {
          transform: translateY(-6px);
          border-color: rgba(181,137,59,0.4);
          box-shadow: 0 16px 36px rgba(27,11,48,0.1);
        }
        .sdp-related-color-bar {
          height: 4px;
          width: 100%;
          flex-shrink: 0;
        }
        .sdp-related-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 24px 22px 8px;
        }
        .sdp-related-name {
          font-family: var(--font-serif);
          font-size: 16px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 22px 10px;
          line-height: 1.35;
        }
        .sdp-related-tagline {
          font-size: 12.5px;
          color: #7c728a;
          line-height: 1.55;
          margin: 0 22px;
          flex-grow: 1;
        }
        .sdp-related-arrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          margin: 20px 22px 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: gap 0.2s ease;
        }
        .sdp-related-card:hover .sdp-related-arrow {
          gap: 10px;
        }

        /* ─────────────── CTA BAND ─────────────── */
        .sdp-cta-band {
          padding: 72px 40px;
          background: radial-gradient(ellipse at center, #2d184d 0%, #1b0b30 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .sdp-cta-band-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(181,137,59,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .sdp-cta-band-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        .sdp-cta-band-title {
          font-family: var(--font-serif);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 600;
          margin: 0 0 10px 0;
        }
        .sdp-cta-band-text {
          font-size: 15px;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          margin: 0;
          max-width: 500px;
        }
        .sdp-cta-band-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        /* ─── Challenges Section ─── */
        .sdp-challenges {
          padding: 88px 0;
          background: #fdfcf9;
          border-bottom: 1px solid rgba(181,137,59,0.1);
        }
        .sdp-challenges-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .sdp-challenges-intro {
          font-size: 15.5px;
          color: #5c526b;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .sdp-challenges-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sdp-challenge-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .sdp-challenge-bullet {
          color: #d32f2f;
          font-weight: 800;
          font-size: 18px;
          line-height: 1;
        }
        .sdp-challenge-text {
          font-size: 14.5px;
          color: #2d2736;
          line-height: 1.5;
        }
        .sdp-challenges-solution-card {
          background: #ffffff;
          border: 1px solid rgba(181,137,59,0.2);
          border-radius: 14px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(27,11,48,0.04);
          position: relative;
        }
        .sdp-challenges-solution-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #b5893b;
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
        }
        .sdp-challenges-solution-title {
          font-family: var(--font-serif);
          font-size: 21px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 0 16px 0;
        }
        .sdp-challenges-solution-text {
          font-size: 14.5px;
          color: #5c526b;
          line-height: 1.75;
          margin: 0;
        }

        /* ─── Categories Grid ─── */
        .sdp-categories {
          padding: 88px 0;
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181,137,59,0.1);
        }
        .sdp-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .sdp-category-card {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 4px 16px rgba(27,11,48,0.02);
          transition: all 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .sdp-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(27,11,48,0.08);
          border-color: rgba(181,137,59,0.3);
        }
        .sdp-category-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          position: relative;
          background: #f0ede6;
        }
        .sdp-category-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sdp-category-card:hover .sdp-category-image {
          transform: scale(1.08);
        }
        .sdp-category-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .sdp-category-title {
          font-family: var(--font-serif);
          font-size: 18px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 0 18px 0;
        }
        .sdp-category-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sdp-category-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: #5c526b;
          line-height: 1.4;
        }
        .sdp-category-bullet {
          font-weight: bold;
        }

        /* ─── Formulation Deep Dives ─── */
        .sdp-formulation-deeps {
          padding: 100px 0;
          background: #ffffff;
          border-bottom: 1px solid rgba(181, 137, 59, 0.1);
        }
        .sdp-formulation-rows {
          display: flex;
          flex-direction: column;
          gap: 90px;
          margin-top: 60px;
        }
        .sdp-formulation-row {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 70px;
          align-items: center;
        }
        .sdp-formulation-row .sdp-formulation-image-column {
          order: 2;
        }
        .sdp-formulation-row .sdp-formulation-content-column {
          order: 1;
        }
        .sdp-formulation-row.odd {
          grid-template-columns: 1.15fr 0.85fr;
        }
        .sdp-formulation-row.odd .sdp-formulation-image-column {
          order: 1;
        }
        .sdp-formulation-row.odd .sdp-formulation-content-column {
          order: 2;
        }
        .sdp-formulation-img-wrapper {
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.06);
          aspect-ratio: 16/10;
          background: #fbfaf7;
          border: 1px solid rgba(226, 223, 216, 0.5);
        }
        .sdp-formulation-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sdp-formulation-img-wrapper:hover .sdp-formulation-img {
          transform: scale(1.04);
        }
        .sdp-formulation-content-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .sdp-formulation-row-title {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 600;
          color: #1b0b30;
          margin: 0 0 18px 0;
          line-height: 1.25;
        }
        .sdp-formulation-row-desc {
          font-size: 15.5px;
          color: #5c526b;
          line-height: 1.75;
          margin: 0 0 28px 0;
        }
        .sdp-formulation-row-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sdp-formulation-row-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sdp-formulation-bullet-chevron {
          font-size: 18px;
          font-weight: bold;
          line-height: 1;
        }
        .sdp-formulation-bullet-text {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #2d2736;
          text-transform: uppercase;
        }

        /* ─── FAQ Accordions ─── */
        .sdp-faqs {
          padding: 88px 0;
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181,137,59,0.1);
        }
        .sdp-faq-list {
          max-width: 820px;
          margin: 48px auto 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sdp-faq-item {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .sdp-faq-item:hover {
          border-color: #b5893b;
        }
        .sdp-faq-item.active {
          border-color: #b5893b;
          box-shadow: 0 6px 20px rgba(181,137,59,0.06);
        }
        .sdp-faq-question {
          padding: 20px 24px;
          font-size: 15.5px;
          font-weight: 600;
          color: #1b0b30;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .sdp-faq-icon {
          color: #b5893b;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .sdp-faq-icon.rotate {
          transform: rotate(180deg);
        }
        .sdp-faq-answer {
          padding: 0 24px 20px 24px;
          border-top: 1px solid rgba(181,137,59,0.08);
          animation: sdpFadeIn 0.3s ease forwards;
        }
        .sdp-faq-answer p {
          font-size: 14px;
          color: #5c526b;
          line-height: 1.65;
          margin: 12px 0 0 0;
        }

        @keyframes sdpFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ─── Light Theme Styles ─── */
        .sdp-theme-light {
          background: #ffffff;
          color: #2d2736;
        }
        
        .sdp-theme-light .sdp-hero {
          position: relative;
          background-color: #ffffff;
          color: #2d2736;
          text-align: left;
          padding: 120px 40px 100px;
          border-bottom: 1px solid rgba(181, 137, 59, 0.1);
          background-repeat: no-repeat;
          min-height: 520px;
        }
        
        .sdp-theme-light .sdp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0.97) 30%, 
            rgba(255,255,255,0.85) 50%, 
            rgba(255,255,255,0.4) 70%, 
            rgba(255,255,255,0.05) 100%
          );
          pointer-events: none;
          z-index: 1;
          display: block;
        }
        
        .sdp-theme-light .sdp-hero-glow {
          background: none;
        }
        
        .sdp-theme-light .sdp-hero-grid-overlay {
          background-image: none;
        }
        
        .sdp-theme-light .sdp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 580px;
          margin: 0;
          text-align: left;
        }
        
        .sdp-theme-light .sdp-breadcrumb {
          justify-content: flex-start;
          margin-bottom: 24px;
        }
        
        .sdp-theme-light .sdp-breadcrumb-link {
          color: rgba(45, 39, 54, 0.6);
        }
        
        .sdp-theme-light .sdp-breadcrumb-sep {
          color: rgba(45, 39, 54, 0.3);
        }
        
        .sdp-theme-light .sdp-breadcrumb-current {
          color: #7c5e23;
        }
        
        .sdp-theme-light .sdp-eyebrow {
          color: #7c5e23;
          border-color: rgba(124, 94, 35, 0.3);
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 24px;
          padding: 6px 14px;
        }
        
        .sdp-theme-light .sdp-hero-title {
          color: #1b0b30;
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 500;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        
        .sdp-theme-light .sdp-hero-divider {
          display: none;
        }
        
        .sdp-theme-light .sdp-hero-tagline {
          color: #2d2736;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 20px;
          margin-bottom: 12px;
          max-width: 800px;
          line-height: 1.5;
        }
        
        .sdp-theme-light .sdp-hero-subtagline {
          color: #5c526b;
          font-size: 16px;
          margin-bottom: 36px;
        }
        
        .sdp-theme-light .sdp-hero-ctas {
          justify-content: flex-start;
          gap: 16px;
        }
        
        .sdp-theme-light .sdp-cta-primary {
          background: #7c5e23;
          color: #ffffff;
          border-radius: 2px;
          box-shadow: 0 4px 10px rgba(124, 94, 35, 0.15);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          padding: 14px 28px;
        }
        
        .sdp-theme-light .sdp-cta-primary:hover {
          background: #62491b;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(124, 94, 35, 0.25);
        }
        
        .sdp-theme-light .sdp-cta-ghost {
          color: #7c5e23;
          border-color: rgba(124, 94, 35, 0.4);
          border-radius: 2px;
        }
        
        .sdp-theme-light .sdp-cta-ghost:hover {
          background: rgba(124, 94, 35, 0.05);
          border-color: #7c5e23;
          color: #7c5e23;
        }
        
        /* ─── Overview Section (Light) ─── */
        .sdp-theme-light .sdp-overview {
          background: #ffffff;
          padding: 80px 0 40px 0;
          border-bottom: none;
        }
        
        .sdp-theme-light .sdp-overview-full .sdp-section-title {
          font-family: var(--font-serif);
          font-size: 32px;
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-overview-full .sdp-overview-text {
          font-size: 16px;
          color: #5c526b;
          line-height: 1.8;
        }
        
        /* ─── Separator Quote ─── */
        .sdp-theme-light .sdp-separator-quote {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0 40px 0;
          line-height: 1;
        }
        
        .sdp-theme-light .sdp-quote-mark {
          font-family: var(--font-serif);
          font-size: 80px;
          color: #7c5e23;
          opacity: 0.6;
          user-select: none;
        }
        
        /* ─── Challenges (Light) ─── */
        .sdp-theme-light .sdp-challenges {
          background: #ffffff;
          padding: 60px 0 80px 0;
        }
        
        .sdp-theme-light .sdp-challenges .sdp-section-title {
          font-family: var(--font-serif);
          font-size: 30px;
          color: #1b0b30;
          text-align: left;
          position: relative;
          display: inline-block;
        }
        
        .sdp-theme-light .sdp-challenges .sdp-gold-line {
          margin: 14px 0 24px 0;
          background: #7c5e23;
          width: 60px;
          height: 2px;
        }
        
        .sdp-theme-light .sdp-challenges-intro {
          font-size: 15.5px;
          color: #5c526b;
          line-height: 1.7;
        }
        
        .sdp-theme-light .sdp-challenge-bullet {
          color: #7c5e23;
          font-size: 18px;
        }
        
        .sdp-theme-light .sdp-challenge-text {
          font-size: 14.5px;
          color: #2d2736;
        }
        
        .sdp-theme-light .sdp-challenges-solution-card {
          border-color: rgba(124, 94, 35, 0.2);
          box-shadow: 0 8px 24px rgba(27,11,48,0.03);
        }
        
        .sdp-theme-light .sdp-challenges-solution-card::before {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-challenges-solution-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        /* ─── Categories (Light) ─── */
        .sdp-theme-light .sdp-categories {
          background: #fbfaf7;
        }
        
        .sdp-theme-light .sdp-categories .sdp-section-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-categories .sdp-gold-line {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-category-card {
          border-color: #e2dfd8;
        }
        
        .sdp-theme-light .sdp-category-card:hover {
          border-color: rgba(124, 94, 35, 0.4);
        }
        
        .sdp-theme-light .sdp-category-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        /* ─── Process steps (Light) ─── */
        .sdp-theme-light .sdp-process {
          background: #ffffff;
          border-bottom: 1px solid rgba(181, 137, 59, 0.1);
        }
        
        .sdp-theme-light .sdp-process::before {
          background-image:
            linear-gradient(rgba(124, 94, 35, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 94, 35, 0.02) 1px, transparent 1px);
        }
        
        .sdp-theme-light .sdp-process .sdp-section-title.sdp-light {
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-process .sdp-gold-line {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-step-card {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          box-shadow: 0 4px 12px rgba(27,11,48,0.02);
        }
        
        .sdp-theme-light .sdp-step-card:hover {
          background: #fdfcf9;
          border-color: #7c5e23;
          box-shadow: 0 12px 28px rgba(27,11,48,0.06);
        }
        
        .sdp-theme-light .sdp-step-title.sdp-light {
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-step-desc {
          color: #5c526b;
        }
        
        .sdp-theme-light .sdp-step-num-badge {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-step-ghost-num {
          color: rgba(124, 94, 35, 0.06) !important;
        }
        
        /* ─── Industries (Light) ─── */
        .sdp-theme-light .sdp-industries {
          background: #fbfaf7;
          border-bottom: 1px solid rgba(181, 137, 59, 0.1);
        }
        
        .sdp-theme-light .sdp-industries .sdp-section-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-industries .sdp-audience-line {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-industries .sdp-audience-tag {
          border-color: rgba(124, 94, 35, 0.3);
          color: #7c5e23;
          background: rgba(124, 94, 35, 0.03);
        }
        
        .sdp-theme-light .sdp-industries .sdp-audience-tag:hover {
          background: rgba(124, 94, 35, 0.08);
          border-color: #7c5e23;
        }
        
        /* ─── Deep Dives (Light) ─── */
        .sdp-theme-light .sdp-formulation-deeps {
          background: #ffffff;
        }
        
        .sdp-theme-light .sdp-formulation-deeps .sdp-section-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-formulation-deeps .sdp-gold-line {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-formulation-row-title {
          color: #1b0b30;
        }
        .sdp-theme-light .sdp-formulation-bullet-text {
          color: #2d2736;
        }
        
        /* ─── FAQs (Light) ─── */
        .sdp-theme-light .sdp-faqs {
          background: #fbfaf7;
        }
        
        .sdp-theme-light .sdp-faqs .sdp-section-title {
          font-family: var(--font-serif);
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-faqs .sdp-gold-line {
          background: #7c5e23;
        }
        
        .sdp-theme-light .sdp-faq-item:hover {
          border-color: #7c5e23;
        }
        
        .sdp-theme-light .sdp-faq-item.active {
          border-color: #7c5e23;
          box-shadow: 0 6px 20px rgba(124, 94, 35, 0.05);
        }
        
        .sdp-theme-light .sdp-faq-question {
          color: #1b0b30;
        }
        
        .sdp-theme-light .sdp-faq-icon {
          color: #7c5e23;
        }
        
        /* ─── CTA Band (Light) ─── */
        .sdp-theme-light .sdp-cta-band {
          background: radial-gradient(ellipse at center, #ffffff 0%, #f7f5f0 100%);
          color: #2d2736;
          border-top: 1px solid rgba(181, 137, 59, 0.1);
        }
        
        .sdp-theme-light .sdp-cta-band-title {
          color: #1b0b30;
          font-family: var(--font-serif);
        }
        
        .sdp-theme-light .sdp-cta-band-text {
          color: #5c526b;
        }
        
        .sdp-theme-light .sdp-cta-ghost-light {
          color: #7c5e23;
          border-color: rgba(124, 94, 35, 0.4);
        }
        
        .sdp-theme-light .sdp-cta-ghost-light:hover {
          background: rgba(124, 94, 35, 0.05);
          color: #7c5e23;
          border-color: #7c5e23;
        }

        /* ─────────────── RESPONSIVE ─────────────── */
        @media (max-width: 1100px) {
          .sdp-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sdp-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sdp-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 900px) {
          .sdp-theme-light .sdp-hero-content {
            text-align: center;
            max-width: 100%;
            margin: 0 auto;
          }
          .sdp-theme-light .sdp-hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.85) 60%,
              rgba(255,255,255,0.7) 100%
            );
          }
          .sdp-theme-light .sdp-breadcrumb {
            justify-content: center;
          }
          .sdp-theme-light .sdp-hero-ctas {
            justify-content: center;
          }
          .sdp-overview-grid,
          .sdp-audience-inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .sdp-overview-left {
            padding-left: 20px;
          }
          .sdp-benefits-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .sdp-cta-band-inner {
            flex-direction: column;
            text-align: center;
          }
          .sdp-cta-band-text {
            max-width: 100%;
          }
          .sdp-challenges-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .sdp-formulation-rows {
            gap: 54px;
          }
          .sdp-formulation-row,
          .sdp-formulation-row.odd {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .sdp-formulation-row.odd .sdp-formulation-image-column {
            order: 1;
          }
          .sdp-formulation-row.odd .sdp-formulation-content-column {
            order: 2;
          }
        }
        @media (max-width: 768px) {
          .sdp-hero {
            padding: 64px 24px 72px;
          }
          .sdp-container {
            padding: 0 24px;
          }
          .sdp-overview,
          .sdp-process,
          .sdp-benefits,
          .sdp-audience,
          .sdp-related,
          .sdp-challenges,
          .sdp-categories,
          .sdp-formulation-deeps,
          .sdp-faqs {
            padding: 64px 0;
          }
          .sdp-related-grid {
            grid-template-columns: 1fr;
          }
          .sdp-steps-grid {
            grid-template-columns: 1fr;
          }
          .sdp-hero-title {
            font-size: clamp(26px, 7vw, 38px);
          }
          .sdp-hero-ctas {
            flex-direction: column;
            align-items: stretch;
          }
          .sdp-cta-primary, .sdp-cta-ghost {
            justify-content: center;
          }
          .sdp-cta-band {
            padding: 56px 24px;
          }
        }
        @media (max-width: 480px) {
          .sdp-hero {
            padding: 48px 16px 60px;
          }
          .sdp-container {
            padding: 0 16px;
          }
          .sdp-included-card {
            padding: 24px 20px;
          }
          .sdp-benefits-grid {
            grid-template-columns: 1fr;
          }
          .sdp-overview,
          .sdp-process,
          .sdp-benefits,
          .sdp-audience,
          .sdp-related,
          .sdp-challenges,
          .sdp-categories,
          .sdp-formulation-deeps,
          .sdp-faqs {
            padding: 48px 0;
          }
          .sdp-categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}
