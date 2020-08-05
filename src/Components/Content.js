import React from "react";
import HeroSection from "./Content/HeroSection.js";
import About from "./Content/About";
import Skills from "./Content/Skills";
import Projects from "./Content/Projects";
import Experience from "./Content/Experience";
import Contact from "./Content/Contact";
import Footer from "./Content/Footer";

function Container() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default Container;
