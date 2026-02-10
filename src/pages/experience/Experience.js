import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceSEO from "./ExperienceSEO";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-awesome-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  const [activeSection, setActiveSection] = useState("all");

  // Parse duration string to a sortable end date (YYYY-MM). "Present" = newest.
  const getEndDateSortKey = (duration) => {
    if (!duration || typeof duration !== "string") return "0000-00";
    const parts = duration.split(/\s*-\s*/).map((s) => s.trim());
    const endPart = parts[parts.length - 1];
    if (!endPart) return "0000-00";
    if (/present/i.test(endPart)) return "9999-12";
    const months = {
      jan: "01",
      january: "01",
      feb: "02",
      february: "02",
      mar: "03",
      march: "03",
      apr: "04",
      april: "04",
      may: "05",
      jun: "06",
      june: "06",
      jul: "07",
      july: "07",
      aug: "08",
      august: "08",
      sep: "09",
      sept: "09",
      september: "09",
      oct: "10",
      october: "10",
      nov: "11",
      november: "11",
      dec: "12",
      december: "12",
    };
    const match = endPart.match(/^([a-z]+)\s*(\d{4})$/i);
    if (match) {
      const monthKey = match[1].toLowerCase();
      const month = months[monthKey] || "01";
      return `${match[2]}-${month}`;
    }
    return "0000-00";
  };

  // Flatten all experiences with their section type
  const allExperiences = experience.sections.flatMap((section) =>
    section.experiences.map((exp) => ({
      ...exp,
      sectionType: section.title,
    })),
  );

  // Sort so latest (most recent end date / Present) is on top
  const sortedExperiences = [...allExperiences].sort((a, b) =>
    getEndDateSortKey(b.duration).localeCompare(getEndDateSortKey(a.duration)),
  );

  // Filter experiences based on active tab
  const filteredExperiences =
    activeSection === "all"
      ? sortedExperiences
      : sortedExperiences.filter((exp) => exp.sectionType === activeSection);

  return (
    <>
      <ExperienceSEO />
      <div className="experience-main">
        <Header theme={theme} setTheme={props.setTheme} />

        <div className="basic-experience">
          {/* Hero Section - Same structure as Education Page */}
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  Aryan Kumar{" "}
                </h1>
                <h2
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience.title} — {experience.subtitle}
                </h2>
                <h3 className="visually-hidden">
                  Software Engineer Experience
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Timeline Section */}
          <section className="experience-timeline-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>
                  My Journey
                </h3>
                <div
                  className="section-line"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>

              {/* Filter Tabs */}
              <div className="experience-tabs">
                <button
                  className={`experience-tab ${
                    activeSection === "all" ? "active" : ""
                  }`}
                  style={{
                    borderColor: theme.accentColor,
                    color: activeSection === "all" ? "#fff" : theme.text,
                    backgroundColor:
                      activeSection === "all"
                        ? theme.accentColor
                        : "transparent",
                  }}
                  onClick={() => setActiveSection("all")}
                >
                  All
                </button>
                {experience.sections.map((section) => (
                  <button
                    key={section.title}
                    className={`experience-tab ${
                      activeSection === section.title ? "active" : ""
                    }`}
                    style={{
                      borderColor: theme.accentColor,
                      color:
                        activeSection === section.title ? "#fff" : theme.text,
                      backgroundColor:
                        activeSection === section.title
                          ? theme.accentColor
                          : "transparent",
                    }}
                    onClick={() => setActiveSection(section.title)}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </Fade>

            {/* Timeline */}
            <div className="experience-timeline" style={{ color: theme.text }}>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "3px",
                  height: "100%",
                  backgroundColor: theme.accentColor,
                  borderRadius: "2px",
                  opacity: 0.3,
                }}
              />
              {filteredExperiences.map((exp, index) => (
                <Fade
                  key={`${exp.title}-${exp.company}`}
                  direction={index % 2 === 0 ? "left" : "right"}
                  duration={800}
                  delay={index * 100}
                  triggerOnce
                >
                  <div className="timeline-item">
                    <div
                      className="timeline-dot"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                    <div
                      className="timeline-card"
                      style={{
                        backgroundColor: theme.imageDark,
                        border: `1px solid ${exp.color || theme.accentColor}40`,
                        boxShadow: `0 4px 20px ${theme.text}08`,
                      }}
                    >
                      <div className="timeline-card-header">
                        <img
                          className="company-logo"
                          src={require(`../../assests/images/${exp.logo_path}`)}
                          alt={`Aryan Kumar (AryanJSX) — ${exp.title} at ${exp.company} — Software Engineer experience`}
                          style={{
                            backgroundColor: theme.body,
                            border: `1px solid ${theme.text}10`,
                          }}
                          loading="lazy"
                        />
                        <div className="timeline-card-info">
                          <h3
                            className="timeline-card-title"
                            style={{ color: theme.text }}
                          >
                            {exp.title}
                          </h3>
                          <p className="timeline-card-company">
                            <a
                              href={exp.company_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: theme.accentColor }}
                            >
                              {exp.company}
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="timeline-card-meta">
                        <span
                          className="meta-badge"
                          style={{
                            backgroundColor: `${theme.accentColor}15`,
                            color: theme.accentColor,
                          }}
                        >
                          📅 {exp.duration}
                        </span>
                        <span
                          className="meta-badge"
                          style={{
                            backgroundColor: `${theme.text}10`,
                            color: theme.secondaryText,
                          }}
                        >
                          📍 {exp.location}
                        </span>
                        <span
                          className="meta-badge"
                          style={{
                            backgroundColor: `${
                              exp.color || theme.accentColor
                            }20`,
                            color: exp.color || theme.accentColor,
                          }}
                        >
                          {exp.sectionType}
                        </span>
                      </div>

                      <div
                        className="timeline-card-description"
                        style={{ color: theme.secondaryText }}
                      >
                        {exp.description.split("\n").map((line, i) => {
                          const trimmedLine = line.trim();
                          if (trimmedLine) {
                            return (
                              <p key={i} style={{ margin: "0.4rem 0" }}>
                                {trimmedLine}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </section>
        </div>

        <Footer theme={props.theme} />
      </div>
    </>
  );
}

export default Experience;
