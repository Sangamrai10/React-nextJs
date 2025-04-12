"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addProducts } from "@/api/products";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { Products_Page } from "@/constants/routes";
import Image from "next/image";

export default function Form({ isEditing = false, product }) {
  const {
    register,
    handleSubmit,
    formState = { errors },
  } = useForm({ values: product });
  const [loading, setLoading] = useState(false);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const [productImages, setProductImages] = useState([]);

  const router = useRouter();

  async function submitForm(data) {
    console.log(data);
    setLoading(true);

    const formData = new FormData();
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    productImages.map((image) => {
      formData.append("images", image);
    });

     try {
      // if (isEditing) {
      //   await editProduct(product._id, data);
      // } else {
      //   await addProduct(data);
      // }

      isEditing
        ? await editProduct(product.id, data)
        : await addProducts(formData);

      toast.success(
        isEditing
          ? "Product updated successfully."
          : "Product added successfully.",
        {
          autoClose: 1500,
          onClose: () => router.replace(Products_Page),
        }
      );
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
        onClose: () => router.replace(Products_Page),
      });
    } finally {
      setLoading(false);
    }}
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="w-full flex items-center justify-center">
          <div className="bg-white dark:bg-slate-700 dark:text-white rounded shadow-xl mt-5 p-5 w-1/3">
            {/* product name  */}
            <div className="py-2">
              <label htmlFor="productName" className="text-sm font-semibold">
                Product name
              </label>
              <br />
              <input
                type="text"
                id="productName"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("name", {
                  required: "Product name is required!",
                })}
              />
            </div>

            {/* product brand  */}
            <div className="py-2">
              <label htmlFor="brand" className="text-sm font-semibold">
                Brand
              </label>
              <br />
              <input
                type="text"
                id="brand"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("brand")}
              />
            </div>

            {/* Product category  */}
            <div className="py-2">
              <label htmlFor="category" className="text-sm font-semibold">
                Category
              </label>
              <br />
              <input
                type="text"
                id="category"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("category", {
                  required: "Product category is required!",
                })}
              />
            </div>

            {/* product price  */}
            <div className="py-2">
              <label htmlFor="price" className="text-sm font-semibold">
                Price
              </label>
              <br />
              <input
                type="number"
                id="price"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("price", {
                  required: "Product price is required!",
                  min: (value) => value > 0 || "Price must be greater than 0",
                })}
              />
            </div>

            {/* product stock  */}
            <div className="py-2">
              <label htmlFor="stock" className="text-sm font-semibold">
                Stock
              </label>
              <br />
              <input
                type="number"
                id="stock"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("stock")}
              />
            </div>

            {/* product description */}
            <div className="py-2">
              <label htmlFor="description" className="text-sm font-semibold">
                Description
              </label>
              <br />
              <textarea
                id="description"
                className="bg-transparent focus:outline-none border border-gray-500 rounded w-1/2 px-2"
                {...register("description")}
              ></textarea>
            </div>

            {/* product image  */}
            <div className="py-2">
              <label htmlFor="image" className="text-sm font-semibold">
                Image
              </label>
              <br />
              {localImageUrls.length > 0 && (
                <div className="p-5 bg-gray-100 dark:bg-zinc-600 my-1 rounded grid grid-cols-2 gap-3 items-center justify-evenly">
                  
                  {localImageUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt="image"
                      height={200}
                      width={200}
                    />
                  ))}
                </div>
              )}
              <input
                type="file"
                multiple
                className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
                id="images"
                onChange={(e) => {
                  const files = [];
                  const urls = [];

                  Array.from(e.target?.files).map((file) => {
                    files.push(file);
                    urls.push(URL.createObjectURL(file));
                  });

                  setProductImages(files);
                  setLocalImageUrls(urls);
                }}
              />
              {/* <Image alt='auth image' height={300} width={500} className='w-full' /> */}
            </div>

            <input
              type="submit"
              value={loading ? "Submitting..." : "Add Product"}
              disabled={loading}
              className="bg-primary-500 px-4 rounded hover:bg-primary-400 text-white"
            />
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}