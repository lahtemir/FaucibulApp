import React, { useState } from "react";
import heroImg from "../images/hero4.jpg";
import logo from "../images/logo.png";
import { HiMenu } from "react-icons/hi";
import NavLink from "./navLinks";

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
          <NavLink name="HOME" linkName="#home" />
          <NavLink name="ABOUT" linkName="#about" />
          <NavLink name="ARTICLES" linkName="#articles" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
