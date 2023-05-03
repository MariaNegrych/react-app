import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="nav nav-tabs">
      <NavLink to={"/"} className="nav-link">
        Home
      </NavLink>
      <NavLink to={"/about"} className="nav-link">
        About
      </NavLink>
    </div>
  );
}

export default Header;
