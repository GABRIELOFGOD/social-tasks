import DashboardContent from '@/components/features/admin/DashboardContent'
import Side from '@/components/features/admin/Side'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='h-[90vh] w-full flex'>
      <Side />
      {children}
    </div>
  )
}

export default layout