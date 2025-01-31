import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between text-white px-3 py-1 md:px-20 md:py-2 shadow-md '>
      <h1 className='text-2xl font-bold'><span className='text-textGreen'>Social</span>Tasks</h1>
      <div className='flex space-x-3'>
        <button className='px-2 py-1 bg-textGreen text-black font-semibold rounded'>Connect wallet</button>
      </div>
    </div>
  )
}

export default Header