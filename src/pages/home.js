import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import ProfileCard from "../components/ProfileCard";
import Iridescence from "../components/Iridescence";
import GridDistortion from "../components/GridDistortion";
import CurvedLoop from "../components/CurvedLoop";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const name = "Eileen Avci";

  return (
    <>
      <section className="home hero">
        <div className="iridescence-bg">
          <Iridescence />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 1, zIndex: 1 }}>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-intro">Hi there! My name is</p>

              <h1 className="hero-title">{name}</h1>

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

            <ProfileCard
              avatarUrl={profileImage}
              name=""
              title=""
              handle="eileenav"
              status="Available for opportunities"
              contactText="Get in Touch"
              showUserInfo={false}
              onContactClick={() => navigate("/about")}
              tooltipText="This is me!"
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 1, width: '100%', marginTop: '20px', height: '120px' }}>
            <CurvedLoop
              marqueeText="UX Designer • Frontend Developer • Creative Problem Solver • "
              speed={2}
              curveAmount={100}
              direction="left"
              interactive={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
