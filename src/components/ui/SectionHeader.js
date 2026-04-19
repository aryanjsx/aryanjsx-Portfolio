import { useTheme } from "../../context/ThemeContext";

export default function SectionHeader({ title, subtitle }) {
  const { theme } = useTheme();
  return (
    <div className="section-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h3 className="section-title" style={{ color: theme.text }}>{title}</h3>
      {subtitle && (
        <p style={{ color: theme.secondaryText, marginTop: "0.5rem" }}>{subtitle}</p>
      )}
      <div className="section-line" style={{ backgroundColor: theme.accentColor }} />
    </div>
  );
}
