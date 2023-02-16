import React, { useState } from "react";
import heroImg from "../images/hero4.jpg";
import logo from "../images/logo.png";
import { HiMenu } from "react-icons/hi";
import NavLink from "./navLinks";
import { pageLinks } from "../Data";

function Header() {
  const [isNav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!isNav);
  };
  return (
    <header>
      <nav>
        <img src={logo} alt="" className="logo" />
        <button className="hamburger" onClick={handleClick}>
          <HiMenu />
        </button>

        <ul className={isNav ? "nav-links" : "hamburgerMenu"}>
          {pageLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                href={link.href}
                title={link.text}
                itemClass="nav-link"
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
