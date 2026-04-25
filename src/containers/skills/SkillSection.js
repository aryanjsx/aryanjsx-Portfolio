import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../data/skills";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../context/ThemeContext";
import FullStackImg from "./FullStackImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg") return <FullStackImg theme={props.theme} />;
  return null;
}

function SkillSection() {
  const { theme } = useTheme();

  return (
    <div>
      {skills.data.map((skill, index) => {
        const isEven = index % 2 === 0;
        return (
          <Fade key={skill.title} direction="up" duration={1000} triggerOnce delay={index * 100}>
            <div
              className={`skills-main-div ${isEven ? "skills-row" : "skills-row-reverse"}`}
              style={{
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
                  <span style={{
                    position: "absolute", bottom: "-8px", left: 0,
                    width: "60px", height: "3px",
                    backgroundColor: theme.accentColor, borderRadius: "2px",
                  }} />
                </h3>
                <div className="skills-icons-wrapper">
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>
                <div>
                  {skill.skills.map((skillSentence) => (
                    <p key={skillSentence} className="subTitle skills-text" style={{ color: theme.secondaryText }}>
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
