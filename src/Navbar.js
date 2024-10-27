// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>My Portfolio</h1>
//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#skills" className="navbar-link">Skills</a></li>
        <li><a href="#projects" className="navbar-link">Projects</a></li>
        <li><a href="#experience" className="navbar-link">Experience</a></li>
        <li><a href="#education" className="navbar-link">Education</a></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
