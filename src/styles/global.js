import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --theme-body: ${({ theme }) => theme.body};
    --theme-text: ${({ theme }) => theme.text};
    --theme-secondary-text: ${({ theme }) => theme.secondaryText};
    --theme-accent: ${({ theme }) => theme.accentColor};
    --theme-accent-bright: ${({ theme }) => theme.accentBright};
    color-scheme: ${({ theme }) => theme.name};
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-google-sans), BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
  }
`;
