import "./Experience.css";

const experiences = [
  {
    title: "Research Engineer II",
    company: "Barcelona Supercomputing Center",
    period: "Oct 2024 - Present",
    details: [
      "Fine-tuned a large language model (LLM) with a RAG system for domain-specific tasks, improving answer relevance by 35% and halving response latency.",
      "Deployed a real-time YOLO computer vision model on NVIDIA Jetson to count harvested grapes, automating yield monitoring and boosting harvesting efficiency by 25%.",
    ],
  },
  {
    title: "Research Engineer I",
    company: "Barcelona Supercomputing Center",
    period: "May 2023 - Oct 2024",
    details: [
      "Built a reinforcement learning model that calculates optimal evacuation routes, cutting simulated escape times by up to 40%.",
      "Re-engineered the core algorithm from a matrix to a 1D array, reducing complexity from O(n²) to O(n) and improving processing speed by 60%.",
    ],
  },
  {
    title: "Data Analyst",
    company: "SDG Group",
    period: "Oct 2022 - Mar 2023",
    details: [
      "Developed a scalable machine learning pipeline to automate trend detection and anomaly analysis across complex datasets, boosting predictive accuracy and streamlining real-time reporting.",
    ],
  },
  {
    title: "Software Engineer, Intern",
    company: "QubiQ",
    period: "May 2021 - Jun 2022",
    details: [
      "Engineered a dynamic reporting dashboard using Odoo’s ORM and caching, reducing data retrieval times in high-traffic modules.",
      "Designed custom workflows for retail, manufacturing, and service clients, boosting operational efficiency.",
    ],
  },
];

function Experience() {
  return (
    // <section className="experience-section" id="experience">
    //   <div className="experience-container">
    //     <h2>Experience</h2>
    //     <ul>
    //       {experiences.map((exp) => (
    //         <div key={exp.id} classname="experience-entry">
    //           <h4>{exp.title}</h4>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </section>

    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-period">{exp.period}</p>
            </div>
            <ul className="experience-details">
              {exp.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
