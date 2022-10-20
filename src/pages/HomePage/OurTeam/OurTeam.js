import React from "react";
import "./index.scss";

const OurTeam = () => {
  return (
    <section id="team" className="our-team">
      <div className="w-1200">
        <div className="content">
          <div className="title">
            <h3>Our team</h3>
          </div>
          <div className="list-item">
            <div
              className="item"
              style={{
                background:
                  "linear-gradient(148.7deg, #79e7ff -26.04%, #a7dfff 166.02%)",
              }}
            >
              <img src="./assets/img/avt1.png" alt="" />
              <div className="name">
                <span>James Cornel</span>
                <p>Project Founder</p>
              </div>
            </div>
            <div
              className="item"
              style={{
                background: "linear-gradient(90deg, #8DC788 0%, #B4D861 100%)",
              }}
            >
              <img src="./assets/img/avt2.png" alt="" />
              <div className="name">
                <span>Ben Do</span>
                <p>
                  Graphic Design Artist <br /> & Illustrator
                </p>
              </div>
            </div>
            <div
              className="item"
              style={{
                background:
                  "linear-gradient(148.7deg, #79e7ff -26.04%, #a7dfff 166.02%)",
              }}
            >
              <img src="./assets/img/avt3.png" alt="" />
              <div className="name">
                <span>Jack Ma </span>
                <p>
                  Head of Security <br /> Cybersecurity Developer
                </p>
              </div>
            </div>
            <div
              className="item"
              style={{
                background: "linear-gradient(90deg, #8DC788 0%, #B4D861 100%)",
              }}
            >
              <img src="./assets/img/avt4.png" alt="" />
              <div className="name">
                <span>Ming Tan</span>
                <p>Head of Social Media</p>
              </div>
            </div>
            <div
              className="item"
              style={{
                background:
                  "linear-gradient(148.7deg, #79e7ff -26.04%, #a7dfff 166.02%)",
              }}
            >
              <img src="./assets/img/avt5.png" alt="" />
              <div className="name">
                <span>Micheal Lou</span>
                <p>
                  Community Manager <br /> Crypto Entrepreneur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
