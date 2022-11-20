import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appContext = useAppContext();
  const { appInfo, setAppInfo } = appContext.currentState;

  useEffect(() => {
    const isBlog = window.location.href.includes("blog");
    if (isBlog !== appInfo.isBlog) {
      setAppInfo({ isBlog });
    }
  });

  return (
    <>
      <nav className="flex p-4 px-6 justify-center items-center">
        <div className="custom-font text-2xl text-primary hover:text-black ">
          <Link href={"/"}>{"<Adithya Kashyap>"}</Link>
        </div>
        <div className="ml-auto mr-4 hidden md:block">
          <ul className="flex text-accent">
            {!appInfo.isBlog && (
              <>
                <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white hover:cursor-pointer">
                  <Link href={"#me"}>About Me</Link>
                </li>
                {/* <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
              <Link href={"#projects"}>Projects</Link>
            </li> */}
                <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
                  <Link href={"#experience"}>Experience</Link>
                </li>
                <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
                  <Link href={"#contact"}>Contact Me</Link>
                </li>
                <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
                  <Link href={"/blog"}>Blog</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="ml-auto mr-4 md:hidden">
          {!isMenuOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          {isMenuOpen && (
            <>
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                onClick={() => setIsMenuOpen(false)}
                className="fixed top-3 right-9"
              />
              <div className="fixed top-12 right-8 bg-slate-400">
                <ul className="text-white text-xl">
                  <li className="p-2 mx-2">
                    <Link href={"#me"}>
                      <a onClick={() => setIsMenuOpen(false)}>About Me</a>
                    </Link>
                  </li>
                  {/* <li className="p-2 mx-2">
                    <Link href={"#projects"}>
                      <a onClick={() => setIsMenuOpen(false)}>Projects</a>
                    </Link>
                  </li> */}
                  <li className="p-2 mx-2">
                    <Link href={"#experience"}>
                      <a onClick={() => setIsMenuOpen(false)}>Experience</a>
                    </Link>
                  </li>
                  <li className="p-2 mx-2">
                    <Link href={"#contact"}>
                      <a onClick={() => setIsMenuOpen(false)}>Contact me</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
