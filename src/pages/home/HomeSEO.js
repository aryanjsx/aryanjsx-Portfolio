import React from "react";
import SEO from "../../components/SEO/SEO";
import { greeting } from "../../portfolio";

const HomeSEO = () => {
  return (
    <SEO
      title={`${greeting.full_name} — React Developer Portfolio`}
      description={`Welcome to aryanjsx's portfolio — ${greeting.full_name}, a Software Engineer specializing in React, Next.js, and full-stack development. Explore my GitHub projects, skills, and professional experience.`}
      keywords="aryanjsx, aryan kumar, react developer portfolio, github profile, javascript developer, full stack developer, next.js developer, software engineer, web developer, node.js, python"
      path="/#/home"
    />
  );
};

export default HomeSEO;
