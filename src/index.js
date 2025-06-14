//React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className={styles}>
    <App />
  </React.StrictMode>
);
