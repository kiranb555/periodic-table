import React from "react";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>©2020</div>
      <div>Developed by Kiran B, Bangalore,India</div>
      <div className="footer_social">
        <div>
          <a
            href="https://twitter.com/7__kiran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="twitter"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/kiran-b-805554170/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin-2.png"
              alt="linked in"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/kiranb555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
