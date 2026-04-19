const SITE_URL = "https://aryankr.in";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Aryan Kumar",
  alternateName: ["aryanjsx", "AryanJSX", "Aryan Kumar"],
  url: SITE_URL,
  identifier: "aryanjsx",
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in DevOps, Azure, system architecture, and full-stack development.",
  knowsAbout: [
    "DevOps",
    "Azure",
    "System Architecture",
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "CI/CD",
    "Cloud Computing",
  ],
  sameAs: [
    "https://github.com/aryanjsx",
    "https://www.linkedin.com/in/aryanjsx",
    "https://x.com/aryanjsx",
    "https://aryanjsx.medium.com",
    "https://medium.com/@aryanjsx",
    "https://dev.to/aryanjsx",
    "https://www.npmjs.com/~aryanjsx",
    "https://app.daily.dev/aryanjsx",
    "https://instagram.com/aryanjsx",
    "https://facebook.com/aryanjsx",
    "https://pinterest.com/aryanjsx",
    "https://leetcode.com/u/aryanjsx",
    "https://www.hackerrank.com/profile/aryanjsx",
    "https://hub.docker.com/u/aryanjsx",
  ],
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    contentUrl: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  email: "me@aryankr.in",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bengal Institute of Technology",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Aryan Kumar (aryanjsx) — Portfolio",
  alternateName: [
    "aryanjsx portfolio",
    "Aryan Kumar Portfolio",
    "AryanJSX Portfolio",
  ],
  url: SITE_URL,
  description:
    "Official portfolio of Aryan Kumar (aryanjsx), Software Engineer specializing in DevOps, Azure, system architecture, and full-stack development.",
  publisher: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  url: SITE_URL,
};

