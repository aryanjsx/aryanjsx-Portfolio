import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectsSEO from "./ProjectsSEO";
import { Fade } from "react-awesome-reveal";
import {
  projectsHeader,
  projects,
  npmPackages,
  socialMediaLinks,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;

  const npmUrl = (name) =>
    `https://www.npmjs.com/package/${encodeURIComponent(name)}`;

  const getInstallCommand = (pkg) =>
    typeof pkg.installCommand === "string" && pkg.installCommand.trim() !== ""
      ? pkg.installCommand.trim()
      : `npm install ${pkg.name}`;

  const copyInstallCommand = (pkg) => {
    const cmd = getInstallCommand(pkg);
    navigator.clipboard
      .writeText(cmd)
      .then(() => {
        const el = document.getElementById(`copy-feedback-${pkg.name}`);
        if (el) {
          el.textContent = "Copied!";
          setTimeout(() => (el.textContent = "Copy"), 2000);
        }
      })
      .catch(() => {});
  };

  // Project icons based on name
  const getProjectIcon = (name) => {
    const iconMap = {
      github: "🔍",
      finder: "🔍",
      know: "🇮🇳",
      india: "🇮🇳",
      url: "🔗",
      qr: "📱",
      recipe: "🍳",
      chat: "💬",
    };

    const lowerName = name.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (lowerName.includes(key)) return icon;
    }
    return "🚀";
  };

  return (
    <>
      <ProjectsSEO />
      <div className="projects-main">
        <Header theme={theme} setTheme={props.setTheme} />

        <div className="basic-projects">
          {/* Hero Section - Same structure as Education/Experience */}
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Aryan Kumar{" "}
                </h1>
                <h2 className="visually-hidden">Projects by Aryan</h2>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Projects Section */}
          <section className="projects-section">
            <Fade direction="up" duration={800} triggerOnce>
              <div className="section-header">
                <h3 className="section-title" style={{ color: theme.text }}>
                  Projects by AryanJSX — Featured Projects
                </h3>
                <div
                  className="section-line"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>

              {/* Stats */}
              <div className="projects-stats">
                <div className="stat-item">
                  <span
                    className="stat-number"
                    style={{ color: theme.accentColor }}
                  >
                    {projects.data.length}+
                  </span>
                  <span
                    className="stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Projects
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    className="stat-number"
                    style={{ color: theme.accentColor }}
                  >
                    10+
                  </span>
                  <span
                    className="stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Technologies
                  </span>
                </div>
                <div className="stat-item">
                  <span
                    className="stat-number"
                    style={{ color: theme.accentColor }}
                  >
                    100%
                  </span>
                  <span
                    className="stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Open Source
                  </span>
                </div>
              </div>
            </Fade>

            {/* Projects Grid */}
            <div className="projects-grid">
              {projects.data.map((project, index) => (
                <Fade
                  key={project.name}
                  direction="up"
                  duration={600}
                  delay={index * 100}
                  triggerOnce
                >
                  <div
                    className="project-card"
                    style={{
                      backgroundColor: theme.imageDark,
                      border: `1px solid ${theme.text}15`,
                      boxShadow: `0 4px 20px ${theme.text}08`,
                    }}
                    onClick={() => window.open(project.url, "_blank")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") window.open(project.url, "_blank");
                    }}
                  >
                    <div className="project-card-header">
                      <div
                        className="project-icon"
                        style={{
                          backgroundColor: `${theme.accentColor}20`,
                        }}
                      >
                        {getProjectIcon(project.name)}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        style={{
                          backgroundColor: `${theme.text}10`,
                          color: theme.text,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open ${project.name}`}
                      >
                        ↗
                      </a>
                    </div>

                    <div className="project-card-body">
                      <h3
                        className="project-name"
                        style={{ color: theme.text }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="project-description"
                        style={{ color: theme.secondaryText }}
                      >
                        {project.description}
                      </p>

                      <div className="project-tech-stack">
                        {project.languages.slice(0, 5).map((lang) => (
                          <span
                            key={lang.name}
                            className="tech-tag"
                            style={{
                              backgroundColor: `${theme.accentColor}15`,
                              color: theme.text,
                            }}
                          >
                            <span
                              className="iconify tech-icon"
                              data-icon={lang.iconifyClass}
                            />
                            {lang.name}
                          </span>
                        ))}
                        {project.languages.length > 5 && (
                          <span
                            className="tech-tag"
                            style={{
                              backgroundColor: `${theme.text}10`,
                              color: theme.secondaryText,
                            }}
                          >
                            +{project.languages.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>

            {/* NPM Packages Section */}
            {npmPackages.enabled &&
              npmPackages.data &&
              npmPackages.data.length > 0 && (
                <>
                  <div className="section-header npm-section-header">
                    <h3 className="section-title" style={{ color: theme.text }}>
                      {npmPackages.title}
                    </h3>
                    <p
                      className="npm-section-description"
                      style={{ color: theme.secondaryText }}
                    >
                      {npmPackages.description}
                    </p>
                    <div
                      className="section-line"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                  </div>
                  <div className="npm-packages-grid">
                    {npmPackages.data.map((pkg, index) => (
                      <Fade
                        key={pkg.name}
                        direction="up"
                        duration={600}
                        delay={index * 100}
                        triggerOnce
                      >
                        <div
                          className="npm-package-card"
                          style={{
                            backgroundColor: theme.imageDark,
                            border: `1px solid ${theme.text}15`,
                            boxShadow: `0 4px 20px ${theme.text}08`,
                          }}
                        >
                          <div className="npm-package-header">
                            <div
                              className="npm-package-icon"
                              style={{
                                backgroundColor: "#CB3837",
                              }}
                            >
                              <span className="npm-logo-text">npm</span>
                            </div>
                            <div className="npm-package-badges">
                              {pkg.version && (
                                <span
                                  className="npm-version-badge"
                                  style={{
                                    backgroundColor: `${theme.accentColor}20`,
                                    color: theme.text,
                                  }}
                                >
                                  v{pkg.version}
                                </span>
                              )}
                              {pkg.weeklyDownloads !== undefined &&
                                pkg.weeklyDownloads !== null &&
                                pkg.weeklyDownloads > 0 && (
                                  <span
                                    className="npm-downloads-badge"
                                    style={{
                                      backgroundColor: `${theme.text}15`,
                                      color: theme.secondaryText,
                                    }}
                                  >
                                    {pkg.weeklyDownloads}/week
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className="npm-package-body">
                            <h3
                              className="npm-package-name"
                              style={{ color: theme.text }}
                            >
                              {pkg.name}
                            </h3>
                            <p
                              className="npm-package-description"
                              style={{ color: theme.secondaryText }}
                            >
                              {pkg.description}
                            </p>
                            <div
                              className="npm-install-row"
                              style={{
                                borderTop: `1px solid ${theme.text}15`,
                              }}
                            >
                              <code
                                className="npm-install-command"
                                style={{
                                  backgroundColor: `${theme.text}10`,
                                  color: theme.text,
                                }}
                              >
                                {getInstallCommand(pkg)}
                              </code>
                              <button
                                type="button"
                                className="npm-copy-btn"
                                style={{
                                  backgroundColor: theme.accentColor,
                                  color: "#fff",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyInstallCommand(pkg);
                                }}
                                aria-label={`Copy ${getInstallCommand(pkg)}`}
                              >
                                <span id={`copy-feedback-${pkg.name}`}>
                                  Copy
                                </span>
                              </button>
                            </div>
                            <div className="npm-package-links">
                              <a
                                href={npmUrl(pkg.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="npm-link"
                                style={{ color: theme.accentColor }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                View on npm
                              </a>
                              {pkg.repository && (
                                <>
                                  <span
                                    className="npm-link-sep"
                                    style={{ color: theme.secondaryText }}
                                  >
                                    ·
                                  </span>
                                  <a
                                    href={pkg.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="npm-link"
                                    style={{ color: theme.accentColor }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Repository
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </>
              )}

            {/* GitHub Button */}
            <div className="github-btn-wrapper">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                style={{
                  backgroundColor: theme.accentColor,
                  boxShadow: `0 4px 15px ${theme.accentColor}50`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View All on GitHub
              </a>
            </div>
          </section>
        </div>

        <Footer theme={props.theme} />
      </div>
    </>
  );
}

export default Projects;
