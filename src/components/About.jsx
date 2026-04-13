import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph fade-in">
              I am a Computer Engineering student focused on building scalable,
              user-centric applications. I have strong foundations in networking,
              cybersecurity, and backend systems. I enjoy solving real-world
              problems and developing intelligent solutions using machine learning
              and data-driven approaches.
            </p>
          </div>

          <div className="about-image">
            <div className="placeholder-image">
              <div className="image-placeholder">
                <img src="/profile.jpg" alt="Mayank" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
