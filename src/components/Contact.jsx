import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-text">
        Let’s connect! You can reach me by email or through any of the platforms
        below.
      </p>

      <div className="contact-icons">
        <a
          href="mailto:oriolfeliu@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/OriolFeliu"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/oriol-feliu-juarez/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/OriolFeliu/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>
      </div>
    </section>
  );
}

export default Contact;
