import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <section className="features-section" id="features">
      <h2 className="features-title">Our Key Features</h2>
      <p className="features-subtitle">
        Designed to deliver performance, responsiveness, and simplicity.
      </p>

      <div className="features-grid">
        <div className="feature-box">
          <span className="icon">⚡</span>
          <h3>Fast Performance</h3>
          <p>
            Optimized React components ensure fast loading and smooth
            performance across all devices.
          </p>
        </div>

        <div className="feature-box">
          <span className="icon">📱</span>
          <h3>Fully Responsive</h3>
          <p>
            Automatically adapts to mobile, tablet, and desktop screens using
            responsive design techniques.
          </p>
        </div>

        <div className="feature-box">
          <span className="icon">🎨</span>
          <h3>Modern UI</h3>
          <p>
            Clean and minimal user interface with smooth hover effects and
            animations.
          </p>
        </div>

        <div className="feature-box">
          <span className="icon">🛠️</span>
          <h3>Easy Customization</h3>
          <p>
            Simple JSX structure makes the project easy to understand and
            customize.
          </p>
        </div>
      </div>
    </section>
  );
}