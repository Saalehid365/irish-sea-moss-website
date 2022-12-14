import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productsList">
      <div>
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>Qty {id}</p>
      </div>
      <button onClick={() => addToCart()}>Add to cart</button>
    </div>
  );
};
