import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex p-4 px-6 justify-center items-center">
        <div className="custom-font text-2xl text-primary hover:text-black ">
          <Link href={"/"}>{"<Adithya Kashyap>"}</Link>
        </div>
        <div className="ml-auto mr-4">
          <ul className="flex text-accent">
            <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white hover:cursor-pointer">
              <Link href={"#me"}>About Me</Link>
            </li>
            <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li className="p-2 mx-2 rounded-2xl hover:bg-slate-500 hover:text-white">
              <Link href={"#footer"}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
