"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import React from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

export default function CartModal() {
  // TEMPORARY
  // const cartItems = true;
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });
      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });
      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-black w-96 absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2) ] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="">
          <h1 className="text-xl font-semibold my-3">Shopping Cart</h1>
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div className="flex gap-6" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt="menu image"
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}

                <div className="space-y-4">
                  <div className="flex gap-16">
                    <div>
                      <h1 className="font-bold text-base">
                        {" "}
                        {item.productName?.original}
                      </h1>{" "}
                      <h1 className="text-sm">{item.availability?.status}</h1>
                    </div>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      {item.quantity && item.quantity > 1 && (
                        <div className="text-xs text-green-500">
                          {item.quantity} x{" "}
                        </div>
                      )}
                      ${item.price?.amount}
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-base">
                    <h1>Qty :{item.quantity}</h1>
                    <h1
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id)}
                    >
                      Remove
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <h1>Subtotal</h1>
              <h1>$ {cart.subtotal.amount}</h1>
            </div>
            <h1 className="hover:text-green-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              eum dolores at fugiat, sunt fuga exercitationem.
            </h1>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outlined">View Cart</Button>
            <Button onClick={handleCheckout} variant="contained">
              Check Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
