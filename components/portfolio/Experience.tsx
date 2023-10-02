import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <section className="-mx-8 text-center p-8  bg-slate-200" id="experience">
        {/* bg-slate-200 for alternate colors + mb-4 on the section above */}
        <h2 className="mt-0 text-primary hover:text-accent ">
          Professional Experience
          <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
        </h2>
        <div className="relative">
          <div className="before:border before:border-solid before:border-slate-500 before:bg-slate-500 before:absolute before:w-3 before:h-full before:rounded-md">
            <article>
              <div className="md:relative">
                <span className="hidden md:block md:absolute md:top-8 md:right-[calc(50%-2px)]">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2x"
                    className="text-slate-500"
                  />
                </span>
                <span className="hidden md:block md:absolute md:top-8 md:left-[53%] md:text-2xl md:font-bold md:text-accent">
                  Sep 2022 - Present
                </span>
              </div>
              <div className="w-full md:w-[45%] bg-white p-4 mt-8 rounded-xl border-t-black border-t-2 relative">
                {/* bg-slate-200 for alternate colors  */}
                <span className="absolute -top-3 -right-3">
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </span>
                <h3 className="py-2">Senior Software Engineer</h3>
                <p className="py-2 ">
                  Walmart Global Tech, Washington DC Metro{" "}
                  <span className="md:hidden">(Sep 2022 - Present)</span>
                </p>
                <p className="py-4">
                  Software Engineer working on the Global Payments team{" "}
                </p>
              </div>
            </article>
            <article>
              <div className="md:relative">
                <span className="hidden md:block md:absolute md:top-8 md:left-[calc(51%-4px)] xl:left-[calc(51%-6px)]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2x"
                    className="text-slate-500"
                  />
                </span>
                <span className="hidden md:block md:absolute md:top-8 md:right-[53%] md:text-2xl md:font-bold md:text-accent">
                  Jan 2021 - Sep 2022
                </span>
              </div>
              <div className="w-full md:w-[45%] bg-white p-4 mt-8 rounded-xl relative md:ml-auto border-t-black border-t-2">
                <span className="absolute -top-3 -right-3">
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </span>
                <h3 className="py-2">Full Stack Developer</h3>
                <p className="py-2 ">
                  Morgan Stanley, NYC Metro (Remote){" "}
                  <span className="md:hidden">(Jan 2021 - Sep 2022)</span>
                </p>
                <p className="py-4">
                  Full Stack Developer in Warehouse Lending Platform responsible
                  for building web applications using Java and Angular.
                </p>
              </div>
            </article>
            <article>
              <div className="md:relative">
                <span className="hidden md:block md:absolute md:top-8 md:right-[calc(50%-2px)]">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2x"
                    className="text-slate-500"
                  />
                </span>
                <span className="hidden md:block md:absolute md:top-8 md:left-[53%] md:text-2xl md:font-bold md:text-accent">
                  Nov 2014 - Dec 2020
                </span>
              </div>
              <div className="w-full md:w-[45%] bg-white p-4 mt-8 rounded-xl relative border-t-black border-t-2">
                <span className="absolute -top-3 -right-3">
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </span>

                <h3 className="py-2">Java Software Developer</h3>
                <p className="py-2 ">
                  Fannie Mae, Washington DC Metro{" "}
                  <span className="md:hidden">(Nov 2014 - Dec 2020)</span>
                </p>
                <p className="py-4">
                  Worked on various projects across different teams.
                  Responsibilities include design, development, automation and
                  deployment of multiple web applications across different
                  portfolios.
                </p>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="relative">
          <div className="before:border before:border-solid before:border-slate-500 before:bg-slate-500 before:absolute before:w-2 before:h-full before:rounded-md">
            <article>
              <span className="absolute top-8">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size="2x"
                  className="text-slate-500"
                />
              </span>
              <div className="w-[45%] bg-slate-200 p-4 mt-8 rounded-xl relative">
                <span className="absolute -top-3 -right-3">
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </span>

                <h3 className="py-2">Java Software Developer</h3>
                <h4 className="py-2">Fannie Mae, Washington DC Metro</h4>
                <p className="py-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam numquam consectetur dolor facere facilis alias
                  maiores, aspernatur itaque. Odit, enim non voluptatibus aut
                  quidem eaque tempore excepturi dolor. Deleniti, aut!
                </p>
              </div>
            </article>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Experience;
