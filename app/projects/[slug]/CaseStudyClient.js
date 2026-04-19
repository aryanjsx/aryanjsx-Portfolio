"use client";

import { use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Fade } from "react-awesome-reveal";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import Section from "../../../src/components/ui/Section";
import SectionHeader from "../../../src/components/ui/SectionHeader";
import Badge from "../../../src/components/ui/Badge";
import { getProjectBySlug } from "../../../src/data/projects";
import { useTheme } from "../../../src/context/ThemeContext";

const Gallery = dynamic(() => import("../../../src/components/projects/Gallery"), { ssr: false });
const ArchitectureDiagram = dynamic(() => import("../../../src/components/projects/ArchitectureDiagram"));

export default function CaseStudyClient({ slug }) {
  const project = getProjectBySlug(slug);
  const { theme } = useTheme();

  if (!project) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <Header />
        <h1 style={{ color: "#fff" }}>Project not found</h1>
        <Link href="/projects" style={{ color: "#6c63ff" }}>← Back to Projects</Link>
        <Footer />
      </div>
    );
  }

  const p = project;

  return (
    <div className="case-study-main">
      <Header />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
        <Fade direction="down" duration={400} triggerOnce>
          <Link
            href="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              color: theme.accentColor, fontSize: "0.9rem", textDecoration: "none",
              marginTop: "1.5rem", fontFamily: "var(--font-google-sans), sans-serif",
            }}
          >
            ← Back to Projects
          </Link>
        </Fade>
        <Fade direction="up" duration={600} triggerOnce>
          <section style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
            <h1 style={{ color: theme.text, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, marginBottom: "0.75rem", fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 700 }}>
              {p.name}
            </h1>
            <p style={{ color: theme.secondaryText, fontSize: "1.15rem", lineHeight: 1.6, maxWidth: 700, fontFamily: "var(--font-google-sans), sans-serif" }}>
              {p.shortDescription || p.description}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {(p.liveUrl || p.url) && (
                <a href={p.liveUrl || p.url} target="_blank" rel="noopener noreferrer" style={primaryBtnStyle(theme)}>
                  Live Demo ↗
                </a>
              )}
              {(p.githubUrl || p.repo) && (
                <a href={p.githubUrl || p.repo} target="_blank" rel="noopener noreferrer" style={secondaryBtnStyle(theme)}>
                  View Source
                </a>
              )}
            </div>
          </section>
        </Fade>
        {(p.problem || p.solution) && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Overview" />
              <div style={twoColGrid}>
                {p.problem && <div style={cardBoxStyle(theme)}><h4 style={cardLabelStyle(theme)}>Problem</h4><p style={cardTextStyle(theme)}>{p.problem}</p></div>}
                {p.solution && <div style={cardBoxStyle(theme)}><h4 style={cardLabelStyle(theme)}>Solution</h4><p style={cardTextStyle(theme)}>{p.solution}</p></div>}
              </div>
            </Section>
          </Fade>
        )}
        {p.techStack && p.techStack.length > 0 && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Tech Stack" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                {p.techStack.map((tech) => <Badge key={tech}>{tech}</Badge>)}
              </div>
            </Section>
          </Fade>
        )}
        {p.architectureDiagram && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Architecture" />
              <ArchitectureDiagram src={p.architectureDiagram} alt={`${p.name} architecture diagram`} caption={`High-level architecture of ${p.name}`} />
            </Section>
          </Fade>
        )}
        {p.features && p.features.length > 0 && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Features" />
              <ul style={listStyle()}>{p.features.map((f, i) => <li key={i} style={listItemStyle(theme)}>{f}</li>)}</ul>
            </Section>
          </Fade>
        )}
        {p.technicalDecisions && p.technicalDecisions.length > 0 && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Technical Decisions" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {p.technicalDecisions.map((d, i) => (
                  <div key={i} style={decisionCardStyle(theme)}>
                    <span style={decisionNumStyle(theme)}>{i + 1}</span>
                    <p style={{ color: theme.text, margin: 0, lineHeight: 1.6, fontFamily: "var(--font-google-sans), sans-serif" }}>{d}</p>
                  </div>
                ))}
              </div>
            </Section>
          </Fade>
        )}
        {p.challenges && p.challenges.length > 0 && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Challenges" />
              <ul style={listStyle()}>{p.challenges.map((c, i) => <li key={i} style={listItemStyle(theme)}>{c}</li>)}</ul>
            </Section>
          </Fade>
        )}
        {p.outcomes && p.outcomes.length > 0 && (
          <Fade direction="up" duration={600} triggerOnce>
            <Section>
              <SectionHeader title="Outcomes" />
              <ul style={listStyle()}>
                {p.outcomes.map((o, i) => (
                  <li key={i} style={{ ...listItemStyle(theme), color: theme.accentColor }}>
                    <span style={{ color: theme.text }}>{o}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </Fade>
        )}
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
  );
}

function primaryBtnStyle(theme) {
  return {
    display: "inline-flex", alignItems: "center", gap: 6, padding: "0.65rem 1.5rem",
    backgroundColor: theme.accentColor, color: "#fff", borderRadius: 8, textDecoration: "none",
    fontSize: "0.9rem", fontWeight: 600, fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 500,
    boxShadow: `0 4px 15px ${theme.accentColor}40`, transition: "transform 0.2s",
  };
}

function secondaryBtnStyle(theme) {
  return {
    display: "inline-flex", alignItems: "center", gap: 6, padding: "0.65rem 1.5rem",
    backgroundColor: "transparent", color: theme.text, border: `1px solid ${theme.text}30`,
    borderRadius: 8, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
    fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 500, transition: "border-color 0.2s",
  };
}

const twoColGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" };

function cardBoxStyle(theme) {
  return { backgroundColor: theme.imageDark, border: `1px solid ${theme.text}12`, borderRadius: 12, padding: "1.5rem" };
}
function cardLabelStyle(theme) {
  return { color: theme.accentColor, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem", fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 700 };
}
function cardTextStyle(theme) {
  return { color: theme.text, lineHeight: 1.7, margin: 0, fontSize: "0.95rem", fontFamily: "var(--font-google-sans), sans-serif" };
}
function listStyle() {
  return { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" };
}
function listItemStyle(theme) {
  return { color: theme.text, paddingLeft: "1.5rem", position: "relative", lineHeight: 1.6, fontSize: "0.95rem", fontFamily: "var(--font-google-sans), sans-serif", borderLeft: `2px solid ${theme.accentColor}40`, paddingTop: "0.25rem", paddingBottom: "0.25rem" };
}
function decisionCardStyle(theme) {
  return { display: "flex", gap: "1rem", alignItems: "flex-start", backgroundColor: theme.imageDark, border: `1px solid ${theme.text}12`, borderRadius: 12, padding: "1.25rem" };
}
function decisionNumStyle(theme) {
  return { flexShrink: 0, width: 32, height: 32, borderRadius: "50%", backgroundColor: `${theme.accentColor}20`, color: theme.accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 700 };
}
