"use client";

import Header from "../src/components/header/Header";
import Greeting from "../src/containers/greeting/Greeting";
import Skills from "../src/containers/skills/Skills";
import Footer from "../src/components/footer/Footer";
import BrandSEO from "../src/components/BrandSEO";
import { profilePageSchema } from "../src/utils/structuredData";

export default function HomeClient() {
  return (
    <div className="home-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Header />
      <main id="main-content">
        <Greeting />
        <Skills />
        <BrandSEO />
      </main>
      <Footer />
    </div>
  );
}
