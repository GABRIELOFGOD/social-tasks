"use client";

import ActionButton from '@/components/common/buttons/ActionButton'
import { useGlobalContext } from '@/context/GlobalContext';
import { useSettleTask } from '@/hooks/useSettleTask'
import { ITask } from '@/model/tasksTypes'
import React, { useState } from 'react'

const ApproveTaskModal = ({
  closeModal,
  task
}:{
  closeModal: () => void;
  task: ITask;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending');
  const { user } = useGlobalContext();

  const { settleTask, state } = useSettleTask();

  const handleSettleTask = (completed: "completed" | "decline", participantId: number) => {
    settleTask(task.id, participantId, completed, user?.wallet || "");
  }

  const handleCloseModal = () => {
    setIsVisible(false);
    closeModal();
  }
  
  if (!isVisible) return null;

  const filteredParticipants = task.participants.filter(participant => 
    activeTab === 'pending' ? participant.completed === "pending" : participant.completed !== "pending"
  );

  return (
    <div
      className='bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center cursor-auto'
    >
      <div className='rounded-lg p-3 md:p-5 w-[700px] bg-tertiary h-fit'>
        <div className='flex justify-between items-center'>
          <h1 className='text-black text-2xl font-bold '>Approve {task.type} Task</h1>
          <button onClick={handleCloseModal} className='text-black text-2xl font-bold hover:text-white w-fit'>&times;</button>
        </div>
        <div className='flex justify-center mt-5'>
          <button
            className={`px-4 py-2 ${activeTab === 'pending' ? 'bg-primary text-black' : 'bg-transparent text-white'} rounded-l-lg`}
            onClick={() => setActiveTab('pending')}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'approved' ? 'bg-primary text-black' : 'bg-transparent text-white'} rounded-r-lg`}
            onClick={() => setActiveTab('approved')}
          >
            Approved
          </button>
        </div>
        <div className='flex flex-col gap-5 mt-5 bg-black p-2 md:p-5 rounded-lg text-white'>
          <div className="flex justify-between">
            <p className='text-[19.36px] font-semibold'>Username</p>
            <p className='text-[19.36px] font-semibold'>Action</p>
          </div>
          <div className="w-full flex flex-col gap-3 border border-opacity-20 p-2 md:p-4 rounded-md">
            {filteredParticipants.length === 0 ? (
              <p className='text-center text-gray-500'>No {activeTab} tasks available</p>
            ) : (
              filteredParticipants.map(participant => (
                <div
                  key={participant.id}
                  className="flex justify-between"
                >
                  <p className='my-auto'>@{participant.username}</p>
                  {participant.completed == "pending" ? <div className="flex gap-3">
                    <ActionButton
                      text='Approve'
                      className='bg-primary text-black py-1 px-4 hover:bg-secondary duration-200'
                      onClick={() => handleSettleTask("completed", participant.id)}
                    />
                    <ActionButton
                      text='Decline'
                      className='bg-transparent text-white py-1 px-4 hover:bg-transparent duration-200 border border-white'
                      onClick={() => handleSettleTask("decline", participant.id)}
                    />
                  </div> : <p className='my-auto text-green-500 font-semibold'>Approved</p>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproveTaskModal