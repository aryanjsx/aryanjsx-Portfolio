import React from "react";
import SEO from "../../components/SEO/SEO";
import { greeting } from "../../portfolio";

const HomeSEO = () => {
  return (
    <SEO
      title={`${greeting.full_name} (aryanjsx) — Full Stack Developer Portfolio`}
      description={`aryanjsx — ${greeting.full_name}'s developer portfolio. Full Stack Developer and Software Engineer specializing in React, Next.js, JavaScript, and Python. Explore GitHub projects, skills, and professional experience.`}
      keywords="aryanjsx, aryan kumar, aryan kumar portfolio, react developer portfolio, full stack developer portfolio, frontend developer portfolio, github profile, javascript developer, software engineer portfolio, web developer, node.js developer, python developer"
      path="/"
    />
  );
};

export default HomeSEO;
