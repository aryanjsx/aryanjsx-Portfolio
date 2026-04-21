"use client";

import Image from "next/image";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import SocialMedia from "../../src/components/socialMedia/SocialMedia";
import BlogsImg from "../../src/assets/illustrations/BlogsImg";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../../src/data/greeting";
import { contactPageData } from "../../src/data/contact";
import { useTheme } from "../../src/context/ThemeContext";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

export default function ContactClient() {
  const { theme } = useTheme();

  return (
    <div className="contact-main">
      <Header />
      <main id="main-content" className="basic-contact">
        <Fade direction="down" duration={2000} triggerOnce>
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <div className="profile-pic-wrapper">
                <div
                  className="profile-pic-ring"
                  style={{ borderColor: theme.accentColor }}
                />
                <Image
                  className="profile-pic"
                  src={`/images/${ContactData.profile_image_path}`}
                  alt="Contact Aryan Kumar"
                  width={200}
                  height={200}
                  priority
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
                style={{ backgroundColor: "#10B98120", color: "#10B981" }}
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
                Contact Me
              </h1>
              <h2
                className="contact-heading-sub-text"
                style={{ color: theme.accentColor }}
              >
                Let&apos;s Work Together
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
        
        <section className="blog-section">
          <Fade direction="up" duration={2000} triggerOnce>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h3 className="blog-heading-text" style={{ color: theme.text }}>
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
        
      </main>
      <Footer />
    </div>
  );
}
