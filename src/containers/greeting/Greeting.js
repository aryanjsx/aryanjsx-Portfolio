import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <section
        className="greet-main"
        id="greeting"
        aria-labelledby="greeting-heading"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 id="greeting-heading" className="greeting-text">
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}
                </span>
                <span style={{ color: theme.secondaryText }}> (</span>
                <strong style={{ color: theme.accentColor }}>aryanjsx</strong>
                <span style={{ color: theme.secondaryText }}>). </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <nav
                className="portfolio-repo-btn-div"
                aria-label="Contact navigation"
              >
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                  aria-label="Navigate to contact page"
                >
                  Contact Me
                </button>
              </nav>
            </div>
          </div>
          <div className="greeting-image-div" aria-hidden="true">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </section>
    </Fade>
  );
}
