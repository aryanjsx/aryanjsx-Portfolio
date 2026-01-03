import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header-div">
        <Fade direction="up" duration={1000} triggerOnce>
          <h2
            id="skills-heading"
            className="skills-header"
            style={{ color: theme.text }}
          >
            What I Do
          </h2>
          <p
            className="skills-subheader"
            style={{ color: theme.secondaryText }}
          >
            Passionate about creating impactful solutions with modern
            technologies
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
