import IconifyIcon from "../IconifyIcon";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => (
            <li
              key={logo.skillName}
              className="software-skill-inline"
              name={logo.skillName}
            >
              <span className="skill-tooltip">{logo.skillName}</span>
              <IconifyIcon
                icon={logo.fontAwesomeClassname}
                style={logo.style}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
