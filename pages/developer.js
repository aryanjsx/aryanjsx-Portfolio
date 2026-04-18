import React from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import SEO from "../src/components/SEO/SEO";
import Section from "../src/components/ui/Section";
import SectionHeader from "../src/components/ui/SectionHeader";
import GithubActivity from "../src/components/developer/GithubActivity";
import NpmStats from "../src/components/developer/NpmStats";
import BlogPosts from "../src/components/blog/BlogPosts";
import CurrentlyBuilding from "../src/components/developer/CurrentlyBuilding";
import BlogsImg from "../src/assets/illustrations/BlogsImg";
import { useTheme } from "../src/context/ThemeContext";

export default function DeveloperPage() {
  const { theme } = useTheme();

  return (
    <>
      <SEO
        title="Developer Dashboard | Aryan Kumar (AryanJSX)"
        description="GitHub activity, open-source packages, technical writing, and current projects by Aryan Kumar (AryanJSX)."
        path="/developer"
        keywords="aryanjsx developer dashboard, github activity, npm packages, open source, aryan kumar developer"
      />

      <div className="developer-main">
        <Header />

        <main id="main-content" className="basic-developer">
          <Fade direction="down" duration={2000} triggerOnce>
            <div className="developer-heading-div">
              <div className="developer-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
              <div className="developer-heading-text-div">
                <h1 className="developer-heading-text" style={{ color: theme.text }}>Aryan Kumar</h1>
                <h2 className="developer-heading-sub-text" style={{ color: theme.text }}>
                  Developer Dashboard
                </h2>
                <p className="developer-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  Open-source activity, published packages, technical writing, and what I'm building right now.
                </p>
              </div>
            </div>
          </Fade>

          <section className="developer-content-section">
            {/* GitHub Activity */}
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader
                  title="GitHub Activity"
                  subtitle="Live data from the GitHub API"
                />
                <GithubActivity />
              </Section>
            </Fade>

            {/* npm Packages */}
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader
                  title="npm Packages"
                  subtitle="Open-source packages published to the npm registry"
                />
                <NpmStats />
              </Section>
            </Fade>

            {/* Technical Writing */}
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader
                  title="Technical Writing"
                  subtitle="Latest articles and blog posts"
                />
                <BlogPosts />
              </Section>
            </Fade>

            {/* Currently Building */}
            <Fade direction="up" duration={600} triggerOnce>
              <Section>
                <SectionHeader
                  title="Currently Building"
                  subtitle="Active projects and experiments"
                />
                <CurrentlyBuilding />
              </Section>
            </Fade>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
