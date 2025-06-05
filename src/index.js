//React
import React from "react";
import ReactDOM from "react-dom/client";

//Owned
import App from "./App";

//Assets
import ".//assets/css/layout.css";
import ".//assets/css/gallery.css";
import ".//assets/css/media-queries.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
