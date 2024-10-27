// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Hello, I'm [Abhishek Singh]</h1>
//       <p>A passionate and dedicated developer, I bring a wealth of experience in web development, with expertise in HTML, CSS, JavaScript, and React.js. I thrive in dynamic environments where I can leverage my skills to create intuitive and visually appealing user interfaces.</p>
//       <a href="#contact" className="btn">Contact Me</a>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Hello, I'm <span className="highlight">Abhishek Singh</span></h1>
        <p>
          A passionate and dedicated developer, I bring a wealth of experience in web development, 
          with expertise in HTML, CSS, JavaScript, and React.js. I thrive in dynamic environments 
          where I can leverage my skills to create intuitive and visually appealing user interfaces.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="#portfolio" className="btn">View Portfolio</a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/abhishek-singh-58484b24a" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
