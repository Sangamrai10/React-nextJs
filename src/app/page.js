"use client";
import React from "react";
import Loading from "./products/loading";
import { useState} from "react";
import { getAllProducts } from "@/api/products";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="flex justify-center content-center">this is  Home page </div>
      <div className='flex flex-wrap justify-center'>
        {products.map((product) => (
          <div key={product.id} className="m-4 p-4 border rounded">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>

    </>
  );
}
