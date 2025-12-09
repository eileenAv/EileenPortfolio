import React, { useEffect } from 'react';
import './TheAppDesign.css';
import { FaPencilRuler } from 'react-icons/fa';

export default function TheAppDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-design-container">
      <div className="app-design-header">
        <h1 className="app-design-title">The App Design</h1>
        <FaPencilRuler className="app-design-icon" />
      </div>
      
      <div className="app-design-sections">
        <div className="app-design-section">
          <h2 className="app-design-section-title" spellCheck="false">Initial System Architecture</h2>
          <p className="app-design-section-text">
            At first, I thought that I would need only one database and folder to store the data. Below is the inital system architecture. I assumed that the data will just be pulled from the fronted and directly sent to the AI.
          </p>
          <div className="app-design-image-container">
            <img src={require('../../../../assets/Capstone/previousDiagram.png')} alt="Initial System Architecture" className="app-design-image" />
            <p className="app-design-caption">Initial System Architecture Diagram</p>
          </div>
        </div>
        
        <div className="app-design-section">
          <h2 className="app-design-section-title" spellCheck="false">Current System Architecture</h2>
          <p className="app-design-section-text">
            After some more brainstorming and help from my expert, I realized that it would be better if I stored all the data at the database first, and then have AI pull the storedemployee data from the database. Then the AI would send the new midified data back to the database, where it would be later pulled to be used by the frontend. By implementig these changes to the final system architecture, I had a better idea of what my app would look like. I also added what output I wanted from the AI.
          </p>
          <div className="app-design-image-container">
            <img src={require('../../../../assets/Capstone/finalDiagram.png')} alt="Current System Architecture" className="app-design-image" />
            <p className="app-design-caption">Current System Architecture Diagram</p>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}
