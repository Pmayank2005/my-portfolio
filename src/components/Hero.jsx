import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="animate-text">Hi, I'm</span> <span className="gradient-text animate-text delay-1">Mayank</span>
        </h1>
        <p className="hero-subtitle animate-text delay-2">
          CyberSecurity Enthusiast | Creative Thinker | Problem Solver
        </p>
        <p className="hero-description animate-text delay-3">
          I Love Exploring New Technologies and CyberSecurity Trends.
        </p>

        <div className="hero-buttons animate-text delay-4">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
