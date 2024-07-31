import Add from "@/Components/Add";
import CustomiseProducts from "@/Components/CustomiseProducts";
import ProductsImages from "@/Components/ProductsImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

export default async function SinglePage({ params, slug }) {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }
 
  const product = products.items[0];
  console.log("Product:", product);
  console.log("Variants:", product.variants);
  console.log("Product Options:", product.productOptions);
  return (
    <div className="px-4 md:px-8  relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-1/2 lg:sticky h-max top-20">
        <ProductsImages items={product.media?.items} />
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <h1 className="text-gray-500">{product.description}</h1>
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-6">
            <h3 className="text-xl text-gray-500 line-through">
              $ {product.price?.price}
            </h3>
            <h3 className="text-2xl font-medium">
              $ {product.price?.discountedPrice}
            </h3>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions && (
          <CustomiseProducts
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add />
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-semibold mb-4 text-base">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
