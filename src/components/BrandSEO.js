import { useTheme } from "../context/ThemeContext";
import { Fade } from "react-awesome-reveal";

const platforms = [
  { name: "GitHub", handle: "aryanjsx", url: "https://github.com/aryanjsx" },
  { name: "LinkedIn", handle: "aryanjsx", url: "https://www.linkedin.com/in/aryanjsx" },
  { name: "npm", handle: "~aryanjsx", url: "https://www.npmjs.com/~aryanjsx" },
  { name: "Medium", handle: "@aryanjsx", url: "https://aryanjsx.medium.com" },
  { name: "Dev.to", handle: "aryanjsx", url: "https://dev.to/aryanjsx" },
  { name: "Daily.dev", handle: "aryanjsx", url: "https://app.daily.dev/aryanjsx" },
  { name: "Docker Hub", handle: "aryanjsx", url: "https://hub.docker.com/u/aryanjsx" },
  { name: "LeetCode", handle: "aryanjsx", url: "https://leetcode.com/u/aryanjsx" },
];

export default function BrandSEO() {
  const { theme } = useTheme();

  return (
    <Fade direction="up" duration={800} triggerOnce>
      <section
        className="brand-seo-section"
        aria-labelledby="about-aryanjsx-heading"
        style={{ padding: "3rem 5%", maxWidth: 1000, margin: "0 auto" }}
      >
        <h2
          id="about-aryanjsx-heading"
          style={{
            color: theme.text,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.5rem",
            fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 700,
          }}
        >
          About AryanJSX
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            backgroundColor: theme.accentColor,
            borderRadius: 2,
            margin: "0 auto 2rem",
          }}
        />

        <div
          style={{
            color: theme.secondaryText,
            fontSize: "0.95rem",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto 2.5rem",
            fontFamily: "var(--font-google-sans), sans-serif",
          }}
        >
          <p>
            Aryan Kumar, widely known as <strong style={{ color: theme.text }}>aryanjsx</strong>, is a
            Software Engineer with expertise in DevOps, Azure cloud infrastructure, system architecture,
            and full-stack development. As aryanjsx, he actively contributes to open-source projects,
            publishes npm packages, and writes technical articles on modern engineering practices.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The aryanjsx portfolio showcases production-grade projects built with React, Next.js, Node.js,
            Python, and cloud-native technologies. Whether it&apos;s building scalable web applications, designing
            CI/CD pipelines, or crafting developer tools — aryanjsx delivers engineering excellence.
          </p>
        </div>

        <h3
          style={{
            color: theme.text,
            fontSize: "1.1rem",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-google-sans), sans-serif", fontWeight: 500,
          }}
        >
          Find aryanjsx on
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.5rem 1rem",
                backgroundColor: theme.imageDark,
                border: `1px solid ${theme.text}12`,
                borderRadius: 8,
                color: theme.text,
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-google-sans), sans-serif",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{ fontWeight: 600 }}>{p.name}</span>
              <span style={{ color: theme.secondaryText }}>{p.handle}</span>
            </a>
          ))}
        </div>
      </section>
    </Fade>
  );
}
