import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

const tagManagerArgs = { gtmId: "GTM-TDZT2FJN" };
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById("root"),
);
serviceWorker.unregister();
