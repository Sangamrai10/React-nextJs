'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline, MdPassword } from 'react-icons/md';
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link'
import { Forgot_Password_Page, Login_Page, Register_Page,Home_Page } from '@/constants/routes'
import { usePathname } from 'next/navigation';
import { login } from '@/api/auth'
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  // destructuring useForm module form react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [loading, setLoading ] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible]=useState(false)
  function togglePassword(){
    setIsPasswordVisible(!isPasswordVisible)
  }

  const router = useRouter()
  async function submitForm(data) {
    setLoading(true)
    try {
      const res=await login(data)

      // send user to Home page 
      router.push(Home_Page)
      localStorage.setItem("authToken", res.token)

      toast.success("Login successful", { autoClose: 1500 })
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

  // check if path is '/login', if true then display forgot password and signup
  const pathname = usePathname()
  const isLogin = pathname == Login_Page

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='py-2'>

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
        <div className='flex items-end border-b border-gray-500 my-3'>
          <MdPassword className='mb-2' />
          <input
            type={isPasswordVisible?"text":"password"}
            id='password'
            name='password'
            placeholder='Enter your password!'
            className='focus:outline-none bg-transparent w-full px-3 py-1 '
            {...register("password", { required: "Incorrect password!" })}
          />
          {isPasswordVisible?<RiEyeFill className='mb-2' onClick={togglePassword}/>: <RiEyeOffFill className='mb-2' onClick={togglePassword}/>}
        </div>
        
        
        {/* ERROR PASSWORD */}
        <p className='text-red-600'>{errors.password?.message}</p>


        {/* forgot password, signUp, remember me section  */}
        <div className={isLogin ? "block" : "hidden"}>

          {/* checkbox  */}
          <input type='checkbox' id='rememberMe' />
          <label htmlFor='rememberMe'>Remember me</label> <br />

          {/* forget password, signup  */}
          <Link href={`${Forgot_Password_Page}`} className='underline text-primary-400 text-md'>Forgot password?</Link>
          <Link href={`${Register_Page}`} className='underline text-primary-400 text-md'>sign up</Link>
        </div><br />

        <button type='submit' value={loading ? "submiting...." : "submit"} className='bg-primary-500 px-4 rounded hover:bg-primary-400 text-white'>
          submit
        </button>
      </div>
      <ToastContainer />

    </form>
  )
}
