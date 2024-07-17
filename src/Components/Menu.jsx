"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu image"
        width={28}
        height={28}
        className="cursor-pointer bg-white"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="bg-black text-white absolute left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
