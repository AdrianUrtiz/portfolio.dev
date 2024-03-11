import React from 'react'

const Forklift = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M7 17l5 0' />
      <path d='M3 17v-6h13v6' />
      <path d='M5 11v-4h4' />
      <path d='M9 11v-6h4l3 6' />
      <path d='M22 15h-3v-10' />
      <path d='M16 13l3 0' />
    </svg>
  )
}

export default Forklift
