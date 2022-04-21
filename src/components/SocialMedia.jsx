import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.freecodecamp.org/santchou"
          target="_blank"
          rel="noreferrer"
        >
          <FaFreeCodeCamp style={{ color: "blue", fontSize: "40px" }} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/santchou"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
