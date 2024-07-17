"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Searchbar() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between flex-1 p-2 gap-4 rounded-lg bg-gray-100"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="bg-transparent outline-none flex-1 text-black/60"
      />
      <button className="cursor-pointer ">
        <Image src="/search.png" alt="search img" width={16} height={16} />
      </button>
    </form>
  );
}
