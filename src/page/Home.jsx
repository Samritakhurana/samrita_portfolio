import React from "react";
import { Background } from "../components/Background";
import { DarkMode } from "../components/DarkMode";
import Narbar from "../components/Narbar";
import { About } from "../components/About";
import { HomeSection } from "../components/HomeSection";
import Skills from "../components/Skills";
import { Experience } from "../components/Experience";
// import Projects from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* open section */}
      <DarkMode />
      <Background />
      <Narbar />

      {/* introduction section */}
      <HomeSection />

      <About />
      {/* skill section */}
      <Skills />
      {/* experience section */}
      <Experience />
      {/* project section */}
      {/* <Projects /> */}
      {/* contact section */}
      <Contact />

      <Footer />
    </div>
  );
};
