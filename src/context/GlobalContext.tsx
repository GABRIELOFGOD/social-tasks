"use client";

import ConnectWalletModal from "@/components/common/modal/ConnectWalletModal";
import { IUser } from "@/model/userTypes";
import { createContext, useContext, useState } from "react";

interface IGlobalContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  openConnectModal: boolean;
  setOpenConnectModal: (open: boolean) => void;
  globalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<IGlobalContext | null>(null);

export const GlobalProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [openConnectModal, setOpenConnectModal] = useState<boolean>(false);
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{
      user, setUser,
      openConnectModal, setOpenConnectModal,
      globalLoading, setGlobalLoading
    }}>
      {globalLoading ? <div className="h-full fixed top-0 left-0 w-full bg-black text-white">Loading user data</div> : children}
      {openConnectModal && <ConnectWalletModal closeModal={() => setOpenConnectModal(false)} />}
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
