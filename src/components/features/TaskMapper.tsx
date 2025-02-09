"use client";

import { ITask } from '@/model/tasksTypes'
import React, { useEffect } from 'react'
import TaskCard from './TaskCard'
import { useFetchTasks } from '@/hooks/useFetchTask'
import { useAccount, useDisconnect } from 'wagmi';
import { useGlobalContext } from '@/context/GlobalContext';
import { useDailyLogin } from '@/hooks/useDailyLogin';
import Image from 'next/image';
import { Logo } from '@/utils/constants';

const TaskMapper = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { setOpenConnectModal, user } = useGlobalContext();
  
  const { data, error, loading } = useFetchTasks();
  const { hasLoggedIn, loading: checkInLoading,  checkInNow } = useDailyLogin(user?.wallet || "");

  if (error) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <p className='text-gray-500 text-center font-bold text-xl'>Error loading tasks</p>
  </div>

  if (loading) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
    <p className='text-gray-500 text-center font-bold text-xl mt-4'>Loading...</p>
  </div>

  // const disConnectWallet = () => {
  //   disconnect();
  //   location.reload();
  // }

  const startTelegramBot = () => {
    window.open('https://t.me/ucc_checkbot', '_blank');
  }

  console.log("Logged in", hasLoggedIn);
  
  return (
    <div>
      {data == null ?
        <div className='flex h-[300px] w-full flex-col justify-center items-center'>
          <p className='text-gray-500 text-center font-bold text-xl'>No Task available</p>
        </div>
        :
        <div className='flex flex-col gap-3'>
          <div className='w-full justify-between text-primary flex px-3 gap-3'>
            <p className='text-primary text-[16.8px] font-semibold'>Activity</p>
            <p className='text-primary text-[16.8px] font-semibold'>UCPoints</p>
            <p className='text-primary text-[16.8px] font-semibold'></p>
          </div>
          {!isConnected && <div
            className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5'
          >
            <div className="flex gap-3 my-auto">
              <Image
                src={Logo}
                alt={"logo"}
                height={30}
                width={30}
                className='my-auto'
              />
              <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>Connect wallet</p>
            </div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>
              {isConnected ? "" : '1000'}
            </p>
            <button
              className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
              onClick={() => isConnected ? disconnect() : setOpenConnectModal(true)}
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </button>
          </div>}
          {isConnected && <div
            className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5'
          >
            <div className="flex gap-3 my-auto">
              <Image
                src={Logo}
                alt={"logo"}
                height={30}
                width={30}
                className='my-auto'
              />
              <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>Daily Login</p>
            </div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>100</p>
            {/* <ConnectButton /> */}
            <button
              className={`px-2 py-1 text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize ${checkInLoading ? 'cursor-not-allowed' : ''} ${hasLoggedIn ? 'bg-primary cuno' : 'bg-white'}`}
              disabled={checkInLoading || hasLoggedIn}
              onClick={() => checkInNow(user?.id || 0)}
            >
              {checkInLoading ? 'Claiming...' : hasLoggedIn ? 'Claimed' : 'Claim'}
            </button>
          </div>}
          {/* {isConnected && <div
            className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5'
          >
            <button
              className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
              onClick={startTelegramBot}
            >
              Start
            </button>
          </div>} */}
          {isConnected && data.map((task: ITask) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default TaskMapper