import { IActionButton } from '@/model/buttonTypes'
import React from 'react'

const BigButton = (prop: IActionButton) => {
  return (
    <button
      onClick={prop.onClick}
      className={`px-2 py-1 bg-textGreen text-black font-semibold w-full rounded ${prop.className}`}
      disabled={prop.disabled}
      style={{
        backgroundColor: prop.backgroundColor,
        color: prop.textColor
      }}
    >
      {prop.text}
    </button>
  )
}

export default BigButton