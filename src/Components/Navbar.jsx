import React, { useContext, useState } from "react";
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";
import { About } from "../pages/About/about";

export const Navbar = (props) => {
  const { getTotalAmount, basketQuantity } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const totalQuantity = basketQuantity();
  const [filteredData, setfilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = PRODUCTS.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });
    setfilteredData(newFilter);
  };

  return (
    <div className="navbar">
      <div className="navbarIcons">
        <div>
          <p className="Traditional">Traditonal</p>
          <p className="Wellness">Wellness</p>
        </div>
        <div className="search">
          <input
            className="searchBar"
            placeholder="Search"
            onChange={handleFilter}
          ></input>
          <FaSearch />
        </div>
        <Link to="/cart" className="basketIcon">
          {totalQuantity > 0 ? (
            <div className="redCircle">
              <p>{totalQuantity}</p>
            </div>
          ) : (
            <></>
          )}
          <FaShoppingBasket className="basketIcon" />
          {totalAmount > 0 ? (
            <div className="basketAmount">
              <div className="basketItemAmount">
                <p>£{totalAmount}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </Link>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 3).map((prod, key) => {
            return (
              <div className="prodLink">
                <img src={prod.productImg}></img>
                <a href={prod.link} target="_blank">
                  <p>{prod.productName}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/store">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Blog</Link>
      </div>
    </div>
  );
};
