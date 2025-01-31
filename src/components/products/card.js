'use client'

import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/placeholder.png'
import Link from 'next/link'
import { Products_Page } from '@/constants/routes'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { useState } from 'react'

export default function Card({ product }) {
    const [showDeletePopup, setShowDeletePopup] = useState(false)

    function removeProduct() {
        setShowDeletePopup(true)
    }

    return (
        <div key={product.id} className="w-80 m-4 rounded overflow-hidden shadow-lg">
            <Image width={500} height={500} className="h-40 w-auto mx-auto" src={product.imageUrls.length > 0 ? product.imageUrls[0] : placeholder} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-semibold text-lg mb-2">
                    <div className='flex justify-evenly'>

                        {/* product category  */}
                        <span className=" bg-gray-200 rounded-full px-3 m-1 text-sm font-semibold text-gray-700 hover:bg-red-400">
                            <Link href={`${Products_Page}/category/${product.category}`}>
                                {product.category}
                            </Link>
                        </span>

                        {/* product brand  */}
                        <span className=" bg-gray-200 rounded-full px-3 m-1 text-sm font-semibold text-gray-700 hover:bg-red-400">
                            <Link href={`${Products_Page}/brand/${product.brand}`}>
                                {product.brand}
                            </Link>
                        </span>

                        {/* products edit icon */}
                        <span className="rounded-full text-gray-700 hover:text-red-400">
                            <Link href={`${Products_Page}/edit/${product.id}`}>
                                <MdModeEditOutline className='text-lg' />
                            </Link>
                        </span>

                        {/* products delete icon  */}
                        <span className="rounded-full text-gray-700 hover:text-red-400">
                            <button onClick={removeProduct}>
                                <MdDelete className='text-lg' />
                            </button>
                        </span>
                    </div>

                    {/* product title */}
                    <div>
                        <Link href={`${Products_Page}/${product.id}`} className='hover:underline'>
                            {product.name}
                        </Link>
                    </div>



                </div>
                <p className="text-gray-700 text-base truncate max-h-10 ">
                    {product.description}
                </p>
            </div>
        </div>
    )
}
