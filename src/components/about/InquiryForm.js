import React from "react";
import "./InquiryForm.css";
const InquiryForm = () => {
  return (
    <div className="Inquiry">
    <div className="inquiry-container">
      <h2 className="inquiry-title">SEND INQUIRY</h2>
      <form className="inquiry-form">
        <div className="input-group">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="text" placeholder="Mobile No." className="input-field" />
          <input type="email" placeholder="Email Id" className="input-field" />
          <select className="input-field">
            <option>Your Interest</option>
          </select>
        </div>
        <textarea placeholder="Your Message" className="message-box"></textarea>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
    </div>
  );
};
export default InquiryForm;