import React from "react";
import "./homepage.scss";
import Header from "../../components/Header";
import Banner from "./Banner";
import Footer from "../../components/Footer/Footer";
import BikernFeature from "./BikernFeature/BikernFeature";
import ShowRoom from "./ShowRoom/ShowRoom";
import OurTeam from "./OurTeam";
import Roadmap from "./Roadmap/Roadmap";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header />
      <div className="bg">
        <Banner />
        <section className="what-bikern">
          <div className="content">
            <img src="./assets/img/Group 360.png" alt="" />
          </div>
        </section>
        <section className="dow-app">
          <div className="w-1200">
            <div className="bg-img">
              <img src="./assets/img/Group 382.png" alt="" />
              <div className="title">
                <h3>
                  DOWNLOAD <br /> APP
                </h3>
              </div>
            </div>
          </div>
        </section>
        <BikernFeature />
        <section className="getting-started">
          <div className="w-1200">
            <div className="content">
              <h3 className="title">Getting Started </h3>
              <div className="item">
                <span>Download</span>
                <p>To start, users need to download the BIKERN application</p>
              </div>
              <div className="item">
                <span>Sign Up</span>
                <p>
                  After getting access to the app on your respective device, you
                  will be able to sign up for Bikern <br /> with your email
                  address. You will receive a verification code that you need to
                  key in to enter the <br /> app.
                </p>
              </div>
              <div className="item">
                <span>Start</span>
                <p>
                  Head over to the in-app Marketplace and pick out a Bicycle
                  that suit your style! You can use the <br />
                  Filter tool to look for a Bicycle type of your preference.
                  Ensure you have enough BKN for the <br />
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ShowRoom />
        <Roadmap />
        <section id="tokennomic" className="token-nomic">
          <div className="content">
            <img src="./assets/img/Group 416.png" alt="" />
          </div>
        </section>
        <OurTeam />
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
