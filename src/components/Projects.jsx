import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Traffic Signal Control with RL",
    description:
      "A master's thesis project using a centralized Branching Dueling Q-Network for adaptive traffic signal control in SUMO.",
    tech: ["Python", "PyTorch", "SUMO"],
    image: "src/assets/bqn.jpg",
    live: "youtube.com/watch?v=UFfd9yIV97k&ab_channel=Baki",
    code: "https://github.com/OriolFeliu/RL-TrafficFlow-BQN",
  },
  {
    id: 2,
    title: "Brain MRI Image Generation using GANs",
    description:
      "Generated realistic brain MRI images using GANs. Developed 4-layer, 7-layer, and 15-layer GAN models, compared results with multiple metrics, and documented findings in a thesis.",
    tech: ["Python", "TensorFlow", "NumPy"],
    image: "src/assets/brain-mri.png", // add a preview image to your public/images folder
    live: "", // leave empty if no demo
    code: "https://github.com/OriolFeliu/GAN-BRAIN-MRI",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Vite, showcasing projects and experience.",
    tech: ["React", "Vite", "CSS"],
    image: "/images/portfolio.png",
    code: "https://github.com/OriolFeliu/portfolio",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <ul className="project-tech">
                {proj.tech.map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
                {proj.code && (
                  <a href={proj.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
