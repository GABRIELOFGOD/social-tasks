import { ITask } from '@/model/tasksTypes'
import React from 'react'
import TaskCard from './TaskCard'

const TaskMapper = ({tasks, status}: {tasks: ITask[], status: "completed" | "expired" | "available"}) => {
  return (
    <div className='flex flex-col gap-3'>
      {tasks.map((task: ITask) => (
        <TaskCard
          key={task.id}
          task={task}
          status={status}
        />
      ))}
    </div>
  )
}

export default TaskMapper