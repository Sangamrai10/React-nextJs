import React from "react";
import Form from "@/components/products/Form";

export default async function EditProductPage({ params }) {
  const id = (await params).productId;

  const product = getProductById(id);
  if (!product) {
    return (
      <div className="flex items-center relative justify-center font-bold h-96">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <h1 className="uppercase py-2 font-bold text-xl">Edit Product</h1>

      <Form isEditing={true} product={product} />
    </div>
  );
}
