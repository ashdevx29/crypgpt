import React from "react";
import "../Styles/ContactUs.css";
import contactShape from "../assets/Contact/contact.svg";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-card">

        {/* SVG Shape Background */}
        <img src={contactShape} alt="contact-shape" className="contact-svg" />

        {/* Content Over SVG */}
        <div className="contact-inner">
          <h1 className="contact-title">
            Your Questions, Our Solutions
          </h1>

          <p className="contact-subtitle">
            Connect with us for quick support and solutions.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>What is your name?</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>What is your email address?</label>
                <input type="email" placeholder="example@example.com" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>How can we help you?</label>
              <textarea placeholder="I need help with..."></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;