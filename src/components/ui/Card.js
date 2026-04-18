import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Card({ children, className = "", style = {}, ...rest }) {
  const { theme } = useTheme();
  return (
    <div
      className={`ui-card ${className}`}
      style={{
        backgroundColor: theme.imageDark,
        border: `1px solid ${theme.text}15`,
        boxShadow: `0 4px 20px ${theme.text}08`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
