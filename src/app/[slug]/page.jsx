import Add from "@/Components/Add";
import CustomiseProducts from "@/Components/CustomiseProducts";
import ProductsImages from "@/Components/ProductsImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8  relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-1/2 lg:sticky h-max top-20">
        <ProductsImages />
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officia?
          Ullam obcaecati repellat repellendus illum dolorem excepturi minus et
          numquam, deleniti doloribus ut quisquam odit molestias rem nobis
          necessitatibus pariatur!
        </p>
        <div className="flex items-center gap-6">
          <h3 className="text-xl text-gray-500 line-through">$ 59</h3>
          <h3 className="text-2xl font-medium">$ 49</h3>
        </div>
        <div className="h-[3px] bg-gray-100" />
        <CustomiseProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-semibold mb-4 text-base">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam accusamus eos quisquam aliquid fugit ipsum iusto rerum at amet incidunt dolores, praesentium doloremque omnis vitae debitis commodi nesciunt sunt libero ipsam neque ratione dolorem facere. Dignissimos et at sint quasi?</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-4 text-base">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam accusamus eos quisquam aliquid fugit ipsum iusto rerum at amet incidunt dolores, praesentium doloremque omnis vitae debitis commodi nesciunt sunt libero ipsam neque ratione dolorem facere. Dignissimos et at sint quasi?</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-4 text-base">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam accusamus eos quisquam aliquid fugit ipsum iusto rerum at amet incidunt dolores, praesentium doloremque omnis vitae debitis commodi nesciunt sunt libero ipsam neque ratione dolorem facere. Dignissimos et at sint quasi?</p>
        </div>
      </div>
    </div>
  );
}
