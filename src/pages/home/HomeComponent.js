import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import HomeSEO from "./HomeSEO";

function Home(props) {
  return (
    <>
      <HomeSEO />
      <Header theme={props.theme} setTheme={props.setTheme} />
      <main id="main-content">
        <article>
          <Greeting theme={props.theme} />
        </article>
        <section aria-labelledby="skills-heading">
          <Skills theme={props.theme} />
        </section>
      </main>
      <Footer theme={props.theme} />
    </>
  );
}

export default Home;
