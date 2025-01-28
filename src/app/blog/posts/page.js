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
            <div className='text-center font-bold p-3 m-4 border-b-2'>
                <h1>Posts</h1>
            </div>
            <div className='flex flex-wrap justify-center p-4 m-4'>
                {/* {posts.map(post => (
                
                <div key={post.id} className="max-w-sm m-4 rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={post.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="text-gray-700 text-base">
                            {post.body}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            ))} */}
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
