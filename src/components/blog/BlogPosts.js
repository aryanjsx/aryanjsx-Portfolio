import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://aryanjsx.medium.com/feed";

export default function BlogPosts() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        const res = await fetch(RSS_URL);
        if (!res.ok) throw new Error(`RSS feed error (${res.status})`);

        const data = await res.json();

        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error("No articles found");
        }

        if (!cancelled) {
          setPosts(data.items.slice(0, 5));
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 0", color: theme.secondaryText }}>
        Loading blog posts...
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div style={emptyBoxStyle(theme)}>
        <p style={{ margin: 0, fontWeight: 600, color: theme.text }}>No Blog Posts Yet</p>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem", color: theme.secondaryText }}>
          Technical articles coming soon. Stay tuned!
        </p>
      </div>
    );
  }

  return (
    <div style={gridStyle}>
      {posts.map((post) => (
        <a
          key={post.guid || post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyle(theme)}
        >
          {post.thumbnail && (
            <div style={thumbWrapStyle}>
              <img
                src={post.thumbnail}
                alt={post.title}
                loading="lazy"
                style={thumbStyle}
              />
            </div>
          )}
          <div style={cardBodyStyle}>
            <time style={dateStyle(theme)}>
              {new Date(post.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <h4 style={titleStyle(theme)}>{post.title}</h4>
            <p style={excerptStyle(theme)}>
              {stripHtml(post.description).slice(0, 150)}
              {stripHtml(post.description).length > 150 ? "..." : ""}
            </p>
            <span style={readMoreStyle(theme)}>Read Article →</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function emptyBoxStyle(theme) {
  return {
    textAlign: "center",
    padding: "2.5rem",
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
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}12`,
    borderRadius: 12,
    overflow: "hidden",
    textDecoration: "none",
    transition: "border-color 0.2s, transform 0.2s",
  };
}

const thumbWrapStyle = {
  width: "100%",
  aspectRatio: "16/9",
  overflow: "hidden",
};

const thumbStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const cardBodyStyle = {
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

function dateStyle(theme) {
  return {
    color: theme.secondaryText,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "0.5rem",
  };
}

function titleStyle(theme) {
  return {
    color: theme.text,
    fontSize: "1rem",
    fontWeight: 600,
    margin: "0 0 0.5rem",
    lineHeight: 1.4,
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}

function excerptStyle(theme) {
  return {
    color: theme.secondaryText,
    fontSize: "0.85rem",
    lineHeight: 1.5,
    margin: "0 0 1rem",
    flex: 1,
    fontFamily: "'Google Sans Regular', sans-serif",
  };
}

function readMoreStyle(theme) {
  return {
    color: theme.accentColor,
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "'Google Sans Medium', sans-serif",
  };
}
