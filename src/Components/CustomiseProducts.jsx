import React from "react";

export default function CustomiseProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-base font-semibold">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-gray-300 ring-1 relative bg-red-500 cursor-pointer">
          <div className="w-10 h-10 absolute rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-gray-300 ring-1 relative bg-blue-500 cursor-pointer"></li>
        <li className="w-8 h-8 rounded-full ring-gray-300 cursor-not-allowed ring-1 relative bg-green-500">
          <div className="w-10 h-[2px] absolute bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="text-base font-semibold">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-wajed text-wajed rounded-md text-sm py-1 px-4 cursor-pointer ">
          Small
        </li>
        <li className="ring-1 ring-wajed text-white bg-wajed rounded-md text-sm py-1 px-4 cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 bg-pink-200 text-white rounded-md text-sm py-1 px-4 cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
}
