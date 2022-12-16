import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./store.css";

export const Store = () => {
  return (
    <div className="store">
      <div className="about">
        <div>
          <img />
        </div>
        <div>
          <h3>About Traditonal Wellness</h3>
          <p>
            We are a family owned business with ties to the Caribbean and
            Africa. Thanks to Millie, Sea moss has been an integral part of our
            family since the 1970's. She introduced the benefits of Seamoss to
            us by making the tasty drink Irish moss regularly, which was enjoyed
            by all! As a family, we aspire to a healthy lifestyle and now wish
            to share our wonderful experience of Sea moss with you by
            introducing you to our range of quality sourced products. inspired
            by Millie.
          </p>
          <p>Thank you for being part of our journey!</p>
        </div>
      </div>
      <div className="listOfProducts">
        {PRODUCTS.map((product) => (
          <Product data={product} key="/" />
        ))}
      </div>
    </div>
  );
};
