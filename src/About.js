// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <h2>About Me</h2>
//       <p>
//         I am a software engineer with experience in building responsive and dynamic web applications. 
//         I have expertise in JavaScript, React, Node.js, and more. My goal is to build scalable and user-friendly web solutions.
//       </p>
//     </section>
//   );
// }

// export default About;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
       I am a software engineer with experience in building responsive and dynamic web applications. 
         I have expertise in JavaScript, React, Node.js, and more. My goal is to build scalable and user-friendly web solutions.
         </p>
      <div className="about-sections">
        <div className="about-section">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>BCA | Bachelor of Computer Application</strong><br />
              JK Lakshmipat University | 2022 - Present<br />
              CGPA: 7.50 (till 2nd sem) and 7.35 (in 4th sem)
            </li>
            <li>
              <strong>12th Grade | Commerce, Mathmatics</strong><br />
              St. Anselm School, Jaipur | 2021 - 2022<br />
              Score: 60%
            </li>
            <li>
              <strong>10th Grade</strong><br />
              St. Anselm’s School, Jaipur | 2019 - 2020<br />
              Score: 75%
            </li>
          </ul>
        </div>
        
        <div className="about-section">
          <h3>Hobbies</h3>
          <ul>
            <li>Reading sports autobiographies</li>
            <li>Listening to music</li>
            <li>Playing Kabaddi and Volleyball</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}

export default About;
