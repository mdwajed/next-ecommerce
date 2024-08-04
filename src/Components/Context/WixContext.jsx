"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import Cookies from "js-cookie";
import { createContext } from "react";
// import { redirects } from "@wix/redirects";
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
     redirects,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});
export default wixClient;

export const WixClientContex = createContext(wixClient);

export const WixClientContexProvider = ({ children }) => {
  return (
    <WixClientContex.Provider value={wixClient}>
      {children}
    </WixClientContex.Provider>
  );
};
