import "./App.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faJava,
  faJenkins,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as SpringIcon } from "./images/springio-icon.svg";
import test from "./images/spring-icon.png";

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
              <h3>Project 1</h3>
              <h4>test</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div>
                <button>Live Version</button>
                <button>Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div>
                <button>Live Version</button>
                <button>Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div>
                <button>Live Version</button>
                <button>Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div>
                <button>Live Version</button>
                <button>Source </button>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 5</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eveniet dolorum doloremque consectetur unde distinctio id
                tempore architecto numquam in eaque non dignissimos minus nulla,
                nam ea veniam alias quis!
              </p>
              <div>
                <button>Live Version</button>
                <button>Source </button>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <h4>Contact Me</h4>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Send Message" />
          </div>
        </section>
      </main>
      <footer>
        <h4>
          <a href="mailto:adithya2205@gmail.com">adithya2205@gmail.com</a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
