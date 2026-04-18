import React, { useState, useEffect } from "react";

export default function IconifyIcon({ icon, style, className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className={`iconify ${className}`}
      data-icon={icon}
      style={style}
      data-inline="false"
    />
  );
}
