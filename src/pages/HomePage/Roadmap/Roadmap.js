import React from "react";
import "./index.scss";

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="mobile-roadmap">
        <img src="/assets/img/Group 415.png" alt="" />
        <div className="list-item">
          <div className="item">
            <h3 className="title">Q1, 2022</h3>
            <p>Ideas Generated, Team Established , Website Development</p>
          </div>
          <div className="item">
            <h3 className="title">Q2, 2022</h3>
            <p>
              App design and development, Launching Demo App, Design NFT Bikes,
              Contract Audit, Community building{" "}
            </p>
          </div>
          <div className="item">
            <h3 className="title">Q3, 2022</h3>
            <p>
              Launch Open Beta App, Private/Public Sales, Dex Listing, AMA Quest
              & Challenge launching, NFT minting and Marketplace
            </p>
          </div>
          <div className="item">
            <h3 className="title">Q4, 2022</h3>
            <p>
              Update Contract V2, Rental system Launch, Staking pools added PVP
              and social mode added, Skin for NFT cycle added, CEX listing
            </p>
          </div>
          <div className="item">
            <h3 className="title">Q1, 2023</h3>
            <p>Update more features, Launch app on Smart Watch</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="bg-img">
          <img src="./assets/img/Group 427.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
