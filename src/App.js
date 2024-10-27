import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import './Experience.css';
import './Projects.css';
import './Skills.css';
import './About.css';
import './Contact.css';
import './Header.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
