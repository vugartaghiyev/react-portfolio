import React, { useState } from "react";
import "../Styles/portfolio.css";
import PortfolioItem from "./Portfolio/PortfolioItem";
import kitapp from "../images/kitapp.png";
import buybook from "../images/buybook.png";
import portfolio from "../images/portfolio.png";
import khoomi from "../images/khoomi.png";
const Portfolio = () => {
  const [portfolios] = useState([
    {
      img: kitapp,
      name: "Kitapp",
      tools: ["Html", "Css", "Javascipt", "Bootstrap4"],
      link: "https://kitappweb.herokuapp.com/",
    },
    {
      img: buybook,
      name: "Buybook",
      tools: ["Html", "Css", "Javascipt", "Bootstrap4"],
      link: "https://buybookapp.herokuapp.com/",
    },
    {
      img: portfolio,
      name: "Portfolio",
      tools: ["Html", "Css", "Javascipt", "React js"],
      link: "https://vugartaghiyev.netlify.app/",
    },
    {
      img: khoomi,
      name: "Khoomi",
      tools: ["Html", "Css", "Javascipt"],
      link: "https://vuqartagiyev.github.io/khoomi/",
    },
  ]);

  return (
    <section className="Section" id="Portfolio">
      <div className="Section-Title">
        <h3>PORTFOLIO</h3>
        <hr />
        <h4>
          Some of my latest <br />
          Projects
        </h4>
      </div>
      <div className="Portfolio">
        {portfolios.map((item, i) => (
          <PortfolioItem
            img={item.img}
            link={item.link}
            tools={item.tools}
            name={item.name}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
