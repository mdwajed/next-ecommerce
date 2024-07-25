import React from "react";

export default function Filter() {
  return (
    <div className="mt-6 flex justify-between">
      <div className="flex gap-6">
        <select
          name="type"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
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
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="px-4 py-2 text-xs text-white font-medium rounded-2xl bg-wajed w-24"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div>
        <select
          name="sort "
          id=""
          className="py-2 px-4 text-xs font-medium rounded-2xl bg-pink-200 border-none"
        >
          <option>Sort By</option>
          <option value="physical">Price (low to high)</option>
          <option value="digital">Price ( high to low)</option>
          <option value="digital">Newest</option>
          <option value="digital">Oldest</option>
        </select>
      </div>
    </div>
  );
}
