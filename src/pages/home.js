import React from "react";
import headshotImage from "../assets/headshot2.2.jpg";
import oraImage from "../assets/Ora/mainpage.png";
import "./PortfolioCream.css";

const projects = [
  {
    title: "Ora — decision-support app",
    year: null,
    description: "Designed & built end to end · Product design · React · Figma",
    image: oraImage,
    large: true,
    tags: ["UX Research", "UI Design", "Frontend"],
    link: "/projects/ora",
  },
  {
    title: "Juvo",
    year: "2024",
    description: "Responsive platform interface — UX + frontend.",
    placeholder: "[ Juvo screen ]",
    link: "/projects/juvo",
  },
  {
    title: "Athena",
    year: "2025",
    description: "AI-powered study tool — UX + frontend.",
    placeholder: "[ Athena screen ]",
    link: "/projects/athena",
  },
  {
    title: "UW Bothell redesign",
    year: "2024",
    description: "Self-initiated IA + UI overhaul.",
    placeholder: "[ UW redesign ]",
    link: "/projects/uw-redesign",
  },
  {
    title: "LETI Internship",
    year: "2023",
    description: "Nonprofit website redesign.",
    placeholder: "[ LETI screen ]",
    link: "/projects/leti",
  },
];

function ProjectCard({ project }) {
  const cardContent = project.large ? (
    <article className="project-card project-card-large">
      <span className="card-shine" />
      <div className="project-image project-image-large">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content project-content-large">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <span className="pc-arrow">→</span>
      </div>
    </article>
  ) : (
    <article className="project-card">
      <span className="card-shine" />
      <div className="project-placeholder">
        <span>{project.placeholder}</span>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <div className="project-bottom">
          <p>{project.description}</p>
          <span className="pc-arrow small">→</span>
        </div>
      </div>
    </article>
  );

  return project.link ? (
    <a href={`#${project.link}`} style={{ textDecoration: "none", color: "inherit" }}>
      {cardContent}
    </a>
  ) : cardContent;
}

function Home() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-shell">
        <header className="top-section">
          <section className="pc-hero">
            <p className="eyebrow">
              <span />
              UX Designer &amp; Frontend Developer · Seattle
            </p>

            <h1>Hi, I'm Eileen — I make products clear, usable, and worth shipping.</h1>

            <p className="hero-description">
              A Seattle-based designer-developer who takes ideas from research all the way
              to production React — so what gets designed is what actually gets built.
            </p>

            <div className="hero-actions">
              <a href="#work" className="pc-primary-button">View work ↓</a>
              <a href="/resume.pdf" className="pc-secondary-button">Download résumé</a>
            </div>
          </section>
        </header>

        <section id="work" className="work-section">
          <div className="section-header">
            <span>Selected work</span>
            <span>2022 — 2026</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="about" className="pc-about-section">
          <img src={headshotImage} alt="Eileen Avci" />
          <div>
            <p className="about-label">About</p>
            <p>
              Applied Computing grad from UW Bothell with a Visual Arts minor. I believe
              design decisions should be purpose-driven, evidence-based, and human-centered.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
