import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    "Python",
    "Kali Linux",
    "Wireshark",
    "Machine Learning",
    "Networking",
    "Cybersecurity"
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-items">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
