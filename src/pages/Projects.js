import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import ChromaGrid from "../components/ChromaGrid";
import oraLogo from "../assets/Ora/ORAlogo.jpg";
import juvoLogo from "../assets/Juvo/juvologo.png";
import athenaLogo from "../assets/Athena/athenaLogo.png";
import uwLogo from "../assets/ReDesign/Recording 2025-10-10 at 13.12.11.gif"
import letiLogo from "../assets/leti/ThisisTheHero.png";

function Projects() {
  const navigate = useNavigate();

  const items = [
    {
      image: oraLogo,
      title: "Ora Project",
      subtitle: "UX Design and Development of the Ora platform interface",
      borderColor: "#722dcc",
      gradient: "linear-gradient(145deg, #722dcc, #1a0033)",
      route: "/projects/ora"
    },
    {
      image: juvoLogo,
      title: "Juvo",
      subtitle: "UX Design and Development of the Juvo platform interface",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #002a1a)",
      route: "/projects/juvo"
    },
    {
      image: uwLogo,
      title: "UW Website Redesign",
      subtitle: "A personal project where I redesigned my university's website.",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #00123a)",
      route: "/projects/uw-redesign"
    },
    {
      image: athenaLogo,
      title: "Project Alpha: Athena AI Study Bot",
      subtitle: "AI-powered study tool for students",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #2a1a00)",
      route: "/projects/athena"
    },
    {
      image: letiLogo,
      title: "LETI Internship: Website Redesign",
      subtitle: "Redesign of the LETI non-profit organization website",
      borderColor: "#EF4444",
      gradient: "linear-gradient(145deg, #EF4444, #2a0000)",
      route: "/projects/leti"
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <p>Click on a project to learn more.</p>
      <div style={{ position: 'relative', minHeight: '500px' }}>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          columns={3}
          onCardClick={(item) => navigate(item.route)}
        />
      </div>
    </section>
  );
}

export default Projects;

