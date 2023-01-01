import React from "react";
import "./offersSign.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const OffersSign = () => {
  return (
    <div>
      <div className="container">
        <div className="offersSign">
          <div className="offersLeft">
            <p>
              <b>Sign up for exclusive offers</b>
            </p>
            <p>
              Plus, get expert advice to support your health & wellness straight
              to your inbox when you sign up to Traditional Wellness emails.
            </p>
          </div>
          <div className="offersForm">
            <form className="form">
              <input
                type="text"
                name="firstname"
                className="text"
                placeholder="First name"
              />
              <input
                type="text"
                name="lastname"
                className="text"
                placeholder="Last name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <button className="signup">Sign up now</button>
            </form>
          </div>
        </div>
        <div className="socials">
          <a href="https://mobile.twitter.com/hashtag/traditionalwellness?src=hash">
            <FaTwitter />
          </a>
          <a href="https://mobile.twitter.com/hashtag/traditionalwellness?src=hash">
            <FaInstagram />
          </a>
          <a href="https://mobile.twitter.com/hashtag/traditionalwellness?src=hash">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};
