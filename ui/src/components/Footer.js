import React from 'react';

export const Footer = ({ getImage }) => {
  return (
    <div style={{ backgroundColor: 'green' }} className="display-Image">
      <h4 style={{ color: 'white' }}>
        click is the button to display the generated Image
      </h4>
      <div className="btn">
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
