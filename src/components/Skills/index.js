import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img from "react-cool-img";
import "./index.scss";

const skills = [
  {
    logo: "/images/skills/html.png",
    name: "Html",
    link: "https://www.w3schools.com/html/",
  },
  {
    logo: "/images/skills/css-3.png",
    name: "Css",
    link: "https://www.w3schools.com/css/",
  },
  {
    logo: "/images/skills/js.png",
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    logo: "/images/skills/git-logo.png",
    name: "Git",
    link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
  },
  {
    logo: "/images/skills/bootstrap.png",
    name: "Bootstrap",
    link: "https://react-bootstrap.github.io/getting-started/introduction/",
  },
  {
    logo: "/images/skills/logo.png",
    name: "Material UI",
    link: "https://material-ui.com/",
  },
  {
    logo: "/images/skills/react.png",
    name: "ReactJS",
    link: "https://reactjs.org/",
  },
//   {
//     logo: "/images/skills/nextjs.png",
//     name: "NextJS",
//     link: "https://nextjs.org/",
//   },
  {
    logo: "/images/skills/redux.png",
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    logo: "/images/skills/sass.png",
    name: "Sass",
    link: "https://sass-lang.com/",
  },
  {
    logo: "/images/skills/node.jpeg",
    name: "NodeJS",
    link: "https://nodejs.org/en/docs/",
  },
  {
    logo: "/images/skills/ex.jpg",
    name: "ExpressJS",
    link: "https://expressjs.com/",
  },
  {
    logo: "/images/skills/db.png",
    name: "MongoDB",
    link: "https://docs.mongodb.com/",
  },
  {
    logo: "/images/skills/sentry.png",
    name: "Sentry.io",
    link: "https://docs.sentry.io/",
  },
  {
    logo: "/images/skills/i18.png",
    name: "i18next",
    link: "https://www.i18next.com/",
  },
];

const Skills = () => {
  return (
    <>
      <div className="heading-section">
        <h1 style={{paddingTop: "2rem"}}>
          <span className="chonburi-font green-text">Ski</span>lls
        </h1>
      </div>
      <div id="skills" className="skills-section" style={{ height: "100vh" }}>
        <Container>
          <Row className="skills-row">
            {skills.map((skill, index) => {
              return (
                <div className="skill-col" key={index + 1}>
                  <div className="skills">
                    <Img
                      placeholder="/images/skills/lod.jpeg"
                      src={skill.logo}
                      error="/images/skills/error.png"
                      alt="React Cool Img"
                    />
                    <a
                      rel="noopener noreferrer"
                      href={skill.link}
                      target="_blank"
                    >
                      <h3>{skill.name}</h3>
                    </a>
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
