import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home hero">
      <div className="hero-copy">
        <p className="hero-intro">Hi there! My name is</p>
        <h1 className="hero-title">Eileen Avci</h1>
        <p className="hero-description">I am a UX Designer and Frontend Developer. Welcome to my portfolio! </p>
        <div className="hero-cta">
          <button className="primary-btn" onClick={() => navigate('/projects')}>View My Work</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
