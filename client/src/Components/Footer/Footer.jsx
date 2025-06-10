import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <h1>Contact Us</h1>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/ayeshkantjena12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-linkedin"
            style={{ color: "#f1ecd2" }}
          ></i>
        </a>
        <a
          className="contact-link"
          href="https://www.instagram.com/ayeshkant.j/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#f1ecd2" }}
          ></i>
        </a>
        <a
          className="contact-link"
          href="https://github.com/gyankul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" style={{ color: "#f1ecd2" }}></i>
        </a>
        <a
          className="contact-link"
          href="https://x.com/jena_ayeshkant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-x-twitter"
            style={{ color: "#f1ecd2" }}
          ></i>
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
