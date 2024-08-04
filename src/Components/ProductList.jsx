import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "../MTailwind";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import Pagination from "./Pagination";
const PRODUCT_PER_PAGE = 8;
export default async function ProductList({ categoryId, limit, searchParams }) {
  console.log(searchParams);
  const wixClient = await wixClientServer();
  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", [searchParams?.type || "physical", "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  //  .find();
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery = productQuery.ascending(sortBy);
    } else if (sortType === "desc") {
      productQuery = productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();
  // console.log(res);
  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12">
      {/* <h1 className="text-2xl font-semibold my-8">Featured Products</h1> */}
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {res.items.map((product) => (
          <Link href={"/" + product.slug} key={product._id}>
            <Card className="w-70">
              <CardHeader
                shadow={false}
                floated={false}
                className="h-60 relative"
              >
                <Image
                  src={
                    product.media?.mainMedia?.image?.url || "/default-image.jpg"
                  }
                  alt={product.name}
                  fill
                  className="h-60 w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    $ {product.priceData?.price || "N/A"}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <button className=" rounded-2xl ring-1 ring-wajed py-2 px-4 hover:bg-wajed hover:text-white">
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    </div>
  );
}
