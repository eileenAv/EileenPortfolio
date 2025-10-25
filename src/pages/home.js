import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg"; 

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-intro">Hi there! My name is</p>
          <h1 className="hero-title">Eileen Avci</h1>
          <p className="hero-description">I am a UX Designer and Frontend Developer. Welcome to my portfolio! </p>
          <div className="hero-cta">
            <button className="primary-btn" onClick={() => navigate('/projects')}>View My Work</button>
            <button className="primary-btn" onClick={() => navigate('/about')}>About Me</button>
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
