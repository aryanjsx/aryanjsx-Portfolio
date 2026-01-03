import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectsSEO from "./ProjectsSEO";
import { Fade } from "react-awesome-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <ProjectsSEO />
      <div className="projects-main">
        <Header theme={theme} setTheme={props.setTheme} />
        <main id="main-content" className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <section
              className="projects-heading-div"
              aria-labelledby="projects-heading"
            >
              <div className="projects-heading-img-div" aria-hidden="true">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  id="projects-heading"
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </section>
          </Fade>
          <section
            aria-label="Project Portfolio"
            className="repo-cards-div-main"
          >
            {projects.data.map((repo, index) => {
              return <ProjectCard key={index} repo={repo} theme={theme} />;
            })}
          </section>
          <nav
            aria-label="External Links"
            style={{ textAlign: "center", padding: "2rem 0" }}
          >
            <a
              {...styles}
              className="general-btn"
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects on GitHub"
            >
              More Projects (Github)
            </a>
          </nav>
        </main>
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    </>
  );
}

export default Projects;
