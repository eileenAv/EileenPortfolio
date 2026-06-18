import React, { useRef } from "react";
import headshotImage from "../assets/headshot2.2.jpg";
import oraImage from "../assets/Ora/mainpage.png";
import "./PortfolioCream.css";

const projects = [
  {
    title: "Ora — decision-support app",
    year: "2025",
    description: "Designed & built end to end · Product design · React · Figma",
    image: oraImage,
    tags: ["UX Research", "UI Design", "Frontend"],
    link: "/projects/ora",
  },
  {
    title: "Juvo- Trading services platform",
    year: "2025",
    description: "Responsive platform interface — UX + frontend.",
    placeholder: "[ Juvo screen ]",
    link: "/projects/juvo",
  },
  {
    title: "Athena-AI-powered student tool",
    year: "2025",
    description: "AI-powered study tool — UX + frontend.",
    placeholder: "[ Athena screen ]",
    link: "/projects/athena",
  },
  {
    title: "UW Bothell redesign",
    year: "2025",
    description: "Self-initiated IA + UI overhaul.",
    placeholder: "[ UW redesign ]",
    link: "/projects/uw-redesign",
  },
  {
    title: "LETI Internship",
    year: "2025",
    description: "Nonprofit website redesign.",
    placeholder: "[ LETI screen ]",
    link: "/projects/leti",
  },
];

function ProjectCard({ project }) {
  const navigate = (link) => {
    window.location.hash = link;
  };

  const card = project.large ? (
    <article className="project-card project-card-large">
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
    <div
      className="project-card-wrapper"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(project.link)}
    >
      {card}
    </div>
  ) : (
    <div className="project-card-wrapper">
      {card}
    </div>
  );
}

function Home() {
  const workRef = useRef(null);

  const scrollToWork = (e) => {
    e.preventDefault();
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

            <div className="hero-actions">
              <button className="pc-primary-button" onClick={scrollToWork}>View work ↓</button>
              <a href="/resume.pdf" className="pc-secondary-button">Download résumé</a>
            </div>
          </section>
        </header>

        <section ref={workRef} id="work" className="work-section">
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
