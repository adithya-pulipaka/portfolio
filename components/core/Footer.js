import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center border-t border-solid border-t-gray-400"
        id="footer"
      >
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
              <a className="text-accent p-4 hover:text-black" target={"_blank"}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/adithya-pulipaka">
              <a className="text-accent p-4 hover:text-black" target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
