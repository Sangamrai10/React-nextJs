'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline, MdPassword } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link'
import { Forgot_Password_Page, Login_Page, Products_Page, Register_Page } from '@/constants/routes'
import { usePathname } from 'next/navigation';

export default function LoginForm() {
  // destructuring useForm module form react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // loading 
  // const { loading, setLoading } = useState(false)

  function submitForm(data) {
    console.log(data)
  }
  // toast container for alert success or errors 
  useEffect(() => {
    toast.error(errors, { autoClose: 1500 })
  }, [errors]);

  // check if path is '/login', if true then display forgot password and signup
  const pathname = usePathname()
  const isLogin = pathname == Login_Page

  return (
    <form>
      <div className='py-2'>
        {/* enter email address */}
        <div className="flex justify-center border-b border-gray-500 items-end my-3">
          <MdOutlineMailOutline className='mb-2' />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='email'
            className='focus:outline-none bg-transparent w-full px-3 py-1'
            {...register("email", { required: "Email address is required!!" })}
          />
        </div>
        <p className='text-red-600'>{errors.email?.message}</p>

        {/*INPUT PASSWORD*/}
        <div className='flex items-end border-b border-gray-500 my-3'>
          <MdPassword className='mb-2' />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password!'
            className='focus:outline-none bg-transparent w-full px-3 py-1 '
            {...register("password", { required: "Incorrect password!" })}
          />
        </div>
        <p className='text-red-600'>{errors.password?.message}</p>


        <div className={isLogin ? "block" : "hidden"}>
          <input type='checkbox' id='rememberMe'/>
          <label htmlFor='rememberMe'>Remember me</label> <br/>
          <Link href={`${Forgot_Password_Page}`} className='underline text-primary-400 text-md'>Forgot password?</Link>
          <Link href={`${Register_Page}`} className='underline text-primary-400 text-md'>sign up</Link>
        </div><br/>
        <button type='submit' className='bg-primary-500 px-4 rounded hover:bg-primary-400 text-white'>
          submit
        </button>
      </div>
      <ToastContainer />
    </form>
  )
}
