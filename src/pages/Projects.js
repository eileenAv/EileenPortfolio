import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Ora Project",
      description: "UX Design and Development of the Ora platform interface",
      previewImage: "/project-previews/ora-preview.jpg",
      tech: ["React", "UI/UX", "Frontend"],
      detailDescription: "A comprehensive platform redesign focusing on user experience and modern interface design",
      route: "/projects/ora"
    },
    {
      id: 2,
      title: "Juvo",
      description: "UX Design and Development of the Juvo platform interface",
      previewImage: "/project-previews/juvo-preview.jpg",
      tech: ["React", "UI/UX", "Frontend", "Hackathon"],
      detailDescription: "A comprehensive platform redesign focusing on user experience and modern interface design",
      route: "/projects/juvo"
    },
    {
      id: 3,
      title: "Uw Website Redesign",
      description: "A personal project where I redesigned my university's website.",
      previewImage: "/project-previews/project3-preview.jpg",
      tech: ["React", "UI/UX", "UX Research", "Benchmarking"],
      route: "/projects/uw-redesign"
    },
    {
      id: 4,
      title: "Project Alpha: Athena AI Study Bot",
      description: "AI-powered study tool for students",
      previewImage: "/project-previews/project4-preview.jpg",
      tech: ["AI","Ux Research", "UI/UX"],
      route: "/projects/athena"
    },
    {
      id: 5,
      title: "LETI Internship: Website Redesign",
      description: "E-commerce platform UI/UX redesign",
      previewImage: "/project-previews/project5-preview.jpg",
      tech: ["Webdesign", "UI/UX", "Frontend"],
      route: "/projects/leti"
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <ul className="proj-list">
        {projects.map(project => (
          <li 
            key={project.id} 
            className="proj-card"
            onClick={() => navigate(project.route)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="proj-preview">
              {project.previewImage && (
                <img 
                  src={project.previewImage} 
                  alt={`Preview of ${project.title}`} 
                />
              )}
              <div className="proj-preview-content">
                <h4>Project Overview</h4>
                <p>{project.detailDescription}</p>
                <div className="proj-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
