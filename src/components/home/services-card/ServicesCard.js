import React from "react";
import "./ServicesCard.css";
import Cards from "./cards/Cards";
import Back1 from "../../../assets/back1.jpg";
import Back2 from "../../../assets/back2.jpg";
import Back5 from "../../../assets/back5.jpg";

const ServicesCard = () => {
  return (
    <div className="services-card">
      <div>
        <h1>Our Services</h1>
      </div>
      <div className="landr">
        <div className="service-wrapper">
          <Cards
            image={Back1}
            title="Custom Support"
            description="We build websites for organizations and businesses, leveraging the latest technologies to ensure stability and scalability."
          />
          <Cards
            image={Back2}
            title="Design & Branding"
            description="We create visually stunning brand identities and UI/UX designs tailored to your audience."
          />
          <Cards
            image={Back5}
            title="Works"
            description="We help you grow online with SEO, social media campaigns, and performance analytics."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;