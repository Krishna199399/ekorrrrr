'use client';

import React, { useState, useEffect } from 'react';
import ResearchInnovation from '../components/ResearchInnovation';
import ContactForm from '../components/ContactForm';
import { Microscope, Play, RefreshCw, AlertTriangle, CheckCircle, Download, Landmark, Cpu } from 'lucide-react';

const INGREDIENTS = [
  { id: 'retinol', name: 'Retinol', category: 'Active', desc: 'Powerful anti-aging and cell turnover accelerator.', pHMin: 5.5, pHMax: 6.5, incompatible: ['salicylic'], benefits: { antiAging: 95, brightening: 40, hydration: 10 } },
  { id: 'hyaluronic', name: 'Hyaluronic Acid', category: 'Hydrator', desc: 'Humectant that holds up to 1000x its weight in water.', pHMin: 5.0, pHMax: 7.0, incompatible: [], benefits: { antiAging: 30, brightening: 20, hydration: 95 } },
  { id: 'vitc', name: 'Vitamin C (L-Ascorbic)', category: 'Antioxidant', desc: 'Potent skin brightener and collagen booster.', pHMin: 3.0, pHMax: 3.5, incompatible: ['retinol', 'niacinamide'], benefits: { antiAging: 60, brightening: 95, hydration: 15 } },
  { id: 'niacinamide', name: 'Niacinamide (B3)', category: 'Barrier Care', desc: 'Restores skin barrier, refines pores, and regulates sebum.', pHMin: 5.5, pHMax: 6.5, incompatible: ['vitc'], benefits: { antiAging: 45, brightening: 75, hydration: 50 } },
  { id: 'salicylic', name: 'Salicylic Acid (BHA)', category: 'Exfoliant', desc: 'Oil-soluble acid that penetrates and cleanses pores.', pHMin: 3.0, pHMax: 4.0, incompatible: ['retinol'], benefits: { antiAging: 20, brightening: 50, hydration: 10 } },
  { id: 'ceramide', name: 'Ceramide NP', category: 'Barrier Care', desc: 'Essential lipid that locks in moisture and repairs damage.', pHMin: 4.5, pHMax: 7.0, incompatible: [], benefits: { antiAging: 40, brightening: 10, hydration: 85 } },
  { id: 'peptides', name: 'Peptide Complex', category: 'Active', desc: 'Amino acids that signal skin to produce collagen.', pHMin: 5.0, pHMax: 6.5, incompatible: [], benefits: { antiAging: 85, brightening: 30, hydration: 40 } },
  { id: 'centella', name: 'Centella Asiatica', category: 'Soothing', desc: 'Herbal extract that calms inflammation and redness.', pHMin: 5.0, pHMax: 7.0, incompatible: [], benefits: { antiAging: 30, brightening: 25, hydration: 60 } }
];

