import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Research Engineer II",
    description:
      "A master's thesis project using a centralized Branching Dueling Q-Network for adaptive traffic signal control in SUMO.",
    tech: ["Python", "PyTorch", "SUMO"],
    image: "src/assets/bqn.jpg",
    preiod: "May 2023 - Present",
  },
  {
    id: 2,
    title: "Research Engineer I",
    description:
      "Generated realistic brain MRI images using GANs. Developed 4-layer, 7-layer, and 15-layer GAN models, compared results with multiple metrics, and documented findings in a thesis.",
    tech: ["Python", "TensorFlow", "NumPy"],
    image: "src/assets/brain-mri.png", // add a preview image to your public/images folder
    live: "", // leave empty if no demo
    code: "https://github.com/OriolFeliu/GAN-BRAIN-MRI",
    preiod: "May 2023 - Present",
  },
  {
    id: 3,
    title: "Software Engineer",
    description:
      "Personal portfolio built with React and Vite, showcasing projects and experience.",
    tech: ["React", "Vite", "CSS"],
    image: "/images/portfolio.png",
    code: "https://github.com/OriolFeliu/portfolio",
    preiod: "May 2023 - Present",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <ul>
          {experiences.map((exp) => (
            <div key={exp.id} classname="experience-entry">
              <h4>{exp.title}</h4>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
