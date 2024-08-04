import CategoryList from "@/Components/CategoryList";
import NewProducts from "@/Components/NewProducts";
import ProductList from "@/Components/ProductList";
import Slider from "@/Components/Slider";
// import { useEffect } from "react";
// import { UseWixClient } from './../hooks/useWixClient';
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";
import loading from "./loading";

export default async function Home() {
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [wixClient]);
  return (
    <div className="">
      <Slider />
      <Suspense fallback={"loading"}>
        <ProductList
          categoryId={process.env.NEXT_PUBLIC_CATEGORY_PRODUCTS_ID}
          limit={4}
        />
      </Suspense>
      <Suspense fallback={"loading"}>
        <CategoryList />
      </Suspense>
      <NewProducts />
    </div>
  );
}
