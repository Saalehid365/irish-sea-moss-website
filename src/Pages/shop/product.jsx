import "./product.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const Product = (props) => {
  const { productName, productImg, price, size, id, subtitle, ingredients } =
    props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="productsList">
      <div className="product">
        <Link to="/description" ele>
          <div className="productImgDiv">
            <img src={productImg} alt="h" />
          </div>
          <h2>
            {productName} {size}
          </h2>
          <p className="subs">{subtitle}</p>
          <p>{ingredients}</p>
        </Link>
        <p>
          <b>£{price}</b>
        </p>
        <p></p>

        <div className="priceCart">
          <button onClick={() => addToCart(id)} className="addToCart">
            Add to cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
