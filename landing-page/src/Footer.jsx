import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-section">
          <h3>MyWebsite</h3>
          <p>A modern landing page built with React JSX and responsive design.
            Optimized for performance and user experience.
            Developed as an academic project.</p>
        </div>

        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: pandeyanjali.2807@gmail.com </p>
          <p>Phone: 5784939877</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2025 MyWebsite | Developed by Anjali Pandey | Internship's Assignment
        </p>
      </div>
    </footer>
  );
}