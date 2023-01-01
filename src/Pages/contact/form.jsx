import "./form.css";
import React, { useState } from "react";

export const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="formContainer">
      <form className="formStyle">
        <input
          name="name"
          required="true"
          className="field"
          placeholder="Enter your name"
          type="text"
          onChange={handleChange}
        ></input>
        <input
          name="email"
          required="true"
          className="field"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        ></input>

        <textarea
          name="message"
          required="true"
          placeholder="Enter your message"
          className="field1"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
