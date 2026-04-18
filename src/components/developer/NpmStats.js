import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { npmPackagesList } from "../../data/npmPackages";

const REGISTRY_BASE = "https://registry.npmjs.org";
const DOWNLOADS_BASE = "https://api.npmjs.org/downloads/point/last-week";

export default function NpmStats() {
  const { theme } = useTheme();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPackageData(pkg) {
      const [metaRes, dlRes] = await Promise.allSettled([
        fetch(`${REGISTRY_BASE}/${encodeURIComponent(pkg.name)}`),
        fetch(`${DOWNLOADS_BASE}/${encodeURIComponent(pkg.name)}`),
      ]);

      const meta =
        metaRes.status === "fulfilled" && metaRes.value.ok
          ? await metaRes.value.json()
          : null;

      const dl =
        dlRes.status === "fulfilled" && dlRes.value.ok
          ? await dlRes.value.json()
          : null;

      const latestVersion = meta
        ? meta["dist-tags"]?.latest || "—"
        : "—";

      const description = meta?.description || pkg.description;

      return {
        name: pkg.name,
        displayName: pkg.displayName,
        description,
        version: latestVersion,
        weeklyDownloads: dl?.downloads ?? null,
        repository: pkg.repository,
        npmUrl: `https://www.npmjs.com/package/${encodeURIComponent(pkg.name)}`,
      };
    }

    async function fetchAll() {
      try {
        const results = await Promise.all(
          npmPackagesList.map(fetchPackageData)
        );
        if (!cancelled) {
          setPackages(results);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchAll();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0", color: theme.secondaryText }}>
        Loading npm package data...
      </div>
    );
  }

  if (error) {
    return (
      <div style={errorBoxStyle(theme)}>
        <p style={{ margin: 0, fontWeight: 600, color: theme.text }}>npm Data Unavailable</p>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem", color: theme.secondaryText }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div style={gridStyle}>
      {packages.map((pkg) => (
        <div key={pkg.name} style={cardStyle(theme)}>
          <div style={cardHeaderStyle}>
            <div style={npmBadgeStyle}>npm</div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {pkg.version !== "—" && (
                <span style={versionBadgeStyle(theme)}>v{pkg.version}</span>
              )}
              {pkg.weeklyDownloads !== null && (
                <span style={downloadsBadgeStyle(theme)}>
                  {pkg.weeklyDownloads.toLocaleString()}/week
                </span>
              )}
            </div>
          </div>

          <h4 style={packageNameStyle(theme)}>{pkg.displayName || pkg.name}</h4>
          <p style={descStyle(theme)}>{pkg.description}</p>

          <div style={linksRowStyle}>
            <a
              href={pkg.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(theme)}
            >
              View on npm
            </a>
            {pkg.repository && (
              <>
                <span style={{ color: theme.secondaryText }}>·</span>
                <a
                  href={pkg.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle(theme)}
                >
                  Repository
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function errorBoxStyle(theme) {
  return {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: theme.imageDark,
    borderRadius: 12,
    border: `1px solid ${theme.text}12`,
  };
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
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1rem",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const npmBadgeStyle = {
  padding: "0.3rem 0.7rem",
  backgroundColor: "#CB3837",
  color: "#fff",
  borderRadius: 6,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.04em",
};

function versionBadgeStyle(theme) {
  return {
    padding: "0.25rem 0.6rem",
    backgroundColor: `${theme.accentColor}20`,
    color: theme.text,
    borderRadius: 20,
    fontSize: "0.75rem",
  };
}

function downloadsBadgeStyle(theme) {
  return {
    padding: "0.25rem 0.6rem",
    backgroundColor: `${theme.text}15`,
    color: theme.secondaryText,
    borderRadius: 20,
    fontSize: "0.75rem",
  };
}

function packageNameStyle(theme) {
  return {
    color: theme.text,
    fontSize: "1.05rem",
    fontWeight: 600,
    margin: "0 0 0.5rem",
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}

function descStyle(theme) {
  return {
    color: theme.secondaryText,
    fontSize: "0.85rem",
    lineHeight: 1.5,
    margin: "0 0 1rem",
    flex: 1,
    fontFamily: "'Google Sans Regular', sans-serif",
  };
}

const linksRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.85rem",
};

function linkStyle(theme) {
  return {
    color: theme.accentColor,
    textDecoration: "none",
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}
