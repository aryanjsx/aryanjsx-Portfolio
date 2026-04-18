import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import SEO from "./components/SEO/SEO";

function getStoredTheme() {
  try {
    return localStorage.getItem("theme") || "dark";
  } catch {
    return "dark";
  }
}

function App() {
  const [theme, setTheme] = useState(getStoredTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <SEO />
        <GlobalStyles />
        <a className="skip-to-content" href="#main-content">
          Skip to content
        </a>
        <div>
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
