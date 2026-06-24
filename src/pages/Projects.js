import React from "react";
import useReveal from "../hooks/useReveal";
import FlowingMenu from "../components/FlowingMenu";
import oraLogo from "../assets/Ora/ORAlogo.jpg";
import juvoLogo from "../assets/Juvo/juvologo.png";
import athenaLogo from "../assets/Athena/athenaLogo.png";
import uwLogo from "../assets/ReDesign/Desktop Mockup final1.jpg";
import letiLogo from "../assets/leti/ThisisTheHero.png";
import "./Projects.css";

const internshipItems = [
  { link: "#/projects/uw-redesign", text: "UW Bothell Redesign", image: uwLogo },
  { link: "#/projects/leti", text: "LETI Internship", image: letiLogo },
];

const projectItems = [
  { link: "#/projects/ora", text: "Ora", image: oraLogo },
  { link: "#/projects/juvo", text: "Juvo", image: juvoLogo },
  { link: "#/projects/athena", text: "Athena", image: athenaLogo },
];

function RevealDiv({ className, children, ...props }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-page">
      <RevealDiv className="proj-category">
        <h1 className="proj-category-title">Internship Work</h1>
        <div className="flowing-menu-container flowing-menu-2">
          <FlowingMenu
            items={internshipItems}
            textColor="#1a1a1a"
            bgColor="#f6f0e2"
            marqueeBgColor="#34c79a"
            marqueeTextColor="#0c3b31"
            borderColor="#0c3b31"
          />
        </div>
      </RevealDiv>

      <RevealDiv className="proj-category">
        <h1 className="proj-category-title">Projects</h1>
        <div className="flowing-menu-container flowing-menu-3">
          <FlowingMenu
            items={projectItems}
            textColor="#1a1a1a"
            bgColor="#f6f0e2"
            marqueeBgColor="#34c79a"
            marqueeTextColor="#0c3b31"
            borderColor="#0c3b31"
          />
        </div>
      </RevealDiv>
    </section>
  );
}

export default Projects;
