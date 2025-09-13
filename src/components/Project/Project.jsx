import "./Project.css";
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: "E-Com-Massive",
      description:
        "A MERN stack e-commerce platform for SMBs with dynamic product management and secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/e-com-massive"
    },
    {
      title: "Food Delivery App",
      description:
        "Full-stack food delivery application built with MERN, featuring cart, authentication, and order tracking.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      link: "https://github.com/yourusername/food-delivery"
    },
    {
      title: "Register Karo",
      description:
        "A job application platform built with MERN stack for efficient resume tracking and applications.",
      tech: ["React", "Express", "MongoDB"],
      link: "https://github.com/yourusername/register-karo"
    },
    {
      title: "Finance Manager",
      description:
        "Personal finance management tool built with React and Node.js to track income, expenses, and budgets.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/finance-manager"
    }
  ];

  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            {/* <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a> */}
            <Link to="/projects" className="btn">View Project</Link>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
