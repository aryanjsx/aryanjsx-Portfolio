import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(theme.name);

  function changeTheme() {
    const next = currTheme === "light" ? "dark" : "light";
    props.setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setCurrTheme(next);
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon strokeWidth={1} size={20} color="#A7A7A7" />
    ) : (
      <CgSun strokeWidth={1} size={20} color="#F9D784" />
    );

  return (
    <Fade direction="down" duration={1000} triggerOnce>
      <header className="header">
        <NavLink to={link} className="logo" aria-label="Go to homepage">
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </NavLink>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-hidden="true"
        />

        <div className="theme-btn-wrapper">
          <button
            className="theme-toggle-btn"
            onClick={changeTheme}
            aria-label="Toggle theme"
            style={{
              backgroundColor:
                theme.name === "light" ? "#7CD1F7" : "#292C3F",
            }}
          >
            {icon}
          </button>
        </div>

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Toggle navigation menu"
          role="button"
        >
          <span className="navicon"></span>
        </label>

        <nav className="menu" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <NavLink to="/home" style={{ color: theme.text }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" style={{ color: theme.text }}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" style={{ color: theme.text }}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" style={{ color: theme.text }}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{ color: theme.text }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fade>
  );
}

export default Header;
