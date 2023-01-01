import React from "react";
import "./contact.css";
import { Form } from "../contact/form";

export const Contact = () => {
  return (
    <div className="contactMain">
      <div className="contactDetails">
        <h3>Contact Us</h3>
        <p className="gotAQuestion">
          Got a question? Get in touch with a customer support representative,
          who will assist you with whatever you may need. For any questions
          regarding our product or for assistance with your order, please email
          us and you should get a response within 1 business day. Please be sure
          to include the order number or the email address used during check-out
          in your message. Need more information on a specific product, or want
          an update on your order? Just let us know by contacting to us via our
          email support. Our support team will try to reply to all inquiries as
          fast as we can. Thank You!
        </p>
        <Form />
      </div>
    </div>
  );
};
