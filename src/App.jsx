import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AtAGlance from './components/AtAGlance';
import Capabilities from './components/Capabilities';
import ProductExpertise from './components/ProductExpertise';
import GlobalMarkets from './components/GlobalMarkets';
import ResearchInnovation from './components/ResearchInnovation';
import FactorySetup from './components/FactorySetup';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SimulatorModal from './components/SimulatorModal';

export default function App() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const openSimulator = () => setIsSimulatorOpen(true);
  const closeSimulator = () => setIsSimulatorOpen(false);

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Navbar onOpenSimulator={openSimulator} />

      {/* Main Sections */}
      <main style={{ width: '100%' }}>
        {/* Section 1: Hero */}
        <Hero onOpenSimulator={openSimulator} />

        {/* Section 2: At A Glance */}
        <AtAGlance />

        {/* Section 3: Capabilities */}
        <Capabilities />

        {/* Section 4: Product Expertise */}
        <ProductExpertise />

        {/* Section 5: Global Markets */}
        <GlobalMarkets />

        {/* Section 6: Research & Innovation */}
        <ResearchInnovation onOpenSimulator={openSimulator} />

        {/* Section 7: Factory Setup */}
        <FactorySetup />

        {/* Section 8: Testimonials & CTA */}
        <Testimonials />

        {/* Section 9: Contact Form */}
        <ContactForm />

        {/* Section 10: Footer & Certifications */}
        <Footer />
      </main>

      {/* Interactive Formulation Simulator Modal */}
      <SimulatorModal isOpen={isSimulatorOpen} onClose={closeSimulator} />
    </div>
  );
}
