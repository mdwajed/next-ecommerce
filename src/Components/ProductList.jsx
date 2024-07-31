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
const PRODUCT_PER_PAGE = 20;
export default async function ProductList({ categoryId, limit, searchParams }) {
  console.log(searchParams);
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
  console.log(res.items[0].price);
  return (
    <div className="max-w-7xl mx-auto mt-12 md:mt-24">
      <h1 className="text-2xl font-semibold my-8">Featured Products</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
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
                    ${product.price?.price || "N/A"}
                  </Typography>
                </div>
                {/* <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {product.description || "No description available."}
                </Typography> */}
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
    </div>
  );
}
