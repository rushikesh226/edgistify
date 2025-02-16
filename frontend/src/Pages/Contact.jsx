import React from "react";
import Layout from "../Components/Layout/Layout";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
const Contact = () => {
  return (
    <Layout title="Contact US">
      <div className="contact-container">
        <div className="contact-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvzNdUdipFgpbtXRtZRle4suN5ghlAWfs0A&s"
            alt="Contact Us"
          />
        </div>

        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="availability">We are available 24/7 to assist you!</p>
          <p>
            <FaEnvelope className="contact-icon" /> <strong>Email:</strong>{" "}
            support@example.com
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +91
            98765 43210
          </p>
          <p>
            <FaHeadset className="contact-icon" /> <strong>Toll-Free:</strong>{" "}
            1800-123-4567
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
