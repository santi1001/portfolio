import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill.name} - {skill.level}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
