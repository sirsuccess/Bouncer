import React from "react";

import ShippingPhoto from "../../../asset/img/shipping.svg";
import Refund from "../../../asset/img/refund.svg";
import CustomerService from "../../../asset/img/customerService.svg";

import "./Services.css";

function Services() {
  return (
    <div className="Services">
      <div className="firstService">
        <img src={ShippingPhoto} alt="shipping" />
        <div className="serviceName">FREE SHIPPING</div>
        <div className="serviceText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud
        </div>
      </div>
      <div className="firstService">
        <img src={Refund} alt="refund" />
        <div className="serviceName">100% REFUND</div>
        <div className="serviceText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud 
        </div>
      </div>
      <div className="firstService">
        <img src={CustomerService} alt="customer service" />
        
        
      </div>
    </div>
  );
}

export default Services;
