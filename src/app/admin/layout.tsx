import Side from '@/components/features/admin/Side'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='h-[90vh] w-full flex'>
      <Side />
      <div className='h-full w-full overflow-y-auto'>
        {children}
      </div>
    </div>
  )
}

export default layout