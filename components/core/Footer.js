import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faHeart } from "@fortawesome/free-solid-svg-icons";
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
        <div className="text-xl text-primary font-bold my-8">
          Built with{" "}
          <FontAwesomeIcon icon={faHeart} className="pr-2 text-red-500" />
          by Adithya Kashyap
        </div>
      </footer>
    </>
  );
};

export default Footer;
