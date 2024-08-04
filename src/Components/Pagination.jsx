"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({ currentPage, hasPrev, hasNext }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex justify-between w-full mt-12">
      <button
        className="rounded-md bg-wajed p-2 text-sm w-24 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200 "
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-wajed p-2 text-sm w-24 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200 "
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
