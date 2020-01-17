import React from "react";

import phoneImg from "../../../asset/img/pic.png"
import "./LoadMore.css";


function LoadMore() {
  return (
    <div className="LoadMore">
      <h3>LOAD MORE</h3>
      <div className="blueBg">
        <div className="shopNow">
          <div className="leftShopNow">
            <div className="phoneName">iPhone 6 Plus</div>
            <div className="desc">
              Performance and design. Taken right to the edge.
            </div>
            <button className="shop">SHOP NOW</button>
          </div>
          <div className="rightShopNow">
              <img src={phoneImg} alt="phone"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadMore;
