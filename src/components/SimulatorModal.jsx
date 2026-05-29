import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, AlertTriangle, CheckCircle, Download } from 'lucide-react';

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

export default function SimulatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

  // Recalculate metrics in real-time when inputs change
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
            const warningMsg = `Incompatibility detected: ${ingA.name} and ${ingB.name} can degrade each other or cause high skin sensitivity in the same formula.`;
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
        activeWarnings.push(`pH Out of Range: ${ing.name} is most stable between pH ${ing.pHMin}-${ing.pHMax}. Current pH ${pH} reduces efficacy.`);
      }
    });

    // 3. Accumulate benefits
    currentIngredients.forEach(ing => {
      baseHydration += ing.benefits.hydration;
      baseBrightening += ing.benefits.brightening;
      baseAntiAging += ing.benefits.antiAging;
    });

    // Average the benefits based on active ingredient count
    const count = currentIngredients.length;
    baseHydration = Math.min(100, Math.round((baseHydration / count) * (concentration / 2)));
    baseBrightening = Math.min(100, Math.round((baseBrightening / count) * (concentration / 2)));
    baseAntiAging = Math.min(100, Math.round((baseAntiAging / count) * (concentration / 2)));

    // Efficacy multiplier based on concentration and stability
    const concentrationFactor = Math.min(1.5, 0.5 + (concentration / 4));
    baseEfficacy = Math.round(
      ((currentIngredients.reduce((acc, ing) => acc + (ing.benefits.antiAging + ing.benefits.brightening + ing.benefits.hydration)/3, 0) / count) * 
      concentrationFactor * 
      (baseStability / 100))
    );
    baseEfficacy = Math.min(100, Math.max(10, baseEfficacy));

    // Sensitivity rises with concentration
    if (concentration > 5) {
      baseSensitivity += Math.round((concentration - 5) * 8);
      if (concentration > 8) {
        activeWarnings.push(`High Concentration Alert: A ${concentration}% active concentration is extremely potent and may cause redness or irritation for sensitive skin.`);
      }
    }

    // Product Category modifier
    if (productType === 'Luxury Cosmetics') {
      baseStability = Math.min(100, baseStability + 5);
      baseSensitivity = Math.max(5, baseSensitivity - 5);
    } else if (productType === 'Bodycare') {
      baseSensitivity = Math.max(5, baseSensitivity - 10);
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

  const handleDownload = () => {
    setReportGenerated(true);
    setTimeout(() => {
      alert("Formulation Certificate PDF generated successfully! (Demo Mode: File saved to downloads)");
    }, 500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div className="info-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 className="info-modal-title">EGC Advanced R&D Simulator</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px', marginTop: '4px' }}>
              Formula Lab Portal v4.2 - Virtual Batch Formulator
            </p>
          </div>
          <button onClick={onClose} className="modal-close" style={{ color: 'white', position: 'static' }}>
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="info-modal-body" style={{ background: '#fbfaf7' }}>
          {formulationState !== 'success' ? (
            <div className="simulator-panel">
              {/* Left Side Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Product Type */}
                <div>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#1b0b30', display: 'block', marginBottom: '8px' }}>
                    Select Product Category
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['Skincare', 'Haircare', 'Bodycare', 'Luxury Cosmetics'].map(type => (
                      <button
                        key={type}
                        onClick={() => setProductType(type)}
                        style={{
                          padding: '10px',
                          border: '1px solid',
                          borderColor: productType === type ? '#b5893b' : '#e2dfd8',
                          background: productType === type ? '#1b0b30' : 'white',
                          color: productType === type ? '#fbfaf7' : '#2d2736',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '500',
                          fontSize: '13px',
                          transition: 'all 0.2s'
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Ingredients (Max 3) */}
                <div>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#1b0b30', display: 'block', marginBottom: '4px' }}>
                    Select Active Ingredients
                  </label>
                  <span style={{ fontSize: '12px', color: '#7c728a', display: 'block', marginBottom: '10px' }}>
                    Choose 1 to 3 items to blend in your formulation batch.
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', maxHeight: '250px', overflowY: 'auto', paddingRight: '4px' }}>
                    {INGREDIENTS.map(ing => {
                      const isSelected = selectedIngredients.includes(ing.id);
                      return (
                        <div
                          key={ing.id}
                          onClick={() => toggleIngredient(ing.id)}
                          className={`ingredient-card ${isSelected ? 'selected' : ''}`}
                          style={{
                            padding: '10px',
                            border: '1px solid',
                            borderColor: isSelected ? '#b5893b' : '#e2dfd8',
                            background: isSelected ? 'rgba(181, 137, 59, 0.08)' : 'white',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div>
                            <p style={{ fontWeight: '600', fontSize: '13px', color: '#1b0b30' }}>{ing.name}</p>
                            <p style={{ fontSize: '11px', color: '#7c728a' }}>{ing.category}</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            style={{ accentColor: '#b5893b', width: '16px', height: '16px', cursor: 'pointer' }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sliders */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {/* Concentration */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontWeight: '600', fontSize: '14px', color: '#1b0b30' }}>Active Concentration</label>
                      <span style={{ fontWeight: '700', color: '#b5893b', fontSize: '14px' }}>{concentration.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="10.0"
                      step="0.1"
                      value={concentration}
                      onChange={(e) => setConcentration(parseFloat(e.target.value))}
                      style={{ width: '100%', accentColor: '#b5893b' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7c728a', marginTop: '4px' }}>
                      <span>0.1% (Mild)</span>
                      <span>5.0% (Clinical)</span>
                      <span>10.0% (Max Strength)</span>
                    </div>
                  </div>

                  {/* pH Level */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontWeight: '600', fontSize: '14px', color: '#1b0b30' }}>Formulation pH Level</label>
                      <span style={{ fontWeight: '700', color: '#b5893b', fontSize: '14px' }}>pH {pH.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="3.0"
                      max="7.5"
                      step="0.1"
                      value={pH}
                      onChange={(e) => setPH(parseFloat(e.target.value))}
                      style={{ width: '100%', accentColor: '#b5893b' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7c728a', marginTop: '4px' }}>
                      <span>3.0 (Acidic)</span>
                      <span>5.5 (Skin Natural)</span>
                      <span>7.5 (Alkaline)</span>
                    </div>
                  </div>
                </div>

                {/* Simulate Button */}
                <button
                  onClick={handleSimulate}
                  disabled={formulationState === 'calculating'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '14px',
                    background: '#b5893b',
                    color: '#fbfaf7',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    marginTop: '10px'
                  }}
                >
                  {formulationState === 'calculating' ? (
                    <>
                      <RefreshCw className="animate-spin" size={18} />
                      Running Chemical Stability Analysis...
                    </>
                  ) : (
                    <>
                      <Play size={18} fill="#fbfaf7" />
                      Run Formulation Lab Test
                    </>
                  )}
                </button>
              </div>

              {/* Right Side Analysis (Real-time Preview) */}
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2dfd8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#1b0b30', borderBottom: '2px solid #b5893b', paddingBottom: '8px', display: 'flex', justifySelf: 'start' }}>
                  Real-time Batch Status
                </h3>

                {/* Stability and Efficacy Indicators */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ background: '#fbfaf7', padding: '15px', borderRadius: '8px', border: '1px solid #e2dfd8', textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#7c728a', fontWeight: '500' }}>Formulation Stability</p>
                    <p style={{ fontSize: '32px', fontWeight: '700', color: metrics.stability > 70 ? '#2e7d32' : metrics.stability > 40 ? '#ef6c00' : '#c62828', margin: '5px 0' }}>
                      {metrics.stability}%
                    </p>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '10px', background: metrics.stability > 70 ? '#e8f5e9' : metrics.stability > 40 ? '#fff3e0' : '#ffebee', color: metrics.stability > 70 ? '#2e7d32' : metrics.stability > 40 ? '#ef6c00' : '#c62828', fontWeight: '600' }}>
                      {metrics.stability > 70 ? 'Excellent' : metrics.stability > 40 ? 'Moderate' : 'Unstable'}
                    </span>
                  </div>
                  <div style={{ background: '#fbfaf7', padding: '15px', borderRadius: '8px', border: '1px solid #e2dfd8', textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#7c728a', fontWeight: '500' }}>Clinical Efficacy</p>
                    <p style={{ fontSize: '32px', fontWeight: '700', color: '#b5893b', margin: '5px 0' }}>
                      {metrics.efficacy}%
                    </p>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '10px', background: '#fbf5e6', color: '#b5893b', fontWeight: '600' }}>
                      {metrics.efficacy > 75 ? 'Premium Potency' : metrics.efficacy > 45 ? 'Optimal' : 'Standard'}
                    </span>
                  </div>
                </div>

                {/* Benefit Strengths */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ fontWeight: '600', fontSize: '12px', color: '#1b0b30', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Benefit Indices</p>
                  
                  {/* Hydration */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
                      <span>Hydration Level</span>
                      <span style={{ fontWeight: '600' }}>{metrics.hydration}%</span>
                    </div>
                    <div className="metric-bar-container">
                      <div className="metric-bar-fill" style={{ width: `${metrics.hydration}%`, background: '#2196f3' }} />
                    </div>
                  </div>

                  {/* Brightening */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
                      <span>Brightening Power</span>
                      <span style={{ fontWeight: '600' }}>{metrics.brightening}%</span>
                    </div>
                    <div className="metric-bar-container">
                      <div className="metric-bar-fill" style={{ width: `${metrics.brightening}%`, background: '#ffc107' }} />
                    </div>
                  </div>

                  {/* Anti-Aging */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
                      <span>Anti-Aging Strength</span>
                      <span style={{ fontWeight: '600' }}>{metrics.antiAging}%</span>
                    </div>
                    <div className="metric-bar-container">
                      <div className="metric-bar-fill" style={{ width: `${metrics.antiAging}%`, background: '#9c27b0' }} />
                    </div>
                  </div>

                  {/* Sensitivity Risk */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
                      <span>Irritation & Sensitivity Risk</span>
                      <span style={{ fontWeight: '600', color: metrics.sensitivity > 40 ? '#c62828' : '#2d2736' }}>{metrics.sensitivity}%</span>
                    </div>
                    <div className="metric-bar-container">
                      <div className="metric-bar-fill" style={{ width: `${metrics.sensitivity}%`, background: metrics.sensitivity > 40 ? '#c62828' : '#ff9800' }} />
                    </div>
                  </div>
                </div>

                {/* Warnings Log */}
                <div style={{ flexGrow: 1, minHeight: '100px', maxHeight: '160px', overflowY: 'auto' }}>
                  {warnings.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {warnings.map((warn, i) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', padding: '10px', background: '#ffebee', borderLeft: '3px solid #c62828', borderRadius: '4px', fontSize: '11px', color: '#c62828' }}>
                          <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: '1px' }} />
                          <span>{warn}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px', padding: '10px', background: '#e8f5e9', borderLeft: '3px solid #2e7d32', borderRadius: '4px', fontSize: '11px', color: '#2e7d32', height: '100%', alignItems: 'center' }}>
                      <CheckCircle size={14} style={{ flexShrink: 0 }} />
                      <span>Formulation recipe is fully stable and clean. No chemical conflicts found!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Success Batch Screen */
            <div style={{ textAlign: 'center', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifycontent: 'center', color: '#2e7d32', border: '2px solid #2e7d32' }}>
                <CheckCircle size={48} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#1b0b30' }}>
                  Formulation Success!
                </h3>
                <p style={{ color: '#7c728a', fontSize: '14px', marginTop: '6px' }}>
                  EGC Lab Batch ID: <strong>EGC-{(Math.random() * 100000).toFixed(0)}-{productType.substring(0,2).toUpperCase()}</strong>
                </p>
              </div>

              {/* Certificate Sheet Detail */}
              <div style={{ width: '100%', maxWidth: '600px', background: 'white', border: '1px solid #b5893b', borderRadius: '8px', padding: '25px', textAlign: 'left', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2dfd8', paddingBottom: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#1b0b30', textTransform: 'uppercase' }}>Ekora Global Consulting Lab Report</span>
                  <span style={{ fontSize: '12px', color: '#7c728a' }}>{new Date().toLocaleDateString()}</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '13px', marginBottom: '20px' }}>
                  <div>
                    <p style={{ color: '#7c728a' }}>Category</p>
                    <p style={{ fontWeight: '600', color: '#1b0b30' }}>{productType}</p>
                  </div>
                  <div>
                    <p style={{ color: '#7c728a' }}>pH Level</p>
                    <p style={{ fontWeight: '600', color: '#1b0b30' }}>{pH.toFixed(1)}</p>
                  </div>
                  <div>
                    <p style={{ color: '#7c728a' }}>Ingredients</p>
                    <p style={{ fontWeight: '600', color: '#1b0b30' }}>
                      {INGREDIENTS.filter(i => selectedIngredients.includes(i.id)).map(i => i.name).join(', ')}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: '#7c728a' }}>Concentration</p>
                    <p style={{ fontWeight: '600', color: '#1b0b30' }}>{concentration}%</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', borderTop: '1px solid #e2dfd8', paddingTop: '15px', textAlign: 'center' }}>
                  <div>
                    <p style={{ fontSize: '11px', color: '#7c728a' }}>Stability</p>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#2e7d32' }}>{metrics.stability}%</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#7c728a' }}>Efficacy</p>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#b5893b' }}>{metrics.efficacy}%</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#7c728a' }}>Risk Level</p>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: metrics.sensitivity > 40 ? '#c62828' : '#2e7d32' }}>
                      {metrics.sensitivity > 40 ? 'High' : metrics.sensitivity > 15 ? 'Moderate' : 'Low'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '600px', marginTop: '10px' }}>
                <button
                  onClick={resetSimulator}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '1px solid #b5893b',
                    background: 'transparent',
                    color: '#b5893b',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Create New Batch
                </button>
                <button
                  onClick={handleDownload}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    background: '#1b0b30',
                    color: '#fbfaf7',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  <Download size={16} />
                  Download Lab Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
