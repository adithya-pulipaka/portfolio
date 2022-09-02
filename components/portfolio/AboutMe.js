import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faJava,
  faJenkins,
  faJs,
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
          <div className="md:basis-96 md:text-justify md:mt-7">
            Hey there again! My name is Adithya Kashyap Pulipaka and I am
            currently working as a Full Stack Developer for Morgan Stanley. My
            Professional experience includes developing web applications and
            API's using languages like Java, JavaScript and Python. In my free
            time, I like to hangout with my friends and watch TV shows.
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
              <div className="basis-[100px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJava} size="2x" />
                <p className="m-4"> Java</p>
              </div>
              <div className="basis-[100px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJs} size="2x" />
                <p className="m-4"> JavaScript</p>
              </div>
              <div className="basis-[100px] grow shrink flex flex-col">
                <img
                  src={"/images/spring-icon.png"}
                  alt=""
                  className="w-8 h-8 mx-auto"
                />
                <p className="m-4"> Spring </p>
              </div>
              <div className="basis-[100px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faAngular} size="2x" />
                <p className="m-4"> Angular </p>
              </div>
              <div className="basis-[100px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faReact} size="2x" />
                <p className="m-4"> React </p>
              </div>
              <div className="basis-[100px] grow shrink flex flex-col">
                <FontAwesomeIcon icon={faJenkins} size="2x" />
                <p className="m-4"> Jenkins </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
