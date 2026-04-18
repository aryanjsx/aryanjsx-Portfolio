import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

import "./index.css";
import App from "./App";
import "./assets/font-awesome/css/all.css";

const tagManagerArgs = { gtmId: "GTM-TDZT2FJN" };
TagManager.initialize(tagManagerArgs);

const root = createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
