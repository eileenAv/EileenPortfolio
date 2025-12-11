import React, { useEffect, useState } from 'react';
import './DevelopmentOfTheBackend.css';
import { FaServer } from 'react-icons/fa';

export default function DevelopmentOfTheBackend() {
  const [expandedImage, setExpandedImage] = useState(null);

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
            Here is the screenshot of my current database structure using MongoDB Atlas. I used two collections, one for employee preferences and one for employees that were assigned shifts. The employee collection stores employee preference details, while the shifts collection stores employee names and what shifts they are assigned to. The AI first pulls from the employee preferences data and after analyzing it, it sends it to the employee shifts database.
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
          <p className="dev-backend-section-text">
            At first, my prompt was written as a very long paragraph. I assumed that this would be enough information. But when I tried this prompt, the AI ignored the data, didn't schedule any employees, and mirrored my input back to me. After researching further and making multiple prompt attempts, I decided to add input and output examples, divide the information into subsections, and use words like strict, critical, and bold the important information. I also created methods that check and fix the AI's output. I hope to lessen them as my prompt improves.
          </p>
          <div className="dev-backend-image-container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '400px', cursor: 'pointer' }} onClick={() => setExpandedImage(require('../../../../assets/firstPrompt.png'))}>
              <img src={require('../../../../assets/firstPrompt.png')} alt="First AI Prompt Attempt" className="dev-backend-image" style={{ width: '100%', height: 'auto' }} />
              <p className="dev-backend-caption">First AI Prompt Attempt (Click to expand)</p>
            </div>
            <div style={{ flex: '1', minWidth: '400px', cursor: 'pointer' }} onClick={() => setExpandedImage(require('../../../../assets/Capstone/promptFinal.jpg'))}>
              <img src={require('../../../../assets/Capstone/promptFinal.jpg')} alt="Final AI Prompt" className="dev-backend-image" style={{ width: '100%', height: 'auto' }} />
              <p className="dev-backend-caption">Final AI Prompt (Click to expand)</p>
            </div>
          </div>
        </div>
      </div>
      
      {expandedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setExpandedImage(null)}
        >
          <img 
            src={expandedImage} 
            alt="Expanded view" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              objectFit: 'contain',
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }} 
          />
        </div>
      )}
    </div>
  );
}
