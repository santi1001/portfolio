import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'FIT Website',
    description: 'A full front-end website for Flask IT Solutions Pvt. Ltd. (FIT) built using HTML, CSS, and JavaScript.',
    link: 'https://github.com/Prakhar3005/FIT-WEBSITE'
  },
  {
    title: 'Turtlmint Insurance Clone',
    description: 'An insurance website clone developed with React.js and CSS, simulating Turtlmint Insurance’s UI.',
    link: '#'
  },
  {
    title: 'Treasure Hunt Game',
    description: 'An interactive game built using Java, featuring intuitive gameplay and user interaction features.',
    link: '#'
  },
  {
    title: 'MakeMyTrip Clone',
    description: 'A front-end clone of MakeMyTrip designed using HTML and CSS, focusing on responsive layout and design accuracy.',
    link: '#'
  },
  {
    title: 'Emotions Detector',
    description: 'An application that detects emotions using deep learning and neural networks, developed to analyze facial expressions.',
    link: '#'
  },
  {
    title: 'Rental Application',
    description: 'A mobile rental application built in Flutter, featuring property listings, user authentication, and a seamless UI.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
