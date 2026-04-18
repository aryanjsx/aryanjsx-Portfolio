import Head from "next/head";
import { greeting } from "../../data/greeting";

const BASE_URL = "https://aryankr.in";
const DEFAULT_IMAGE = `${BASE_URL}/seo/og-image.png`;

const GLOBAL_TITLE =
  "Aryan Kumar (aryanjsx) | Software Engineer | DevOps | Full-Stack Developer";
const GLOBAL_DESCRIPTION =
  "Official portfolio of Aryan Kumar (aryanjsx), Software Engineer specializing in DevOps, Azure, system architecture, and full-stack development. Explore projects, resume, and contact.";

const SEO = ({ title, description, image, path = "/", keywords, children }) => {
  const siteTitle = title || GLOBAL_TITLE;
  const siteDescription = description || GLOBAL_DESCRIPTION;
  const siteImage = image || DEFAULT_IMAGE;
  const siteUrl =
    path === "/" || path === ""
      ? BASE_URL
      : `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const defaultKeywords =
    "aryanjsx, aryan kumar developer, aryanjsx github, aryanjsx portfolio, aryan kumar devops engineer, aryan kumar software engineer, full stack developer, software engineer portfolio, aryan kumar azure, aryanjsx npm";
  const siteKeywords = keywords || defaultKeywords;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={`${greeting.full_name} (AryanJSX)`} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Aryan Kumar (aryanjsx) — Software Engineer & Full Stack Developer Portfolio" />
      <meta property="og:site_name" content="Aryan Kumar (aryanjsx) Portfolio" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content="@aryanjsx" />
      <meta name="twitter:site" content="@aryanjsx" />
      {children}
    </Head>
  );
};

export default SEO;
