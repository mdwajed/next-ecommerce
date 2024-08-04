"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import React, { useState } from "react";

export default function Add({ productId, variantId, stockNumber }) {
  const [quantity, setQuantity] = useState(1);
  // TEMPORARY
  // const stock = 4;
  const handleQuantity = (increment) => {
    if (increment && quantity < stockNumber ) {
      setQuantity(quantity + 1);
    } else if (!increment && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const wixClient = useWixClient();
  const { addItem, isLoading } = useCartStore();
  // const addItem = async () => {
  //   const response = await wixClient.currentCart.addToCurrentCart({
  //     lineItems: [
  //       {
  //         catalogReference: {
  //           appId: process.env.NEXT_PUBLIC_WIX_APP_ID,
  //           catalogItemId: productId,
  //           ...(variantId && { options: { variantId } }),
  //         },
  //         quantity:quantity,
  //       },
  //     ],
  //   });
  // };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex justify-between items-center w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity(false)}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity(true)}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-sm">Product Stock is Empty</div>
          ) : (
            <div className="text-sm">
              Only <span className="text-orange-500">{stockNumber} items </span>{" "}
              left {"don't"} miss it
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="text-sm w-36 rounded-3xl text-wajed ring-1 ring-wajed px-4 py-2 hover:bg-wajed hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-none disabled:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
