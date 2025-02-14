"use client";

import { ITask, TaskType } from '@/model/tasksTypes'
import React, { useEffect, useState } from 'react'
import ActionInput from '../common/inputs/ActionInput';
import { BiCopy } from 'react-icons/bi';
import { useParticipate } from '@/hooks/useParticipate';
import { useGlobalContext } from '@/context/GlobalContext';
import { FaTelegram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { FaMedium, FaSquareXTwitter } from 'react-icons/fa6';
import { BsDiscord } from 'react-icons/bs';
import { LuInstagram } from 'react-icons/lu';
import { AiFillTikTok } from 'react-icons/ai';
import { Logo } from '@/utils/constants';
import Image from 'next/image';
import { toast } from 'sonner';

const TaskCard = ({task}: {task: ITask}) => {  
  const [openTaskExtention, setOpenTaskExtention] = useState<boolean>(false);
  const [taskInput, setTaskInput] = useState<string>('');
  const [customCopy, setCustomCopy] = useState<string>(task.username || "");

  const { user } = useGlobalContext();
  const { participate, state } = useParticipate();

  const openTask = () => {
    // setOpenTaskExtention(!openTaskExtention);
    // TODO: Open task in new tab
    window.open(task.url, '_blank');
  }

  const handleVerify = async () => {
    if (!taskInput) {
      toast.error('Please enter your username');
      return;
    };
    await participate(task.id, taskInput, user?.wallet || '');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(customCopy);
    toast.success('Copied to clipboard');
  }

  useEffect(() => {
    if (user) {
      if (task.type === TaskType.TELEGRAM) {
        setCustomCopy(`https://t.me/${task.username}`);
      }
      if (task.type === TaskType.REFERRAL){
        const currentBasedUrl = window.location.href;
        const url = new URL(currentBasedUrl);
        setCustomCopy(`${url.origin}/?ref=${user.ref}`);
      }
    }
  }, [user, task]);

  if (state.error) toast.error(state.error);

  const participated = task.participants.some(participant => participant.id === user?.id);
  
  return (
    <div className="border border-primary border-opacity-10 w-full bg-transparent rounded-lg py-3 px-6 flex flex-col gap-5">
      <div
        className='w-full grid grid-cols-3 gap-5 cursor-pointer'
        onClick={() => setOpenTaskExtention(!openTaskExtention)}
      >
        <div className=''>
          {task.type === TaskType.TELEGRAM && <div className="flex gap-3 my-auto">
            <div><FaTelegram size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.YOUTUBE && <div className="flex gap-3 my-auto">
            <div><FaYoutube size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.FACEBOOK && <div className="flex gap-3 my-auto">
            <div><FaFacebookSquare size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.X && <div className="flex gap-3 my-auto">
            <div><FaSquareXTwitter size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.DISCORD && <div className="flex gap-3 my-auto">
            <div><BsDiscord size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.MEDIUM && <div className="flex gap-3 my-auto">
            <div><FaMedium size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.INSTAGRAM && <div className="flex gap-3 my-auto">
            <div><LuInstagram size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.TIKTOK && <div className="flex gap-3 my-auto">
            <div><AiFillTikTok size={25} className='my-auto' color='#C18B18' /></div>
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {task.type === TaskType.REFERRAL && <div className="flex gap-3 my-auto">
            <Image
              src={Logo}
              alt={"logo"}
              height={30}
              width={30}
              className='my-auto'
            />
            <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          </div>}
          {openTaskExtention && !participated && <div className='flex gap-2 pt-3'>
            <span className='font-semibold my-auto'>{task.type === TaskType.REFERRAL ? "Copy link": task.username}</span>
            <button
              onClick={copyToClipboard}
            >
              <BiCopy />
            </button>
            {/* {state.error && <p className='text-red-500 text-xs font-semibold col-span-2 my-auto'>{state.error}</p>} */}
          </div>}
        </div>
        <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>{task.points}</p>
        <button
          disabled={participated}
          className={`px-2 py-1 text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex justify-self-end capitalize ${participated ? 'cursor-not-allowed bg-primary' : 'cursor-pointer bg-white'}`}
          onClick={task.type === TaskType.REFERRAL ? copyToClipboard : openTask}
        >
          {participated ? (task.participants.find(participant => participant.user && participant.user.wallet === user?.wallet)?.completed == "pending" ? "Pending" : "Completed") : task.action}
        </button>
        
      </div>
      {openTaskExtention && !participated && task.type !== TaskType.REFERRAL && (
        <div className="flex flex-col gap-5">
          <div
            className='w-full flex justify-between gap-3 md:gap-5'
          >
            {task.type !== TaskType.FACEBOOK && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Username</p>}
            {task.type === TaskType.FACEBOOK && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Name:</p>}
            <ActionInput
              value={taskInput}
              setValue={setTaskInput}
              placeholder={task.type !== TaskType.FACEBOOK ? '@username' : 'Enter your name'}
              type='text'
              className={`${state.error ? 'border-red-500' : ''}`}
              // className='text-black text-[19.36px] font-semibold col-span-2'
            />
            <button
              className={`w-fit py-1 px-4 bg-white text-black font-semibold rounded-full h-fit my-auto  text-[16px] ${state.loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={handleVerify}
              disabled={state.loading}
            >
              {state.loading ? 'Verying...' : 'Verify'}
            </button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default TaskCard