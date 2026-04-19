"use client";

import { Icon } from "@iconify/react";

export default function IconifyIcon({ icon, style, className = "" }) {
  return (
    <Icon
      icon={icon}
      className={className}
      style={{ fontSize: "1em", ...style }}
    />
  );
}
