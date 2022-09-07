import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="w-1200 topbar">
        <div className="logo">
          <img src="./assets/img/logo.png" alt="" />
        </div>
        <div className="content-right">
          <ul>
            <li>
              <a href=" ">Home</a>
            </li>
            <li>
              <a href=" ">Feautures</a>
            </li>
            <li>
              <a href=" ">NTFs</a>
            </li>
            <li>
              <a href=" ">Tokenomics</a>
            </li>
            <li>
              <a href=" ">Roadmap</a>
            </li>
            <li>
              <a href=" ">Team</a>
            </li>
          </ul>
          <div className="play-now">
            <span>PLAY NOW</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
