import { sub } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const TaskHeader = () => {
  return (
    <div className='h-[121.8px] bg-gradient-to-br to-[#D69D2308] from-[#BA963A4D] border w-full border-[#524141] rounded-lg flex'>
      <div className='h-full my-auto'>
        <Image
          src={sub}
          layout="intrinsic"
          // objectFit="contain"
          alt='sub'
          width={150}
          height={121.8}
        />
      </div>
      <div className='flex gap-[16.8px] -ml-10 justify-between w-full md:mr-10'>
        <div className='font-bold md:text-[25.2px] text-secondary my-auto'>
          <p className='font-bold md:text-[25.2px] text-secondary my-auto'>Your Total</p>
          <p className='font-bold md:text-[25.2px] text-secondary my-auto'>Referral UCPoints</p>
        </div>
        <div className='flex divide-x-2 divide-white gap-2 my-auto'>
          <div className='my-auto px-3'>
            <p className='md:text-[18.9px] font-semibold'>UCPoints</p>
            <p className='md:text-[18.9px] font-semibold'>0</p>
          </div>
          <div className='my-auto px-3'>
            <p className='md:text-[18.9px] font-semibold'>Referred Accounts</p>
            <p className='md:text-[18.9px] font-semibold'>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskHeader