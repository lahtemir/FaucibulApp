import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="#about" className="footer-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#articles" className="footer-link">
            ARTICLES
          </a>
        </li>
        <li>
          <a href="#home" className="footer-link">
            HOME
          </a>
        </li>
      </ul>
      <p>Copyright © Faucibul {new Date().getFullYear()}</p>
    </footer>
  );
};
export default Footer;
