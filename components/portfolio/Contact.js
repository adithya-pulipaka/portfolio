import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const msg = {
      to: `adithya2205@gmail.com`,
      from: `adithya2205@gmail.com`,
      subject: `Portfolio: Message from ${name}`,
      text: `Message from ${email}: ${message}`,
    };
    axios.post("/api/contact", msg).then((response) => {
      alert("Thanks for contacting me and I will get back to you shortly");
    });
  };

  return (
    <>
      <section className="bg-slate-200 -mx-8 text-center pt-4">
        <h2 className="app-accent mt-0 text-3xl mb-7">
          Contact Me
          <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
        </h2>
        <div className="contact__form">
          <form>
            <div className="pb-4 w-full md:max-w-md md:mx-auto flex items-center justify-center">
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
                className="w-[75%] min-h-[2rem]"
              />
            </div>
            <div className="pb-4 w-full md:max-w-md md:mx-auto flex items-center justify-center">
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
                className="w-[75%] min-h-[2rem]"
              />
            </div>
            <div className="pb-4 w-full md:max-w-md md:mx-auto flex items-center justify-center">
              <label
                htmlFor="message"
                className="pr-4 w-[20%] after:content-['*'] after:text-red-600 after:pl-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-[75%] min-h-[2rem]"
              ></textarea>
            </div>
            <div>
              <button
                className="p-2 bg-white rounded-2xl text-black mb-4"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
