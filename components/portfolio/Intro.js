import React from "react";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <>
      <section className="md:h-[50vh] pb-8 mt-9 text-center md:flex md:justify-evenly md:items-center">
        <div>
          <h1 className="-mb-4">Hi, I'm Adithya</h1>
          <h3 className=" text-accent my-5 mb-3">Full Stack Developer</h3>
          <h4 className="text-primary text-lg mb-4">
            <span className="italic">`My Digital Diary!`</span>
          </h4>
          <div className="text-center">
            <ul className="list-none inline-flex my-4 mx-8">
              <li>
                <Link href="mailto:adithya2205@gmail.com">
                  <a className="text-accent p-4 hover:text-black">
                    <FontAwesomeIcon icon={faAt} size="2x" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/adithya-pulipaka/">
                  <a
                    className="text-accent p-4 hover:text-blue-500"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/adithya-pulipaka">
                  <a
                    className="text-accent p-4 hover:text-black"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="images/profile.JPG"
          alt="ProfilePic"
          className="w-[100px] h-[100px] object-cover object-top rounded-full mx-auto md:mx-0 md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]"
        />
      </section>
    </>
  );
};

export default Intro;
