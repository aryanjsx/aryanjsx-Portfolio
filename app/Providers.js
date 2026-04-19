"use client";

import { useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "../src/context/ThemeContext";
import { GlobalStyles } from "../src/styles/global";
import ErrorBoundary from "../src/components/ErrorBoundary";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import TagManager from "react-gtm-module";

function InnerProviders({ children }) {
  const { theme } = useTheme();

  return (
    <StyledComponentsRegistry>
      <SCThemeProvider theme={theme}>
        <GlobalStyles />
        <ErrorBoundary>{children}</ErrorBoundary>
      </SCThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default function Providers({ children }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TDZT2FJN" });
  }, []);

  return (
    <ThemeProvider>
      <InnerProviders>{children}</InnerProviders>
    </ThemeProvider>
  );
}
