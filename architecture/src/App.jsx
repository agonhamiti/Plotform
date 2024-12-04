import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"; // Import global styles here
import Navbar from "./sections/Navbar.jsx";
import OurProjectsNavbar from "./sections/OurProjectsNavbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import OurProjects from "./sections/OurProjects";
import Team from "./sections/Team"; // Import Team component

const App = () => {
  return (
    <Router>
      <main className="w-full mx-auto relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/our-projects"
            element={
              <>
                <OurProjectsNavbar />
                <OurProjects />
              </>
            }
          />
          {/* Removed as per instructions */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
