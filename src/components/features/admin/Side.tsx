"use client";

import Link from 'next/link'
import React from 'react'
import { FaUsers } from 'react-icons/fa6'
import { MdSpaceDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { BiTask } from 'react-icons/bi';

const Side = () => {
  const currentPath = usePathname();
  
  return (
    <div className='w-[300px] bg-primary text-black h-full py-20 hidden md:block'>
      <Link
        href="/admin"
        className={`font-semibold text-lg px-10 py-3 flex gap-3 hover:bg-secondary duration-200 ${currentPath == "/admin" ? "bg-tertiary hover:bg-tertiary" : ""}`}
      >
        <MdSpaceDashboard className='my-auto' />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/admin/users"
        className={`font-semibold text-lg px-10 py-3 flex gap-3 hover:bg-secondary duration-200 ${currentPath == "/admin/users" ? "bg-tertiary hover:bg-tertiary" : ""}`}
      >
        <FaUsers className='my-auto' />
        <span>Users</span>
      </Link>
      <Link
        href="/admin/tasks"
        className={`font-semibold text-lg px-10 py-3 flex gap-3 hover:bg-secondary duration-200 ${currentPath == "/admin/tasks" ? "bg-tertiary hover:bg-tertiary" : ""}`}
      >
        <BiTask className='my-auto' />
        <span>Tasks</span>
      </Link>
    </div>
  )
}

export default Side