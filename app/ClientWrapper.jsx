'use client';

import React from 'react';
import { SimulatorProvider } from '../src/context/SimulatorContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import SimulatorModal from '../src/components/SimulatorModal';
import { useSimulator } from '../src/context/SimulatorContext';

// Inner wrapper that has access to the simulator context
function InnerLayout({ children }) {
  const { isSimulatorOpen, closeSimulator } = useSimulator();

  return (
    <div className="app-container">
      <Navbar />
      <main style={{ width: '100%' }}>
        {children}
      </main>
      <Footer />
      <SimulatorModal isOpen={isSimulatorOpen} onClose={closeSimulator} />
    </div>
  );
}

// Outer wrapper that provides the context
export default function ClientWrapper({ children }) {
  return (
    <SimulatorProvider>
      <InnerLayout>{children}</InnerLayout>
    </SimulatorProvider>
  );
}
