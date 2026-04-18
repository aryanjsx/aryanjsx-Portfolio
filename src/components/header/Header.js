import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../../context/ThemeContext";
import { greeting } from "../../data/greeting";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const icon =
    theme.name === "dark" ? (
      <HiMoon strokeWidth={1} size={20} color="#A7A7A7" />
    ) : (
      <CgSun strokeWidth={1} size={20} color="#F9D784" />
    );

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Fade direction="down" duration={1000} triggerOnce>
      <header className="header">
        <Link href="/" className="logo" aria-label="Go to homepage">
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </Link>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-hidden="true"
        />

        <div className="theme-btn-wrapper">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={router.pathname === link.href ? "active" : ""}
                  style={{ color: theme.text }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fade>
  );
}

export default Header;
