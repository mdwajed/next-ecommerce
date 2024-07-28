"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import {products,collections} from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const WixClient = createClient({
  modules: {
    products,
    collections,
    //   currentCurt
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});
export default WixClient;

export const WixClientContex = createContext(WixClient);

export const WixClientContexProvider = ({ children }) => {
  return (
    <WixClientContex.Provider value={WixClient}>
      {children}
    </WixClientContex.Provider>
  );
};
