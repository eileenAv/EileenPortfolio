import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CapstoneExperience.css';
import { FaMap } from 'react-icons/fa';

export default function CapstoneExperience(){
  const navigate = useNavigate();

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">The Capstone Experience</h1>
        <FaMap className="experience-icon" />
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker">1</div>
          <div className="timeline-content" onClick={() => navigate('/capstone/experience/app-design')}>
            <h2 className="timeline-title" spellCheck="false">The App Design</h2>
            <p className="timeline-text">
              Click here to learn more about the system architecture.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker">2</div>
          <div className="timeline-content" onClick={() => navigate('/capstone/experience/ui-development')}>
            <h2 className="timeline-title" spellCheck="false">Development of the UI</h2>
            <p className="timeline-text">
              Click here to learn more about the user interface development.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker">3</div>
          <div className="timeline-content" onClick={() => navigate('/capstone/experience/backend-development')}>
            <h2 className="timeline-title" spellCheck="false">Development of the Backend</h2>
            <p className="timeline-text">
              Click here to learn more about backend development.
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker">4</div>
          <div className="timeline-content" onClick={() => navigate('/capstone/experience/final-product')}>
            <h2 className="timeline-title" spellCheck="false">The Final Product</h2>
            <p className="timeline-text">
              Click here to learn more about the completed application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
