import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import SEO from "../../src/components/SEO/SEO";
import Section from "../../src/components/ui/Section";
import SectionHeader from "../../src/components/ui/SectionHeader";
import Badge from "../../src/components/ui/Badge";
import Gallery from "../../src/components/projects/Gallery";
import ArchitectureDiagram from "../../src/components/projects/ArchitectureDiagram";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "../../src/data/projects";
import { useTheme } from "../../src/context/ThemeContext";

export async function getStaticPaths() {
  return {
    paths: getAllProjectSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default function CaseStudyPage({ project }) {
  const { theme } = useTheme();
  const p = project;

  return (
    <>
      <SEO
        title={`${p.name} — Case Study | Aryan Kumar (AryanJSX)`}
        description={p.shortDescription || p.description}
        path={`/projects/${p.id}`}
        keywords={`${p.name}, ${p.techStack ? p.techStack.join(", ") : ""}, aryanjsx, aryan kumar, case study`}
      />

      <div className="case-study-main">
        <Header />

        <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Back link */}
          <Fade direction="down" duration={400} triggerOnce>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: theme.accentColor,
                fontSize: "0.9rem",
                textDecoration: "none",
                marginTop: "1.5rem",
                fontFamily: "'Google Sans Regular', sans-serif",
              }}
            >
              ← Back to Projects
            </Link>
          </Fade>

          {/* Hero */}
          <Fade direction="up" duration={600} triggerOnce>
            <section style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
              <h1
                style={{
                  color: theme.text,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  fontFamily: "'Google Sans Bold', sans-serif",
                }}
              >
                {p.name}
              </h1>
              <p
                style={{
                  color: theme.secondaryText,
                  fontSize: "1.15rem",
                  lineHeight: 1.6,
                  maxWidth: 700,
                  fontFamily: "'Google Sans Regular', sans-serif",
                }}
              >
                {p.shortDescription || p.description}
              </p>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                {(p.liveUrl || p.url) && (
                  <a
                    href={p.liveUrl || p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={primaryBtnStyle(theme)}
                  >
                    Live Demo ↗
                  </a>
                )}
                {(p.githubUrl || p.repo) && (
                  <a
                    href={p.githubUrl || p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={secondaryBtnStyle(theme)}
                  >
                    View Source
                  </a>
                )}
              </div>
            </section>
          </Fade>

          {/* Overview: Problem & Solution */}
          {(p.problem || p.solution) && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Overview" />
                <div style={twoColGrid}>
                  {p.problem && (
                    <div style={cardBoxStyle(theme)}>
                      <h4 style={cardLabelStyle(theme)}>Problem</h4>
                      <p style={cardTextStyle(theme)}>{p.problem}</p>
                    </div>
                  )}
                  {p.solution && (
                    <div style={cardBoxStyle(theme)}>
                      <h4 style={cardLabelStyle(theme)}>Solution</h4>
                      <p style={cardTextStyle(theme)}>{p.solution}</p>
                    </div>
                  )}
                </div>
              </Section>
            </Fade>
          )}

          {/* Tech Stack */}
          {p.techStack && p.techStack.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Tech Stack" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                  {p.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Section>
            </Fade>
          )}

          {/* Architecture */}
          {p.architectureDiagram && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Architecture" />
                <ArchitectureDiagram
                  src={p.architectureDiagram}
                  alt={`${p.name} architecture diagram`}
                  caption={`High-level architecture of ${p.name}`}
                />
              </Section>
            </Fade>
          )}

          {/* Features */}
          {p.features && p.features.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Features" />
                <ul style={listStyle(theme)}>
                  {p.features.map((f, i) => (
                    <li key={i} style={listItemStyle(theme)}>{f}</li>
                  ))}
                </ul>
              </Section>
            </Fade>
          )}

          {/* Technical Decisions */}
          {p.technicalDecisions && p.technicalDecisions.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Technical Decisions" />
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {p.technicalDecisions.map((d, i) => (
                    <div key={i} style={decisionCardStyle(theme)}>
                      <span style={decisionNumStyle(theme)}>{i + 1}</span>
                      <p style={{ color: theme.text, margin: 0, lineHeight: 1.6, fontFamily: "'Google Sans Regular', sans-serif" }}>
                        {d}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </Fade>
          )}

          {/* Challenges */}
          {p.challenges && p.challenges.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Challenges" />
                <ul style={listStyle(theme)}>
                  {p.challenges.map((c, i) => (
                    <li key={i} style={listItemStyle(theme)}>{c}</li>
                  ))}
                </ul>
              </Section>
            </Fade>
          )}

          {/* Outcomes */}
          {p.outcomes && p.outcomes.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Outcomes" />
                <ul style={listStyle(theme)}>
                  {p.outcomes.map((o, i) => (
                    <li key={i} style={{ ...listItemStyle(theme), color: theme.accentColor }}>
                      <span style={{ color: theme.text }}>{o}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </Fade>
          )}

          {/* Gallery */}
          {p.screenshots && p.screenshots.length > 0 && (
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader title="Gallery" />
                <Gallery screenshots={p.screenshots} projectName={p.name} />
              </Section>
            </Fade>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

function primaryBtnStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "0.65rem 1.5rem",
    backgroundColor: theme.accentColor,
    color: "#fff",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    fontFamily: "'Google Sans Medium', sans-serif",
    boxShadow: `0 4px 15px ${theme.accentColor}40`,
    transition: "transform 0.2s",
  };
}

function secondaryBtnStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "0.65rem 1.5rem",
    backgroundColor: "transparent",
    color: theme.text,
    border: `1px solid ${theme.text}30`,
    borderRadius: 8,
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    fontFamily: "'Google Sans Medium', sans-serif",
    transition: "border-color 0.2s",
  };
}

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.25rem",
};

function cardBoxStyle(theme) {
  return {
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}12`,
    borderRadius: 12,
    padding: "1.5rem",
  };
}

function cardLabelStyle(theme) {
  return {
    color: theme.accentColor,
    fontSize: "0.8rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "0.75rem",
    fontFamily: "'Google Sans Bold', sans-serif",
  };
}

function cardTextStyle(theme) {
  return {
    color: theme.text,
    lineHeight: 1.7,
    margin: 0,
    fontSize: "0.95rem",
    fontFamily: "'Google Sans Regular', sans-serif",
  };
}

function listStyle(theme) {
  return {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  };
}

function listItemStyle(theme) {
  return {
    color: theme.text,
    paddingLeft: "1.5rem",
    position: "relative",
    lineHeight: 1.6,
    fontSize: "0.95rem",
    fontFamily: "'Google Sans Regular', sans-serif",
    borderLeft: `2px solid ${theme.accentColor}40`,
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
  };
}

function decisionCardStyle(theme) {
  return {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}12`,
    borderRadius: 12,
    padding: "1.25rem",
  };
}

function decisionNumStyle(theme) {
  return {
    flexShrink: 0,
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: `${theme.accentColor}20`,
    color: theme.accentColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: 700,
    fontFamily: "'Google Sans Bold', sans-serif",
  };
}
