import React from "react";
import { PRODUCTS } from "../../products";
import {} from "./Products";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Salafi Bookmarks</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          <Product />;
        })}
      </div>
    </div>
  );
};
