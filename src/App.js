import "./App.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faGithub,
  faJava,
  faJenkins,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import test from "./images/spring-icon.png";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <main>
        <section className="intro">
          <h1 className="intro__heading">Hi, I'm Adithya</h1>
          <h4 className="intro__title">Full Stack Developer</h4>
          <img className="intro__picture" src="images/profile.JPG" alt="Logo" />
        </section>
        <section className="aboutme">
          <h2 className="section__heading text-accent">About Me</h2>
          <div>
            Hey there again! My name is Adithya Kashyap Pulipaka and I am
            currently working as a Full Stack Developer for Morgan Stanley. My
            Professional experience includes developing web applications and
            API's using languages like Java, JavaScript and Python. In my free
            time, I like to hangout with my friends and watch TV shows.
          </div>
          <div className="stack">
            <h4 className="text-accent">My Tech Stack</h4>
            <div className="stack__items">
              <div className="stack__item">
                <FontAwesomeIcon icon={faJava} size="2x" />
                <p className="stack__text"> Java</p>
              </div>
              <div className="stack__item">
                <FontAwesomeIcon icon={faJs} size="2x" />
                <p className="stack__text"> JavaScript</p>
              </div>
              <div className="stack__item">
                <img src={test} alt="" />
                <p className="stack__text"> Spring </p>
              </div>
              <div className="stack__item">
                <FontAwesomeIcon icon={faAngular} size="2x" />
                <p className="stack__text"> Angular </p>
              </div>
              <div className="stack__item">
                <FontAwesomeIcon icon={faReact} size="2x" />
                <p className="stack__text"> React </p>
              </div>
              <div className="stack__item">
                <FontAwesomeIcon icon={faJenkins} size="2x" />
                <p className="stack__text"> Jenkins </p>
              </div>
            </div>
          </div>
        </section>
        <section className="projects">
          <h2 className="section__heading">My Personal Projects</h2>
          <div className="projects__list">
            <div className="project-card">
              <h3 className="project-card__heading">Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div className="project-card__buttons">
                <button className="btn btn-accent">Live Version</button>
                <button className="btn">Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3 className="project-card__heading">Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div className="project-card__buttons">
                <button className="btn">Live Version</button>
                <button className="btn">Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3 className="project-card__heading">Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div className="project-card__buttons">
                <button className="btn">Live Version</button>
                <button className="btn">Source </button>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <h3 className="text-accent">Contact Me</h3>
          <div className="contact__form">
            <form>
              <div>
                <label htmlFor="name" className="required">
                  Name
                </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="required">
                  Email
                </label>
                <input type="email" name="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message" className="required">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <ul className="social__links">
          <li className="social__links--item">
            <a href="mailto:adithya2205@gmail.com">
              <FontAwesomeIcon icon={faAt} size="2x" />
            </a>
          </li>
          <li className="social__links--item">
            <a href="https://www.linkedin.com/in/adithya-pulipaka/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li className="social__links--item">
            <a href="https://github.com/adithya-pulipaka">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
