"use client";

import React from 'react'
import DashboardCard from './DashboardCard'
import { FaUsers } from 'react-icons/fa6'
import { useGetUsers } from '@/hooks/useGetUsers'
import { useFetchTasks } from '@/hooks/useFetchTask';
import { BiTask } from 'react-icons/bi';
import { useGlobalContext } from '@/context/GlobalContext';

const DashboardContent = () => {
  const { user } = useGlobalContext();
  
  const { users } = useGetUsers(user?.wallet || "");
  const { data } = useFetchTasks();
  
  return (
    <div className='w-full h-full p-3 md:p-5'>
      <div className="flex flex-wrap justify-between gap-5">
        <DashboardCard
          value={users.length}
          description='Total Registered users on UCC'
          icon={<FaUsers />}
          title='Users'
        />
        <DashboardCard
          value={data?.length ?? 0}
          description='Total avaialble tasks on UCC'
          icon={<BiTask />}
          title='Tasks'
        />
      </div>
    </div>
  )
}

export default DashboardContent