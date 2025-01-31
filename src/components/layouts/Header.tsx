import { Logo } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between text-white px-3 py-1 md:px-20 md:py-2 shadow-md bg-tertiary'>
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
        <button className='px-4 py-1 bg-white text-black font-semibold rounded-full h-fit my-auto uppercase text-[16px]'>Buy now</button>
      </div>
    </div>
  )
}

export default Header