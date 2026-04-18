import React from "react";
import { socialMediaLinks } from "../../data/socialMedia";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaHackerrank,
  FaMediumM,
} from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const links = [
  { href: socialMediaLinks.github, cls: "github", Icon: FaGithub, label: "GitHub profile" },
  { href: socialMediaLinks.linkedin, cls: "linkedin", Icon: FaLinkedinIn, label: "LinkedIn profile" },
  { href: `mailto:${socialMediaLinks.gmail}`, cls: "google", Icon: FaGoogle, label: "Send email" },
  { href: socialMediaLinks.twitter, cls: "twitter", Icon: FaTwitter, label: "Twitter profile" },
  { href: socialMediaLinks.instagram, cls: "instagram", Icon: FaInstagram, label: "Instagram profile" },
  { href: socialMediaLinks.codechef, cls: "codechef", Icon: SiCodechef, label: "CodeChef profile" },
  { href: socialMediaLinks.leetcode, cls: "leetcode", Icon: SiLeetcode, label: "LeetCode profile" },
  { href: socialMediaLinks.hackerrank, cls: "hackerrank", Icon: FaHackerrank, label: "HackerRank profile" },
  { href: socialMediaLinks.gfg, cls: "gfg", Icon: SiGeeksforgeeks, label: "GeeksforGeeks profile" },
  { href: socialMediaLinks.medium, cls: "medium", Icon: FaMediumM, label: "Medium blog" },
];

export default function SocialMedia() {
  return (
    <div className="social-media-div" role="list" aria-label="Social media links">
      {links.map((item) => (
        <a
          key={item.cls}
          href={item.href}
          className={`icon-button ${item.cls}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <span className="social-icon-circle">
            <item.Icon aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
