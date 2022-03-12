import React, { useState } from "react";
import "../Styles/skills.css";
import Skill from "./Skills/Skill";
const Skills = () => {
  const [skills] = useState([
    {
      icon: "devicon-html5-plain",
      name: "Html5",
      link: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      icon: "devicon-css3-plain",
      name: "Css3",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      icon: "devicon-javascript-plain",
      name: "Javascript",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      icon: "devicon-bootstrap-plain",
      name: "Bootstrap4",
      link: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
    },
    {
      icon: "devicon-sass-plain",
      name: "Sass/Scss",
      link: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
    },
    {
      icon: "devicon-react-plain",
      name: "React js",
      link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
    },
    {
      icon: "devicon-redux-plain",
      name: "Redux",
      link: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)",
    },
    {
      icon: "devicon-git-plain",
      name: "Git",
      link: "https://en.wikipedia.org/wiki/Git",
    },
  ]);

  return (
    <section className="Section" id="Skills">
      <div className="Section-Title">
        <h3>SKILLS</h3>
        <hr />
        <h4>
          These are the Technologies
          <br /> I work on
        </h4>
      </div>
      <div className="Skills">
        {skills.map((skill, i) => (
          <Skill
            skillLink={skill.link}
            icon={skill.icon}
            name={skill.name}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
