import React,{useEffect} from "react";

import ThreeItems from "./ThreeItems/ThreeItems"

import ArrowLeft from "../../../asset/img/arrow left.svg"
import Phone from "../../../data/data"
import "./Carousel.css";

function Carousel() {
  // useEffect(()=>{
  //   console.log({img:Phone[0].img})
  // })
  return (
    <div>
    <div className="Carousel">
        <div className="innerCarousel">
            <img src={ArrowLeft} className="arrow" alt="arrow left direction"/>
      <div className="carouLeft">
        <div className="textHead">{Phone[0].name}</div>
        <div className="text">
        {Phone[0].desc}
          <div className="more">
          MORE
          </div>
          
        </div>
      </div>
      <div className="carouRight">
          <img src={Phone[0].img} alt="phone"/>
      </div>
      <img src={ArrowLeft} className="arrowRight" alt="arrow left direction"/>
        </div>
    </div>
        <ThreeItems/>
            
        </div>
  );
}

export default Carousel;
