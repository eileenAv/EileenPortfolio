import React, { useEffect } from 'react';
import './DevelopmentOfTheUI.css';
import { FaPalette } from 'react-icons/fa';


export default function DevelopmentOfTheUI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dev-ui-container">
      <div className="dev-ui-header">
        <h1 className="dev-ui-title">Development of the UI</h1>
        <FaPalette className="dev-ui-icon" />
      </div>
      
      <div className="dev-ui-sections">
        <div className="dev-ui-section">
          <h2 className="dev-ui-section-title" spellCheck="false">Initial Design Mockups</h2>
          <p className="dev-ui-section-text">
            When I was first developing the UI for the app, I created mockups I could quickly modify using Figma. After several iterations and user feedback on my designs, I refined the designs to better meet user needs.
          </p>
          <div className="dev-ui-images-grid">
            <div className="dev-ui-image-container">
              <img src={require('../../../../assets/Capstone/supervisor interface UI mockup.png')} alt="Supervisor Interface UI Mockup" className="dev-ui-image" />
              <p className="dev-ui-caption">Employee Form Interface UI Mockup made on Figma</p>
            </div>
            <div className="dev-ui-image-container">
              <img src={require('../../../../assets/Capstone/Mockup2Superviors.png')} alt="Mockup 2 Supervisors" className="dev-ui-image" />
              <p className="dev-ui-caption">Manager View Mockup made with Figma</p>
            </div>
          </div>
        </div>
        
        <div className="dev-ui-section">
          <h2 className="dev-ui-section-title" spellCheck="false">Final Designs</h2>
          <p className="dev-ui-section-text">
            After refining the initial mockups based on feedback, I developed the final designs using React. These UI components are the ones that are currently implemented in the app. The process of getting to the final design took about 3 weeks. This was becuase I made Figma mockups first and then would get feedback from peers and my instructor
I would then iterate according to the changes.          </p>
          <div className="dev-ui-images-grid">
            <div className="dev-ui-image-container">
              <img src={require('../../../../assets/Capstone/Picture3.jpg')} alt="Final Design Picture 3" className="dev-ui-image" />
              <p className="dev-ui-caption">Final Design - This is what the manager view looks like</p>
            </div>
            <div className="dev-ui-image-container">
              <img src={require('../../../../assets/Capstone/avalbilityForm.jpg')} alt="Availability Form" className="dev-ui-image" />
              <p className="dev-ui-caption">Availability Form - This is what the employee form for filling out preferences looks like</p>
            </div>
          </div>
        </div>
        
    
      </div>
    </div>
  );
}
