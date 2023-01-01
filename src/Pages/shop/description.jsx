import React from "react";
import "./description.css";

export const Description = (props) => {
  const { productName, productImg, price, size, id, subtitle, ingredients } =
    props.data;

  return (
    <div>
      <div>
        <p>{productName}</p>
      </div>
    </div>
  );
};
