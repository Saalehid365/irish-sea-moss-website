import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Store = () => {
  return (
    <div className="store">
      <div className="storeTitle">
        <h2>Trditional Wellness</h2>
      </div>
      <div className="listOFProducs">
        {PRODUCTS.map((product) => (
          <Product data={product} key="" />
        ))}
      </div>
    </div>
  );
};
