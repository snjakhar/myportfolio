import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a
            className="social-icon-div"
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="social" className="social-bro" src={item.icon} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
