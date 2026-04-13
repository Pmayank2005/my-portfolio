import React from 'react';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Reach out via email, GitHub, or LinkedIn</p>
        <p className="hero-description">
            <a href="mailto:panditmayank2005@gmail.com">
              Email: panditmayank2005@gmail.com
            </a>
        </p>
        <p className="hero-description">
            <a href="https://www.linkedin.com/in/mayank-pandit-a7346832a/">
              LinkedIn: linkedin.com/in/mayank-pandit
            </a>
        </p>
        <p className="hero-description">
            <a href="https://github.com/Pmayank2005">
              GitHub: github.com/Pmayank2005
            </a>
        </p>

        <div className="contact-actions">
          <a href="mailto:panditmayank2005@gmail.com" className="contact-button">
            <span className="button-icon">📧</span>
            Gmail
          </a>
          <a href="https://github.com/Pmayank2005" target="_blank" rel="noreferrer" className="contact-button">
            <span className="button-icon">🐙</span>
            GitHub
          </a>
          <a href="https://linkedin.com/in/mayank-pandit-a7346832a/" target="_blank" rel="noreferrer" className="contact-button">
            <span className="button-icon">💼</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
