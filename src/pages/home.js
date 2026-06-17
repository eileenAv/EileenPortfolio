import React, { useRef } from "react";
import headshotImage from "../assets/headshot2.2.jpg";
import oraImage from "../assets/Ora/mainpage.png";
import BorderGlow from "../components/BorderGlow";
import "./PortfolioCream.css";

// Rainbow color sets — each project gets a different palette
const RAINBOW_PALETTES = [
  ['#c084fc', '#f472b6', '#818cf8'],  // purple-pink-indigo
  ['#34d399', '#38bdf8', '#a78bfa'],  // green-cyan-purple
  ['#fbbf24', '#f97316', '#ef4444'],  // amber-orange-red
  ['#60a5fa', '#34d399', '#f472b6'],  // blue-green-pink
  ['#e879f9', '#38bdf8', '#4ade80'],  // fuchsia-cyan-green
];

const projects = [
  {
    title: "Ora — decision-support app",
    year: null,
    description: "Designed & built end to end · Product design · React · Figma",
    image: oraImage,
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

function ProjectCard({ project, paletteIndex }) {
  const navigate = (link) => {
    window.location.hash = link;
  };

  const colors = RAINBOW_PALETTES[paletteIndex % RAINBOW_PALETTES.length];

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

  const glowWrapped = (
    <BorderGlow
      colors={colors}
      glowColor="300 80 75"
      glowIntensity={1.4}
      edgeSensitivity={20}
      glowRadius={50}
      coneSpread={30}
      backgroundColor="transparent"
      borderRadius={16}
      fillOpacity={0.4}
    >
      {cardContent}
    </BorderGlow>
  );

  return project.link ? (
    <div
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      onClick={() => navigate(project.link)}
    >
      {glowWrapped}
    </div>
  ) : glowWrapped;
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
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} paletteIndex={i} />
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
