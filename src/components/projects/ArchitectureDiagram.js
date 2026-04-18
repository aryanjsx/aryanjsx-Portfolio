import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ArchitectureDiagram({ src, alt, caption }) {
  const { theme } = useTheme();

  if (!src) return null;

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          backgroundColor: theme.imageDark,
          border: `1px solid ${theme.text}15`,
          borderRadius: 12,
          overflow: "hidden",
          padding: "1.5rem",
        }}
      >
        <img
          src={src}
          alt={alt || "Architecture diagram"}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 8,
          }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            color: theme.secondaryText,
            fontSize: "0.85rem",
            textAlign: "center",
            marginTop: "0.75rem",
            fontFamily: "'Google Sans Regular', sans-serif",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
