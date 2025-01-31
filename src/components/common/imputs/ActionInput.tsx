import { IInput } from '@/model/inputTypes'
import React from 'react'

const ActionInput = (prop: IInput) => {
  return (
    <input
      value={prop.value}
      onChange={(e) => prop.setValue(e.target.value)}
      placeholder={prop.placeholder}
      type={prop.type}
      disabled={prop.disabled ? prop.disabled : false}
      className={`${prop.className} w-full bg-transparent border border-primary border-opacity-10 text-white text-[16px] font-semibold outline-none rounded-md px-2`}
    />
  )
}

export default ActionInput