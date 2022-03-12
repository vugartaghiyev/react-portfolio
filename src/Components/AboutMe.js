import React from "react";
import "../Styles/about-me.css";
import pic from "../images/aboutme.png";
const AboutMe = () => {
  return (
    <section className="Section" id="AboutMe">
      <div className="Section-Title">
        <h3>ABOUT ME</h3>
        <hr />
        <h4>Who am I?</h4>
      </div>
      <div className="About-Me">
        <div className="About-Me__Pic">
          <img src={pic} alt="" />
        </div>
        <div className="About-Me__Text">
          Hi, my name is Vugar. I am from Azerbaijan.I studied at Azerbaijan
          Technical University As an IT student. I am a Front end developer. I
          have 2 years of experience in this field. The technologies I use:
          Html5, Css3, Javascript, React js(Context, Hooks, Redux) Bootstrap4,
          Semantic UI,Sass-Scss,Adobe XD, Adobe Photoshop,Figma, Git, Github
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
