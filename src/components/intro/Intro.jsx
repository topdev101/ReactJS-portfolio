import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/denis1.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            {" "}
            I am a highly motivated and passionate Senior Frontend Engineer with
            over 10 years of experience in developing websites and web
            applications.<br /> I have successfully completed numerous projects using
            React.js, React Native, Angular, Vue, NodeJS and Express, showcasing
            my expertise in these technologies.<br />Additionally, I possess
            extensive knowledge of Redux, Next.js, and GraphQL.<br /> My proficiency
            in UI frameworks and tools such as Bootstrap, Storybook, SASS/SCSS,
            and Tailwind CSS enables me to create visually appealing and
            responsive user interfaces.<br /> Throughout my career, I have worked on
            more than 20 projects, with an average user satisfaction rating of
            95%.<br /> With a strong foundation in JavaScript and TypeScript, I have
            applied my expertise in Test-Driven Development (TDD),
            Object-Oriented Programming (OOP), and Behavior-Driven Development
            (BDD) to deliver robust and maintainable code.<br /> I have successfully
            implemented these methodologies in 15+ projects, resulting in a 40%
            reduction in bug density and improved code quality.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
