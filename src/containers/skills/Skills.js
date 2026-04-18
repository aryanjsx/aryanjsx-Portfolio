import React from "react";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../context/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header-div">
        <Fade direction="up" duration={1000} triggerOnce>
          <h2 id="skills-heading" className="skills-header" style={{ color: theme.text }}>
            What I Do
          </h2>
          <p className="skills-subheader" style={{ color: theme.secondaryText }}>
            Passionate about creating impactful solutions with modern technologies
          </p>
        </Fade>
      </div>
      <SkillSection />
    </div>
  );
}
