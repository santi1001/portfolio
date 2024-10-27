// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>
//       <p>If you’d like to work together or have any questions, feel free to reach out!</p>
//       <a href="mailt:oabhishekhsingh@jklu.edu.in" className="btn">Send Email</a>
//     </section>
//   );
// }

// export default Contact;

// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>
//       <p>If you’d like to work together or have any questions, feel free to reach out!</p>
//       <a href="mailto:abhisheksingh2125.shekhawat@gmail.com" className="btn">Send Email</a>
//     </section>
//   );
// }

// export default Contact;

import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to work together or have any questions, feel free to reach out!</p>
      
      <p>
        <i className="fas fa-phone-alt"></i> 
        Phone: <a href="tel:+9929090440">+9929090440</a> 
      </p>

      <div className="contact-buttons">
        <a href="mailto:abhishekhsingh@jklu.edu.in" className="btn">
          <i className="fas fa-envelope"></i> Send Email
        </a>
        <a href="https://www.linkedin.com/in/abhishek-singh-58484b24a" target="_blank" rel="noopener noreferrer" className="btn">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a> 
      </div>
    </section>
  );
}

export default Contact;





