import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div>
      <div className="Header">News</div>
      <div className="nav nav-tabs">
        <NavLink to={"/"} className="nav-link">
          News
        </NavLink>
        <NavLink to={"/about"} className="nav-link">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
