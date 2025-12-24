import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-text">
        Have questions? Fill out the form and we’ll get back to you.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}