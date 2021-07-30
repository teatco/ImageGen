import React from 'react';

export const Image = ({ data }) => {
  return (
    <div className="container">
      <h2>Image</h2>
      <img src={data.avatarURL} alt="is displayed here" />
    </div>
  );
};
