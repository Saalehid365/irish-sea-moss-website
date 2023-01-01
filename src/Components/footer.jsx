import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerContainerCols">
            <p>Company information</p>
            <Link>About us</Link>
            <Link>Cookie Policy</Link>
            <Link>Privacy Policy</Link>
            <Link>FAQS</Link>
          </div>
          <div className="footerContainerCols">
            <p>Customer service</p>
            <Link>Delivery Information</Link>
            <Link>Quality Guarantee & Returns Policy</Link>
            <Link>Terms & Conditions</Link>
          </div>
          <div className="footerContainerCols">
            <p>My Account</p>
            <Link>My information</Link>
            <Link>Order History</Link>
            <Link>Notifaction Preferences</Link>
          </div>
        </div>
        <div className="footerCopy">
          <p>© 2022 Traditional Wellness, Bonham Grove, B25 8RX</p>
        </div>
        <div>
          <p className="footerCopy">
            Designed and Developed by <b>IDevelop365</b>
          </p>
        </div>
      </div>
    </div>
  );
};
