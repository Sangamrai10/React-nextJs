import React from 'react'
import { getProductById } from '@/api/products'

export default async function ProductByIdPage({params}) {
    const id = (await params).productId
    const product = await getProductById(id)
    console.log(product)
  return (
  <div>
    <div>product id: {id}</div>
    <div>product name: {product.name}</div>
    <div>product price: {product.price}</div>
    <div>product description: {product.description}</div>
    <div>product category: {product.category}</div>
    <div>product brand: {product.brand}</div>
    <div>product created at: {product.createdAt}</div>
</div>
  )
}
