import React from 'react'
import Image from 'next/image'
import ecommerce from '@/assets/ecommerce.png'
import LoginForm from '@/components/auth/LoginForm'


export default function LoginPage() {
  return (
    <div className='bg-white dark:bg-gray-800 min-h-[80svh] rounded-2xl flex item-center justify-evenly p-10 pt-0 md:p-20 m-5 w-full lg:'>
      <div className='w-1/2 p-10 hidden md:block'>
        <Image src={ecommerce} alt='auth image' height={300} width={500} className='w-full' />
      </div>
      <div className='w-full md:w-2/3 lg:w-1/3 dark:text-white'>
        <h4 className='text-3xl font-bold text-textColor dark:text-white'>Login</h4>
        <LoginForm />
      </div>
    </div>
  )
}
