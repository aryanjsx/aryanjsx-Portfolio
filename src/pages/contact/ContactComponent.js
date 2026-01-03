/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import ContactSEO from "./ContactSEO";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <ContactSEO />
      <div className="contact-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <main id="main-content" className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <section
              className="contact-heading-div"
              aria-labelledby="contact-heading"
            >
              <div className="contact-heading-img-div">
                <img
                  className="profile-pic"
                  src={require(
                    `../../assests/images/${ContactData["profile_image_path"]}`,
                  )}
                  alt="Aryan Kumar (aryanjsx) - Software Engineer profile photo"
                  loading="lazy"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  id="contact-heading"
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia />
                <nav
                  aria-label="Resume and Contact Links"
                  style={{ marginTop: "1.5rem" }}
                >
                  <a
                    {...styles}
                    className="general-btn"
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Aryan Kumar's resume"
                  >
                    See my Resume
                  </a>
                </nav>
              </div>
            </section>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <section
              className="blog-heading-div"
              aria-labelledby="blog-heading"
            >
              <div className="blog-heading-text-div">
                <h2
                  id="blog-heading"
                  className="blog-heading-text"
                  style={{ color: theme.text }}
                >
                  {blogSection["title"]}
                </h2>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <a
                    {...styles}
                    className="general-btn"
                    href={blogSection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit aryanjsx's Medium blog"
                  >
                    My Medium Profile
                  </a>
                </div>
              </div>
              <div className="blog-heading-img-div" aria-hidden="true">
                <BlogsImg theme={theme} />
              </div>
            </section>
          </Fade>
        </main>
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    </>
  );
}

export default Contact;
