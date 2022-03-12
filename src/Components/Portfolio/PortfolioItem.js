import React from "react";
const PortfolioItem = ({ img, link, name, tools }) => {
  return (
    <div className="Portfolio-Item" style={{ backgroundImage: `url(${img})` }}>
      <div className="Portfolio-Item__Hover">
        <div className="Portfolio-Item__Content">
          <p className="Portfolio-Item__Name">{name}</p>
          {tools.map((tool, i) => (
            <p className="Portfolio-Item__Tool" key={i}>
              {tool}
            </p>
          ))}
          <a href={link} className="Portfolio-Item__Link" target="blank">
            Visit
          </a>
        </div>
        <div className="Portfolio-Item__Hover-Left"></div>
        <div className="Portfolio-Item__Hover-Right"></div>
      </div>
    </div>
  );
};

export default PortfolioItem;
