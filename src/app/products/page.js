"use client"
import React from 'react';
import { getAllProducts } from '@/api/products';
import Card from '@/components/products/card';
import { useState, useEffect } from 'react';
import Loading from './loading'

export default function posts({ searchParams }) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loadings, setLoadings] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllProducts(searchParams);
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
            <div className='px-5'>
                <h1 className='text-center uppercase py-3 font-bold text-xl'>Products</h1>
            </div>
            <div className='flex item-center flex-wrap justify-center px-5'>
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
