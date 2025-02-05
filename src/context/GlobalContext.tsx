"use client";

import { createContext, useContext, useState } from "react";

interface IGlobalContext {
  wallet: string;
  setWallet: (wallet: string) => void;
}

const GlobalContext = createContext<IGlobalContext | null>(null);

export const GlobalProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [wallet, setWallet] = useState<string>('wallet');

  return (
    <GlobalContext.Provider value={{ wallet, setWallet }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
