'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import Link from 'next/link'
import { Products_Page } from '@/constants/routes'

export default function LoginForm() {
  // destructuring useForm module form react-hook-form
    const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // loading 
  const { loading, setLoading } = useState(false)

  function submitForm(data) {
    setLoading(true)
    console.log(data)
  }
  // toast container for alert success or errors 
  useEffect(() => {
    toast.error(errors, { autoClose: 1500 })
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(submitForm)} >
      <div className='py-2'>
        <div className="flex justify-center border-b border-gray-500 items-end my-3">
          <MdOutlineMailOutline className='mb-2' />
          <input
            type='text'
            id='email'
            placeholder='email'
            className='focus:outline-none bg-transparent w-full px-3 py-1'
            {...register("email", { required: "Email address is required!!" })}
          />
        </div>
        <p className='text-red-600'>{errors.email?.message}</p>
        <div className='flex items-end border-b border-gray-500 my-3'>
          <input
            type='password'
            id='pass'
            placeholder='Enter your password!'
            className='focus:outline-none bg-transparent w-full px-3 py-1 '
            {...register("password", { required: "Incorrect password!" })}
          />
        </div>
        <div>
          <Link href={`${Products_Page}`} className='text-decoration'>Forgot password?</Link>
          <Link href={`${Products_Page}`} className='text-decoration'>sign up</Link>
        </div>
        <input type="submit" value={loading ? 'submiting....' : 'submit'} className='bg-primary-500 px-4 w-1/4 rounded' />
      </div>
    </form>
  )
}
