"use client";

import { ITask } from '@/model/tasksTypes'
import checkTimeStatus from '@/services/taskTimeChecker'
import { discord, facebook, instagram, telegram, tiktok, x } from '@/utils/statics'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiTask } from 'react-icons/bi'
import { FaMoneyCheck } from 'react-icons/fa'
import { WiTime3 } from 'react-icons/wi'
import TaskModal from './TaskModal';

const TaskCard = ({task, status}: {task: ITask, status: "completed" | "expired" | "available"}) => {  
  const [openModal, setOpenModal] = useState<boolean>(false)
  
  return (
    <div
      className='w-full bg-secondary rounded-lg p-2 border border-gray-200 border-opacity-10 flex gap-5 cursor-pointer'
      onClick={() => setOpenModal(true)}
    >
      {/* ============ TASK IMAGE ================ */}
      <div>
        {task.type == "Instagram" && (
          <Image
            src={instagram}
            alt="instagram"
            width={30}
            height={30}
          />
        )}
        {task.type == "X" && (
          <div className='bg-gray-300 p-2 rounded-full w-fit h-fit'>
            <Image
              src={x}
              alt="x"
              width={20}
              height={20}
            />
          </div>
        )}
        {
          task.type == "Twitter" && (
            <Image
              src={x}
              alt="twitter"
              width={30}
              height={30}
            />
          )
        }
        {
          task.type == "Facebook" && (
            <Image
              src={facebook}
              alt="facebook"
              width={30}
              height={30}
            />
          )
        }
        {
          task.type == "Discord" && (
            <Image
              src={discord}
              alt="discord"
              width={30}
              height={30}
            />
          )
        }
        {
          task.type == "Telegram" && (
            <Image
              src={telegram}
              alt="telegram"
              width={30}
              height={30}
            />
          )
        }
        {
          task.type == "TikTok" && (
            <Image
              src={tiktok}
              alt="tiktok"
              width={30}
              height={30}
            />
          )
        }
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-lg'>{task.description}</p>
          <div className="flex gap-5">
            <div className="flex gap-3">
              <BiTask size={20} className='text-textGreen' />
              <p className='text-sm font-bold text-gray-400'>{task.action}</p>
            </div>
            <div className="flex gap-3">
              <FaMoneyCheck size={20} className='text-textGreen' />
              <p className='text-sm font-bold text-gray-400'>{task.points} points</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <WiTime3 size={20} className='text-textGreen' />
            <p className='text-sm font-bold text-gray-400'>{checkTimeStatus(task.expires)}</p>
          </div>
        </div>
      </div>
      {openModal && (
        <TaskModal task={task} status={status} onClose={() => setOpenModal(false)} />
      )}
    </div>
  )
}

export default TaskCard