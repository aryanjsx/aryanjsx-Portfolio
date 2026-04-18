import React from "react";
import Header from "../src/components/header/Header";
import Greeting from "../src/containers/greeting/Greeting";
import Skills from "../src/containers/skills/Skills";
import Footer from "../src/components/footer/Footer";
import SEO from "../src/components/SEO/SEO";
import Head from "next/head";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-02-18",
  mainEntity: { "@id": "https://aryankr.in/#person" },
  url: "https://aryankr.in",
};

export default function HomePage() {
  return (
    <>
      <SEO
        path="/"
        keywords="aryanjsx, aryan kumar, aryan kumar software engineer, aryan kumar portfolio, full stack developer, software engineer portfolio"
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      </Head>
      <div className="home-main">
        <Header />
        <main id="main-content">
          <Greeting />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}
