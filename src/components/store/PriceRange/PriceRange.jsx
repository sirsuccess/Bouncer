import React from "react";

import "./PriceRange.css";

function PriceRange() {
  return (
    <div className="PriceRange">
      <div className="priceTitle">PRICES</div>
      <span>
        <span>Range:</span> <span>$13.99-$25.99</span>
      </span>
      <div className="range">
        <div className="rangeBlue">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

function ColorPallet() {
  return (
    <div className="ColorPallet">
      <div className="ColorName">COLOR</div>
      <div className="pallet">
        <div className="blue">
          <div className="innerblue"></div>
        </div>
        <div className="red"></div>
        <div className="black"></div>
        <div className="yellow"></div>
        <div className="purple"></div>
        <div className="gray"></div>
      </div>
    </div>
  );
}


function Brand() {
    return(
        <div className="Brand">
            <div className="brandName">BRAND</div>
            <ul>
                <li> <span className="brandType">Apple</span> <span>99</span></li>
                <li> <span className="brandType">LG</span> <span>99</span></li>
                <li> <span className="brandType">Samsung</span> <span>99</span></li>
                <li> <span className="brandType">Siemens</span> <span>99</span></li>
                
            </ul>
        </div>
    )
}

function More() {
    return(
        <div className="More">
            MORE
        </div>
    )
}

export { PriceRange, ColorPallet,Brand,More };
