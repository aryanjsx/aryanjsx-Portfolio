"use client";

import { useState, useCallback } from "react";
import Header from "../src/components/header/Header";
import Greeting from "../src/containers/greeting/Greeting";
import Skills from "../src/containers/skills/Skills";
import Footer from "../src/components/footer/Footer";
import BrandSEO from "../src/components/BrandSEO";
import { profilePageSchema } from "../src/utils/structuredData";

export default function HomeClient() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const handleNavHover = useCallback((label) => setHoveredNav(label), []);

  return (
    <div className="home-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Header onNavHover={handleNavHover} />
      <main id="main-content">
        <Greeting hoveredNav={hoveredNav} />
        <Skills />
        <BrandSEO />
      </main>
      <Footer />
    </div>
  );
}
