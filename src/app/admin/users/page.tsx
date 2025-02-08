"use client";

import { useGlobalContext } from '@/context/GlobalContext';
import { useGetUsers } from '@/hooks/useGetUsers';
import { AccountStatus, IUser } from '@/model/userTypes';
import React from 'react'

const Users = () => {
  const { user } = useGlobalContext();
  
  const { users, loading, error } = useGetUsers(user?.wallet || '');

  if (error) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <p className='text-gray-500 text-center font-bold text-xl'>Error loading tasks</p>
  </div>

  if (loading) return <div className='flex h-[300px] w-full flex-col justify-center items-center'>
    <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
    <p className='text-gray-500 text-center font-bold text-xl mt-4'>Loading...</p>
  </div>
  
  return (
    <div className='w-full text-white p-3 md:p-10'>
      <p className='text-2xl font-bold '>Users</p>
      {users == null
      ?<div className='flex h-[300px] w-full flex-col justify-center items-center'>
        <p className='text-gray-500 text-center font-bold text-xl'>No Users yet</p>
      </div>
      : <div className='overflow-x-auto mt-5'>
        <table className='min-w-full bg-gray-800'>
          <thead>
            <tr>
              <th className='py-2 px-4 text-left text-primary text-[16.8px] font-semibold'>Wallet</th>
              <th className='py-2 px-4 text-left text-primary text-[16.8px] font-semibold'>UCPoints</th>
              <th className='py-2 px-4 text-left text-primary text-[16.8px] font-semibold'>Referrers</th>
              <th className='py-2 px-4 text-left text-primary text-[16.8px] font-semibold'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((task: IUser) => (
              <tr key={task.id} className='border-t border-gray-700'>
                <td className='py-2 px-4 text-sm font-semibold'>{task.wallet}</td>
                <td className='py-2 px-4 text-sm font-semibold'>{task.points}</td>
                <td className='py-2 px-4 text-sm font-semibold'>{task.referrers?.length}</td>
                <td className='py-2 px-4 text-sm font-semibold'>
                  {task.status == AccountStatus.ACTIVE ?
                    <button className='bg-transparent text-white py-1 px-2 hover:bg-secondary duration-200 border border-white rounded-md'>Deactivate</button>:
                    <button className='bg-secondary text-black py-1 px-2 hover:bg-primary duration-200 rounded-md'>Activate</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  )
}

export default Users