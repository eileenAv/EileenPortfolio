import React, { useEffect } from 'react';
import './DevelopmentOfTheBackend.css';
import { FaServer } from 'react-icons/fa';

export default function DevelopmentOfTheBackend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dev-backend-container">
      <div className="dev-backend-header">
        <h1 className="dev-backend-title">Development of the Backend</h1>
        <FaServer className="dev-backend-icon" />
      </div>
      
      <div className="dev-backend-sections">
        <div className="dev-backend-section">
          <h2 className="dev-backend-section-title" spellCheck="false">My Databases</h2>
          <p className="dev-backend-section-text">
            Here is the screenshot of my current database structure using MongoDB Atlas. I used two collections, one for employee preferences and one for employees that where assigned shifts. The employee collection stores employee preference details, while the shifts collection stores employee names and what shifts they are assisgned to. The AI first pulls from the employee preferences data and after anaylzing it, it sends it to the employee shifts database.
          </p>
          <div className="dev-backend-image-container">
            <img src={require('../../../../assets/Capstone/databaseScreenshot.jpg')} alt="Database Screenshot" className="dev-backend-image" />
            <p className="dev-backend-caption">MongoDB Atlas Database Structure</p>
          </div>
        </div>
        
        <div className="dev-backend-section">
          <h2 className="dev-backend-section-title" spellCheck="false">My Prompt</h2>
          <p className="dev-backend-section-text">
            Below is the prompt that I used to get the AI to generate the schedule based on employee preferences. I had to go through multiple iterations of the prompt until the AI was assigning shifts in the way I wanted. I also had to make sure that the output was in a format that was easy to parse and store in my database.
          </p>
          <div className="dev-backend-image-container">
            <img src={require('../../../../assets/Capstone/promptFinal.jpg')} alt="Final AI Prompt" className="dev-backend-image" />
            <p className="dev-backend-caption">Final AI Prompt for Schedule Generation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
