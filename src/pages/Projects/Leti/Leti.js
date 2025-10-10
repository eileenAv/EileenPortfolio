import React, { useState } from 'react';
import './Leti.css';

const Leti = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  return (
    <main className="leti-page">
      <section className="leti-hero">
        <div className="leti-hero__container">
          <div className="leti-hero__media">
            <div className="leti-gif">
              <img
                src={require("../../../assets/leti/ThisisTheHero.png")}
                alt="Leti Logo"
                className="leti-gif__image"
              />
            </div>
          </div>

          <div className="leti-hero__text">
            <h1 className="leti-title">LETI</h1>
            <p className="leti-subtitle"></p>

            <div className="leti-hero__details">
              <ul className="leti-list">
                <li><strong>Tools:</strong> Google Sheets, Figma, Canva</li>
                <li><strong>Role:</strong> UX / UI Designer, Frontend Developer, Web Designer</li>
                <li><strong>Project Dates:</strong> May–June 2025</li>
                <li><strong>Team:</strong> Phohanh Tran, Ruslan Romanenko, Eileen Avci, and Dishita Soni</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="leti-section">
        <h2 className="leti-h2">Overview</h2>
        <p>
         For this internship, I am tasked with redesigning and coding the website for the non-profit organization LETI (Latino Educational Training Institute). My goal through this internship was to enhance the navigation and visuals of the LETI website, making it easier for users, especially new members, to find the resources they need and learn more about the organization. To redesign the website, I utilized and further developed my skills in HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="leti-section">
        <h2 className="leti-h2">Goal</h2>
        <p>
          My goal was to redesign and code the website for LETI to improve its navigation and visual appeal.
        </p>
      </section>

      <section className="leti-section">
        <h2 className="leti-h2">Solution</h2>
        <p>
          I decided to redesign the current Leti websites to be more minimalist and get rid of the visual clutter that the text sometimes created on their websites. I was inspired by other non-profit websites. I first created the wireframes and mockups in Figma, and then coded the website using HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="leti-role">
        <h2 className="leti-h2">Key Functionalities of My Redesign</h2>
        <ol className="leti-ordered">
          <li>Uses a more minimalist design approach</li>
          <li>Improves navigation for better user experience</li>
          <li>Places elements in a way that is easy to navigate and understand</li>
        </ol>
      </section>

        <section className="leti-process">
        <p>
          Below is the final looks of the websites that I designed and coded for LETI.
        </p>
        <div className="leti-images">
          <div className="leti-images__container" onClick={() => setFullScreenImage(require("../../../assets/ReDesign/Desktop Mockup final1.jpg"))}>
            <img
              src={require("../../../assets/leti/screencapture-file-C-Users-avcia-Desktop-LETI-AboutPage-html-2025-10-10-15_59_04.png")}
              alt="UW Redesign Screenshot"
              className="leti-images__img"
            />
            <div className="leti-images__overlay">
              <span>Click to View</span>
            </div>
          </div>

          <div className="leti-images__container" onClick={() => setFullScreenImage(require("../../../assets/ReDesign/ICONS ORIGINAL.png"))}>
            <img
              src={require("../../../assets/leti/screencapture-file-C-Users-avcia-Desktop-LETI-ProgramsPagesetup-html-2025-10-10-16_00_38.png")}
              alt="UW Redesign Screenshot"
              className="leti-images__img"
            />
            <div className="leti-images__overlay">
              <span>Click to View</span>
            </div>
          </div>
        </div>

        {fullScreenImage && (
          <div className="leti-fullscreen" onClick={() => setFullScreenImage(null)}>
            <img src={fullScreenImage} alt="Full screen view" />
            <button className="leti-fullscreen__close" onClick={() => setFullScreenImage(null)}>
              ×
            </button>
          </div>
        )}
      </section>
      

      <section className="leti-role">
        <h2 className="leti-h2">What I Learned</h2>
        <p>
          Through this internship I developed my project management abilities. This was the first time I had to create a project and set my deliverables and deadlines. Through this internship, I gained practical insights into effectively planning a project to ensure the best possible results.
        </p>
      </section>
    </main>
  );
};

export default Leti;
