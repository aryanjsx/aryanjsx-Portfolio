import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Main(props) {
  const pageProps = { theme: props.theme, setTheme: props.setTheme };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              settings.isSplash ? (
                <Splash {...pageProps} />
              ) : (
                <Home {...pageProps} />
              )
            }
          />
          <Route path="/home" element={<Home {...pageProps} />} />
          <Route path="/experience" element={<Experience {...pageProps} />} />
          <Route path="/education" element={<Education {...pageProps} />} />
          <Route path="/contact" element={<Contact {...pageProps} />} />
          <Route path="/projects" element={<Projects {...pageProps} />} />
          {settings.isSplash && (
            <Route path="/splash" element={<Splash {...pageProps} />} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
