import React from "react";
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarIcons">
        <Link to="/Cart">
          <FaSearch />
        </Link>
        <Link>
          <FaShoppingBasket />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/">benefits</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Blog</Link>
      </div>
    </div>
  );
};
