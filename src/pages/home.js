import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import catSticker from "../assets/catSticker.PNG";
import ProfileCard from "../components/ProfileCard";
import Iridescence from "../components/Iridescence";
import CurvedLoop from "../components/CurvedLoop";
import StickerPeel from "../components/StickerPeel";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const name = "Eileen Avci";

  return (
    <>
      <section className="home hero">
        <div className="iridescence-bg">
          <Iridescence color={[0.8, 0.4, 1.2]} speed={0.3} />
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
          
          <div style={{ position: 'relative', zIndex: 1, width: '100%', marginTop: '60px', height: '120px' }}>
            <CurvedLoop
              marqueeText="UX Designer • Frontend Developer • Creative Problem Solver • "
              speed={2}
              curveAmount={100}
              direction="left"
              interactive={true}
            />
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 1000 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div style={{ 
              position: 'absolute',
              left: `calc(${window.innerWidth * 0.10}px + 150px)`,
              top: `calc(${window.innerHeight * 0.15}px + 40px)`,
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: '500',
              pointerEvents: 'none',
              letterSpacing: '0.3px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'nowrap'
            }}>
              Try dragging me around!
            </div>
            <StickerPeel
              imageSrc={catSticker}
              width={500}
              rotate={15}
              peelBackHoverPct={35}
              peelBackActivePct={45}
              initialPosition={{ x: window.innerWidth * 0.10, y: window.innerHeight * 0.15 }}
              peelDirection={45}
              shadowIntensity={0.7}
              lightingIntensity={0.15}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
