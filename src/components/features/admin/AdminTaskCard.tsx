import { ITask } from '@/model/tasksTypes'
import React, { useState } from 'react'
import ApproveTaskModal from './ApproveTaskModal';
import { useEndTask } from '@/hooks/useEndTask';
import { useGlobalContext } from '@/context/GlobalContext';

const AdminTaskCard = ({task}: {task: ITask}) => {
  const [openApproveModal, setOpenApproveModal] = useState<boolean>(false);
  const { user } = useGlobalContext();

  const { endTask, loading } = useEndTask();
  
  return (
    <div
      className="border border-primary border-opacity-10 w-full bg-transparent rounded-lg py-3 px-6 flex flex-col cursor-pointer"
      onClick={() => setOpenApproveModal(true)}
    >
      <p className='text-xs text-primary capitalize'>{task.type} task</p>
      <div className="flex justify-between">
        <p className='font-semibold'><span className='text-tertiary'>{task.participants.length}</span> participants {task.participants.filter(participant => participant.completed == "pending").length ? <span className={`${task.participants.some(participant => participant.completed == "pending") ? "text-green-500" : "text-white"}`}>({task.participants.filter(participant => participant.completed == "pending").length} pending)</span> : <div></div>}</p>
        <p className='font-semibold'><span className='text-tertiary'>{task.points}</span> points</p>
        <button
          className={`w-fit py-1 px-4 bg-white text-black font-semibold rounded-full h-fit my-auto  text-[16px] cursor-pointer ${loading ? "cursor-not-allowed" : ""}`}
          disabled={loading}
          onClick={() => endTask(task.id,  user?.wallet || "")}
        >
          {loading ? "Loading.." : "End task"}
        </button>
      </div>

      {openApproveModal && <ApproveTaskModal closeModal={() => setOpenApproveModal(false)} task={task} />}
    </div>
  )
}

export default AdminTaskCard