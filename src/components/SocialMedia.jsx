import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.freecodecamp.org/legray" target="_blank">
          <FaFreeCodeCamp style={{ color: "blue", fontSize: "40px" }} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/santchou" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
