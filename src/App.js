import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import React, { useRef } from "react"; // Importing useRef from React

function App() {
  // Ref for the projects section
  const projectsRef = useRef(null);

  // Scroll to projects section function
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <NavBar />
      <Banner scrollToProjects={scrollToProjects} />
      <Skills />
      <Projects ref={projectsRef} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
