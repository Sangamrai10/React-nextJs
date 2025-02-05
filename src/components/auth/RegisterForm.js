'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdOutlineMailOutline } from 'react-icons/md';
import PasswordField from './PasswordField';
import { PASSWORD_REGEX } from '@/constants/regex';
import {registerUser} from '@/api/auth'
import { toast, ToastContainer } from 'react-toastify';
import { Home_Page } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {

    const { register, formState: { errors }, handleSubmit, watch } = useForm()

    const [loading, setLoading] = useState(false)

    const passWatch = watch("password")
    function submitForm(data) {
        console.log(data)
    }

    const router = useRouter()
    async function submitForm(data) {
        setLoading(true)
        try {
            const res = await registerUser(data)

            // send user to Home page 

            localStorage.setItem("authToken", res.token)

            toast.success(
                "register successful",
                {
                    autoClose: 1500,
                    onClose: () => router.push(Home_Page)
                })
        } catch (error) {
            toast.error(error.response.data, { autoClose: 1500 })
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>

            {/* fullname  */}
            <div className="flex justify-center border-b border-gray-500 items-end my-3">
                <MdOutlineMailOutline className='mb-2' />
                <input
                    type='text'
                    id='name'
                    placeholder='Your fullname'
                    className='focus:outline-none bg-transparent w-full px-3 py-1'
                    {...register("name", { required: "Fullname is required!!" })}
                />
            </div>

            {/* FullName ERROR  */}
            <p className='text-red-600'>{errors.name?.message}</p>

            {/* email address  */}
            <div className="flex justify-center border-b border-gray-500 items-end my-3">
                <MdOutlineMailOutline className='mb-2' />
                <input
                    type='text'
                    id='email'
                    placeholder='Email address'
                    className='focus:outline-none bg-transparent w-full px-3 py-1'
                    {...register("email", { required: "Email address is required!!" })}
                />
            </div>
            {/* FullName ERROR  */}
            <p className='text-red-600'>{errors.email?.message}</p>

            {/*INPUT PASSWORD*/}
            <div className='flex items-end'>
                <PasswordField
                    id='password'
                    name='password'
                    placeholder='Enter your password!'
                    {...register("password",
                        {
                            required: "Incorrect password!",

                            // check regular expression 
                            pattern: {
                                value: PASSWORD_REGEX,
                                message: "at least one letter, one number and one special character"
                            },
                            // check password length 
                            minLength: {
                                value: 8,
                                message: "Password must be greater than 8!"
                            }
                        })
                    } />

            </div>
            {/* ERROR PASSWORD */}
            <p className='text-red-600'>{errors.password?.message}</p>

            {/* confirm password  */}
            <div className='flex items-end'>
                <PasswordField
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm password!'
                    {...register("confirmPassword",
                        {
                            required: "Confirm password!",
                            validate: (value) => {
                                return value == passWatch || "Password do no match!"
                            }
                        })}
                />
            </div>
            {/* confirm password error field  */}
            <p className='text-red-600'>{errors.confirmPassword?.message}</p>

            <button type='submit' value={loading ? "submiting...." : "submit"} className='bg-primary-500 px-4 rounded hover:bg-primary-400 text-white'>
                submit
            </button>
            <ToastContainer/>
        </form>

    )
}
