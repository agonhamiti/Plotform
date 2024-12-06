import React, { lazy, Suspense } from "react";
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
import LoadingSpinner from "./components/LoadingSpinner"; // Import the loading spinner

// Lazy load the TeamModal component
const TeamModal = lazy(() => import("./components/TeamModal"));
// Lazy load the ExampleLoadingPage component
const ExampleLoadingPage = lazy(() => import("./components/ExampleLoadingPage"));

const App = () => {
  return (
    <Router>
      <main className="w-full mx-auto relative">
        <Suspense fallback={<LoadingSpinner />}> {/* Use the loading spinner here */}
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
            {/* Route for TeamModal */}
            <Route
              path="/team"
              element={<TeamModal />} // Lazy loaded component
            />
            {/* New route for ExampleLoadingPage */}
            <Route
              path="/example-loading"
              element={<ExampleLoadingPage />} // Lazy loaded component
            />
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
