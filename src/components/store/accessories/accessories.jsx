import React from "react"
import phoneImg from "../../../asset/img/pic.png"

import "./accessories.css"

 function Accessories() {
    return(
        <div className="access">
            <ul className="">
            <div className="AccessTitle">ACCESORIES</div>
                <li>Apple Car</li>
                <li>Air port & wireless</li>
                <li>Cables & Docks</li>
                <li>Cases & Films</li>
                <li>Charging Devices</li>
                <li>Connected home</li>
                <li>Headphones</li>
            </ul>
        </div>
    )
}






function LoadMore() {
  return (
    
      <div className="accblueBg">
        <div className="accshopNow">
          <div className="accleftShopNow">
            <div className="accphoneName">iPhone 8</div>
            <div className="accdesc">
            Performance and design. Taken right to the edge.
            </div>
            <button className="accshop">SHOP NOW</button>
          </div>
          <div className="accrightShopNow">
              <img src={phoneImg} alt="phone"/>
          </div>
        </div>
      </div>
    
  );
}

export {LoadMore, Accessories};
