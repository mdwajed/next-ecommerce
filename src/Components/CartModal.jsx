"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="text-black w-96 absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2) ] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="">
            <h1 className="text-xl font-semibold my-3">Shopping Cart</h1>
          <div className="flex gap-6">
            <Image
              src="/logo.png"
              alt="menu image"
              width={72}
              height={96}
              className="object-cover rounded-md"
            />

            <div className="space-y-4">
              <div className="flex gap-20">
                <div>
                  <h1 className="font-bold text-base"> Product name</h1>{" "}
                  <h1 className="text-sm">Available</h1>
                </div>
                <div className="font-bold text-base">$ 40.5</div>
              </div>
              <div className="flex justify-between font-bold text-base">
                <h1>Qty : 1</h1>
                <h1 className="text-green-900">Remove</h1>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <h1>Subtotal</h1>
              <h1>$ 40.5</h1>
            </div>
            <h1 className="hover:text-green-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              eum dolores at fugiat, sunt fuga exercitationem. Voluptatem itaque
              ad blanditiis!
            </h1>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outlined">View Cart</Button>
            <Button variant="contained">Check Out</Button>
          </div>
        </div>
      )}
    </div>
  );
}
