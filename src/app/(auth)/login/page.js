import React from 'react'
import Image from 'next/image'
import ecommerce from '@/assets/ecommerce.png'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className='bg-white min-h-[80svh] rounded-2xl flex item-center justify-evenly p-10 md:p-20 m-5 w-full lg:'>
      <div className='w-1/2 p-20 hidden md:block'>
        <Image src={ecommerce} alt='auth image' height={300} width={500} className='w-full' />
      </div>
      <div className='w-full md:w-1/3'>
        <h4 className='text-3xl mb-5 font-bold text-textColor'>Login</h4>
        <LoginForm />
      </div>
    </div>
  )
}
