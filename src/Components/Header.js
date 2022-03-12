import React, { useEffect, useState } from "react";
import logoIcon from "../Icons/coding.svg";
import menuIcon from "../Icons/menu.svg";
import "../Styles/layout.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setMenu(false);
    });
  }, []);

  return (
    <div className="Header">
      <img src={logoIcon} alt="" className="Header__Logo" />
      <ul className="Header__Menu" style={{ display: menu ? "block" : "none" }}>
        <li className="Header__Menu-Item">
          <a href="#AboutMe">About me</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Skills">Skills</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <ul className="Header__Menu">
        <li className="Header__Menu-Item">
          <a href="#AboutMe">About me</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Skills">Skills</a>
        </li>
        <li className="Header__Menu-Item">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <img
        className="Header__Menu-Icon"
        src={menuIcon}
        alt=""
        onClick={() => setMenu(!menu)}
      />
    </div>
  );
};

export default Header;
