import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faDocker,
  faHtml5,
  faJava,
  faJenkins,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <>
      <section className="-mx-8 text-center p-8 bg-slate-200" id="me">
        <h2 className="mt-0 text-primary hover:text-accent ">
          About Me
          <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
        </h2>
        <div className="md:flex md:justify-evenly md:items-start md:gap-8">
          <div className="md:basis-[450px] md:text-center md:mt-7 md:text-lg md:leading-8">
            Hi, I'm Adithya Kashyap based out of Washington DC Metro area. I am
            currently working as a Full Stack Developer for Morgan Stanley. My
            background includes developing software applications that solve a
            wide variety of complex organizational problems using languages like
            Java, JavaScript and Python. In my free time, I like to hangout with
            my friends and watch TV shows.
          </div>
          <div className="sm:hidden md:block self-stretch mr-[55px]">
            <span className="after:border-solid after:border-gray-300 after:border after:w-0 after:h-full after:block"></span>
          </div>
          <div className="md:basis-80">
            <h4 className="my-7">
              My Tech Stack
              <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
            </h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJava} size="2x" />
                <p className="m-4"> Java</p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJs} size="2x" />
                <p className="m-4"> JavaScript</p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faPython} size="2x" />
                <p className="m-4"> Python</p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <p className="m-4"> HTML </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faCss3} size="2x" />
                <p className="m-4"> CSS </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <img
                  src={"/images/spring-icon.png"}
                  alt=""
                  className="w-8 h-8 mx-auto"
                />
                <p className="m-4"> Spring </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faAngular} size="2x" />
                <p className="m-4"> Angular </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faReact} size="2x" />
                <p className="m-4"> React </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <p className="m-4"> Node JS </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJenkins} size="2x" />
                <p className="m-4"> Jenkins </p>
              </div>
              <div className="basis-[75px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faDocker} size="2x" />
                <p className="m-4"> Docker </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
