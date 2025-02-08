"use client";

// import Image from 'next/image';
import React from 'react'
import { useConnect } from 'wagmi';

export const WalletOption = () => {
  const { connect, connectors } = useConnect();
  
  return (
    <div
     className='flex flex-wrap gap-3 w-full bg-black mt-5 p-3 rounded-lg text-white'
    >
      {connectors.map((connector) => (
        <div
          key={connector.id}
          id={connector.id}
          className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid-cols-3 gap-5 cursor-pointer text-center flex'
          onClick={() => connect({ connector })}
        >
          {/* <Image
            src={connector.icon as string}
            alt={connector.name}
            width={50}
            height={50}
          /> */}
          {connector.name}
        </div>
      ))}
    </div>
  );
}