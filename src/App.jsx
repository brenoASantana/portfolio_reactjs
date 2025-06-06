// React
import React from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OngoingProjects from "./components/OngoingProjects";
import Participations from "./components/Participations";
import Footer from "./components/Footer";

// CSS
import './App.css';

function App() {
  return (
    <>
      <main>
        <Profile />

        <section className="aboutSkills">
          <div className="aboutSkillsContainer">
            <About />
            <Skills />
          </div>
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
