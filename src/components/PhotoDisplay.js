import React from 'react';

const PhotoDisplay = ({ photoUrl, caption }) => {
  return (
    <div class="photo-display">
      <img src={photoUrl} alt={""} />
      <p>{caption}</p>
    </div>
  );
};

export default PhotoDisplay;