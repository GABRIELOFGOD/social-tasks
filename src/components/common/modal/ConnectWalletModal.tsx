"use client";

import { WalletOption } from "@/services/wallet-options"
import { useEffect } from "react"
import { useAccount } from "wagmi";

const ConnectWalletModal = ({closeModal}: {closeModal: () => void}) => {
  const { isConnected } = useAccount();
  
  useEffect(() => {
    if (isConnected) closeModal()
  }, [isConnected]);
  
  return (
    <div className='bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center text-white'>
      <div className='rounded-lg p-3 md:p-5 w-[700px] bg-tertiary h-fit'>
        <div className='flex justify-between items-center'>
          <h1 className='text-black text-2xl font-bold '>Connect Wallet</h1>
          <button onClick={closeModal} className='text-black text-2xl font-bold hover:text-white'>&times;</button>
        </div>
        <WalletOption />
      </div>
    </div>
  )
}

export default ConnectWalletModal