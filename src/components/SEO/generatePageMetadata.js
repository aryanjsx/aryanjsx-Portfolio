const BASE_URL = "https://aryankr.in";
const DEFAULT_IMAGE = `${BASE_URL}/seo/og-image.svg`;

const GLOBAL_TITLE =
  "Aryan Kumar | Software Engineer | Gen AI Developer | Full-Stack Developer";
const GLOBAL_DESCRIPTION =
  "Official portfolio of Aryan Kumar, Software Engineer specializing in DevOps, Azure, system architecture, and full-stack development. Explore projects, resume, and contact.";

export function generatePageMetadata({
  title,
  description,
  image,
  path = "/",
  keywords,
} = {}) {
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

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    authors: [{ name: "Aryan Kumar" }],
    robots: "index, follow",
    alternates: { canonical: siteUrl },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: siteTitle,
      description: siteDescription,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          type: "image/svg+xml",
          alt: "Aryan Kumar — Software Engineer | Full Stack Developer | Gen AI Developer",
        },
      ],
      siteName: "Aryan Kumar (aryanjsx)",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: "@aryanjsx",
      site: "@aryanjsx",
    },
  };
}
