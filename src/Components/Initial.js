import React, { useEffect, useState } from "react";
import Header from "./Header";
import initialPic from "../images/InitialPic.jpg";
import linkedin from "../Icons/linkedin.svg";
import facebook from "../Icons/facebook.svg";
import instagram from "../Icons/instagram.svg";
import github from "../Icons/github.svg";
import twitter from "../Icons/twitter.svg";
import "../Styles/initial.css";

import resume from "../files/Vugarsresume.pdf";

const Initial = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <section className="Initial Section" id="Up">
      <Header />
      <div className="Initial__Content">
        <div className="Initial__Content-Left">
          <h3 className="Initial__Content-Hello">Hello! i'm</h3>
          <h1 className="Initial__Content-Owner">
            <span>Vugar</span> <br />
            Taghiyev
          </h1>
          <h2 className="Initial__Content-Job">Front end developer</h2>
          <p className="Initial__Content-Desc">Take a look at my CV</p>
          <a className="Initial__Content-Cv" href={resume} title="" download>
            Download my CV
          </a>
        </div>
        <div className="Initial__Content-Right">
          <img src={initialPic} alt="" />
        </div>
      </div>
      <div className="Initial__Media">
        <a
          href="https://github.com/vugartaghiyev"
          className="Initial__Media-Item"
        >
          <img src={github} alt=""></img>
        </a>
        <a
          href="https://www.linkedin.com/in/vugartaghiyev/"
          className="Initial__Media-Item"
        >
          <img src={linkedin} alt=""></img>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006377352993"
          className="Initial__Media-Item"
        >
          <img src={facebook} alt=""></img>
        </a>
        <a
          href="https://www.instagram.com/vgrtghyv/?hl=en"
          className="Initial__Media-Item"
        >
          <img src={instagram} alt=""></img>
        </a>
        <a
          href="https://github.com/VuqarTagiyev"
          className="Initial__Media-Item"
        >
          <img src={twitter} alt=""></img>
        </a>
      </div>
      {/* {!scroll ? (
        <div className="Scroll__Container">
          <div className="Scroller"></div>
        </div>
      ) : (
        ""
      )} */}
    </section>
  );
};

export default Initial;
