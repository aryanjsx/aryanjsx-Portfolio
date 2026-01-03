import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import ExperienceSEO from "./ExperienceSEO";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-awesome-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  return (
    <>
      <ExperienceSEO />
      <div className="experience-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <main id="main-content" className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <section
              className="experience-heading-div"
              aria-labelledby="experience-heading"
            >
              <div className="experience-heading-img-div" aria-hidden="true">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  id="experience-heading"
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h2
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h2>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </section>
          </Fade>
          <section aria-label="Work History">
            <ExperienceAccordion
              sections={experience["sections"]}
              theme={theme}
            />
          </section>
        </main>
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    </>
  );
}

export default Experience;
