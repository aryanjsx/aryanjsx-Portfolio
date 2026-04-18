import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const GITHUB_USERNAME = "aryanjsx";
const PROFILE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=8&direction=desc`;

export default function GithubActivity() {
  const { theme } = useTheme();
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(PROFILE_URL),
          fetch(REPOS_URL),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error(
            profileRes.status === 403
              ? "GitHub API rate limit reached. Try again later."
              : `GitHub API error (${profileRes.status})`
          );
        }

        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);

        if (!cancelled) {
          setProfile(profileData);
          const sorted = Array.isArray(reposData)
            ? reposData
                .filter((r) => !r.fork)
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 6)
            : [];
          setRepos(sorted);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0", color: theme.secondaryText }}>
        Loading GitHub activity...
      </div>
    );
  }

  if (error) {
    return (
      <div style={errorBoxStyle(theme)}>
        <p style={{ margin: 0, fontWeight: 600, color: theme.text }}>GitHub Data Unavailable</p>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem", color: theme.secondaryText }}>
          {error}
        </p>
      </div>
    );
  }

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <div>
      {/* Profile header */}
      <div style={profileRowStyle}>
        {profile.avatar_url && (
          <img
            src={profile.avatar_url}
            alt={profile.name || GITHUB_USERNAME}
            width={80}
            height={80}
            style={avatarStyle}
          />
        )}
        <div>
          <h4 style={{ color: theme.text, margin: 0, fontSize: "1.25rem", fontFamily: "'Google Sans Bold', sans-serif" }}>
            {profile.name || GITHUB_USERNAME}
          </h4>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.secondaryText, fontSize: "0.9rem", textDecoration: "none" }}
          >
            @{profile.login}
          </a>
          {profile.bio && (
            <p style={{ color: theme.secondaryText, margin: "0.5rem 0 0", fontSize: "0.9rem", lineHeight: 1.5, fontFamily: "'Google Sans Regular', sans-serif" }}>
              {profile.bio}
            </p>
          )}
        </div>
      </div>

      {/* Stats row */}
      <div style={statsGridStyle}>
        {[
          { label: "Public Repos", value: profile.public_repos },
          { label: "Followers", value: profile.followers },
          { label: "Following", value: profile.following },
          { label: "Stars", value: totalStars },
        ].map((stat) => (
          <div key={stat.label} style={statCardStyle(theme)}>
            <span style={{ color: theme.accentColor, fontSize: "1.5rem", fontWeight: 700, fontFamily: "'Google Sans Bold', sans-serif" }}>
              {stat.value}
            </span>
            <span style={{ color: theme.secondaryText, fontSize: "0.8rem", marginTop: 4 }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Top repos */}
      {repos.length > 0 && (
        <>
          <h4 style={subHeadingStyle(theme)}>Top Repositories</h4>
          <div style={reposGridStyle}>
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={repoCardStyle(theme)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill={theme.secondaryText}>
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8V1.5z" />
                  </svg>
                  <span style={{ color: theme.accentColor, fontWeight: 600, fontSize: "0.95rem", fontFamily: "'Google Sans Medium', sans-serif" }}>
                    {repo.name}
                  </span>
                </div>
                {repo.description && (
                  <p style={repoDescStyle(theme)}>
                    {repo.description.length > 100
                      ? repo.description.slice(0, 100) + "..."
                      : repo.description}
                  </p>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                  {repo.stargazers_count > 0 && (
                    <span style={repoMetaStyle(theme)}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill={theme.accentColor}>
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.language && (
                    <span style={repoMetaStyle(theme)}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: getLangColor(repo.language), display: "inline-block" }} />
                      {repo.language}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function getLangColor(lang) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
  };
  return colors[lang] || "#8D8D8D";
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

const profileRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  marginBottom: "2rem",
  flexWrap: "wrap",
};

const avatarStyle = {
  borderRadius: "50%",
  border: "3px solid transparent",
  boxShadow: "0 0 0 2px rgba(227, 64, 95, 0.3)",
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "1rem",
  marginBottom: "2.5rem",
};

function statCardStyle(theme) {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.25rem 0.75rem",
    backgroundColor: theme.imageDark,
    borderRadius: 12,
    border: `1px solid ${theme.text}12`,
  };
}

function subHeadingStyle(theme) {
  return {
    color: theme.text,
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "1rem",
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}

const reposGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1rem",
};

function repoCardStyle(theme) {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1.25rem",
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}12`,
    borderRadius: 12,
    textDecoration: "none",
    transition: "border-color 0.2s, transform 0.2s",
  };
}

function repoDescStyle(theme) {
  return {
    color: theme.secondaryText,
    fontSize: "0.85rem",
    lineHeight: 1.5,
    margin: 0,
    fontFamily: "'Google Sans Regular', sans-serif",
  };
}

function repoMetaStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    color: theme.secondaryText,
    fontSize: "0.8rem",
  };
}
