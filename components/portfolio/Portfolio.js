import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faJava,
  faJenkins,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  );
};

export default Portfolio;
