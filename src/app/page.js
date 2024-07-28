"use client";
import CategoryList from "@/Components/CategoryList";
import NewProducts from "@/Components/NewProducts";
import ProductList from "@/Components/ProductList";
import Slider from "@/Components/Slider";
import { useEffect } from "react";
import { UseWixClient } from './../hooks/useWixClient';

export default function Home() {
const wixClient=UseWixClient()
  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);
  return (
    <div className="">
      <Slider />
      <ProductList />
      <CategoryList />
      <NewProducts />
    </div>
  );
}
