// Em src/index.js ou em App.jsx, no topo:
import "../public/assets/css/reset.css";
import "../public/assets/css/typography.css";
import "../public/assets/css/layout.css";
import "../public/assets/css/buttons.css";
import "../public/assets/css/gallery.css";
import "../public/assets/css/lists.css";
import "../public/assets/css/utils.css";
import "../public/assets/css/themes.css";
import "../public/assets/css/media-queries.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./language-toggle"; // script que define window.setLanguage, etc.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
