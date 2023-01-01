import React from "react";
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./homeBanner.css";

export const HomeBanner = () => {
  return (
    <div className="mainHome">
      <div className="homeBanner">
        <Link to="/store">
          <div className="backImg">
            <p className="shopNow">shop now</p>
          </div>
        </Link>
      </div>
      <div className="BannerContainer">
        <div className="innerBanner">
          <div className="innerBannerItem">
            <div className="fontBanner">
              <FaBox className="FaBox" />
            </div>
            <div className="innerText">
              <h3>FREE UK MAINLAND DELIVERY</h3>
              <p>on orders over £30</p>
            </div>
          </div>
          <div className="innerBannerItem">
            <div className="fontBanner">
              <FaBox className="FaBox" />
            </div>
            <div className="innerText">
              <h3>FREE UK MAINLAND DELIVERY</h3>
              <p>on orders over £30</p>
            </div>
          </div>
          <div className="innerBannerItem">
            <div className="fontBanner">
              <FaBox className="FaBox" />
            </div>
            <div className="innerText">
              <h3>FREE UK MAINLAND DELIVERY</h3>
              <p>on orders over £30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
