import React from "react";
import "./banner.scss";
const Banner = () => {
  return (
    <section className="banner">
      <div className="w-1200">
        <div className="content">
          <div className="wrap-title">
            <div className="title">
              <h3>
                Discover your <br /> journey <br /> with BIKERN
              </h3>
              <span>
                Explore all the most exciting things <br /> in here based on
                your hobby.
              </span>
            </div>
          </div>
          <div className="image">
            <img src="./assets/img/C1_G 1.png" alt="" />
            {/* <div className="vector-one">
              <img src="./assets/img/Vector 515.png" alt="" />
            </div>
            <div className="vector-two">
              <img src="./assets/img/Vector 516.png" alt="" />
            </div>
            <div className="vector-three">
              <img src="./assets/img/Vector 517.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
