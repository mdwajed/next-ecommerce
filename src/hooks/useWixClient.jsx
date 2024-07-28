"use client";
import { WixClientContex } from "@/Components/Context/WixContext";
import { useContext } from "react";

export const UseWixClient = () => {
  return useContext(WixClientContex);
};
