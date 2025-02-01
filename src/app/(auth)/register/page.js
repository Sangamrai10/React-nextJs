import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/auth/LoginForm'
import kaneki from '@/assets/kaneki.jpg'

export default function page() {
  return (
    <div className='shadow-xl min-h-[80svh] rounded-2xl flex item-center justify-evenly'>
          <div className='w-1/2 p-20 hidden md:block'>
            <Image src={kaneki} alt='auth image' height={10} width={500} className='w-full h-96'/>
          </div>
          <div className='mt-32 p-9'>
            <h4 className='text-3xl font-bold'>SignUp</h4>
            <LoginForm/>
          </div>
        </div>
  )
}
