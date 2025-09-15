import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Oriol Feliu, a software engineer specializing in machine
            learning and full-stack development. I build full-stack applications
            and machine learning solutions using modern ML frameworks.
          </p>
          <p>
            My experience includes developing full-stack web applications,
            interactive dashboards, and machine learning projects.
          </p>
          <p>
            Skills: Python, Java, C++, Pytorch, Keras, React, GCP, AWS, Git.
          </p>
        </div>
        <div className="about-image">
          <img src="src/assets/profile-img.jpeg" alt="Oriol F." />
        </div>
      </div>
    </section>
  );
}

export default About;
