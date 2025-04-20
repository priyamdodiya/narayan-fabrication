import React from 'react'
import Back1 from "../../../../assets/back1.jpg";
import { Link } from "react-router-dom"
import "../ServicesCard.css"
const Cards = () => {
  return (
    <div
    className="single-services text-center wow fadeIn"
    data-wow-duration="1s"
    data-wow-delay="0.2s"
  >
    <div className="services-icon">
      <img
        className="shape"
        src={Back1}
        alt="shape"
      />
      <img className="shape-1" src={Back1} alt="shape" />
      <i className="lni lni-baloon"></i>
    </div>
    <div className="services-content">
      <h4 className="services-title">
        <Link to="/services">Custom Support</Link>
      </h4>
      <p className="text">
        We build websites for organizations and businesses, leveraging the
        latest technologies to ensure stability and scalability.
      </p>
      
    </div>
  </div>

  )
}
export default Cards