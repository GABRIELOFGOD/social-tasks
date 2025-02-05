"use client";

import ActionButton from '@/components/common/buttons/ActionButton';
import AddTaskModal from '@/components/features/admin/AddTaskModal';
import AdminTaskCard from '@/components/features/admin/AdminTaskCard';
import { useFetchTasks } from '@/hooks/useFetchTask';
import { ITask } from '@/model/tasksTypes';
import React, { useState } from 'react';

const Tasks = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);
  
  const { data, loading, error } = useFetchTasks();

  if (error) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <p className='text-gray-500 text-center font-bold text-xl'>Error loading tasks</p>
  </div>

  if (loading) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
    <p className='text-gray-500 text-center font-bold text-xl mt-4'>Loading...</p>
  </div>
  
  return (
    <div className='w-full text-white p-3 md:p-5'>
      <div className="flex justify-end items-end">
        <ActionButton
          text='Create task'
          className='bg-primary text-black py-3 px-6 hover:bg-secondary duration-200'
          onClick={() => setOpenAddTaskModal(true)}
        />
      </div>
      {data == null
      ?<div className='flex h-[300px] w-full flex-col justify-center items-center'>
        <p className='text-gray-500 text-center font-bold text-xl'>No Task available</p>
      </div>
      : <div className='flex flex-col gap-3 mt-5'>
        {/* <div className='w-full justify-between text-primary flex px-3 gap-3'>
          <p className='text-primary text-[16.8px] font-semibold'>Activity</p>
          <p className='text-primary text-[16.8px] font-semibold'>UCPoints</p>
          <p className='text-primary text-[16.8px] font-semibold'></p>
        </div> */}
        {data.map((task: ITask) => (
          <AdminTaskCard
            key={task.id}
            task={task}
          />
        ))}
        </div>}
        {openAddTaskModal && <AddTaskModal closeModal={() => setOpenAddTaskModal(false)} />}
    </div>
  )
}

export default Tasks