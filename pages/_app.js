import React, { useEffect } from "react";
import Script from "next/script";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "../src/context/ThemeContext";
import { GlobalStyles } from "../src/styles/global";
import ErrorBoundary from "../src/components/ErrorBoundary";
import TagManager from "react-gtm-module";
import "../src/styles/globals.css";

function InnerApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </SCThemeProvider>
  );
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TDZT2FJN" });
  }, []);

  return (
    <ThemeProvider>
      <Script
        src="https://code.iconify.design/1/1.0.4/iconify.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Iconify && typeof window.Iconify.scan === "function") {
            window.Iconify.scan();
          }
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"
        strategy="afterInteractive"
      />
      <InnerApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}
