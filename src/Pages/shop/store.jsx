import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import "./store.css";

export const Store = () => {
  return (
    <div className="store">
      <div className="listOfProducts">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
