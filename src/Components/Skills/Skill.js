import React from "react";
import link from "../../Icons/external-link.svg";

const Skill = ({ icon, name, skillLink }) => {
  return (
    <div className="Skill">
      <i className={`${icon} Skill__Icon`}></i>
      <h5 className="Skill__Name">{name}</h5>
      <div className="Skill__Hover">
        <div className="Skill__Hover-Content">
          About this skill
          <a href={skillLink} target="blank">
            <img src={link} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skill;
