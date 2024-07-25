import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-500 mt-12 md:mt-24 px-6 md:px-48 py-20 text-black text-sm">
      {/* TOP */}
      <div className="md:flex gap-12 md:gap-24 ">
        {/* LEFT */}
        <div className="left mb-12 space-y-8 md:w-1/4">
          <Link href="/">
            {" "}
            <div className="text-2xl tracking-wide text-red-900 font-bold">
              Next Ecommerce
            </div>
          </Link>
          <p>
            3252 Winding Way , Central Plaza, 
            Willowbroke, CA 90210, United
            States
          </p>
          <p className="font-semibold">hellow@wajed.project</p>
          <p className="font-semibold">+1 234 567 890</p>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image src="/pinterest.png" alt="youtube" width={16} height={16} />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* MIDDLE */}
        <div className="middle flex gap-8 md:gap-16 md:w-2/4 mb-12">
          <div className="space-y-6">
            <h2 className="text-base font-semibold mb-8 md:mb-16">COMPANY</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Affiliates</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-semibold mb-16">SHOP</h2>
            <p>New Arrivals</p>
            <p>Accessories</p>
            <p>Men</p>
            <p>Women</p>
            <p>All Products</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-semibold mb-16">HELP</h2>
            <p>Customer Service</p>
            <p>My Account</p>
            <p>Find a Store</p>
            <p>Legal & Privacy</p>
            <p>Gift Card</p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="right md:w-1/4 space-y-6 mb-12">
          <h2 className="text-base font-semibold mb-16">SUBSCRIBE</h2>
          <p>Be the first to get the latest news about trends and much more!</p>
          <p className=" flex">
            <input
              type="text"
              name="name"
              placeholder="Email address"
              className="px-4"
            />
            <button className="bg-wajed text-white py-3 px-4">JOIN</button>
          </p>
          <p>Secure Payment</p>
          <p className="flex gap-3.5">
            <small className="mr-1">
              DISC <span className="text-wajed font-semibold">O</span> VER
            </small>
            <Image src="/skrill.png" alt="youtube" width={36} height={36} />
            <Image src="/paypal.png" alt="youtube" width={36} height={36} />
            <Image src="/mastercard.png" alt="youtube" width={36} height={36} />
            <Image src="/visa.png" alt="youtube" width={36} height={36} />
          </p>
          <p>Contact Us</p>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="md:flex justify-between items-center mt-8"> 
        <div className="mb-6 font-medium">
          <p>@ 2024 Next Shop</p>
        </div>
        <div className="flex gap-8">
          <h2 className="font-medium"> <span className="text-black/60 mr-2">Currency</span>$ USD </h2>
          <h2 className="font-medium"> <span className="text-black/60 mr-2">Language</span>United State | English</h2>
        </div>
      </div>
    </div>
  );
}
