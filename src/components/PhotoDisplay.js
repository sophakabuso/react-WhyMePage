import React from 'react';

const PhotoDisplay = ({ photoUrl, caption }) => {
  return (
    <div className="photo-display">
      <img src={photoUrl} alt={""} />
      <p>{caption}</p>
    </div>
  );
};

export default PhotoDisplay;