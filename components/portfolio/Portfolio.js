import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

const Portfolio = () => {
  return (
    <>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects></Projects>
      {/* <Blog></Blog> */}
      <Experience></Experience>
      {/* <Education></Education> */}
      <Contact></Contact>
    </>
  );
};

export default Portfolio;
