'use client'

import React from 'react'
import Image from 'next/image'
import ecommerce from '@/assets/ecommerce.png'

import { usePathname } from 'next/navigation'

export default function layout({ children }) {

  // const pathname = usePathname()
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <div className='max-w-screen-xl py-8 min-h-svh'>
        {children}
      </div>
    </div>
  )
}
