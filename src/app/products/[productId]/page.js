import React from "react";
import { getProductById } from "@/api/products";
import Image from "next/image";
import kaneki from "@/assets/kaneki.jpg";
import { MdOutlineStarPurple500, MdStarHalf } from "react-icons/md";

export default async function ProductByIdPage({ params }) {
  const id = (await params).productId;
  const product = await getProductById(id);
  console.log(product);
  return (
    <div className="bg-slate-100 w-full">
      <div className="container mx-auto min-h-[90svh] flex justify-evenly items-center">
        <div>
          <Image
            src={product.imageUrls.length > 0 ? product.imageUrls[0] : placeholder}
            alt={product.name}
            width={200}
            height={300}
            className="rounded-lg min-h-[70svh] w-auto p-2 drop-shadow"
          />
        </div>
        <div className="bg-white min-h-[90svh] w-1/2 p-20">
          <p className="font-bold uppercase text-gray-600">
            {product.category}
          </p>
          <h1 className="font-semibold text-3xl">{product.name}</h1>
          <div className="flex gap-2">
            <div className="flex gap-2 mt-1">
              <MdOutlineStarPurple500 className="text-yellow-500" />
              <MdOutlineStarPurple500 className="text-yellow-500" />
              <MdOutlineStarPurple500 className="text-yellow-500" />
              <MdOutlineStarPurple500 className="text-yellow-500" />
              <MdStarHalf className="text-yellow-500" />
            </div>
            <span className="">4.4(400 review)</span>
          </div>
          <h4 className="p-1 px-2 bg-primary-200 rounded w-fit">
            {product.brand}
          </h4>
        </div>
      </div>
    </div>
  );
}
