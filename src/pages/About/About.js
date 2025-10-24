import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-bio">
      <div className="about-image">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Eileen Avci portrait"
        />
      </div>
      <div className="about-text">
        <h1>Bio</h1>
        <p>
          Hi there my name is Eileen Avci.I am an enthusiastic creator passionate about UX design, AI, and Frontend engineering, based in Seattle, WA. I am currently a senior at the University of Washington Bothell, majoring in Applied Computing and Minoring in Visual Arts and Media, graduating in March 2026.
        </p>
        <p>
          I believe that design choices should be scientific, purpose-driven, and human-centered. When I am not designing or coding, you can find me swimming or drawing. Thanks for stopping by!
        </p>
      </div>
      </div>

        <div className="artists-statement">
      <div className="about-text">
        <h1>Artist's Statement</h1>
        <p>
opping by!
        </p>
      </div>
      </div>

    </div>
    
  );
}

export default About;