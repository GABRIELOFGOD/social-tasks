import TaskMapper from '@/components/features/TaskMapper'
import TaskHeader from '@/components/layouts/TaskHeader'
import React from 'react'

const Tasks = () => {
  
  return (
    <div className='px-3 items-center flex justify-center md:py-5 text-white'>
      <div className="w-full md:w-[700px] py-10 flex flex-col gap-10">
        <TaskHeader />
        <TaskMapper />
      </div>
    </div>
  )
}

export default Tasks