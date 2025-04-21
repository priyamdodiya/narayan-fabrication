import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Getintouch.css";

const Getintouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8r037cq",      // Replace with your EmailJS service ID
        "template_8fvmfkf",     // Replace with your EmailJS template ID
        form.current,
        "ZZiiYHeqt_vwKchPL"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-wrapper">
        <div className="contact-form-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <select
                name="user_interest"
                className="form-input"
                required
              >
                <option value="">Your Interest</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              <input
                type="email"
                name="user_email"
                placeholder="Email Id"
                className="form-input"
                required
              />
              <input
                type="text"
                name="user_mobile"
                placeholder="Mobile No."
                className="form-input"
                required
              />
            </div>
            <textarea
              name="user_message"
              placeholder="Your Message"
              className="form-textarea"
              required
            ></textarea>
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
