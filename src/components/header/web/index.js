import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#work"><img alt="" src="https://img.icons8.com/ios/25/000000/about.png"/>About</a>
      </div>
      <div className="web-option">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
