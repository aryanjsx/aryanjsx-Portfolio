import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade direction="down" duration={1000} triggerOnce>
      <header className="header">
        {/* Logo - Left */}
        <NavLink to={link} tag={Link} className="logo">
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </NavLink>

        {/* Mobile menu checkbox */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />

        {/* Theme Button - Right */}
        <div className="theme-btn-wrapper">
          <button {...styles} onClick={changeTheme} aria-label="Toggle theme">
            {icon}
          </button>
        </div>

        {/* Mobile menu icon */}
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        {/* Navigation Links - Center */}
        <nav className="menu">
          <ul className="nav-links">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                style={{ color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                style={{ color: theme.text }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                style={{ color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                style={{ color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                style={{ color: theme.text }}
              >
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
