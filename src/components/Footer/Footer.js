import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-1200">
        <div className="content">
          <div className="logo">
            <img src="./assets/img/logo_bikern.png" alt="" />
          </div>
          <div className="list-item">
            <div className="contact">
              <h3>CONTACT US</h3>
              <span>Email: support@bikern.com</span>
            </div>
            <div className="item">
              <h3>DOCUMENT</h3>
            </div>
            <div className="item">
              <h3>PICTH DECK</h3>
            </div>
            <div className="item">
              <h3>JOIN OUR COMMUNITY</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
