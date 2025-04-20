import React from "react";
import "./Getintouch.css";

const Getintouch = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-wrapper">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-input" />
              <select className="form-input">
                <option>Your Interest</option>
              </select>
              <input type="email" placeholder="Email Id" className="form-input" />
              <input type="text" placeholder="Mobile No." className="form-input" />
            </div>
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button type="submit" className="form-submit">SUBMIT</button>
          </form>
        </div>
        <div className="contact-map-container">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8575903902546!2d75.85462017415736!3d22.781226879355776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd9e9dff2d11%3A0xd3a97829ab5f4935!2sFabrication%20World!5e0!3m2!1sen!2sin!4v1713524424456!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
