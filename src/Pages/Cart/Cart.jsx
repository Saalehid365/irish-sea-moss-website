import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import "../cart/cart.css";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  return (
    <div className="cart">
      <div className="basket">
        <h1>Your shopping basket</h1>
      </div>
      <div className="cartTitles">
        <p>Item</p>
        <div className="itemDes">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="subTotal">
          <div className="subs">
            <p>Subtotal:</p>
            <p>£{totalAmount}</p>
          </div>
          <div>
            <button>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};
