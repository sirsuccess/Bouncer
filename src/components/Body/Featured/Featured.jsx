import React from "react";
import HeadSet from "../../../asset/img/ear-phone.png";
import RainGauge from "../../../asset/img/50050995_530579.png";
import Tray from "../../../asset/img/PR-104-0015-002-8A.png";

import "./Featured.css";

function Featured() {
  return (
    <>
      <h2>FEATURED PRODUCTS</h2>
      <div className="Featured">
        <div className="firstFeatured">
          <img src={HeadSet} alt="head set" />

          <div className="firstLeft">
            <div className="firstName">
              Beats Solo 2 On Ear Headphones - Black
            </div>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <div className="price">
              <span className="newPrice">$499</span>
              <span className="oldPrice">$499</span>
            </div>
          </div>
        </div>
        <div className="firstFeatured">
          <img src={RainGauge} alt="head set" />

          <div className="firstLeft">
            <div className="firstName">
            H-Squared tvTray
            </div>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <div className="price">
              <span className="newPrice">$499</span>
              <span className="oldPrice">$499</span>
            </div>
          </div>
        </div>
        <div className="firstFeatured">
          <img src={Tray} alt="head set" />

          <div className="firstLeft">
            <div className="firstName">
              Beats Solo 2 On Ear Headphones - Black
            </div>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <div className="price">
              <span className="newPrice">$499</span>
              <span className="oldPrice">$499</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
