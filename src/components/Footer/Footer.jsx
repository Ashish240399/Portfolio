import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Ashishkumarmohanty7797@gmail.com</span>
        <div className="f-icons">
          <Twitter color="white" size={"3rem"} />
          <a href="https://www.linkedin.com/in/ashish-kumar-mohanty/">
            <Linkedin color="white" size={"3rem"} />
          </a>
          
          <a href="https://github.com/Ashish240399">
            <Gitub color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
