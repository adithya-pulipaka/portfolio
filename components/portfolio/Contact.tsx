import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const msg = {
        subject: `Portfolio: Message from ${name}`,
        text: `Message from ${email}: ${message}`,
      };
      axios.post("/api/contact", msg).then((response) => {
        alert("Thanks for contacting me and I will get back to you shortly");
      });
      setError("");
    } else {
      setError(`All Fields are Required`);
    }
  };

  return (
    <>
      <section className="bg-white -mx-8 text-center pt-4" id="contact">
        <h2 className="text-primary hover:text-accent mt-0 text-3xl mb-7">
          Contact Me
          <span className="after:border-solid after:border-black after:border after:block after:w-20 after:mx-auto"></span>
        </h2>
        <div className="contact__form">
          <form>
            {error && <p className="text-red-600 font-bold py-2">{error}</p>}
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
                className="w-[75%] min-h-[2rem] rounded-lg bg-slate-200 pl-1"
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
                className="w-[75%] min-h-[2rem] rounded-lg bg-slate-200 pl-1"
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
                className="w-[75%] min-h-[2rem] rounded-lg bg-slate-200 pl-2"
              ></textarea>
            </div>
            <div>
              <button
                className="p-2 bg-black rounded-2xl text-white mb-4"
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
