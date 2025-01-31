import { ITask } from '@/model/tasksTypes'
import React from 'react'
import TaskCard from './TaskCard'
import { tasks } from '@/data/tasks'

const TaskMapper = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-full justify-between text-primary flex px-3 gap-3'>
        <p className='text-primary text-[16.8px] font-semibold'>Activity</p>
        <p className='text-primary text-[16.8px] font-semibold'>UCPoints</p>
        <p className='text-primary text-[16.8px] font-semibold'>Status</p>
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