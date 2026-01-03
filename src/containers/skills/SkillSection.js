import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return null;
}

function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, index) => {
        const isEven = index % 2 === 0;

        return (
          <Fade
            key={skill.title}
            direction="up"
            duration={1000}
            triggerOnce
            delay={index * 100}
          >
            <div
              className="skills-main-div"
              style={{
                flexDirection: isEven ? "row" : "row-reverse",
                backgroundColor: `${theme.text}05`,
                border: `1px solid ${theme.text}10`,
              }}
            >
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>

              <div className="skills-text-div">
                <h3 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      left: 0,
                      width: "60px",
                      height: "3px",
                      backgroundColor: theme.accentColor,
                      borderRadius: "2px",
                    }}
                  />
                </h3>

                <div className="skills-icons-wrapper">
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>

                <div>
                  {skill.skills.map((skillSentence) => (
                    <p
                      key={skillSentence}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default SkillSection;
