import React from "react";
import { pageLinks } from "../Data";
import NavLink from "./navLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <NavLink
              key={link.id}
              href={link.href}
              itemClass="footer-link"
              title={link.text}
            />
          );
        })}
      </ul>
      <p>Copyright © Faucibul {new Date().getFullYear()}</p>
    </footer>
  );
};
export default Footer;