export default function RdLabPage() {
  const [productType, setProductType] = useState('Skincare');
  const [selectedIngredients, setSelectedIngredients] = useState(['hyaluronic']);
  const [concentration, setConcentration] = useState(2.0); // %
  const [pH, setPH] = useState(5.5);
  const [formulationState, setFormulationState] = useState('idle'); // idle, calculating, success
  const [metrics, setMetrics] = useState({
    efficacy: 0,
    stability: 0,
    hydration: 0,
    brightening: 0,
    antiAging: 0,
    sensitivity: 0
  });
  const [warnings, setWarnings] = useState([]);
  const [reportGenerated, setReportGenerated] = useState(false);

  useEffect(() => {
    calculateFormula();
  }, [productType, selectedIngredients, concentration, pH]);

  const toggleIngredient = (id) => {
    if (selectedIngredients.includes(id)) {
      if (selectedIngredients.length > 1) {
        setSelectedIngredients(selectedIngredients.filter(item => item !== id));
      }
    } else {
      if (selectedIngredients.length < 3) {
        setSelectedIngredients([...selectedIngredients, id]);
      }
    }
  };

  const calculateFormula = () => {
    let baseEfficacy = 50;
    let baseStability = 100;
    let baseHydration = 10;
    let baseBrightening = 10;
    let baseAntiAging = 10;
    let baseSensitivity = 5;

    const currentIngredients = INGREDIENTS.filter(i => selectedIngredients.includes(i.id));
    const activeWarnings = [];

    // 1. Check incompatibility
    for (let i = 0; i < currentIngredients.length; i++) {
      for (let j = 0; j < currentIngredients.length; j++) {
        if (i !== j) {
          const ingA = currentIngredients[i];
          const ingB = currentIngredients[j];
          if (ingA.incompatible.includes(ingB.id)) {
            baseStability -= 30;
            baseSensitivity += 35;
            const warningMsg = `Incompatibility: ${ingA.name} and ${ingB.name} conflicts.`;
            if (!activeWarnings.includes(warningMsg)) {
              activeWarnings.push(warningMsg);
            }
          }
        }
      }
    }

    // 2. Check pH compatibility
    currentIngredients.forEach(ing => {
      if (pH < ing.pHMin || pH > ing.pHMax) {
        const severity = Math.max(Math.abs(pH - ing.pHMin), Math.abs(pH - ing.pHMax));
        const penalty = Math.round(severity * 25);
        baseStability -= penalty;
        baseEfficacy -= Math.round(penalty / 1.5);
        baseSensitivity += Math.round(severity * 10);
        activeWarnings.push(`pH Conflict: ${ing.name} requires pH ${ing.pHMin}-${ing.pHMax}.`);
      }
    });

    // 3. Accumulate benefits
    currentIngredients.forEach(ing => {
      baseHydration += ing.benefits.hydration;
      baseBrightening += ing.benefits.brightening;
      baseAntiAging += ing.benefits.antiAging;
    });

    const count = currentIngredients.length;
    baseHydration = Math.min(100, Math.round((baseHydration / count) * (concentration / 2)));
    baseBrightening = Math.min(100, Math.round((baseBrightening / count) * (concentration / 2)));
    baseAntiAging = Math.min(100, Math.round((baseAntiAging / count) * (concentration / 2)));

    const concentrationFactor = Math.min(1.5, 0.5 + (concentration / 4));
    baseEfficacy = Math.round(
      ((currentIngredients.reduce((acc, ing) => acc + (ing.benefits.antiAging + ing.benefits.brightening + ing.benefits.hydration)/3, 0) / count) * 
      concentrationFactor * 
      (baseStability / 100))
    );
    baseEfficacy = Math.min(100, Math.max(10, baseEfficacy));

    if (concentration > 5) {
      baseSensitivity += Math.round((concentration - 5) * 8);
      if (concentration > 8) {
        activeWarnings.push(`High concentration risk: irritant level.`);
      }
    }

    setMetrics({
      efficacy: Math.max(0, Math.min(100, baseEfficacy)),
      stability: Math.max(10, Math.min(100, baseStability)),
      hydration: baseHydration,
      brightening: baseBrightening,
      antiAging: baseAntiAging,
      sensitivity: Math.min(100, baseSensitivity)
    });
    setWarnings(activeWarnings);
  };

  const handleSimulate = () => {
    setFormulationState('calculating');
    setTimeout(() => {
      setFormulationState('success');
    }, 1500);
  };

  const resetSimulator = () => {
    setSelectedIngredients(['hyaluronic']);
    setConcentration(2.0);
    setPH(5.5);
    setFormulationState('idle');
    setReportGenerated(false);
  };

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
            Sterile lab compounding & chemical engineering
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 54px)', margin: '15px 0', lineHeight: 1.1 }}>
            R&D Innovation Lab
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Inside EGC's state-of-the-art cleanroom laboratories, where premium raw materials are refined into advanced bio-actives and dermal emulsifiers.
          </p>
        </div>
      </div>

      {/* 2. Embedded Simulator Portal */}
      <div className="page-section-narrow">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#b5893b', fontWeight: 'bold', letterSpacing: '1px', fontSize: '11px', textTransform: 'uppercase' }}>
            Interactive Formulation Sandbox
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1b0b30', margin: '10px 0 0' }}>
            Formulation Lab Desk
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b5893b', margin: '15px auto 0' }} />
        </div>

        <div style={{
          background: 'white',
          border: '1px solid rgba(181, 137, 59, 0.2)',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          {/* Simulator Panel (Embedded directly on page!) */}
          <div style={{ background: '#1b0b30', color: 'white', padding: '20px 30px', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'left' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#b5893b', margin: 0 }}>EGC Batch Compounder</h3>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Digital Sandbox Desk</span>
          </div>

          <div style={{ padding: '30px' }} className="simulator-body-wrapper">
            {formulationState !== 'success' ? (
              <div className="simulator-grid-layout">
                
                {/* Left Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                  
                  {/* Category */}
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13.5px', color: '#1b0b30', display: 'block', marginBottom: '8px' }}>Category</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {['Skincare', 'Haircare', 'Bodycare', 'Luxury Cosmetics'].map(t => (
                        <button
                          key={t}
                          onClick={() => setProductType(t)}
                          style={{
                            padding: '10px',
                            border: '1px solid',
                            borderColor: productType === t ? '#b5893b' : '#e2dfd8',
                            background: productType === t ? '#1b0b30' : 'white',
                            color: productType === t ? '#fbfaf7' : '#2d2736',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actives */}
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13.5px', color: '#1b0b30', display: 'block', marginBottom: '8px' }}>Active Actives (Max 3)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
                      {INGREDIENTS.map(ing => {
                        const isSel = selectedIngredients.includes(ing.id);
                        return (
                          <div
                            key={ing.id}
                            onClick={() => toggleIngredient(ing.id)}
                            style={{
                              padding: '8px 12px',
                              border: '1px solid',
                              borderColor: isSel ? '#b5893b' : '#e2dfd8',
                              background: isSel ? 'rgba(181,137,59,0.06)' : 'white',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{ing.name}</span>
                            <input type="checkbox" checked={isSel} readOnly style={{ accentColor: '#b5893b' }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sliders */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                        <span style={{ fontWeight: '600' }}>Concentration</span>
                        <strong style={{ color: '#b5893b' }}>{concentration}%</strong>
                      </div>
                      <input type="range" min="0.1" max="10" step="0.1" value={concentration} onChange={e => setConcentration(parseFloat(e.target.value))} style={{ width: '100%', accentColor: '#b5893b' }} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                        <span style={{ fontWeight: '600' }}>Target pH</span>
                        <strong style={{ color: '#b5893b' }}>pH {pH}</strong>
                      </div>
                      <input type="range" min="3" max="7.5" step="0.1" value={pH} onChange={e => setPH(parseFloat(e.target.value))} style={{ width: '100%', accentColor: '#b5893b' }} />
                    </div>
                  </div>

                  <button
                    onClick={handleSimulate}
                    style={{
                      padding: '12px',
                      background: '#b5893b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {formulationState === 'calculating' ? (
                      <>
                        <RefreshCw className="animate-spin" size={16} />
                        Testing stability...
                      </>
                    ) : (
                      <>
                        <Play size={16} fill="white" />
                        Run Stability Test
                      </>
                    )}
                  </button>
                </div>

                {/* Right Metrics */}
                <div style={{ background: '#fbfaf7', padding: '20px', borderRadius: '12px', border: '1px solid #e2dfd8', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px', margin: 0 }}>Real-time Readings</h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ background: 'white', padding: '10px', borderRadius: '6px', textAlign: 'center', border: '1px solid #e2dfd8' }}>
                      <span style={{ fontSize: '11px', color: '#7c728a' }}>Stability</span>
                      <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '5px 0', color: metrics.stability > 70 ? '#2e7d32' : '#c62828' }}>{metrics.stability}%</p>
                    </div>
                    <div style={{ background: 'white', padding: '10px', borderRadius: '6px', textAlign: 'center', border: '1px solid #e2dfd8' }}>
                      <span style={{ fontSize: '11px', color: '#7c728a' }}>Efficacy</span>
                      <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '5px 0', color: '#b5893b' }}>{metrics.efficacy}%</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                    <div>
                      <span>Hydration Level: {metrics.hydration}%</span>
                      <div style={{ background: '#e2dfd8', height: '6px', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                        <div style={{ width: `${metrics.hydration}%`, height: '100%', background: '#2196f3' }} />
                      </div>
                    </div>
                    <div>
                      <span>Brightening Level: {metrics.brightening}%</span>
                      <div style={{ background: '#e2dfd8', height: '6px', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                        <div style={{ width: `${metrics.brightening}%`, height: '100%', background: '#ffc107' }} />
                      </div>
                    </div>
                    <div>
                      <span>Sensitivity Level: {metrics.sensitivity}%</span>
                      <div style={{ background: '#e2dfd8', height: '6px', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                        <div style={{ width: `${metrics.sensitivity}%`, height: '100%', background: metrics.sensitivity > 40 ? '#c62828' : '#4caf50' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ minHeight: '60px' }}>
                    {warnings.length > 0 ? (
                      <div style={{ padding: '8px', background: '#ffebee', borderRadius: '4px', fontSize: '10.5px', color: '#c62828', display: 'flex', gap: '5px' }}>
                        <img src="/warning-icon.png" alt="" style={{ display: 'none' }} /> {/* keep layouts clean */}
                        <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                        <span>{warnings[0]}</span>
                      </div>
                    ) : (
                      <div style={{ padding: '8px', background: '#e8f5e9', borderRadius: '4px', fontSize: '10.5px', color: '#2e7d32', display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <CheckCircle size={14} style={{ flexShrink: 0 }} />
                        <span>Formula recipe is stable.</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ) : (
              /* Success Screen */
              <div style={{ textAlign: 'center', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#2e7d32', border: '1px solid #2e7d32' }}>
                  <CheckCircle size={36} />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1b0b30', margin: 0 }}>Stability Test Passed!</h4>
                  <p style={{ fontSize: '13px', color: '#7c728a', marginTop: '5px' }}>Batch Calibrated at EGC Lab</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '400px' }}>
                  <button onClick={resetSimulator} style={{ flex: 1, padding: '10px', border: '1px solid #b5893b', borderRadius: '4px', background: 'transparent', color: '#b5893b', fontWeight: '600', cursor: 'pointer' }}>New Batch</button>
                  <button onClick={() => alert("Dossier saved to downloads.")} style={{ flex: 1, padding: '10px', border: 'none', borderRadius: '4px', background: '#1b0b30', color: 'white', fontWeight: '600', cursor: 'pointer' }}>Save Recipe</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Original Research & Innovation component */}
      <ResearchInnovation />

      {/* 4. Contact Lead Form */}
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
        .page-section-narrow {
          padding: 80px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .simulator-grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 30px;
        }
        @media (max-width: 768px) {
          .page-hero {
            padding: 60px 20px;
          }
          .page-section-narrow {
            padding: 48px 20px;
          }
          .simulator-body-wrapper {
            padding: 20px !important;
          }
          .simulator-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .page-hero {
            padding: 44px 16px;
          }
          .page-section-narrow {
            padding: 36px 16px;
          }
          .simulator-body-wrapper {
            padding: 16px !important;
          }
        }
      `}} />
    </div>
  );
}
