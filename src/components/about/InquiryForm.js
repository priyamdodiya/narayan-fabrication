import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./InquiryForm.css";

const InquiryForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8r037cq",     
        "template_8fvmfkf",    
        form.current,
        "ZZiiYHeqt_vwKchPL"     
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
    <div className="Inquiry">
      <div className="inquiry-container">
        <h2 className="inquiry-title">SEND INQUIRY</h2>
        <form className="inquiry-form" ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Your Name"
              className="input-field"
              required
            />
            <input
              type="text"
              name="user_mobile"
              id="mobile"
              placeholder="Mobile No."
              className="input-field"
              required
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email Id"
              className="input-field"
              required
            />
            <select
              name="user_interest"
              id="user_interest"
              className="input-field"
              required
            >
              <option value="">Your Interest</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>
          <textarea
            name="user_message"
            id="user_message"
            placeholder="Your Message"
            className="message-box"
            required
          ></textarea>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;



