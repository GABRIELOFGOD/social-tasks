"use client";

import { ITask } from '@/model/tasksTypes'
import React, { useState } from 'react'
import ActionInput from '../common/inputs/ActionInput';
import { BiCopy } from 'react-icons/bi';
import { useParticipate } from '@/hooks/useParticipate';
import { useGlobalContext } from '@/context/GlobalContext';

const TaskCard = ({task}: {task: ITask}) => {  
  const [openTaskExtention, setOpenTaskExtention] = useState<boolean>(false);
  const [taskInput, setTaskInput] = useState<string>('');
  const { wallet } = useGlobalContext();
  const { participate, state } = useParticipate();

  const openTask = () => {
    setOpenTaskExtention(!openTaskExtention);
    // TODO: Open task in new tab
    // window.open(task.url, '_blank');
  }

  if (state.error) {
    console.log('state.error', state.error);
  }

  const handleVerify = async () => {
    if (!taskInput) {
      state.error = 'Please enter your username';
      return;
    };
    await participate(task.id, taskInput);
  }

  const participated = task.participants.length && wallet ? task.participants.some(participant => participant.user && participant.user.wallet && participant.user.wallet === wallet) : false;

  // console.log("TaskCard", task);
  
  return (
    <div className="border border-primary border-opacity-10 w-full bg-transparent rounded-lg py-3 px-6 flex flex-col gap-5">
      <div
        className='w-full grid grid-cols-3 gap-5 cursor-pointer'
        onClick={() => setOpenTaskExtention(!openTaskExtention)}
      >
        <div className=''>
          <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          {openTaskExtention && !participated && <div className='flex gap-2 pt-3'>
            <span className='font-semibold my-auto'>{task.username}</span>
            <button
              onAbort={() => navigator.clipboard.writeText('@uccchain')}
            >
              <BiCopy />
            </button>
            {state.error && <p className='text-red-500 text-xs font-semibold col-span-2 my-auto'>{state.error}</p>}
          </div>}
        </div>
        <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>{task.points}</p>
        <button
          disabled={participated}
          className={`px-2 py-1 text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex justify-self-end capitalize ${participated ? 'cursor-not-allowed bg-primary' : 'cursor-pointer bg-white'}`}
          onClick={openTask}
        >
          {participated ? task.participants.some(participant => participant.completed == "pending") ? "Pending" : "Completed" : task.action}
        </button>
        
      </div>
      {openTaskExtention && !participated && (
        <div className="flex flex-col gap-5">
          <div
            className='w-full flex justify-between gap-3 md:gap-5'
          >
            {task.type !== "Facebook" && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Username</p>}
            {task.type == "Facebook" && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Name:</p>}
            <ActionInput
              value={taskInput}
              setValue={setTaskInput}
              placeholder={task.type !== "Facebook" ? '@username' : 'Enter your name'}
              type='text'
              className={`${state.error ? 'border-red-500' : ''}`}
              // className='text-black text-[19.36px] font-semibold col-span-2'
            />
            <button
              className={`w-fit py-1 px-4 bg-white text-black font-semibold rounded-full h-fit my-auto  text-[16px] ${state.loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={handleVerify}
              disabled={state.loading}
            >
              {state.loading ? 'Loading...' : 'Verify'}
            </button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default TaskCard