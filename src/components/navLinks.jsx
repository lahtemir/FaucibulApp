import React, { useState } from "react";

const NavLink = ({ href, title, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {title}
      </a>
    </li>
  );
};

export default NavLink;
