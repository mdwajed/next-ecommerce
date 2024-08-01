"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    // Replace the current URL with the new one, preserving other query parameters
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-6 flex  justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="px-4 py-2 text-xs font-medium rounded-2xl bg-wajed w-24"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="px-4 py-2 text-xs text-white font-medium rounded-2xl bg-wajed w-24"
          onChange={handleFilterChange}
        />
        <select
          name="cat"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="physical">New Arrival</option>
          <option value="digital">Popular</option>
        </select>
        <select
          name="filter"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
          onChange={handleFilterChange}
        >
          <option>SortBy</option>
          <option value="asc price">Price(low to high)</option>
          <option value="desc price">Price(high to low)</option>
          <option value="desc lastUpdated">Newest</option>
          <option value="asc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}
