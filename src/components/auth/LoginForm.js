'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link'
import { Forgot_Password_Page, Register_Page, Home_Page } from '@/constants/routes'
import { login } from '@/api/auth'
import { useRouter } from 'next/navigation';
import PasswordField from './PasswordField';

export default function LoginForm() {
  // destructuring useForm module form react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [loading, setLoading] = useState(false)

  const router = useRouter()
  async function submitForm(data) {
    setLoading(true)
    try {
      const res = await login(data)

      localStorage.setItem("authToken", res.token)

      toast.success(
        "Login successful",
        {
          autoClose: 1500,

          // send user to Home page 
          onClose: () => router.push(Home_Page)
        })
    } catch (error) {
      toast.error(error.response.data, { autoClose: 1500 })
    } finally {
      setLoading(false)
    }
  }
  // toast container for alert success or errors 
  useEffect(() => {
    toast.error(errors, { autoClose: 1500 })
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='py-2 dark:text-white'>

        {/* EMAIL ADDRESS*/}
        <div className="flex justify-center border-b border-gray-500 items-end my-3">
          <MdOutlineMailOutline className='mb-2' />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            className='focus:outline-none bg-transparent w-full px-3 py-1'
            {...register("email", { required: "Email address is required!!" })}
          />
        </div>

        {/* EMAIL ERROR  */}
        <p className='text-red-600'>{errors.email?.message}</p>


        {/*INPUT PASSWORD*/}
        <PasswordField
          id='password'
          name='password'
          placeholder='Enter password'
          {...register("password",
            { required: "Invalid password!" })
          } />


        {/* ERROR PASSWORD */}
        <p className='text-red-600'>{errors.password?.message}</p>


        {/* forgot password, signUp, remember me section  */}
        <div className='inline'>

          {/* checkbox  */}
          <input type='checkbox' id='rememberMe' />
          <label htmlFor='rememberMe'>Remember me</label> <br />

          {/* submit form*/}
          <input type='submit' value={loading ? "submiting...." : "Login"} disabled={loading} className='bg-primary-500 px-4 rounded hover:bg-primary-400 text-white' />
          <div>
            {/* forget password, signup  */}
            <Link href={`${Forgot_Password_Page}`} className=' text-primary-400 text-md dark:text-white'>Forgot password?</Link> <br/>
            <Link href={`${Register_Page}`} className=' text-primary-400 text-md dark:text-white'>Create new account</Link>
          </div>
        </div>


      </div>
      <ToastContainer />

    </form>
  )
}
