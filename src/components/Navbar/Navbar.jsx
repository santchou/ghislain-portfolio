import React, { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "work", "skills", "testimonial", "contact"].map((item) => (
          <li
            className={`app__flex p-text`}
            key={`link-${item}`}
            onClick={() => handleClick(item)}
          >
            <a
              href={`#${item}`}
              className={` ${activeItem === item ? "active-item" : ""}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "work", "skills", "testimonial", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
