"use client";

import { useGetUsers } from '@/hooks/useGetUsers';
import React from 'react'

const Users = () => {
  const { users, loading, error } = useGetUsers();
  
  return (
    <div className='w-full text-white p-3 md:p-10'>
      <p className='text-2xl font-bold '>Users</p>
    </div>
  )
}

export default Users