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
      previewImage: "/project-previews/ora-preview.jpg", // Add your preview image
      tech: ["React", "UI/UX", "Frontend"],
      detailDescription: "A comprehensive platform redesign focusing on user experience and modern interface design",
      route: "/projects/ora"
    },
    // You can add more projects here following the same structure
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
