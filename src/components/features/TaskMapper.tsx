import { ITask } from '@/model/tasksTypes'
import React from 'react'
import TaskCard from './TaskCard'
import { tasks } from '@/data/tasks'
// import ConnectButton from '../common/buttons/ConnectButton'

const TaskMapper = () => {
  return (
    <div className='flex flex-col gap-3'>
      {/* <div className='w-full justify-between text-primary flex px-3 gap-3'>
        <p className='text-primary text-[16.8px] font-semibold'>Activity</p>
        <p className='text-primary text-[16.8px] font-semibold'>UCPoints</p>
        <p className='text-primary text-[16.8px] font-semibold'>Status</p>
      </div> */}
      <div
        className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5'
      >
        <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>Connect wallet</p>
        <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>1000</p>
        {/* <W3mConnectButton /> */}
        <button
          className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
        >
          Connect
        </button>
      </div>
      <div
        className='w-full bg-transparent rounded-lg py-3 px-6 border border-primary border-opacity-10 grid grid-cols-3 gap-5'
      >
        <p className='text-texter text-[19.36px] font-semibold col-span-1 my-auto'>Daily Login</p>
        <p className='text-texter text-[19.36px] font-semibold col-span-1 pl-5 md:pl-20 my-auto'>100</p>
        {/* <ConnectButton /> */}
        <button
          className='px-2 py-1 bg-white text-black font-semibold rounded-full h-fit w-[100px] justify-center my-auto md:text-[16px] text-xm flex cursor-pointer justify-self-end capitalize'
        >
          Verify
        </button>
      </div>
      {tasks.map((task: ITask) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}

export default TaskMapper