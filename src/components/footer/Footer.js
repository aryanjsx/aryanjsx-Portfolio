import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../context/ThemeContext";
import { greeting } from "../../data/greeting";
import { socialMediaLinks } from "../../data/socialMedia";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const FOOTER_LINKS = [
  { label: "GitHub", href: socialMediaLinks.github, Icon: FaGithub, aria: "Visit Aryan's GitHub" },
  { label: "LinkedIn", href: socialMediaLinks.linkedin, Icon: FaLinkedinIn, aria: "Visit Aryan's LinkedIn" },
  { label: "Email", href: `mailto:${socialMediaLinks.gmail}`, Icon: FaEnvelope, aria: "Email Aryan" },
  { label: "Twitter", href: socialMediaLinks.twitter, Icon: FaTwitter, aria: "Visit Aryan's Twitter" },
  { label: "Instagram", href: socialMediaLinks.instagram, Icon: FaInstagram, aria: "Visit Aryan's Instagram" },
];

export default function Footer() {
  const { theme } = useTheme();

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
            <p className="footer__copyright" style={{ color: theme.secondaryText }}>
              © {new Date().getFullYear()}
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
              aria-label="Visit Aryan's GitHub profile"
            >
              {greeting.full_name}
            </a>
            <span className="footer__handle" style={{ color: theme.secondaryText }}>
              {" "}
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
                <item.Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </Fade>
    </footer>
  );
}
