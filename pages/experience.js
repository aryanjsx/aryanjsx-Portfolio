import React, { useState } from "react";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import SEO from "../src/components/SEO/SEO";
import { experience } from "../src/data/experience";
import { Fade } from "react-awesome-reveal";
import ExperienceImg from "../src/assets/illustrations/ExperienceImg";
import { getEndDateSortKey } from "../src/utils/experienceDateSort";
import { useTheme } from "../src/context/ThemeContext";

const EXPERIENCE_LOGO_MAP = {
  "cra.png": "/images/cra.png",
  "lti.jpg": "/images/lti.jpg",
};
const DEFAULT_LOGO = "/images/cra.png";

export default function ExperiencePage() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("all");

  const allExperiences = experience.sections.flatMap((section) =>
    section.experiences.map((exp) => ({ ...exp, sectionType: section.title }))
  );
  const sortedExperiences = [...allExperiences].sort((a, b) =>
    getEndDateSortKey(b.duration).localeCompare(getEndDateSortKey(a.duration))
  );
  const filteredExperiences =
    activeSection === "all"
      ? sortedExperiences
      : sortedExperiences.filter((exp) => exp.sectionType === activeSection);

  return (
    <>
      <SEO path="/experience" keywords="aryanjsx, aryan kumar, aryan kumar software engineer, experience, software engineer ltimindtree, full stack developer" />
      <div className="experience-main">
        <Header />
        <main id="main-content" className="basic-experience">
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text" style={{ color: theme.text }}>Aryan Kumar </h1>
                <h2 className="experience-heading-sub-text" style={{ color: theme.text }}>
                  {experience.title} — {experience.subtitle}
                </h2>
                <h3 className="visually-hidden">Software Engineer Experience</h3>
                <p className="experience-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>
          <section className="experience-timeline-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>My Journey</h3>
                <div className="section-line" style={{ backgroundColor: theme.accentColor }} />
              </div>
              <div className="experience-tabs">
                <button
                  className={`experience-tab ${activeSection === "all" ? "active" : ""}`}
                  style={{ borderColor: theme.accentColor, color: activeSection === "all" ? "#fff" : theme.text, backgroundColor: activeSection === "all" ? theme.accentColor : "transparent" }}
                  onClick={() => setActiveSection("all")}
                >All</button>
                {experience.sections.map((section) => (
                  <button key={section.title}
                    className={`experience-tab ${activeSection === section.title ? "active" : ""}`}
                    style={{ borderColor: theme.accentColor, color: activeSection === section.title ? "#fff" : theme.text, backgroundColor: activeSection === section.title ? theme.accentColor : "transparent" }}
                    onClick={() => setActiveSection(section.title)}
                  >{section.title}</button>
                ))}
              </div>
            </Fade>
            <div className="experience-timeline" style={{ color: theme.text }}>
              <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "3px", height: "100%", backgroundColor: theme.accentColor, borderRadius: "2px", opacity: 0.3 }} />
              {filteredExperiences.map((exp, index) => (
                <Fade key={`${exp.title}-${exp.company}`} direction={index % 2 === 0 ? "left" : "right"} duration={800} delay={index * 100} triggerOnce>
                  <div className="timeline-item">
                    <div className="timeline-dot" style={{ backgroundColor: theme.accentColor }} />
                    <div className="timeline-card" style={{ backgroundColor: theme.imageDark, border: `1px solid ${exp.color || theme.accentColor}40`, boxShadow: `0 4px 20px ${theme.text}08` }}>
                      <div className="timeline-card-header">
                        <img className="company-logo"
                          src={EXPERIENCE_LOGO_MAP[exp.logo_path] || DEFAULT_LOGO}
                          alt={`Aryan Kumar (AryanJSX) — ${exp.title} at ${exp.company} — Software Engineer experience`}
                          style={{ backgroundColor: theme.body, border: `1px solid ${theme.text}10` }}
                          loading="lazy" />
                        <div className="timeline-card-info">
                          <h3 className="timeline-card-title" style={{ color: theme.text }}>{exp.title}</h3>
                          <p className="timeline-card-company">
                            <a href={exp.company_url} target="_blank" rel="noopener noreferrer" style={{ color: theme.accentColor }}>{exp.company}</a>
                          </p>
                        </div>
                      </div>
                      <div className="timeline-card-meta">
                        <span className="meta-badge" style={{ backgroundColor: `${theme.accentColor}15`, color: theme.accentColor }}>📅 {exp.duration}</span>
                        <span className="meta-badge" style={{ backgroundColor: `${theme.text}10`, color: theme.secondaryText }}>📍 {exp.location}</span>
                        <span className="meta-badge" style={{ backgroundColor: `${exp.color || theme.accentColor}20`, color: exp.color || theme.accentColor }}>{exp.sectionType}</span>
                      </div>
                      <div className="timeline-card-description" style={{ color: theme.secondaryText }}>
                        {exp.description.split("\n").map((line, i) => {
                          const trimmedLine = line.trim();
                          if (trimmedLine) return <p key={i} style={{ margin: "0.4rem 0" }}>{trimmedLine}</p>;
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
