import React from 'react';
import useReveal from '../../../hooks/useReveal';
import './Athena.css';

function RevealSection({ className, children, ...props }) {
  const ref = useReveal();
  return <section ref={ref} className={`reveal ${className || ''}`} {...props}>{children}</section>;
}

const Athena = () => {
  return (
    <main className="athena-page">
      <section className="athena-hero">
        <div className="athena-hero__container">
          <div className="athena-hero__media">
            <div className="athena-gif">
              <img
                src={require("../../../assets/Athena/athenaLogo.png")}
                alt="Athena Logo"
                className="athena-gif__image"
              />
            </div>
          </div>

          <div className="athena-hero__text">
            <h1 className="athena-title">ATHENA</h1>
            <p className="athena-subtitle"></p>

            <div className="athena-hero__details">
              <ul className="athena-list">
                <li><strong>Tools:</strong> Google sheets, Figma, Canva</li>
                <li><strong>Role:</strong> UX / UI Designer, UX Researcher</li>
                <li><strong>Project Dates:</strong> May-June 2025</li>
                <li><strong>Team:</strong> Phohanh Tran, Ruslan Romanenko, Eileen Avci, and Dishita Soni</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="athena-section">
        <h2 className="athena-h2">Overview</h2>
        <p>
           I participated in a faculty-led research project led by Peng Du called Project Alpha, which aimed to create an AI powered study tool to aid in the studying for UW bothell student. I was part of Team Alpha Duo as the Lead UX Designer and Researcher. I lead the student research portion of the project. I created surveys and obtained 60 responses from students and conducted 2 user interviews. I also created the user map journey and personas of our users.
        </p>
      </RevealSection>

      <RevealSection className="athena-section">
        <h2 className="athena-h2">Goal</h2>
        <p>
        Our goal was to create a tool that will aid in student's studying, aid teachers in understanding what topics students are struggling with and prevent cheating on exams and homework as much as possible.
        </p>
      </RevealSection>

      <RevealSection className="athena-section">
        <h2 className="athena-h2">Solution</h2>
        <p> We decided to create a discord bot that uses AI to anaylize the canvas of the student and awsner any questions the student may have using the information from the canvas. This made the bot more accurate than any other current AI study tool.</p>
      </RevealSection>

      <RevealSection className="athena-role">
        <h2 className="athena-h2">Key Functionalities of Our Bot</h2>
        <ol className="athena-ordered">
          <li>Uses the OPENAI API</li>
          <li>Pulls from the student's canvas API so its answers are more accurate</li>
          <li>The bot can be accessed through Discord</li>
        </ol>
      </RevealSection>

      <RevealSection className="athena-process">
         <h2 className="athena-h2">Student research Results</h2>
         <div className="athena-images">
           <img
             src={require("../../../assets/Athena/sonuclar1.png")}
             alt="Profile screenshot"
             className="athena-images__img"
           />
           <img
            src={require("../../../assets/Athena/sonuclar2.png")}
            alt="Profile screenshot"
            className="athena-images__img"
          />
        </div>
      </RevealSection>

      <RevealSection className="athena-process">
         <h2 className="athena-h2">Personas</h2>
        <p>Based on the research we conducted, we created two main personas that represented our target users. </p>
          <div className="athena-images">
          <img
            src={require("../../../assets/Athena/persona1.jpg")}
            alt="Profile screenshot"
            className="athena-images__img"
          />
           <img
            src={require("../../../assets/Athena/persona2.jpg")}
            alt="Profile screenshot"
            className="athena-images__img"
          />
        </div>
      </RevealSection>

      <RevealSection className="athena-role">
        <h2 className="athena-h2">What I Learned</h2>
        <p>I learned how to conduct user research and gather valuable insights from students. I learned how to utilize the MOM method when doing user interviews. I also gained valuable experience working in a team with a diverse range of skills.</p>
      </RevealSection>

    </main>
  );
};

export default Athena;
