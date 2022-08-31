import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center border-t border-solid border-t-gray-400">
        <ul className="list-none inline-flex my-4 mx-8">
          <li>
            <a href="mailto:adithya2205@gmail.com" className="text-accent p-4 ">
              <FontAwesomeIcon icon={faAt} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adithya-pulipaka/"
              className="text-accent p-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adithya-pulipaka"
              className="text-accent p-4"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
