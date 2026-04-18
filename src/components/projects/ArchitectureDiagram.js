import React from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function ArchitectureDiagram({ src, alt, caption }) {
  const { theme } = useTheme();

  if (!src) return null;

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          backgroundColor: theme.imageDark,
          border: `1px solid ${theme.text}15`,
          borderRadius: 12,
          overflow: "hidden",
          padding: "1.5rem",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
          <Image
            src={src}
            alt={alt || "Architecture diagram"}
            fill
            sizes="(max-width: 900px) 100vw, 800px"
            style={{ objectFit: "contain", borderRadius: 8 }}
          />
        </div>
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
