'use client'
import React,{useState} from 'react'
import { MdOutlineMailOutline, MdPassword } from 'react-icons/md';
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";


export default function PasswordField(props) {

    const [isPasswordVisible, setIsPasswordVisible]=useState(false)
          function togglePassword(){
            setIsPasswordVisible(!isPasswordVisible)
          }

    return (
        <div className='flex items-end border-b border-gray-500 my-3'>
            <MdPassword className='mb-2' />
            <input
                type={isPasswordVisible ? "text" : "password"}
                className='focus:outline-none bg-transparent w-full px-3 py-1 '
                {...props}
            />
            {isPasswordVisible ? <RiEyeFill className='mb-2' onClick={togglePassword} /> : <RiEyeOffFill className='mb-2' onClick={togglePassword} />}
        </div>
    )
}
