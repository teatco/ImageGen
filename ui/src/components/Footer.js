import React from 'react';

export const Footer = ({ getImage }) => {
  return (
    <div style={{ backgroundColor: 'green' }} className="display-Image">
      <h4 style={{ color: 'white' }}>
        click is the buttons to generate and display an image
      </h4>
      <div className="btn">
        <a href="http://localhost:3000/generate">
          <button>Generate Image</button>
        </a>
        <button
          type="button"
          onClick={(e) => getImage()}
          className="btn btn-warning"
        >
          Display Image
        </button>
      </div>
    </div>
  );
};
