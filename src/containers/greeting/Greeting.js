import { useState, useEffect, useMemo } from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, aboutSEO } from "../../data/greeting";
import { experience } from "../../data/experience";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import { useTheme } from "../../context/ThemeContext";
import FeelingProud from "../../assets/illustrations/FeelingProud";

const ROLES = ["Software Engineer", "Gen AI Developer", "Full-Stack Engineer"];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypewriter(words) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (display === currentWord) {
        const timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length + 1));
      }, TYPE_SPEED);
      return () => clearTimeout(timer);
    }

    if (display === "") {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplay(currentWord.slice(0, display.length - 1));
    }, DELETE_SPEED);
    return () => clearTimeout(timer);
  }, [display, wordIndex, isDeleting, words]);

  return display;
}

function getYearsOfExperience() {
  const allDates = experience.sections
    .flatMap((s) => s.experiences)
    .map((e) => e.startDate)
    .filter(Boolean);
  if (allDates.length === 0) return 0;
  const earliest = new Date(allDates.sort()[0]);
  const now = new Date();
  const years = (now - earliest) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.floor(years);
}

const NAV_THOUGHTS = {
  Home: "Welcome to my world! ✨",
  Education: "My degrees & certifications 🎓",
  Experience: "Where I've worked & grown 💼",
  Projects: "Cool stuff I've built 🚀",
  Developer: "GitHub stats & npm packages 👨‍💻",
  Contact: "Let's connect & collaborate! 📬",
};

export default function Greeting({ hoveredNav }) {
  const { theme } = useTheme();
  const router = useRouter();
  const typedRole = useTypewriter(ROLES);

  const stats = useMemo(() => ({
    yearsExp: getYearsOfExperience(),
    projectCount: projects.data.length,
    techCount: skills.data.reduce((sum, s) => sum + s.softwareSkills.length, 0),
  }), []);

  return (
    <section className="greet-main" id="greeting" aria-labelledby="greeting-heading">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <Fade direction="left" duration={1000} triggerOnce cascade>
            <p className="greeting-intro" style={{ color: theme.secondaryText }}>
              Welcome to my portfolio
            </p>
            <h1 id="greeting-heading" className="greeting-name" style={{ color: theme.text }}>
              Aryan Kumar{" "}
            </h1>
            <h2 className="visually-hidden">Software Engineer & Full Stack Developer</h2>
            <p className="greeting-role" style={{ color: theme.text }}>
              I&apos;m a{" "}
              <span className="role-highlight" style={{ color: theme.accentColor }}>
                {typedRole}
                <span
                  className="typewriter-cursor"
                  style={{ color: theme.accentColor }}
                >
                  |
                </span>
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
            <p className="greeting-description" style={{ color: theme.secondaryText }}>
              {greeting.subTitle}
            </p>
            <div className="visually-hidden" aria-hidden="true">
              <p>{aboutSEO.paragraph}</p>
            </div>
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
                onClick={() => router.push("/contact")}
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
                <span className="stat-number" style={{ color: theme.accentColor }}>{stats.yearsExp}+</span>
                <span className="stat-label" style={{ color: theme.secondaryText }}>Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: theme.accentColor }}>{stats.projectCount}+</span>
                <span className="stat-label" style={{ color: theme.secondaryText }}>Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: theme.accentColor }}>{stats.techCount}</span>
                <span className="stat-label" style={{ color: theme.secondaryText }}>Technologies</span>
              </div>
            </div>
          </Fade>
        </div>
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="greeting-image-div" aria-hidden="true" style={{ position: "relative" }}>
            {hoveredNav && NAV_THOUGHTS[hoveredNav] && (
              <div className="thought-bubble" style={{
                color: theme.text,
                backgroundColor: theme.imageDark,
                borderColor: `${theme.secondaryText}40`,
              }}>
                {NAV_THOUGHTS[hoveredNav]}
                <span className="thought-dot thought-dot-1" style={{ backgroundColor: theme.imageDark, borderColor: `${theme.secondaryText}40` }} />
                <span className="thought-dot thought-dot-2" style={{ backgroundColor: theme.imageDark, borderColor: `${theme.secondaryText}40` }} />
              </div>
            )}
            <FeelingProud theme={theme} />
          </div>
        </Fade>
      </div>
    </section>
  );
}
