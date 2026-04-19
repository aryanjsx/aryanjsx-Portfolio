import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "../../context/ThemeContext";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

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
    { href: "/developer", label: "Developer" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="header"
      style={{ backgroundColor: `${theme.body}e6` }}
    >
      <Link href="/" className="logo" aria-label="Go to homepage">
        <Image
          src="/logo.png"
          alt="aryanjsx logo"
          width={40}
          height={40}
          className="logo-img"
          priority
        />
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
                className={pathname === link.href ? "active" : ""}
                style={{ color: theme.text }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
