import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof window !== "undefined") {
      console.error("[ErrorBoundary]", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            padding: "2rem",
            textAlign: "center",
            fontFamily: "'Google Sans Regular', sans-serif",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#E3405F" }}>
            Something went wrong
          </h2>
          <p style={{ color: "#8D8D8D", maxWidth: 500, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#E3405F",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
