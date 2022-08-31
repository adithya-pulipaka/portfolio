import React, { useState } from "react";
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
      <section className="pb-8 mt-9 text-center">
        <h1 className="-mb-4 text-primary">Hi, I'm Adithya</h1>
        <h4 className="text-xl text-accent my-7">Full Stack Developer</h4>
        <img
          src="images/profile.JPG"
          alt="ProfilePic"
          className="w-[100px] h-[100px] object-cover object-top rounded-full mx-auto"
        />
      </section>
      <section className="-mx-8 text-center p-8 bg-slate-200 ">
        <h2 className="mt-0 text-primary hover:text-accent ">About Me</h2>
        {/* mt-0 text-4xl mb-7 */}
        <div>
          Hey there again! My name is Adithya Kashyap Pulipaka and I am
          currently working as a Full Stack Developer for Morgan Stanley. My
          Professional experience includes developing web applications and API's
          using languages like Java, JavaScript and Python. In my free time, I
          like to hangout with my friends and watch TV shows.
        </div>
        <div>
          <h4 className="text-accent my-7">My Tech Stack</h4>
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
      </section>
      <section className="-mx-8 text-center p-8">
        <h2 className=" mt-0 text-4xl mb-7">My Personal Projects</h2>
        <div className="flex flex-wrap">
          <div className="grow shrink-0 basis-[350px] bg-slate-200 text-black m-8 flex flex-col justify-center items-center p-4">
            <h3 className="my-0">Project 1</h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eveniet dolorum doloremque consectetur unde distinctio id tempore
              architecto numquam in eaque non dignissimos minus nulla, nam ea
              veniam alias quis!
            </p>
            <div className="flex flex-col justify-center">
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Live Version
              </button>
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Source{" "}
              </button>
            </div>
          </div>
          <div className="grow shrink-0 basis-[350px] bg-slate-200 text-black m-8 flex flex-col justify-center items-center p-4">
            <h3 className="my-0">Project 2</h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eveniet dolorum doloremque consectetur unde distinctio id tempore
              architecto numquam in eaque non dignissimos minus nulla, nam ea
              veniam alias quis!
            </p>
            <div className="flex flex-col justify-center">
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Live Version
              </button>
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Source{" "}
              </button>
            </div>
          </div>
          <div className="grow shrink-0 basis-[350px] bg-slate-200 text-black m-8 flex flex-col justify-center items-center p-4">
            <h3 className="my-0">Project 3</h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eveniet dolorum doloremque consectetur unde distinctio id tempore
              architecto numquam in eaque non dignissimos minus nulla, nam ea
              veniam alias quis!
            </p>
            <div className="flex flex-col justify-center">
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Live Version
              </button>
              <button className="text-sm p-3 mr-4 border-none font-bold cursor-pointer bg-accent my-2 rounded-[25px]">
                Source{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
