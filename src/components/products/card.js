import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/placeholder.png'

export default function Card({ product }) {
    const imageUrls = product?.imageUrls || [];
    const imageUrl = imageUrls.length > 0 ? imageUrls[0] : placeholder;
    return (
        <div key={product.id} className="max-w-sm m-4 rounded overflow-hidden shadow-lg">
            <Image className="w-96" src={imageUrl} alt={product.name} width={600} height={400}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
            <div className="pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.brand}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">eidt icon</span>
            </div>
                <p className="text-gray-700 text-base overflow-hidden text-ellipsis max-h-10 ">
                    {product.description}
                </p>
            </div>
        </div>
    )
}
