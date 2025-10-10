import React, { useState } from 'react';
import './UwRedesign.css';

function UwRedesign() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  return (
    <main className="uwRedesign-page">
      <section className="uwRedesign-hero">
        <div className="uwRedesign-hero__container">
          <div className="uwRedesign-hero__media">
            <div className="uwRedesign-gif">
              <img
                src={require("../../../assets/ReDesign/Recording 2025-10-10 at 13.12.11.gif")}
                alt="UW Redesign Logo"
                className="uwRedesign-gif__image"
              />
            </div>
          </div>

          <div className="uwRedesign-hero__text">
            <h1 className="uwRedesign-title">UW Redesign</h1>
            <p className="uwRedesign-subtitle"></p>

            <div className="uwRedesign-hero__details">
              <ul className="uwRedesign-list">
                <li><strong>Tools:</strong> Figma, React, Miro</li>
                <li><strong>Role:</strong> UX / UI Designer, Frontend Developer</li>
                <li><strong>Project Dates:</strong> 2025</li>
                <li><strong>Team:</strong> Eileen Avci</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="uwRedesign-section">
        <h2 className="uwRedesign-h2">Overview</h2>
        <p>
       This is the redesign project I completed on the current UW Bothell website during my internship at Koç University. After conducting a benchmarking practice, I decided to explore ways to improve the UW website by addressing some aspects I had identified. I was inspired by modern design trends and aimed to create a more engaging and user-friendly experience for visitors.
        </p>
      </section>

      <section className="uwRedesign-section">
        <h2 className="uwRedesign-h2">Goal</h2>
        <p>
          To redesign the UW homepage and subpages in a way that incorporates the current UX design trends and creates a more clear and user-friendly version of the current UW Bothell website. I did I benchmarking anaylsis of the current UW Bothell website and identified some ways that can be improved. 
        </p>
      </section>

      <section className="uwRedesign-section">
        <h2 className="uwRedesign-h2">Solution</h2>
        <p>
          I decided to implement the minimalist and flat design, the liquid glass design, card-based and modular structure, and micro interactions to enhance the user experience. I also made sure that some of the buttons were consistent, and created my own icons for the explore section that makes it more eye-catching.
        </p>
      </section>

      <section className="uwRedesign-role">
        <h2 className="uwRedesign-h2">Key Functionalities of the Redesign</h2>
        <ol className="uwRedesign-ordered">
          <li>Added the social media directory page to the footer and got rid of that section due to repeating elements</li>
          <li>Added more card-like elements</li>
          <li>Added the explore heading that only appeared in mobile mode</li>
          <li>Changed the appearance of the sections to make them more minimal and clean</li>
          <li>Added icons to the Explore section</li>
          <li>Made the button position and animation consistent</li>
        </ol>
      </section>

      <section className="uwRedesign-process">
        <p>
          Below is the wireframe of the redesigned UW website and icons that I created for the website redesign.
        </p>
        <div className="uwRedesign-images">
          <div className="uwRedesign-images__container" onClick={() => setFullScreenImage(require("../../../assets/ReDesign/Desktop Mockup final1.jpg"))}>
            <img
              src={require("../../../assets/ReDesign/Desktop Mockup final1.jpg")}
              alt="UW Redesign Screenshot"
              className="uwRedesign-images__img"
            />
            <div className="uwRedesign-images__overlay">
              <span>Click to View</span>
            </div>
          </div>

          <div className="uwRedesign-images__container" onClick={() => setFullScreenImage(require("../../../assets/ReDesign/ICONS ORIGINAL.png"))}>
            <img
              src={require("../../../assets/ReDesign/ICONS ORIGINAL.png")}
              alt="UW Redesign Screenshot"
              className="uwRedesign-images__img"
            />
            <div className="uwRedesign-images__overlay">
              <span>Click to View</span>
            </div>
          </div>
        </div>

        {fullScreenImage && (
          <div className="uwRedesign-fullscreen" onClick={() => setFullScreenImage(null)}>
            <img src={fullScreenImage} alt="Full screen view" />
            <button className="uwRedesign-fullscreen__close" onClick={() => setFullScreenImage(null)}>
              ×
            </button>
          </div>
        )}
      </section>

      <section className="uwRedesign-final">
        <h2 className="uwRedesign-h2">Prototype Demo</h2>
        <p>
          Here is the high fidelity prototype of my redesign of the UW Redesign prototype.
          <a href="https://www.figma.com/proto/7wSM9uAkaNSxpI6T6cH8xN/UW-redesign?page-id=&node-id=75-50&starting-point-node-id=75%3A50&t=0raV5xterL6pqbw7-1" target="_blank" rel="noopener noreferrer">
            View Prototype
          </a>
        </p>
        
      </section>

      <section className="uwRedesign-process">
        <h2 className="uwRedesign-h2">What I Learned</h2>
        <p>
          Through the UW Redesign project, I gained experience in maintaining the brand identity of an organization and I learned about benchmarking analysis. I was also able to learn more about the current UX trends and how to effectively implement them into my design.
        </p>
      </section>
    </main>
  );
};

export default UwRedesign;
