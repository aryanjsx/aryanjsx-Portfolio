import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-02-18",
  mainEntity: { "@id": "https://aryankr.in/#person" },
  url: "https://aryankr.in",
};

const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: "https://aryankr.in/logo512.png",
    contentUrl: "https://aryankr.in/logo512.png",
    name: "aryanjsx — Portfolio brand image",
    copyrightHolder: { "@id": "https://aryankr.in/#person" },
    creator: { "@id": "https://aryankr.in/#person" },
    creditText: "aryanjsx",
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: "https://aryankr.in/logo192.png",
    contentUrl: "https://aryankr.in/logo192.png",
    name: "aryanjsx — Logo",
    copyrightHolder: { "@id": "https://aryankr.in/#person" },
    creator: { "@id": "https://aryankr.in/#person" },
    creditText: "aryanjsx",
  },
];

const HomeSEO = () => {
  return (
    <>
      <SEO
        path="/"
        keywords="aryanjsx, aryan kumar, aryan kumar software engineer, aryan kumar portfolio, full stack developer, software engineer portfolio"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(profilePageSchema)}
        </script>
        {imageSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
    </>
  );
};

export default HomeSEO;
