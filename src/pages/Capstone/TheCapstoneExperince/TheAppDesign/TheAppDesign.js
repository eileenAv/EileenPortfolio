import React from 'react';
import './TheAppDesign.css';
import { FaPencilRuler } from 'react-icons/fa';

export default function TheAppDesign() {
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
            Add content about the initial system architecture, wireframes, and early concepts.
          </p>
          <div className="app-design-image-container">
            <img src="" alt="Initial System Architecture" className="app-design-image" />
            <p className="app-design-caption">Caption for initial system architecture</p>
          </div>
        </div>
        
        <div className="app-design-section">
          <h2 className="app-design-section-title" spellCheck="false">Current System Architecture</h2>
          <p className="app-design-section-text">
            Add content about the current system architecture and polished designs.
          </p>
          <div className="app-design-image-container">
            <img src="" alt="Current System Architecture" className="app-design-image" />
            <p className="app-design-caption">Caption for current system architecture</p>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}
