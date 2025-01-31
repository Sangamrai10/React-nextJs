'use client'

import React from 'react'
import Image from 'next/image'
import ecommerce from '@/assets/ecommerce.png'
import kaneki from '@/assets/kaneki.jpg'
import { usePathname } from 'next/navigation'

export default function layout({ children }) {

  const pathname = usePathname()
  return (
    <div>
      <div className='max-w-screen-xl mx-auto py-8 min-h-svh flex'>
        <div className='w-1/2  p-20'>
        <Image
          src={pathname === '/login' ? ecommerce : kaneki}
          alt='auth image'
          height={300}
          width={500}
          className='w-full'
        />
        </div>
        {children}
      </div>
    </div>
  )
}
