import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="./"></Link>
        <Link>
          <FaShoppingBasket />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
