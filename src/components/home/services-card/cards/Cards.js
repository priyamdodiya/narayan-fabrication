import React from 'react';
import { Link } from "react-router-dom";
import "../ServicesCard.css";

const Cards = ({ image, title, description }) => {
  return (
    <div
      className="single-services text-center wow fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="services-icon">
        <img className="shape" src={image} alt="shape" />
        <img className="shape-1" src={image} alt="shape" />
        <i className="lni lni-baloon"></i>
      </div>
      <div className="services-content">
        <h4 className="services-title">
          <Link to="/services">{title}</Link>
        </h4>
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
