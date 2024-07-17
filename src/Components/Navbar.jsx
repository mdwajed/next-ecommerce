import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:64 relative">
      {/* mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Next Ecommerce</div>
        </Link>
        <Menu />
      </div>
      {/*  Bigger */}
      <div className="hidden md:flex justify-between items-center gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="menu image" width={24} height={24} />
            <div className="text-2xl tracking-wide">Next Ecommerce</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
