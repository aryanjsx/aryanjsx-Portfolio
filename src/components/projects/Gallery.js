import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function Gallery({ screenshots = [], projectName = "" }) {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i !== null ? (i - 1 + screenshots.length) % screenshots.length : null
      ),
    [screenshots.length]
  );

  const next = useCallback(
    () =>
      setSelectedIndex((i) =>
        i !== null ? (i + 1) % screenshots.length : null
      ),
    [screenshots.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, close, prev, next]);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div style={gridStyle}>
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelectedIndex(i)}
            aria-label={`View ${projectName} screenshot ${i + 1}`}
            style={{
              ...thumbBtnStyle,
              backgroundColor: theme.imageDark,
              border: `1px solid ${theme.text}15`,
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
              <Image
                src={src}
                alt={`${projectName} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          style={overlayStyle}
          onClick={close}
          role="dialog"
          aria-label="Image preview"
        >
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              style={{ ...navBtnStyle, position: "absolute", top: 12, right: 12 }}
              aria-label="Close"
            >
              ✕
            </button>

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  style={{ ...navBtnStyle, position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  style={{ ...navBtnStyle, position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)" }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={screenshots[selectedIndex]}
              alt={`${projectName} screenshot ${selectedIndex + 1}`}
              style={fullImgStyle}
            />

            <p style={{ color: "#8D8D8D", textAlign: "center", marginTop: 12, fontSize: "0.85rem" }}>
              {selectedIndex + 1} / {screenshots.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1rem",
};

const thumbBtnStyle = {
  padding: 0,
  cursor: "pointer",
  borderRadius: 12,
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const thumbImgStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  aspectRatio: "16/9",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.85)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};

const modalStyle = {
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
};

const navBtnStyle = {
  background: "rgba(255,255,255,0.15)",
  border: "none",
  color: "#fff",
  fontSize: "1.5rem",
  width: 40,
  height: 40,
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
};

const fullImgStyle = {
  maxWidth: "100%",
  maxHeight: "80vh",
  borderRadius: 8,
  display: "block",
  margin: "0 auto",
};
