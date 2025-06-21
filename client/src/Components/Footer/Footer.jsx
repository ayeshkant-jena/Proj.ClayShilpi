import React from "react";
import './Footer.css'
import contact1 from '../Assets/contactlinkedin.svg'
import contact2 from '../Assets/contactgithub.svg'
import contact3 from '../Assets/contactinstagram.svg'
import contact4 from '../Assets/contacttwitter.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <h1>Contact Us</h1>
        <a className="contact-link" href="https://www.linkedin.com/in/ayeshkantjena12/" target="_blank" rel="noopener noreferrer">
          <img src={contact1} alt="" />
        </a>
        <a className="contact-link" href="https://github.com/ayeshkant-jena" target="_blank" rel="noopener noreferrer">
          <img src={contact2} alt="" />
        </a>
        <a className="contact-link" href="https://www.instagram.com/ayeshkant.j/" target="_blank" rel="noopener noreferrer">
          <img src={contact3} alt="" />
        </a>
        <a className="contact-link" href="https://x.com/jena_ayeshkant" target="_blank" rel="noopener noreferrer">
          <img src={contact4} alt="" />
        </a>
        <p>Calling Assistance Available On: +91 987-654321</p>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
