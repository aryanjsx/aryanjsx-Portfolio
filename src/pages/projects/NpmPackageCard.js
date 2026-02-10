import React from "react";
import { getCardStyle } from "../../utils/cardStyle.js";

function NpmPackageCard({
  theme,
  pkg,
  installCommand,
  npmUrl,
  onCopy,
  isCopied,
}) {
  return (
    <div className="npm-package-card" style={getCardStyle(theme)}>
      <div className="npm-package-header">
        <div
          className="npm-package-icon"
          style={{ backgroundColor: "#CB3837" }}
        >
          <span className="npm-logo-text">npm</span>
        </div>
        <div className="npm-package-badges">
          {pkg.version && (
            <span
              className="npm-version-badge"
              style={{
                backgroundColor: `${theme.accentColor}20`,
                color: theme.text,
              }}
            >
              v{pkg.version}
            </span>
          )}
          {pkg.weeklyDownloads !== undefined &&
            pkg.weeklyDownloads !== null &&
            pkg.weeklyDownloads > 0 && (
              <span
                className="npm-downloads-badge"
                style={{
                  backgroundColor: `${theme.text}15`,
                  color: theme.secondaryText,
                }}
              >
                {pkg.weeklyDownloads}/week
              </span>
            )}
        </div>
      </div>
      <div className="npm-package-body">
        <h3 className="npm-package-name" style={{ color: theme.text }}>
          {pkg.name}
        </h3>
        <p
          className="npm-package-description"
          style={{ color: theme.secondaryText }}
        >
          {pkg.description}
        </p>
        <div
          className="npm-install-row"
          style={{ borderTop: `1px solid ${theme.text}15` }}
        >
          <code
            className="npm-install-command"
            style={{
              backgroundColor: `${theme.text}10`,
              color: theme.text,
            }}
          >
            {installCommand}
          </code>
          <button
            type="button"
            className="npm-copy-btn"
            style={{
              backgroundColor: theme.accentColor,
              color: "#fff",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onCopy(pkg);
            }}
            aria-label={`Copy ${installCommand}`}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="npm-package-links">
          <a
            href={npmUrl(pkg.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="npm-link"
            style={{ color: theme.accentColor }}
            onClick={(e) => e.stopPropagation()}
          >
            View on npm
          </a>
          {pkg.repository && (
            <>
              <span
                className="npm-link-sep"
                style={{ color: theme.secondaryText }}
              >
                ·
              </span>
              <a
                href={pkg.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="npm-link"
                style={{ color: theme.accentColor }}
                onClick={(e) => e.stopPropagation()}
              >
                Repository
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NpmPackageCard;
