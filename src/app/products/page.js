"use client"
import React from 'react';
import { getAllProducts } from '@/api/products';
import Card from '@/components/products/card';
import { useState, useEffect, use } from 'react';
import Loading from './loading'
import { Products_Route } from '@/constants/routes';
import Link from 'next/link';

export default function posts({ searchParams }) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loadings, setLoadings] = useState(true)

    const unwrappedParams=use(searchParams)
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProducts(unwrappedParams);
                setProducts(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoadings(false)
            }
        }
        fetchData()
    }, [searchParams])
    if (loadings) return <Loading/>
        
    if (error) return <div className='flex items-center relative justify-center font-bold h-96'>Error: {error.message}</div>

    return (
        <>
            <div className='dark:text-white w-full p-2 border-b border-gray-900 flex item-center justify-between'>
                <h1 className='uppercase py-2 font-bold text-xl'>Products</h1>
                <Link className=' px-2 my-2 dark:hover:bg-slate-600 dark:bg-primary-900 bg-slate-400 rounded' href={`${Products_Route}/add`}>Add Products</Link>
            </div>
            <div className='flex item-center flex-wrap justify-center px-5'>
                {products.map(product => (
                    <Card key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}
