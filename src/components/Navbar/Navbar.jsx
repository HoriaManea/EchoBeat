import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { MdDarkMode } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";

function Navbar({ handleChangeTheme, theme }) {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Logo
      </Link>
      <ul className="links">
        <li>
          <Link to="/play-song" className="link">
            Play Song
          </Link>
        </li>
        <li>
          <Link to="/upload-song" className="link">
            Upload Song
          </Link>
        </li>
        {theme === "dark" ? (
          <LuSunMoon
            onClick={handleChangeTheme}
            size={30}
            className="icon-theme"
            color="white"
          />
        ) : (
          <MdDarkMode
            onClick={handleChangeTheme}
            size={30}
            className="icon-theme"
            color="white"
          />
        )}
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
