import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"


import LaptopImg from "../../../../asset/img/mac-laptop.png";
import Data from "../../../../data/data";
import "./Laptop.css";

function LaptopHot({ cartItem, setCartItem }) {
  //redux dispatch
  
  return (
    <div className="Laptop">
      <div className="hot">HOT</div>
      <div className="hoverBg">
        <div className="hoverBox">
          <span>
            {/* <div className="circle" onClick={cartFunction}> */}
            <div className="circle">
              <i class="far fa-heart"></i>
            </div>
            <div className="circle">
              
                <i class="fas fa-cart-plus" ></i>
              
            </div>
          </span>
        </div>
        <img src={LaptopImg} alt="laptop" />
      </div>
      <div className="laptopName">{Data[6].name}</div>
      <span className="star">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </span>
      <div className="price">
        <span className="newPrice">{Data[6].price}</span>
        {cartItem}
        <span className="oldPrice">{Data[6].oldPrice}</span>
      </div>
    </div>
  );
}

function Laptop({ cartItem, setCartItem }) {
  
  return (
    <div className="Laptop">
      {/* <div className="hot">HOT</div> */}
      <div className="hoverBg">
        <div className="hoverBox">
          <span>
            {/* <div className="circle" onClick={cartFunction}> */}
            <div className="circle">
              <i class="far fa-heart"></i>
            </div>
            <div className="circle">
              <i class="fas fa-cart-plus"></i>
            </div>
          </span>
        </div>
        <img src={LaptopImg} alt="laptop" />
      </div>
      <Link to={`/product/${Data[6].id}`}>
      <i class="fas fa-cart-plus" ></i>
      </Link>
      <div className="laptopName">{Data[6].name}</div>
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </span>
      <div className="price">
        <span className="newPrice">{Data[6].price}</span>
        {cartItem}
        <span className="oldPrice">{Data[6].oldPrice}</span>
      </div>
    </div>
  );
}

function LaptopList({ cartItem, setCartItem }) {
  // const dispatch = useDispatch()
  return (
    <>
      <Link to={{
        pathname: `/product/${Data[6].id}`
      }}>
        <div className="LaptopList">
          <div className="Laptopy">
            <div className="hot">HOT</div>
            <img src={LaptopImg} alt="laptop" />
          </div>
          <div className="textsect">
            <div className="laptopName">
              Beats Solo2 On Ear Headphones - Black
            </div>
            <div className="reviewSect">
              <span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <div className="reviews">0 reviews</div>
              <div className="submitReview">Submit a review</div>
            </div>
            <div className="price">
              <span className="newPrice">$499</span>
              {cartItem}
              <span className="oldPrice">$499</span>
            </div>
            <div className="laptopDesc">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
              leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
              nisl ut dolor ...
            </div>
            <div className="addToCartSec">
              <div className="addCart">
                <i class="fas fa-cart-plus"></i>Add to Cart
              </div>
              <div className="love">
                <i class="far fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </Link>
    </>
  );
}

export { Laptop, LaptopHot, LaptopList };
