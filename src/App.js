import AboutMe from "./Components/AboutMe";
import Initial from "./Components/Initial";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import "./Styles/main.css";
import "./Styles/responsive.css";

import { useEffect, useState } from "react";

import Footer from "./Components/Footer";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <div className="App">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Initial />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />

      {scroll ? (
        <a className="Go-To__Up" href="#Up" style={{ zIndex: 5 }}>
          Up
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
