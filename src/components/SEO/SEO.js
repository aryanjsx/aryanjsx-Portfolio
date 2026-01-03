import React from "react";
import { Helmet } from "react-helmet-async";
import { greeting, socialMediaLinks } from "../../portfolio";

const BASE_URL = "https://aryankr.netlify.app";
const DEFAULT_IMAGE = `${BASE_URL}/logo512.png`;
const BRAND_NAME = "aryanjsx";

const SEO = ({ title, description, image, path = "/", keywords }) => {
  // Build SEO-optimized title with brand
  const siteTitle = title
    ? `${title} | ${BRAND_NAME}`
    : `${greeting.full_name} (${BRAND_NAME}) | Full Stack Developer Portfolio`;

  // Default description optimized for portfolio, react, github keywords
  const defaultDescription = `${BRAND_NAME} — ${greeting.full_name}'s developer portfolio. Full Stack Developer and Software Engineer specializing in React, Next.js, JavaScript, and Python. Explore GitHub projects and professional experience.`;
  const siteDescription = description || defaultDescription;

  const siteImage = image || DEFAULT_IMAGE;

  // For hash-based routing, canonical should point to base URL for homepage
  // or include hash for other pages
  const canonicalUrl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  const siteUrl = `${BASE_URL}${path}`;

  // Keywords optimized for portfolio, react, github, and brand
  const defaultKeywords =
    "aryanjsx, aryan kumar, aryan kumar portfolio, react developer, full stack developer, frontend developer, github projects, javascript developer, web developer portfolio, next.js, node.js, python developer, software engineer portfolio";
  const siteKeywords = keywords || defaultKeywords;

  // JSON-LD structured data for Person with enhanced SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: greeting.full_name,
    alternateName: BRAND_NAME,
    url: BASE_URL,
    sameAs: [
      socialMediaLinks.github,
      socialMediaLinks.linkedin,
      `https://x.com/${BRAND_NAME}`,
      socialMediaLinks.medium,
      socialMediaLinks.leetcode,
      socialMediaLinks.gfg,
      socialMediaLinks.instagram,
      socialMediaLinks.facebook,
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "LTIMindtree",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Python",
      "Node.js",
      "Web Development",
      "Full Stack Development",
    ],
    image: siteImage,
    description: siteDescription,
    email: greeting.mail,
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={`${greeting.full_name} (${BRAND_NAME})`} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta
        property="og:image:alt"
        content={`${BRAND_NAME} portfolio preview`}
      />
      <meta
        property="og:site_name"
        content={`${greeting.full_name} (${BRAND_NAME}) | Portfolio`}
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content={`@${BRAND_NAME}`} />
      <meta name="twitter:site" content={`@${BRAND_NAME}`} />

      {/* Canonical URL - Points to base URL for homepage */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default SEO;
