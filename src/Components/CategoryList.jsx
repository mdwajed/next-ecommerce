import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardBody, Typography } from "../MTailwind";

import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
export default async function CategoryList() {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();
  return (
    <div className="px-4  mt-12 md:mt-24 overflow-x-scroll">
      <div className=" flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link href={`/list?cat=${item.slug}`} key={item._id}>
            <Card className="w-80 h-86 box shadow-none">
              <CardHeader floated={false} className="h-80 ">
                <Image
                  src={item.media?.mainMedia?.image?.url || "cat.png"}
                  fill
                  alt="category image"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.name}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
