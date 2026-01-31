import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EducationImg from "./EducationImg";
import EducationSEO from "./EducationSEO";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";
import { degrees, certifications } from "../../portfolio";

function Education(props) {
  const theme = props.theme;

  return (
    <>
      <EducationSEO />
      <div className="education-main">
        <Header theme={props.theme} setTheme={props.setTheme} />

        <div className="basic-education">
          {/* Hero Section - Same as Experience Page */}
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="education-heading-div">
              <div className="education-heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="education-heading-text-div">
                <h1
                  className="education-heading-text"
                  style={{ color: theme.text }}
                >
                  Aryan Kumar{" "}
                </h1>
                <h2
                  className="education-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Education — Basic Qualification and Certifications
                </h2>
                <p
                  className="education-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I actively participate in hackathons and other tech-related
                  activities. Below are some of my major certifications.
                </p>
              </div>
            </div>
          </Fade>

          {/* Degrees Section */}
          <section className="degrees-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>
                  Degrees Received
                </h3>
                <div
                  className="section-line"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>
            </Fade>

            <div className="degrees-timeline" style={{ color: theme.text }}>
              {degrees.degrees.map((degree, index) => (
                <Fade
                  key={degree.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  duration={800}
                  delay={index * 100}
                  triggerOnce
                >
                  <div className="degree-item">
                    <div
                      className="degree-logo-wrapper"
                      style={{
                        backgroundColor: theme.imageDark || "#1a1a2e",
                        border: `3px solid ${theme.accentColor}`,
                        boxShadow: `0 4px 20px ${theme.accentColor}30`,
                      }}
                    >
                      <img
                        src={require(
                          `../../assests/images/${degree.logo_path}`,
                        )}
                        alt={`Aryan Kumar (AryanJSX) education — ${degree.title}, ${degree.subtitle}`}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="degree-card"
                      style={{
                        backgroundColor: theme.imageDark || "#1a1a2e",
                        border: `1px solid ${theme.text}20`,
                        boxShadow: `0 4px 20px ${theme.text}10`,
                      }}
                    >
                      <div className="degree-card-header">
                        <div>
                          <h3
                            className="degree-institution"
                            style={{ color: theme.text }}
                          >
                            {degree.title}
                          </h3>
                          <p
                            className="degree-type"
                            style={{ color: theme.secondaryText }}
                          >
                            {degree.subtitle}
                          </p>
                        </div>
                        <span
                          className="degree-duration"
                          style={{
                            backgroundColor: `${theme.accentColor}20`,
                            color: theme.accentColor,
                          }}
                        >
                          {degree.duration}
                        </span>
                      </div>
                      <div className="degree-details">
                        {degree.descriptions.map((desc, idx) => (
                          <p key={idx} style={{ color: theme.text }}>
                            {desc}
                          </p>
                        ))}
                      </div>
                      {degree.website_link &&
                        degree.website_link.trim() !== "" && (
                          <a
                            href={degree.website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="degree-link"
                            style={{
                              backgroundColor: theme.accentColor,
                              color: "#fff",
                            }}
                          >
                            Visit Website →
                          </a>
                        )}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="certifications-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>
                  Certifications
                </h3>
                <div
                  className="section-line"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>
            </Fade>

            <div className="certifications-grid">
              {certifications.certifications.map((cert, index) => (
                <Fade
                  key={cert.title}
                  direction="up"
                  duration={600}
                  delay={index * 100}
                  triggerOnce
                >
                  <div
                    className="cert-card"
                    style={{
                      backgroundColor: theme.imageDark || "#1a1a2e",
                      border: `1px solid ${cert.color_code}40`,
                      boxShadow: `0 4px 15px ${cert.color_code}20`,
                    }}
                  >
                    <span
                      className="cert-badge"
                      style={{
                        backgroundColor: cert.color_code,
                        color: "#fff",
                      }}
                    >
                      Verified
                    </span>
                    <a
                      href={cert.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card-inner"
                    >
                      <div
                        className="cert-header"
                        style={{ backgroundColor: `${cert.color_code}15` }}
                      >
                        <img
                          src={require(
                            `../../assests/images/${cert.logo_path}`,
                          )}
                          alt={`Aryan Kumar (AryanJSX) certification — ${cert.title} by ${cert.subtitle}`}
                          loading="lazy"
                        />
                      </div>
                      <div className="cert-body">
                        <h3
                          className="cert-title"
                          style={{ color: theme.text }}
                        >
                          {cert.title}
                        </h3>
                        <p
                          className="cert-issuer"
                          style={{ color: theme.secondaryText }}
                        >
                          {cert.subtitle}
                        </p>
                      </div>
                    </a>
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

export default Education;
