import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { productName, productImg, price, id } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const itemTotal = price;
  return (
    <div className="cartItem">
      <img alt="cartItems" src={productImg} />
      <div className="description">
        <p>
          <b> {productName}</b>
        </p>
        <p>size</p>
      </div>
      <div className="price">
        <p>£{price}</p>
      </div>
      <div className="adjustBtns">
        <button onClick={() => removeFromCart(id)} className="increaseBtn">
          -
        </button>
        <input
          value={cartItems[id]}
          className="changeQuantity"
          type="text"
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)} className="decreaseBtn">
          +
        </button>
      </div>
      <div className="Total">
        <p>{itemTotal}</p>
      </div>
    </div>
  );
};
