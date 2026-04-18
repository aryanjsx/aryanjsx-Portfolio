import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Badge({ children, color, className = "", style = {} }) {
  const { theme } = useTheme();
  const bg = color || theme.accentColor;
  return (
    <span
      className={`ui-badge ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        padding: "0.4rem 0.8rem",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontFamily: "'Google Sans Regular', sans-serif",
        backgroundColor: `${bg}20`,
        color: bg,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
