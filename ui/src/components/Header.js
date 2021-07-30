import React from 'react';

export const Header = () => {
  const headerStyle = {
    width: '100%',
    padding: '1%',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    margin: '2px',
  };

  return (
    <div style={headerStyle}>
      <h1>Image Generator</h1>
    </div>
  );
};
