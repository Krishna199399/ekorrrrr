import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Import newly created dedicated rich pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import RdLabPage from './pages/RdLabPage';
import PortfolioPage from './pages/PortfolioPage';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const openSimulator = () => setIsSimulatorOpen(true);
  const closeSimulator = () => setIsSimulatorOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Navigation Header */}
        <Navbar onOpenSimulator={openSimulator} />

        {/* Main Sections */}
        <main style={{ width: '100%' }}>
          <Routes>
            {/* Home Page: Contains all sections as before */}
            <Route path="/" element={
              <>
                <Hero onOpenSimulator={openSimulator} />
                <AtAGlance />
                <Capabilities />
                <ProductExpertise />
                <GlobalMarkets />
                <ResearchInnovation onOpenSimulator={openSimulator} />
                <FactorySetup />
                <Testimonials />
                <ContactForm />
              </>
            } />

            {/* Dedicated Pages with rich corporate data */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/product-expertise" element={<ProductsPage />} />
            <Route path="/rd-lab" element={<RdLabPage onOpenSimulator={openSimulator} />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>

        {/* Footer & Certifications */}
        <Footer />

        {/* Interactive Formulation Simulator Modal */}
        <SimulatorModal isOpen={isSimulatorOpen} onClose={closeSimulator} />
      </div>
    </Router>
  );
}
