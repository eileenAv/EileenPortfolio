import React, { useEffect } from 'react';
import './TheFinalProduct.css';

export default function TheFinalProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="final-product-container">
      <h1 className="final-product-title">The Final Product</h1>
      <div className="final-product-images">
        <div className="final-product-image-placeholder">
          <img src={require('../../../../assets/superviorUI.png')} alt="Supervisor Interface" />
        </div>
        <div className="final-product-image-placeholder">
          <span>Image 2</span>
        </div>
      </div>
      <p className="final-product-text">
        My app is not currently deployed anywhere but you can access my github page for the project here.
      </p>
      <a href="https://github.com/eileenAv" target="_blank" rel="noopener noreferrer" className="final-product-button">
        View on GitHub
      </a>
    </div>
  );
}
