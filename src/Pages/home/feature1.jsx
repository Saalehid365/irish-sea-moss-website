import React from "react";
import { Link } from "react-router-dom";
import "./feature1.css";
import bestSeller from "../../assets/lotionnn.jpg";

export const Feature1 = () => {
  return (
    <div className="featureContainer">
      <div className="featureImg">
        <img src={bestSeller} />
      </div>
      <div className="newCircle">
        <p>BEST</p>
        <p>SELLER</p>
      </div>
      <div className="featureText">
        <h2>A New Arrival</h2>
        <p>
          Our best-selling skin lotion has had a refresh and is a perfect gift
          for wifes,mothers,daughter and sisters.
        </p>
        <Link className="shopNow">Shop now</Link>
      </div>
    </div>
  );
};
