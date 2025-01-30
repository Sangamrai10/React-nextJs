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
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <div className='flex items-center justify-between px-5'>
                <h1 className={'text-center'}>Products</h1>
            </div>
            <div className='flex flex-wrap justify-center p-4 m-4'>
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
