"use client";

import { useGlobalContext } from '@/context/GlobalContext';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '@/utils/constants'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const Header = () => {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  const { user, error, loading } = useAuth(ref as string);
  const { setUser, setOpenConnectModal } = useGlobalContext();
  if (error) console.log("Global error", error);

  useEffect(() => {
    if (!loading) {
      if (user) setUser(user);
    }
  }, [user, loading]);
  
  return (
    <div className='flex justify-between text-white px-3 py-1 md:px-20 md:py-2 shadow-md bg-tertiary sticky top-0 left-0 z-50'>
      <div className='flex gap-5 my-auto'>
        <Image
          src={Logo}
          alt="logo"
          width={56}
          height={56}
        />
        <p className='text-black text-2xl font-semibold my-auto'>Universe Chain</p>
      </div>
      <div className='flex space-x-3'>
        {/* <button className='px-4 py-1 bg-white text-black font-semibold rounded-full h-fit my-auto uppercase text-[16px]'>Buy now</button> */}
        <button
          className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
          onClick={() => isConnected ? disconnect() : setOpenConnectModal(true)}
        >
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });