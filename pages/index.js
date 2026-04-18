import React from "react";
import Header from "../src/components/header/Header";
import Greeting from "../src/containers/greeting/Greeting";
import Skills from "../src/containers/skills/Skills";
import Footer from "../src/components/footer/Footer";
import SEO from "../src/components/SEO/SEO";
import Head from "next/head";
import { profilePageSchema } from "../src/utils/structuredData";
import BrandSEO from "../src/components/BrandSEO";

export default function HomePage() {
  return (
    <>
      <SEO
        path="/"
        title="Aryan Kumar (aryanjsx) | Software Engineer | DevOps | Full-Stack Developer"
        description="Official portfolio of Aryan Kumar (aryanjsx), Software Engineer specializing in DevOps, Azure, system architecture, and full-stack development. Explore projects, open-source work, and contact."
        keywords="aryanjsx, aryan kumar developer, aryanjsx github, aryanjsx portfolio, aryan kumar devops engineer, aryan kumar software engineer, full stack developer, aryan kumar azure, aryanjsx npm, aryan kumar open source"
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      </Head>
      <div className="home-main">
        <Header />
        <main id="main-content">
          <Greeting />
          <Skills />
          <BrandSEO />
        </main>
        <Footer />
      </div>
    </>
  );
}
