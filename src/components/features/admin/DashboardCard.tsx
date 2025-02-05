import { IDashboardCard } from '@/model/DashboardTypes'
import React from 'react'

const DashboardCard = (prop: IDashboardCard) => {
  return (
    <div className='w-full h-fit md:max-w-[250px] rounded-sm p-3 bg-opacity-30 bg-secondary flex gap-3'>
      <div className='bg-primary p-2 rounded-full h-fit w-fit'>
        {prop.icon}
      </div>
      <div className="flex flex-col w-full">
        <p className='font-semibold text-lg'>{prop.title}</p>
        <p className='md:text-xs font-light text-gray-500'>{prop.description}</p>
        <p className='font-bold text-[40px] w-full text-right'>{prop.value}</p>
      </div>
    </div>
  )
}

export default DashboardCard