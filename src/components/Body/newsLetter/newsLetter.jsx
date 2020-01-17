import React from "react";

import "./newsLetter.css";
import newsImag from "../../../asset/img/img.png";

export default function newsLetter({setNewsletter,newsletter}) {
    console.log(newsletter);
    
    function cancelNewsletter() {
        setNewsletter(false)
        // clearTimeout()
        // console.log("am here cancel");
        
        return 
        
    }
  return (
    <div className="model">
      <div className="newsLetter">
        <div className="newsText">
          <h1>Newsletter</h1>
          <div className="newsInnerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <span className="inputSection">
              <input type="text" className="email"placeholder="Email"/>
                <div className="subscribe">Subscribe</div>
          </span>
          <span className="check"><input type="checkbox"  name="check" id="check"/>Don’t show this popup again</span>
        </div>
        <div className="newsImg">
          <img src={newsImag} alt="gift" />
        </div>
        <div className="cancelModel" onClick={cancelNewsletter} >X</div>
      </div>
      {/* <button id="btnEdit" type="submit">Edit</button>
            <button id="btnCancel" onclick="cancelFunct()" >X</button> */}
    </div>
  );
}
