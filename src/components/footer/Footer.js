import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <footer className="footer-div" role="contentinfo">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.theme.accentColor, textDecoration: "none" }}
            aria-label="Visit aryanjsx's GitHub profile"
          >
            {greeting.full_name} (aryanjsx)
          </a>
        </p>
        <p
          className="footer-copyright"
          style={{
            color: props.theme.secondaryText,
            fontSize: "0.85rem",
            marginTop: "0.5rem",
          }}
        >
          © {new Date().getFullYear()} aryanjsx. Software Engineer Portfolio.
        </p>
      </Fade>
    </footer>
  );
}
