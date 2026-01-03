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
      <div className="home-main">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <main id="main-content">
          <Greeting theme={props.theme} />
          <Skills theme={props.theme} />
        </main>
        <Footer theme={props.theme} />
      </div>
    </>
  );
}

export default Home;
