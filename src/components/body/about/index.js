import React from "react";
 import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 
          <img alt="" src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" width="30px"></img>
          , I am <br />
          <span className="info-name animate-charcter">Srinivas Jakhar</span>.<br /> A dedicated and efficient full stack web developer who is self-motivated and curious, with a keen interest in building user-centric products.
        </div>
        <div className="about-photo">
          <img
            alt="me"
            src={require("../../../assets/image/sri.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
