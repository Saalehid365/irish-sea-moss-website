import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/Cart">
          <FaShoppingBasket />{" "}
        </Link>
      </div>
    </div>
  );
};
