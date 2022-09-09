import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "A Simple Todo App",
    description: `A 'Hello World' step of building a website! This is a simple todo app built using Next.JS Framework and Tailwind CSS for styling.`,
    live: `https://todo.adithyakashyap.com`,
    reference: `https://github.com/adithya-pulipaka/todo-app`,
  },
  // {
  //   name: "Budget Tracker",
  //   description: `A typical Budget Tracking applicaton where we define a budget with categories to start with and
  //      track the transactions made over time. Built with Next.JS Framework (React), Tailwind for styling and
  //      firestore to persist the data`,
  //   live: `https://budget.adithyakashyap.com`,
  //   reference: `https://github.com/adithya-pulipaka/budget-tracker`,
  // },
];

const Projects = () => {
  return (
    <>
      <section className="-mx-8 text-center p-8" id="projects">
        <h2 className="mt-0 text-primary hover:text-accent ">
          Personal Projects
          <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project) => {
            return (
              <div
                key={project.reference}
                className="grow shrink-0 basis-[350px] bg-slate-200 text-black m-8 flex flex-col items-center p-4 max-w-[500px]"
              >
                <h3 className="mt-0 pt-0">{project.name}</h3>
                <p className="my-4">{project.description}</p>
                <div className="flex flex-col justify-center md:flex-row mt-auto">
                  <Link href={project.live}>
                    <a
                      target={"_blank"}
                      className="text-sm p-3 font-bold bg-accent my-1 rounded-[15px] mr-4 text-white"
                    >
                      Live
                    </a>
                  </Link>
                  <Link href={project.reference}>
                    <a
                      target={"_blank"}
                      className="text-sm p-3 font-bold bg-accent my-1 rounded-[15px] mr-4 text-white"
                    >
                      Source
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold">... and more coming up!</div>
      </section>
    </>
  );
};

export default Projects;
