import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

const lightTheme = {
  name: "light",
  body: "#F2F2F5",
  text: "#1D1D1F",
  dark: "#000000",
  secondaryText: "#6E6E73",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  skinColor: "#F7B799",
  skinColor2: "#FA9161",
  imageDark: "#E8E8ED",
  imageClothes: "#E8E8ED",
  avatarMisc: "#E5E5EA",
  avatarShoes: "#D1D1D6",
};

const darkTheme = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
};

const themes = { light: lightTheme, dark: darkTheme };

const ThemeContext = createContext(undefined);

let currentThemeName = "dark";
const listeners = new Set();

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentThemeName;
}

function getServerSnapshot() {
  return "dark";
}

function applyThemeAttribute(name) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", name);
    document.documentElement.style.colorScheme = name;
  }
}

function setThemeStore(name) {
  if (name === currentThemeName) return;
  currentThemeName = name;
  applyThemeAttribute(name);
  emitChange();
}

if (typeof window !== "undefined") {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr && themes[attr]) {
    currentThemeName = attr;
  } else {
    try {
      const stored = localStorage.getItem("theme");
      if (stored && themes[stored]) currentThemeName = stored;
    } catch { /* storage unavailable */ }
  }
}

export function ThemeProvider({ children }) {
  const themeName = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const theme = themes[themeName] || themes.dark;

  const toggleTheme = useCallback(() => {
    const next = currentThemeName === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setThemeStore(next);
  }, []);

  const setTheme = useCallback((name) => {
    try { localStorage.setItem("theme", name); } catch { /* storage unavailable */ }
    setThemeStore(name);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
