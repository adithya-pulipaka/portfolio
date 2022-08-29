import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faGithub,
  faJava,
  faJenkins,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <section className="pb-8 mt-9 text-center">
        <h1 className="-mb-4 text-primary">Hi, I'm Adithya</h1>
        <h4 className="text-xl app-accent my-7">Full Stack Developer</h4>
        <img
          src="images/profile.JPG"
          alt="ProfilePic"
          className="w-[100px] h-[100px] object-cover object-top rounded-full mx-auto"
        />
      </section>
      <section className="color-secondary -mx-8 text-center p-8">
        <h2 className="app-accent mt-0 text-4xl mb-7">About Me</h2>
        <div>
          Hey there again! My name is Adithya Kashyap Pulipaka and I am
          currently working as a Full Stack Developer for Morgan Stanley. My
          Professional experience includes developing web applications and API's
          using languages like Java, JavaScript and Python. In my free time, I
          like to hangout with my friends and watch TV shows.
        </div>
        <div>
          <h4 className="app-accent my-7">My Tech Stack</h4>
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
        <h2 className="app-accent mt-0 text-4xl mb-7">My Personal Projects</h2>
        <div className="flex flex-wrap">
          <div className="grow shrink-0 basis-[350px] bg-gray text-black m-8 flex flex-col justify-center items-center p-4">
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
          <div className="grow shrink-0 basis-[350px] bg-gray text-black m-8 flex flex-col justify-center items-center p-4">
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
          <div className="grow shrink-0 basis-[350px] bg-gray text-black m-8 flex flex-col justify-center items-center p-4">
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
      <section className="color-secondary -mx-8 text-center pt-4">
        <h2 className="app-accent mt-0 text-3xl mb-7">Contact Me</h2>
        <div className="contact__form">
          <form>
            <div className="pb-4 w-full flex items-center justify-center">
              <label
                htmlFor="name"
                className="pr-4 w-[20%] after:content-['*'] after:text-red-600 after:pl-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                // disabled
                className="w-[75%] min-h-[2rem]"
              />
            </div>
            <div className="pb-4 w-full flex items-center justify-center">
              <label
                htmlFor="email"
                className="pr-4 w-[20%] after:content-['*'] after:text-red-600 after:pl-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                // disabled
                className="w-[75%] min-h-[2rem]"
              />
            </div>
            <div className="pb-4 w-full flex items-center justify-center">
              <label
                htmlFor="message"
                className="pr-4 w-[20%] after:content-['*'] after:text-red-600 after:pl-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="10"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                // disabled
                className="w-[75%] min-h-[2rem]"
              ></textarea>
            </div>
            <div>
              <button
                disabled
                className="p-2 bg-white rounded-2xl text-black mb-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="text-center">
        <ul className="list-none inline-flex my-4 mx-8">
          <li>
            <a href="mailto:adithya2205@gmail.com" className="app-accent p-4">
              <FontAwesomeIcon icon={faAt} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adithya-pulipaka/"
              className="app-accent p-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adithya-pulipaka"
              className="app-accent p-4"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default AboutMe;
