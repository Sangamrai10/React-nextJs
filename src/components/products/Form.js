import React from 'react';
import Image from "next/image";

export default function Form() {
    return (
        <>
            <form>
                <div className='w-full flex items-center justify-center'>
                    <div className='bg-white dark:bg-slate-700 dark:text-white rounded shadow-xl mt-5 p-5 w-1/3'>

                        {/* product name  */}
                        <div className="py-2">
                            <label htmlFor='productName' className='text-sm font-semibold'>Product name </label><br/>
                            <input type='text' id='productName' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'/>
                        </div>

                        {/* product brand  */}
                        <div className="py-2">
                            <label htmlFor='brand' className='text-sm font-semibold'>Brand </label><br/>
                            <input type='text' id='brand' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'/>
                        </div>

                        {/* Product category  */}
                        <div className="py-2">
                            <label htmlFor='category' className='text-sm font-semibold'>Category </label><br/>
                            <input type='text' id='category' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'/>
                        </div>

                        {/* product price  */}
                        <div className="py-2">
                            <label htmlFor='price' className='text-sm font-semibold'>Price </label><br/>
                            <input type='number' id='price' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'/>
                        </div>

                        {/* product stock  */}
                        <div className="py-2">
                            <label htmlFor='stock' className='text-sm font-semibold'>Stock </label><br/>
                            <input type='number' id='stock' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'/>
                        </div>

                        {/* product description */}
                        <div className="py-2">
                            <label htmlFor='description' className='text-sm font-semibold'>Description </label><br/>
                            <textarea id='description' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2'></textarea>
                        </div>

                        {/* product image  */}
                        <div className="py-2">
                            <label htmlFor='image' className='text-sm font-semibold'>Image </label><br/>
                            <input type='file' id='image' multiple className='bg-transparent focus:outline-none border border-gray-500 rounded'/>
                            {/* <Image alt='auth image' height={300} width={500} className='w-full' /> */}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
