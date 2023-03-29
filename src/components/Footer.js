import React from "react";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/avyukth-reddy-thigulla/" target="_blank">
        <img src={linkedin} alt="li" className="linkedin" />
      </a>
      <a href="https://github.com/AvyukthReddy" target="_blank">
        <img src={github} alt="gh" className="github" />
      </a>
    </div>
  );
}

export default Footer;
