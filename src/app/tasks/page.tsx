"use client";

import TaskMapper from '@/components/features/TaskMapper';
import { tasks as allTasks } from '@/data/tasks';
import { ITask } from '@/model/tasksTypes';
import { isFutureTime } from '@/services/taskTimeChecker';
import React, { useEffect, useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tab, setTab] = useState<"available" | "completed" | "expired">('available');

  useEffect(() => {
    const availableTasks = allTasks.filter(task => isFutureTime(task.expires));
    const completedTasks = allTasks.filter(task => isFutureTime(task.expires));
    const expiredTasks = allTasks.filter(task => !isFutureTime(task.expires));

    switch (tab) {
      case "available":
        setTasks(availableTasks);
        break;
      case "completed":
        setTasks(completedTasks);
        break;
      case "expired":
        setTasks(expiredTasks);
        break;
    }
  },[tab]);
  
  return (
    <div className='px-3 items-center flex justify-center md:py-5 text-white'>
      <div className="md:shadow-md md:shadow-gray-900 w-full md:w-[700px] py-10 md:px-10 flex flex-col gap-10">
        <div className="flex w-full justify-between gap-3 shadow-sm">
          <button
            className={`w-full py-2 font-semibold text-center text-lg ${tab == "available" ? "font-bold text-textGreen border-b-4" : ""}`}
            onClick={() => setTab('available')}
          >Available Tasks</button>

          <button
            className={`w-full py-2 font-semibold text-center text-lg ${tab == "completed" ? "font-bold text-textGreen border-b-4" : ""}`}
            onClick={() => setTab('completed')}
          >Completed Tasks</button>

          <button
            className={`w-full py-2 font-semibold text-center text-lg ${tab == "expired" ? "font-bold text-textGreen border-b-4" : ""}`}
            onClick={() => setTab('expired')}
          >Expired Tasks</button>
        </div>

        {/* ============ TASKS ================ */}
        <div className='p-3 md:p-5 bg-primary rounded-lg'>
          {tasks.length > 0 ? (
            <TaskMapper tasks={tasks} status={tab} />
            ) : (
              <p className='text-center text-lg'>No tasks available</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Tasks