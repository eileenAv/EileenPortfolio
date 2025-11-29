import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const name = "Eileen Avci";

  return (
    <section className="home hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-intro">Hi there! My name is</p>

          {/* Bubble Name */}
          <h1 className="bubble-name">
            {name.split("").map((char, i) =>
              char === " " ? (
                <span key={i} className="letter space"></span>
              ) : (
                <span key={i} className="letter">{char}</span>
              )
            )}
          </h1>

          <p className="hero-description">
            I am a UX Designer and Frontend Developer. Welcome to my portfolio!
          </p>

          <div className="hero-cta">
            <button className="primary-btn" onClick={() => navigate("/projects")}>
              View My Work
            </button>
            <button className="primary-btn" onClick={() => navigate("/about")}>
              About Me
            </button>
          </div>
        </div>

        <div className="image-circle">
          <img src={profileImage} alt="Eileen Avci" />
        </div>
      </div>
    </section>
  );
}

export default Home;
