'use client'

import React from 'react'

export default function layout({ children }) {

  return (
    <div className='bg-gray-100 dark:bg-slate-500'>
      <div className='max-w-screen-xl py-4 ps-4 min-h-svh'>
        {children}
      </div>
    </div>
  )
}
