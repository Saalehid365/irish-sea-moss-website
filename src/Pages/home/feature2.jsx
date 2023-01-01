import React from "react";
import { Link } from "react-router-dom";
import "./feature2.css";
import newProduct from "../../assets/silver.jpg";

export const Feature2 = () => {
  return (
    <div className="featureContainer2">
      <div className="featureText2">
        <h2>A New Arrival</h2>
        <p>
          Our best-selling skin lotion has had a refresh and is a perfect gift
          for wifes,mothers,daughter and sisters.
        </p>
        <Link className="shopNow">Shop now</Link>
      </div>
      <div className="featureImg2">
        <img src={newProduct} />
      </div>
      <div className="newCircle2">
        <p>NEW</p>
        <p>PRODUCT</p>
      </div>
    </div>
  );
};
