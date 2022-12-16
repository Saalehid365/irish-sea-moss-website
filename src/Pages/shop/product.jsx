import "./product.css";

export const Product = (props) => {
  const { id, productName, productImg, price } = props.data;

  return (
    <div className="productsList">
      <div className="product">
        <img src={productImg} alt="/" />
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>Qty {id}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
