import React from 'react'
import Image from 'next/image'
import ecommerce from '@/assets/ecommerce.png'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className='shadow-xl min-h-[80svh] rounded-2xl flex item-center justify-evenly'>
      <div className='w-1/2  p-20'>
        {/* <Image src={ecommerce} alt='auth image' height={300} width={500} className='w-full' /> */}
      </div>
      <div>
        <h4 className='text-3xl mb-5 font-bold'>Login</h4>
        <LoginForm />
      </div>
    </div>
  )
}
