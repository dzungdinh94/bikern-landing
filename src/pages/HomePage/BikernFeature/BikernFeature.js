import React from "react";
import "./index.scss";
const BikernFeature = () => {
  return (
    <section id="feature" className="bikern-feature">
      <div className="w-1200">
        <div className="content">
          <div className="title">
            <img src="./assets/img/04.png" alt="" />
            <h3>Bikern Features</h3>
          </div>
          <div className="list-item">
            <div className="item">
              <img src="./assets/img/marketplace_white 1.png" alt="" />
              <h3>Purchase NFTS</h3>
              <p>
                Users can purchase NFTs in the <br /> form of virtual bicycles
                which are <br /> linked to real cycling activities.
              </p>
            </div>
            <div className="item">
              <img src="./assets/img/coin 1.png" alt="" />
              <h3>Earn Tokens</h3>
              <p>
                By cycling around, users will earn <br /> our in-app tokens
                (Main token: <br /> Bikern/BKN; Utility token: Bikern <br />
                Utility/BKU), BKN can be use to <br /> buy NFT
              </p>
            </div>
            <div className="item">
              <img src="./assets/img/cycling 1.png" alt="" />
              <h3>Races & Competition </h3>
              <p>
                Stake BKN to join Races and <br /> Competitions, where biker can{" "}
                <br /> challenge 1 vs 1 or team vs team.
              </p>
            </div>
            <div className="item">
              <img src="./assets/img/stats 1.png" alt="" />
              <h3>Upgrade & Repair </h3>
              <p>
                Users can purchase NFTs in the <br /> form of virtual bicycles
                which are <br /> linked to real cycling activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikernFeature;
