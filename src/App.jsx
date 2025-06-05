// Assets
import "../src/assets/css/reset.css";
import "../src/assets/css/typography.css";
import "../src/assets/css/layout.css";
import "../src/assets/css/buttons.css";
import "../src/assets/css/gallery.css";
import "../src/assets/css/lists.css";
import "../src/assets/css/utils.css";
import "../src/assets/css/themes.css";
import "../src/assets/css/media-queries.css";

//React
import React from "react";

//Owned
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
