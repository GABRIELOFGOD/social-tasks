"use client";

import { sub } from '@/utils/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import ActionInput from '../common/imputs/ActionInput'
import BigButton from '../common/buttons/BigButton';

const TaskHeader = () => {
  const [referralInput, setReferralInput] = useState<string>('')
  
  return (
    <div className='h-[121.8px] bg-gradient-to-br to-[#D69D2308] from-[#BA963A4D] border w-full border-[#524141] rounded-lg flex'>
      <div className='h-full my-auto absolute'>
        <Image
          src={sub}
          layout="intrinsic"
          // objectFit="contain"
          alt='sub'
          width={150}
          height={121.8}
        />
      </div>
      <div className='flex gap-[16.8px] ml-20 justify-between w-full md:mr-10'>
        {/* <div className='font-bold md:text-[25.2px] text-secondary my-auto'>
          <p className='font-bold md:text-[25.2px] text-secondary my-auto'>Your Total</p>
          <p className='font-bold md:text-[25.2px] text-secondary my-auto'>Referral UCPoints</p>
        </div> */}
        <div className='flex divide-x-2 divide-white gap-2 my-auto text-tertiary'>
          <div className='my-auto px-3'>
            <p className='md:text-[18.9px] font-semibold'>UCPoints</p>
            <p className='md:text-[18.9px] font-semibold text-center'>0</p>
          </div>
          <div className='my-auto px-3'>
            <p className='md:text-[18.9px] font-semibold'>Referred Accounts</p>
            <p className='md:text-[18.9px] font-semibold text-center'>0</p>
          </div>
        </div>
      </div>
      <div className='my-auto mr-5 hidden md:block'>
        <ActionInput
          value={referralInput}
          setValue={setReferralInput}
          placeholder='Enter Referral Code'
          type='text'
          className='text-black h-10 md:w-[250px] w-[200px] font-semibold text-sm rounded-b-none rounded-t-md text-center'
        />
        <BigButton
          text='Copy'
          onClick={() => navigator.clipboard.writeText(referralInput)}
          className='bg-tertiary h-10 rounded-b-md rounded-t-none'
        />
      </div>
    </div>
  )
}

export default TaskHeader