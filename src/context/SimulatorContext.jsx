'use client';

import React, { createContext, useContext, useState } from 'react';

const SimulatorContext = createContext(null);

export function SimulatorProvider({ children }) {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const openSimulator = () => setIsSimulatorOpen(true);
  const closeSimulator = () => setIsSimulatorOpen(false);

  return (
    <SimulatorContext.Provider value={{ isSimulatorOpen, openSimulator, closeSimulator }}>
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const ctx = useContext(SimulatorContext);
  if (!ctx) {
    // Safe fallback for SSR/static pre-render outside the provider
    return { isSimulatorOpen: false, openSimulator: () => {}, closeSimulator: () => {} };
  }
  return ctx;
}
