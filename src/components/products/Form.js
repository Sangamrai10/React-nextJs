'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addProducts } from '@/api/products';

export default function Form({ isEditing = false, product }) {
    const { register, handleSubmit, formState={errors} } = useForm({values: product});
    const [loading, setLoading] = useState(false)

    function submitForm(data) {
        console.log(data)
        setLoading(true);
        addProducts(data).then(res => {
            console.log(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='w-full flex items-center justify-center'>
                    <div className='bg-white dark:bg-slate-700 dark:text-white rounded shadow-xl mt-5 p-5 w-1/3'>

                        {/* product name  */}
                        <div className="py-2">
                            <label htmlFor='productName' className='text-sm font-semibold'>Product name </label><br />
                            <input type='text' id='productName' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("name")} />
                        </div>

                        {/* product brand  */}
                        <div className="py-2">
                            <label htmlFor='brand' className='text-sm font-semibold'>Brand </label><br />
                            <input type='text' id='brand' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("brand")} />
                        </div>

                        {/* Product category  */}
                        <div className="py-2">
                            <label htmlFor='category' className='text-sm font-semibold'>Category </label><br />
                            <input type='text' id='category' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("category")} />
                        </div>

                        {/* product price  */}
                        <div className="py-2">
                            <label htmlFor='price' className='text-sm font-semibold'>Price </label><br />
                            <input type='number' id='price' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("price")} />
                        </div>

                        {/* product stock  */}
                        <div className="py-2">
                            <label htmlFor='stock' className='text-sm font-semibold'>Stock </label><br />
                            <input type='number' id='stock' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("stock")} />
                        </div>

                        {/* product description */}
                        <div className="py-2">
                            <label htmlFor='description' className='text-sm font-semibold'>Description </label><br />
                            <textarea id='description' className='bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2' {...register("description")}></textarea>
                        </div>

                        {/* product image  */}
                        <div className="py-2">
                            <label htmlFor='image' className='text-sm font-semibold'>Image </label><br />
                            <input type='file' id='image' multiple className='bg-transparent focus:outline-none border border-gray-500 rounded px-2' />
                            {/* <Image alt='auth image' height={300} width={500} className='w-full' /> */}
                        </div>

                        <input type='submit' value={loading ? "Submitting..." : "Add Product"} disabled={loading} className='bg-primary-500 px-4 rounded hover:bg-primary-400 text-white' />
                    </div>
                </div>
            </form>
        </>
    )
}
