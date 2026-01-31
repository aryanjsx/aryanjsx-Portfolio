import React from "react";
import { Helmet } from "react-helmet-async";
import { greeting } from "../../portfolio";

const BASE_URL = "https://www.aryankr.in";
const DEFAULT_IMAGE = `${BASE_URL}/logo512.png`;

const GLOBAL_TITLE =
  "Aryan Kumar (AryanJSX) | Software Engineer & Full Stack Developer";
const GLOBAL_DESCRIPTION =
  "Aryan Kumar aka AryanJSX — Software Engineer, Full Stack Developer, DevOps enthusiast. Explore portfolio, projects, resume and contact.";

const SEO = ({ title, description, image, path = "/", keywords }) => {
  const siteTitle = title || GLOBAL_TITLE;
  const siteDescription = description || GLOBAL_DESCRIPTION;
  const siteImage = image || DEFAULT_IMAGE;

  const canonicalUrl = `${BASE_URL}/`;
  const siteUrl =
    path === "/" || path === ""
      ? BASE_URL
      : `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const defaultKeywords =
    "aryanjsx, aryan kumar, aryan kumar software engineer, aryan kumar portfolio, full stack developer, software engineer portfolio";
  const siteKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={`${greeting.full_name} (AryanJSX)`} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta
        property="og:image:alt"
        content="Aryan Kumar (AryanJSX) — Software Engineer & Full Stack Developer Portfolio"
      />
      <meta
        property="og:site_name"
        content="Aryan Kumar (AryanJSX) Portfolio"
      />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content="@aryanjsx" />
      <meta name="twitter:site" content="@aryanjsx" />

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
