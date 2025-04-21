import React from "react";
import "./Contact.css";
import { MapPin, Phone, Clock } from "lucide-react";
import Icons from "./Icons";
import servicesData from "../../navbar/servicesdata/ServicesData"
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p style={{color:"white"}}><MapPin className="icon" /> <strong style={{color:"white"}}>Location:</strong>8 Riverview Appartment modi mahollo AK Road, surat</p>
          <a href="tel:7284013879">
          <p style={{color:"white"}}><Phone className="icon" /> <strong style={{color:"white"}}>Call Us Now:</strong>72840-13879</p>
          </a>
          <p style={{color:"white"}}><Clock className="icon" /> <strong style={{color:"white"}}>Opening Hours:</strong> Mon – Sun 9:00AM to 6:00PM</p>
        </div>
        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
          {servicesData.map((service) => (
          <li key={service.id}>
            <Link style={{color:"white"}} to={`/service/${service.id}`}>{service.title}</Link>
          </li>
        ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p style={{color:"white"}}>Sign up for newsletters, events, and promotions</p>
          <input type="email" placeholder="Enter email" />
          <button className="subscribe-btn">SUBSCRIBE NOW</button>
        </div>
        <div className="footer-map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
     <Icons/>
     </div>
  );
};

export default Contact;