import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <img
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
              src={images.smoji}
              alt="smoji"
            />
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I am</p>
              <h1 className="head-text p-text">Ghislain</h1>
            </div>
          </div>
          <div className="tap-cmp app__flex">
            <p className="p-text">Web developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.div
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          I am a <u>frontend</u> and <u>backend</u> developer with a passion for
          building beautiful and functional web application
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        className="app__header-circles"
      >
        {[
          { img: images.mongoDB, title: "MongoDB" },
          { img: images.express, title: "Express JS" },
          { img: images.react, title: "React JS" },
          { img: images.node, title: "Node JS" },
        ].map(({ img, title }, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={img} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
