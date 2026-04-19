"use client";

import Image from "next/image";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import EducationImg from "../../src/assets/illustrations/EducationImg";
import { Fade } from "react-awesome-reveal";
import { degrees, certifications } from "../../src/data/education";
import { useTheme } from "../../src/context/ThemeContext";

export default function EducationClient() {
  const { theme } = useTheme();

  return (
    <div className="education-main">
      <Header />
      <main id="main-content" className="basic-education">
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
                Education
              </h1>
              <h2
                className="education-heading-sub-text"
                style={{ color: theme.text }}
              >
                Basic Qualification and Certifications
              </h2>
              <p
                className="education-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I regularly engage in hackathons and technology-driven events.
                Below is a summary of my educational background and major
                certifications.
              </p>
            </div>
          </div>
        </Fade>
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
                    <Image
                      src={`/images/${degree.logo_path}`}
                      alt={`Aryan Kumar education — ${degree.title}, ${degree.subtitle}`}
                      width={80}
                      height={80}
                      style={{ objectFit: "contain" }}
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
                    style={{ backgroundColor: cert.color_code, color: "#fff" }}
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
                      <Image
                        src={`/images/${cert.logo_path}`}
                        alt={`Aryan Kumar certification — ${cert.title} by ${cert.subtitle}`}
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="cert-body">
                      <h3 className="cert-title" style={{ color: theme.text }}>
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
      </main>
      <Footer />
    </div>
  );
}
