import React from 'react';
import './Experience.css';

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Flask IT Solutions Pvt. Ltd. (FIT)',
    duration: 'May 2024 - July 2024',
    description: 'Collaborated with UI/UX designers to implement responsive design features, developed a MakeMyTrip clone using HTML and CSS, and created a Java-based "Treasure Hunt" game focused on user interaction.'
  },
  {
    role: 'Sales Representative (Intern)',
    company: 'Insurefast Insurance Pvt. Ltd.',
    duration: 'May 2023 - August 2023',
    description: 'Analyzed sales reports for strategic decisions and designed logos and promotional materials to strengthen brand outreach.'
  },
  // {
  //   role: 'Junior Web Developer',
  //   company: 'Startup XYZ',
  //   duration: '2020 - 2022',
  //   description: 'Implemented front-end features, supported backend integration, and worked with cross-functional teams to enhance application functionality.'
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <ul>
        {experience.map((job, index) => (
          <li key={index} className="job">
            <h3>{job.role}</h3>
            <p><strong>{job.company}</strong> | {job.duration}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
