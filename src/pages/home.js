import React, { useRef } from "react";
import headshotImage from "../assets/headshot2.2.jpg";
import oraImage from "../assets/Ora/ORAlogo.jpg";
import juvoImage from "../assets/Juvo/juvologo.png";
import athenaImage from "../assets/Athena/athenaLogo.png";
import uwImage from "../assets/ReDesign/Recording 2025-10-10 at 13.12.11.gif";
import letiImage from "../assets/leti/ThisisTheHero.png";
import useReveal from "../hooks/useReveal";
import "./PortfolioCream.css";

const projects = [
  {
    title: "Ora — decision-support app",
    year: "2025",
    description: "UX / UI Designer · Figma · 3-Day Design Sprint",
    image: oraImage,
    bgColor: "#464444",
    tags: ["UX Research", "UI Design", "Frontend"],
    link: "/projects/ora",
  },
  {
    title: "Juvo- Trading services platform",
    year: "2025",
    description: "UX / UI Designer, Frontend Developer · React · VSCODE",
    image: juvoImage,
    bgColor: "#0E2528",
    link: "/projects/juvo",
  },
  {
    title: "Athena-AI-powered student tool",
    year: "2025",
    description: "UX / UI Designer, UX Researcher · Figma · Google Sheets",
    image: athenaImage,
    bgColor: "#f5f3f0",
    link: "/projects/athena",
  },
  {
    title: "UW Bothell redesign",
    year: "2025",
    description: "UX / UI Designer, Frontend Developer · Figma · React · Miro",
    image: uwImage,
    bgColor: "#000000",
    link: "/projects/uw-redesign",
  },
  {
    title: "LETI Internship",
    year: "2025",
    description: "UX / UI Designer, Frontend Developer · Figma · HTML · CSS · JS",
    image: letiImage,
    bgColor: "#000000",
    link: "/projects/leti",
  },
];

function ProjectCard({ project, delay }) {
  const revealRef = useReveal();
  const navigate = (link) => {
    window.location.hash = link;
  };

  const card = project.large ? (
    <article className="project-card project-card-large">
      <div className="project-image project-image-large" style={{ background: project.bgColor }}>
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
        <span className="learn-more-btn">Learn more →</span>
      </div>
    </article>
  ) : (
    <article className="project-card">
      <div className="project-image-small" style={{ background: project.bgColor }}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <div className="project-bottom">
          <p>{project.description}</p>
          <span className="learn-more-btn">Learn more →</span>
        </div>
      </div>
    </article>
  );

  return project.link ? (
    <div
      ref={revealRef}
      className="project-card-wrapper reveal"
      style={{ cursor: "pointer", transitionDelay: `${delay}ms` }}
      onClick={() => navigate(project.link)}
    >
      {card}
    </div>
  ) : (
    <div ref={revealRef} className="project-card-wrapper reveal" style={{ transitionDelay: `${delay}ms` }}>
      {card}
    </div>
  );
}

function RevealSection({ children, className, ...props }) {
  const ref = useReveal();
  return (
    <section ref={ref} className={`reveal ${className || ""}`} {...props}>
      {children}
    </section>
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

            <h1>Hi, I'm Eileen, Nice to Meet you!</h1>
            <p>Thanks for visiting my portfolio. I believe
              design decisions should be purpose-driven, evidence-based, and human-centered</p>

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
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 120} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
