"use client";

import React from 'react'
import { useConnect } from 'wagmi';

export const WalletOption = () => {
  const { connect, connectors } = useConnect();
  
  return connectors.map((connector) => {
    <button
      id={connector.id}
      className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5 cursor-pointer'
      onClick={() => connect({connector})}
    >
      {connector.name}
    </button>
  });
}