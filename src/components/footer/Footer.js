import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";

const FOOTER_LINKS = [
  {
    label: "GitHub",
    href: socialMediaLinks.github,
    icon: "fab fa-github",
    aria: "Visit aryanjsx's GitHub",
  },
  {
    label: "LinkedIn",
    href: socialMediaLinks.linkedin,
    icon: "fab fa-linkedin-in",
    aria: "Visit aryanjsx's LinkedIn",
  },
  {
    label: "Email",
    href: `mailto:${socialMediaLinks.gmail}`,
    icon: "fas fa-envelope",
    aria: "Email aryanjsx",
  },
  {
    label: "Twitter",
    href: socialMediaLinks.twitter,
    icon: "fab fa-twitter",
    aria: "Visit aryanjsx's Twitter",
  },
  {
    label: "Instagram",
    href: socialMediaLinks.instagram,
    icon: "fab fa-instagram",
    aria: "Visit aryanjsx's Instagram",
  },
];

export default function Footer(props) {
  const theme = props.theme;

  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{
        "--footer-bg": theme.body,
        "--footer-border": theme.accentColor,
        "--footer-text": theme.secondaryText,
        "--footer-accent": theme.accentColor,
        "--footer-accent-hover": theme.accentBright,
      }}
    >
      <Fade triggerOnce>
        <div className="footer__accent-line" />
        <div className="footer__row">
          <div className="footer__left">
            <p
              className="footer__copyright"
              style={{ color: theme.secondaryText }}
            >
              © {new Date().getFullYear()} aryanjsx
            </p>
          </div>
          <p className="footer__tagline" style={{ color: theme.secondaryText }}>
            Made by{" "}
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              style={{ color: theme.accentColor }}
              aria-label="Visit aryanjsx's GitHub profile"
            >
              {greeting.full_name}
            </a>
            <span
              className="footer__handle"
              style={{ color: theme.secondaryText }}
            >
              {" "}
              (aryanjsx)
            </span>
          </p>
          <nav className="footer__social" aria-label="Social links">
            {FOOTER_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={item.aria}
                style={{ color: theme.secondaryText }}
              >
                <i className={item.icon} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </Fade>
    </footer>
  );
}
