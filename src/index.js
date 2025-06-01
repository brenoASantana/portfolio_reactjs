// Em src/index.js ou em App.jsx, no topo:
import ".//assets/css/reset.css";
import ".//assets/css/typography.css";
import ".//assets/css/layout.css";
import ".//assets/css/buttons.css";
import ".//assets/css/gallery.css";
import ".//assets/css/lists.css";
import ".//assets/css/utils.css";
import ".//assets/css/themes.css";
import ".//assets/css/media-queries.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ".//assets/js/language-toggle"; // script que define window.setLanguage, etc.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
