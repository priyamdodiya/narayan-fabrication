import React from 'react';
import "./Whorwe.css";
import Back4 from "../../assets/back4.jpg";

const Whorwe = () => {
  return (
    <div className="whorwe-container">
      <div className="whorwe-content">
        <h2>WHO ARE WE?</h2>
        <p>
          Established in 1984 in Indore, we have managed to work with the most trusted names, 
          looking for Iron and Steel Fabrication expertise. Whether for Automotive, Railways, 
          Engineering Projects, or Agricultural, our dedicated team has been carefully offering 
          quality services that match the diverse requirements in the most efficient manner.
        </p>
      </div>
      <div className="whorwe-image">
        <img src={Back4} alt="Iron Steel Fabrication" />
      </div>
    </div>
  );
};

export default Whorwe;
