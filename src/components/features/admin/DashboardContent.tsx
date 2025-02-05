import React from 'react'
import DashboardCard from './DashboardCard'
import { FaUsers } from 'react-icons/fa6'

const DashboardContent = () => {
  return (
    <div className='w-full h-full p-3 md:p-5'>
      <div className="flex flex-wrap justify-between gap-5">
        <DashboardCard
          value={60}
          description='Total Registered users on UCC'
          icon={<FaUsers />}
          title='Users'
        />
        <DashboardCard
          value={60}
          description='Total Registered users on UCC'
          icon={<FaUsers />}
          title='Users'
        />
        <DashboardCard
          value={60}
          description='Total Registered users on UCC'
          icon={<FaUsers />}
          title='Users'
        />
        <DashboardCard
          value={60}
          description='Total Registered users on UCC'
          icon={<FaUsers />}
          title='Users'
        />
      </div>
    </div>
  )
}

export default DashboardContent