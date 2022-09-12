import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);
  const menu = [
    {
      name: "Home",
      href: " #",
    },
    {
      name: "Feautures",
      href: "#feature",
    },
    {
      name: "NTFs",
      href: "#ntf",
    },
    {
      name: "Tokenomics",
      href: "#tokennomic",
    },
    {
      name: "Roadmap",
      href: "#roadmap",
    },
    {
      name: "Team",
      href: "#team",
    },
  ];
  return (
    <header className="header">
      <div className="icon-header">
        <div className="logo">
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
        {!isHeader && (
          <FaAlignJustify
            onClick={() => {
              setIsHeader(!isHeader);
            }}
          />
        )}
        <div className={isHeader ? "menu-header active" : "menu-header"}>
          {menu &&
            menu.map((item) => {
              return (
                <React.Fragment key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setIsHeader(false);
                    }}
                  >
                    {item.name}
                  </a>
                </React.Fragment>
              );
            })}
          <span
            onClick={() => {
              setIsHeader(false);
            }}
          >
            <AiOutlineClose />
          </span>
        </div>
      </div>

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
