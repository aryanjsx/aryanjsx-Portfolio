import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  return (
    <div className="social-media-div" role="list" aria-label="Social media links">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <i className="fab fa-github" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email"
      >
        <i className="fab fa-google" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter profile"
      >
        <i className="fab fa-twitter" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile"
      >
        <i className="fab fa-instagram" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.codechef}
        className="icon-button codechef"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CodeChef profile"
      >
        <i className="fas fa-code" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.leetcode}
        className="icon-button leetcode"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode profile"
      >
        <i className="fas fa-code" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.hackerrank}
        className="icon-button hackerrank"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="HackerRank profile"
      >
        <i className="fab fa-hackerrank" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.gfg}
        className="icon-button gfg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GeeksforGeeks profile"
      >
        <i className="fas fa-code" aria-hidden="true"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.medium}
        className="icon-button medium"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium blog"
      >
        <i className="fab fa-medium" aria-hidden="true"></i>
        <span></span>
      </a>
    </div>
  );
}
