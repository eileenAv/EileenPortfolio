import React, { useRef, useEffect } from "react";
import "./About.css";
import aboutImage from "../../assets/AboutMe2.jpg";
import resume from "../../assets/EileenAvci2025resume.pdf";

function About() {
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const image = imageRef.current;
    if (!wrapper || !image) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 3;
      const rotateY = ((x - centerX) / centerX) * -3;
      
      image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="about-section">
      <div className="about-bio">
        <div className="bio-container">
          <div className="about-image" ref={imageWrapperRef}>
            <img
              ref={imageRef}
              src={aboutImage}
              alt="about picture"
            />
          </div>
          <div className="about-text">
            <h1>Bio</h1>
            <p>
              Hi there my name is Eileen Avci. I am an enthusiastic creator passionate about UX design, AI, and Frontend engineering, based in Seattle, WA. I am currently a senior at the University of Washington Bothell, majoring in Applied Computing and Minoring in Visual Arts and Media, graduating in March 2026. My work consists of designing and developing websites and apps that are both functional and aesthetically pleasing.
            </p>
            <p>
              I believe that design choices should be scientific, purpose-driven, and human-centered. When I am not designing or coding, you can find me swimming or drawing. Thanks for stopping by!
            </p>
             <div className="artist-text">
            <h1>Artist's Statement</h1>
        <p>
I believe design decisions should be grounded in UX research and informed by science, and I am always looking for ways to improve the user experience. This philosophy shapes my design process. Before bringing ideas to life with tools like Figma and React, I focus on understanding users through surveys, user interviews, and online research. Every time I go through that process, I am fascinated by the diverse and unexpected needs and tools of each unique user.   
        </p>
        <p>
          My recent work reflects my growing interest in AI and agent design. I see AI not as a replacement for human creativity, but as a powerful tool that enhances and accelerates it. I strive to integrate AI into my projects as a tool that adapts to diverse users' needs, tailoring the user experience to each user. For example, I am currently working on my capstone project—an AI-powered scheduler—designed to help users automate employee scheduling, taking into account each employee’s availability preferences.
        </p>
        
      <a href={resume} download="EileenAvci2025Resume.pdf" className="download-resume-btn">Download My Resume</a>

      </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;