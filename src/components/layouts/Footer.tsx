import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <p className='text-center text-white py-5 w-full'>
        &copy; {new Date().getFullYear()} Universe Chain. All rights reserved.
      </p>
    </div>
  )
}

export default Footer