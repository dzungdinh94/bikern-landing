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
            <a href=" ">Home</a>
            <a href="#feature">Feautures</a>
            <a href="#ntf">NTFs</a>
            <a href="#tokennomic">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#team">Team</a>
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
