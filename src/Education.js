// Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Master of Science in Computer Science</h3>
          <p><strong>University of XYZ</strong> — 2020 - 2022</p>
          <p>GPA: 3.8/4.0</p>
          <p>Thesis: Developing AI-driven solutions for e-waste management.</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Technology in Information Technology</h3>
          <p><strong>ABC Institute of Technology</strong> — 2016 - 2020</p>
          <p>GPA: 3.7/4.0</p>
          <p>Research: Sustainability-focused software solutions for smart cities.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
