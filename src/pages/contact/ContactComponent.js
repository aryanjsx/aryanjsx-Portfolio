import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import ContactSEO from "./ContactSEO";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import {
  greeting,
  contactPageData,
  socialMediaLinks,
} from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: greeting.mail,
      link: `mailto:${greeting.mail}`,
      color: "#EA4335",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "@aryanjsx",
      link: socialMediaLinks.linkedin,
      color: "#0A66C2",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "@aryanjsx",
      link: socialMediaLinks.github,
      color: "#333",
    },
    {
      icon: "𝕏",
      title: "Twitter",
      value: "@aryanjsx",
      link: socialMediaLinks.twitter,
      color: "#1DA1F2",
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@aryanjsx",
      link: socialMediaLinks.instagram,
      color: "#E4405F",
    },
  ];

  return (
    <>
      <ContactSEO />
      <div className="contact-main">
        <Header theme={theme} setTheme={props.setTheme} />

        <div className="basic-contact">
          {/* Hero Section - Same structure as Experience/Education */}
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <div className="profile-pic-wrapper">
                  <div
                    className="profile-pic-ring"
                    style={{ borderColor: theme.accentColor }}
                  />
                  <img
                    className="profile-pic"
                    src={require(
                      `../../assests/images/${ContactData.profile_image_path}`,
                    )}
                    alt="Aryan Kumar (AryanJSX) — Software Engineer & Full Stack Developer — Contact Aryan Kumar"
                    loading="lazy"
                    style={{
                      border: `4px solid ${theme.imageDark}`,
                      boxShadow: `0 20px 50px ${theme.text}20`,
                    }}
                  />
                </div>
              </div>
              <div className="contact-heading-text-div">
                <div
                  className="availability-badge"
                  style={{
                    backgroundColor: "#10B98120",
                    color: "#10B981",
                  }}
                >
                  <span
                    className="availability-dot"
                    style={{ backgroundColor: "#10B981" }}
                  />
                  Available for opportunities
                </div>
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text, marginTop: "20px" }}
                >
                  Aryan Kumar (AryanJSX)
                </h1>
                <h2
                  className="contact-heading-sub-text"
                  style={{ color: theme.accentColor }}
                >
                  Contact Aryan Kumar — Let's Work Together
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData.description}
                </p>
                <div className="contact-social">
                  <SocialMedia />
                </div>
                <div className="contact-buttons">
                  <a
                    className="btn-primary"
                    href={`mailto:${greeting.mail}`}
                    style={{
                      backgroundColor: theme.accentColor,
                      boxShadow: `0 4px 15px ${theme.accentColor}50`,
                    }}
                  >
                    <span>📧</span>
                    <span>Send Email</span>
                  </a>
                  <a
                    className="btn-secondary"
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      borderColor: theme.accentColor,
                      color: theme.accentColor,
                    }}
                  >
                    <span>📄</span>
                    <span>View Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Contact Methods Section */}
          <section className="contact-methods-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>
                  Ways to Reach Me
                </h3>
                <div
                  className="section-line"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>
            </Fade>

            <div className="contact-cards-grid">
              {contactMethods.map((method, index) => (
                <Fade
                  key={method.title}
                  direction="up"
                  duration={600}
                  delay={index * 100}
                  triggerOnce
                >
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                    style={{
                      backgroundColor: theme.imageDark,
                      border: `1px solid ${theme.text}10`,
                      boxShadow: `0 4px 20px ${theme.text}08`,
                    }}
                  >
                    <div
                      className="contact-card-icon"
                      style={{
                        backgroundColor: `${method.color}20`,
                      }}
                    >
                      {method.icon}
                    </div>
                    <h3
                      className="contact-card-title"
                      style={{ color: theme.text }}
                    >
                      {method.title}
                    </h3>
                    <p
                      className="contact-card-value"
                      style={{ color: theme.secondaryText }}
                    >
                      {method.value}
                    </p>
                  </a>
                </Fade>
              ))}
            </div>
          </section>

          {/* Blog Section - Same structure as Experience/Education */}
          <section className="blog-section">
            <Fade direction="up" duration={2000} triggerOnce>
              <div className="blog-heading-div">
                <div className="blog-heading-text-div">
                  <h3
                    className="blog-heading-text"
                    style={{ color: theme.text }}
                  >
                    {blogSection.title}
                  </h3>
                  <p
                    className="blog-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {blogSection.subtitle}
                  </p>
                  <div className="blogsite-btn-div">
                    <a
                      className="btn-primary"
                      href={blogSection.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: theme.accentColor,
                        boxShadow: `0 4px 15px ${theme.accentColor}50`,
                      }}
                    >
                      <span>📝</span>
                      <span>Read My Blogs at medium (@aryanjsx)</span>
                    </a>
                  </div>
                </div>
                <div className="blog-heading-img-div" aria-hidden="true">
                  <BlogsImg theme={theme} />
                </div>
              </div>
            </Fade>
          </section>

          {/* Quick Links */}
          <Fade direction="up" duration={800} triggerOnce>
            <div className="quick-links">
              <a
                href={socialMediaLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
              >
                <div
                  className="quick-link-icon"
                  style={{
                    backgroundColor: `${theme.accentColor}20`,
                  }}
                >
                  💻
                </div>
                <span
                  className="quick-link-label"
                  style={{ color: theme.secondaryText }}
                >
                  LeetCode
                </span>
              </a>
              <a
                href={socialMediaLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
              >
                <div
                  className="quick-link-icon"
                  style={{
                    backgroundColor: `${theme.accentColor}20`,
                  }}
                >
                  🏆
                </div>
                <span
                  className="quick-link-label"
                  style={{ color: theme.secondaryText }}
                >
                  HackerRank
                </span>
              </a>
              <a
                href={socialMediaLinks.gfg}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
              >
                <div
                  className="quick-link-icon"
                  style={{
                    backgroundColor: `${theme.accentColor}20`,
                  }}
                >
                  🧑‍💻
                </div>
                <span
                  className="quick-link-label"
                  style={{ color: theme.secondaryText }}
                >
                  GeeksforGeeks
                </span>
              </a>
              <a
                href={socialMediaLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
              >
                <div
                  className="quick-link-icon"
                  style={{
                    backgroundColor: `${theme.accentColor}20`,
                  }}
                >
                  ✍️
                </div>
                <span
                  className="quick-link-label"
                  style={{ color: theme.secondaryText }}
                >
                  Medium
                </span>
              </a>
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
              >
                <div
                  className="quick-link-icon"
                  style={{
                    backgroundColor: `${theme.accentColor}20`,
                  }}
                >
                  📸
                </div>
                <span
                  className="quick-link-label"
                  style={{ color: theme.secondaryText }}
                >
                  Instagram
                </span>
              </a>
            </div>
          </Fade>
        </div>

        <Footer theme={props.theme} />
      </div>
    </>
  );
}

export default Contact;
