"use client";

import { ITask } from '@/model/tasksTypes'
import React, { useState } from 'react'
import ActionInput from '../common/imputs/ActionInput';
import { BiCopy } from 'react-icons/bi';

const TaskCard = ({task}: {task: ITask}) => {  
  const [openTaskExtention, setOpenTaskExtention] = useState<boolean>(false);
  const [taskInput, setTaskInput] = useState<string>('');

  const openTask = () => {
    setOpenTaskExtention(!openTaskExtention);
    // TODO: Open task in new tab
    // window.open(task.url, '_blank');
  }
  
  return (
    <div className="border border-primary border-opacity-10 w-full bg-transparent rounded-lg py-3 px-6 flex flex-col gap-5">
      <div
        className='w-full grid grid-cols-3 gap-5 cursor-pointer'
        onClick={() => setOpenTaskExtention(!openTaskExtention)}
      >
        <div className=''>
          <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>{task.description}</p>
          {openTaskExtention && <div className='flex gap-2 pt-3'>
            <span className='font-semibold my-auto'>@uccchain</span>
            <button
              onAbort={() => navigator.clipboard.writeText('@uccchain')}
            >
              <BiCopy />
            </button>
          </div>}
        </div>
        <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>{task.points}</p>
        <button
          className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
          onClick={openTask}
        >
          {task.action}
        </button>
        
      </div>
      {openTaskExtention && (
        <div className="flex flex-col gap-5">
          {/* <div
            className='w-full flex justify-between gap-3'
          >
            {task.type !== "Facebook" && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Username</p>}
            {task.type == "Facebook" && <p className='text-white text-[19.36px] font-semibold col-span-1 my-auto'>Name:</p>}
            <ActionInput
              value={taskInput}
              setValue={setTaskInput}
              placeholder={task.type !== "Facebook" ? '@username' : 'Enter your name'}
              type='text'
              // className='text-black text-[19.36px] font-semibold col-span-2'
            />
            <button className='w-fit py-1 px-4 bg-white text-black font-semibold rounded-full h-fit my-auto  text-[16px]'>Verify</button>
          </div> */}
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
              // className='text-black text-[19.36px] font-semibold col-span-2'
            />
            <button className='w-fit py-1 px-4 bg-white text-black font-semibold rounded-full h-fit my-auto  text-[16px]'>Verify</button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default TaskCard