import React, { useState, useEffect, useRef } from "react";

export default function IconifyIcon({ icon, style, className = "" }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && ref.current && window.Iconify && typeof window.Iconify.scan === "function") {
      window.Iconify.scan(ref.current);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <span
        className={className}
        style={{ ...style, display: "inline-block", width: "1em", height: "1em" }}
      />
    );
  }

  return (
    <span
      ref={ref}
      className={`iconify ${className}`}
      data-icon={icon}
      style={style}
      data-inline="false"
    />
  );
}
