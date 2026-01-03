import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  return (
    <section
      className="greet-main"
      id="greeting"
      aria-labelledby="greeting-heading"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <Fade direction="left" duration={1000} triggerOnce cascade>
            <p
              className="greeting-intro"
              style={{ color: theme.secondaryText }}
            >
              Welcome to my portfolio
            </p>

            <h1
              id="greeting-heading"
              className="greeting-name"
              style={{ color: theme.text }}
            >
              {greeting.title}
              <br />
              <span style={{ color: theme.accentColor }}>
                {greeting.full_name}
              </span>
              <span className="visually-hidden">
                {" "}
                — aryanjsx, Full Stack Developer & Software Engineer
              </span>
            </h1>

            <span
              className="greeting-username"
              style={{
                backgroundColor: `${theme.accentColor}20`,
                color: theme.accentColor,
                border: `1px solid ${theme.accentColor}40`,
              }}
            >
              @aryanjsx
            </span>

            <p className="greeting-role" style={{ color: theme.text }}>
              I'm a{" "}
              <span
                className="role-highlight"
                style={{
                  color: theme.accentColor,
                }}
              >
                Full Stack Developer
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: theme.accentColor,
                    borderRadius: "2px",
                  }}
                />
              </span>
            </p>

            <p
              className="greeting-description"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            <div className="greeting-social">
              <SocialMedia />
            </div>

            <div className="greeting-buttons">
              <button
                className="btn-primary"
                style={{
                  backgroundColor: theme.accentColor,
                  boxShadow: `0 4px 15px ${theme.accentColor}50`,
                }}
                onClick={() => navigate("/contact")}
                aria-label="Navigate to contact page"
              >
                <span>Contact Me</span>
                <span>→</span>
              </button>
              <a
                className="btn-secondary"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderColor: theme.accentColor,
                  color: theme.accentColor,
                }}
                aria-label="View resume"
              >
                <span>View Resume</span>
                <span>↗</span>
              </a>
            </div>

            <div className="greeting-stats">
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.accentColor }}
                >
                  2+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.secondaryText }}
                >
                  Years Exp
                </span>
              </div>
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.accentColor }}
                >
                  10+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.secondaryText }}
                >
                  Projects
                </span>
              </div>
              <div className="stat-item">
                <span
                  className="stat-number"
                  style={{ color: theme.accentColor }}
                >
                  5+
                </span>
                <span
                  className="stat-label"
                  style={{ color: theme.secondaryText }}
                >
                  Technologies
                </span>
              </div>
            </div>
          </Fade>
        </div>

        <Fade direction="right" duration={1000} triggerOnce>
          <div className="greeting-image-div" aria-hidden="true">
            <FeelingProud theme={theme} />
          </div>
        </Fade>
      </div>
    </section>
  );
}
