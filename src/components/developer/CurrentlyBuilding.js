import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Badge from "../ui/Badge";
import { currentlyBuilding } from "../../data/currentlyBuilding";

const STATUS_COLORS = {
  "In Development": "#F5A623",
  Beta: "#7B61FF",
  Active: "#34C759",
  Completed: "#30D158",
  Paused: "#8E8E93",
};

export default function CurrentlyBuilding() {
  const { theme } = useTheme();

  if (currentlyBuilding.length === 0) return null;

  return (
    <div style={gridStyle}>
      {currentlyBuilding.map((project) => {
        const statusColor = STATUS_COLORS[project.status] || theme.accentColor;

        return (
          <div key={project.title} style={cardStyle(theme)}>
            <div style={cardHeaderStyle}>
              <h4 style={titleStyle(theme)}>{project.title}</h4>
              <span style={statusBadgeStyle(statusColor)}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: statusColor, display: "inline-block" }} />
                {project.status}
              </span>
            </div>

            <p style={descStyle(theme)}>{project.description}</p>

            {project.techStack && project.techStack.length > 0 && (
              <div style={techRowStyle}>
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(theme)}
              >
                View on GitHub →
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "1rem",
};

function cardStyle(theme) {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}12`,
    borderRadius: 12,
  };
}

const cardHeaderStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "0.75rem",
  marginBottom: "0.75rem",
  flexWrap: "wrap",
};

function titleStyle(theme) {
  return {
    color: theme.text,
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}

function statusBadgeStyle(color) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "0.3rem 0.7rem",
    backgroundColor: `${color}20`,
    color,
    borderRadius: 20,
    fontSize: "0.75rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
  };
}

function descStyle(theme) {
  return {
    color: theme.secondaryText,
    fontSize: "0.9rem",
    lineHeight: 1.6,
    margin: "0 0 1rem",
    flex: 1,
    fontFamily: "'Google Sans Regular', sans-serif",
  };
}

const techRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.4rem",
  marginBottom: "1rem",
};

function linkStyle(theme) {
  return {
    color: theme.accentColor,
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}
