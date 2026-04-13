import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Phishing Detection System',
      description: 'Machine learning system to detect phishing emails and malicious URLs.',
      tech: ['Machine Learning', 'Python', 'React', 'Cybersecurity']
    },
    {
      id: 2,
      title: 'MITM Attack Detection',
      description: 'Detects man-in-the-middle attacks using traffic analysis and Machine Learning. Still building this project, will update soon.',
      tech: ['Machine Learning', 'Python', 'Wireshark', 'Cybersecurity']
    },
    {
      id: 3,
      title: 'Data Duplication Alert System',
      description: 'System to detect and alert on duplicate data entries across multiple sources.',
      tech: ['Python', 'PostgreSQL', 'React']
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">See what I've built</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
