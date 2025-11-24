import React from 'react';
import './TheFinalProduct.css';

export default function TheFinalProduct() {
  return (
    <div className="final-product-container">
      <h1 className="final-product-title">The Final Product</h1>
      <p className="final-product-text">
        My app is not currently deployed anywhere but you can access my github page for the project here.
      </p>
      <a href="https://github.com/eileenAv" target="_blank" rel="noopener noreferrer" className="final-product-button">
        View on GitHub
      </a>
    </div>
  );
}
