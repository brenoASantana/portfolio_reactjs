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
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OngoingProjects from "./components/OngoingProjects";
import Participations from "./components/Participations";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />

      <main>
        <Profile />

        <section className="about-skills">
          <About />
          <Skills />
        </section>

        <Projects />
        <OngoingProjects />
        <Participations />
      </main>

      <Footer />
    </>
  );
}

export default App;
