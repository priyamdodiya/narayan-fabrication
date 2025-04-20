import React from "react";
import "./ServicesCard.css";
import Cards from "./cards/Cards";
const ServicesCard = () => {
  return (
    <div className="services-card">
      <div>
        <h1>Our Services</h1>
      </div>
      <div className="landr">
        <div className="service-wrapper">
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;