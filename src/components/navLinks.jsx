import React from "react";

const NavLink = (props) => {
  return (
    <li>
      <a href={props.linkName} className="nav-link">
        {props.name}
      </a>
    </li>
  );
};

export default NavLink;
