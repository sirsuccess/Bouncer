import React from "react";

import "./ThreeItems.css";
import data from "../../../../data/data"
import ThirdImg from "../../../../asset/img/50051823_540375.png";


function ThreeItems() {
  return (
    <div className="threeItem">
      <div className="firstItem">
        <div className="innerFirst">
          <div className="bigText">{data[1].name}</div>
          <p>{data[1].desc}</p>
          <div className="price">{data[1].price}</div>
        </div>

        <img src={data[1].img} alt="phone" />
      </div>
      <div className="secondItem">
      <img src={data[2].img} alt="phone" />
        <div className="secondBotom">
            <span>{data[2].name}</span> 
            <span>{data[2].price}</span>
        </div>
      </div>
      <div className="thirdItem">
      <div className="innerFirst">
          <div className="bigText">{data[3].name}</div>
          <p>{data[3].desc}</p>
          <div className="price">{data[3].price}</div>
        </div>

        <img src={data[3].img} alt="phone" />
      </div>
    </div>
  );
}

export default ThreeItems;
