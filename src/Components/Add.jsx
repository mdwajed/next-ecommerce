"use client";
import React, { useState } from "react";

export default function Add({productId,variantId,stockNumber}) {
  const [quantity, setQuantity] = useState(1);
  // TEMPORARY
  const stock = 4;
  const handleQuantity = (increment) => {
    if (increment && quantity < stock) {
      setQuantity(quantity + 1);
    } else if (!increment && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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
          <div className="text-sm">
            Only <span className="text-orange-500">{stockNumber} items </span> left{" "}
            {"don't"} miss it
          </div>
        </div>
        <button className="text-sm w-36 rounded-3xl text-wajed ring-1 ring-wajed px-4 py-2 hover:bg-wajed hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-none disabled:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
