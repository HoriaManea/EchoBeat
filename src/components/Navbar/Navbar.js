import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { MdDarkMode } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Logo
      </Link>
      <ul className="links">
        <LuSunMoon size={30} className="icon-theme" />
        <li>
          <Link to="/register" className="link">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
