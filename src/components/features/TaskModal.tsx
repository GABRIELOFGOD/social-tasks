import { ITask } from '@/model/tasksTypes'
import { discord, facebook, instagram, telegram, tiktok, x } from '@/utils/statics'
import Image from 'next/image'
import React from 'react'
import BigButton from '../common/buttons/BigButton'
import { CgClose } from 'react-icons/cg'

const TaskModal = ({ task, status, onClose }: {task: ITask, status: "completed" | "expired" | "available", onClose: () => void}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 flex px-3 justify-center items-center bg-black bg-opacity-50 text-white'>
      <div className='bg-secondary relative rounded-lg p-5 w-full md:w-[500px] flex-col md:p-10 border border-gray-200 border-opacity-10 flex gap-5'>
        <div className='absolute top-3 right-3 text-white cursor-pointer w-fit h-fit' onClick={onClose}>
          <CgClose size={20} color='#ffffff' />
        </div>
        <div className="flex gap-5">
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
          <div className='w-full'>
            <div>
              <p className='text-xl font-semibold'>{task.type} Task</p>
              <p className='font-light '>{task.description}</p>
            </div>
            <div className='mt-5 w-full'>
              {status == "completed" ? (
                <p>You complete this task already, you earned <span className="text-textGreen font-bold">{task.points} points</span></p>
              ) : status == "expired" ? (
                <p className='text-red-500'>This task is expired</p>
              ) : (
                <div className="flex gap-5">
                  <BigButton
                    text='Go to Task'
                    onClick={() => window.open(task.url, '_blank')}
                    backgroundColor='transparent'
                    className='border border-textGreen text-textGreen'
                  />
                  <BigButton
                    text='Claim points'
                    onClick={() => {}}
                    textColor='white'
                    className='hover:text-black'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal