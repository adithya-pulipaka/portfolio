import React from "react";

const Intro = () => {
  return (
    <>
      <section className="md:h-[50vh] pb-8 mt-9 text-center md:flex md:justify-evenly md:items-center">
        <div>
          <h1 className="-mb-4">Hi, I'm Adithya</h1>
          <h3 className=" text-accent my-5 mb-3">Full Stack Developer</h3>
          <h4 className="text-primary text-lg mb-6">
            <span className="italic">`My Digital Diary!`</span>
          </h4>
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
