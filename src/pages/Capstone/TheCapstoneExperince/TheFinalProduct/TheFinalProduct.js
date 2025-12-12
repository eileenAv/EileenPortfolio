import React, { useEffect, useState } from 'react';
import './TheFinalProduct.css';

export default function TheFinalProduct() {
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="final-product-container">
      <h1 className="final-product-title">The Final Product</h1>
      <p className="final-product-text">
       Below is a screenshot of the final schedule interface. My app is not currently deployed anywhere but you can access my GitHub page for the project here.
      </p>
      <div className="final-product-image-container">
        <div style={{ cursor: 'pointer' }} onClick={() => setExpandedImage(require('../../../../assets/ScheduleFinal.png'))}>
          <img src={require('../../../../assets/ScheduleFinal.png')} alt="Supervisor Interface" className="final-product-image" />
          <p className="final-product-caption">Final Scheduled Employee View (Click to expand)</p>
        </div>
      </div>
      <a href="https://github.com/eileenAv" target="_blank" rel="noopener noreferrer" className="final-product-button">
        View on GitHub
      </a>
      
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
