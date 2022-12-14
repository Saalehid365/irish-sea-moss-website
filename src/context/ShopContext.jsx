//this context hook is to modify the cart basket quanity

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.lenth + 1; i++) {
    cart[i] = 0;
    return cart;
  }
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart);
  //add and remove to cart functions
  const addToCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeToCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeToCart };

  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};
