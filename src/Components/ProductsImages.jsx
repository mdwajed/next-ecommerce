"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductsImages({items}) {
  const [index, setIndex] = useState(0);
  // const images = [
  //   {
  //     id: 1,
  //     url: "https://i.ibb.co/p1MwXHy/pi4.jpg",
  //   },
  //   {
  //     id: 2,
  //     url: "https://i.ibb.co/m5bctT2/pi3.jpg",
  //   },
  //   {
  //     id: 3,
  //     url: "https://i.ibb.co/8P7JTWJ/pi2.jpg",
  //   },
  //   {
  //     id: 4,
  //     url: "https://i.ibb.co/Yym1RVz/pi.jpg",
  //   },
  // ];
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between mt-8 gap-4">
        {items.map((item, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
