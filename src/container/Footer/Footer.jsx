import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChangeInput = (e) => {
    setError("");
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const isEmail = validateEmail(email);
    if (isEmail) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      setError("Email error, please enter good email.");
    }
  };

  return (
    <>
      <h2 className="head-text">My Contact</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <a
            href="mailto:gsantchoukenfack@gmail.com"
            className="p-text"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            gsantchoukenfack@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <a
            href="tel: +237655306436"
            className="p-text"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            tel: +237655306436
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "start",
              }}
              className="p-text"
              type="text"
              name="name"
              value={name}
              placeholder="Your name"
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "start",
              }}
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <span
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {error}
          </span>
          <div>
            <textarea
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "start",
              }}
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "blue",
            padding: "30px 50px",
            borderRadius: "10px",
          }}
        >
          <h3 className="head-text">
            Thank you for your message, i contact you.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__blackbg"
);
