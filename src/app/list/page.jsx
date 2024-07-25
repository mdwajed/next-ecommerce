import Filter from "@/Components/Filter";
import ProductList from "@/Components/ProductList";
import Image from "next/image";
import React from "react";

export default function ListPage() {
  return (
    <div className="px-4 md:px-8 lg:16 xl:32 2xl:64 relative">
      {/* CAMPAIGN */}
      <div className="bg-pink-50 hidden md:flex justify-between h-64">
        <div className=" w-2/3 flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-semibold text-gray-700 leading-[48px] ">Grab up to 50% off on 
            <br/>selected Products</h1>
          <button className="px-5 py-3 rounded-3xl w-max bg-wajed text-white ">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="woman image" fill className="object-contain" />
        </div>
      </div>
      <Filter/>
      {/* PRODUCTS */}
      <h1 className="text-xl font-semibold mt-12">Shows for You!</h1>
      <ProductList/>
    </div>
  );
}
