import React from 'react';

const LatestWork = ({ images }) => {
  const displayedImages = images.slice(0, 3); // Display only the first 3 images

  return (
    <div className="latest-work">
      <h2>Latest Work</h2>
      <div className="image-gallery">
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={``} />
        ))}
      </div>
      {images.length > 3 && (
        <button className="view-all-button">View All</button>
      )}
    </div>
  );
};

export default LatestWork;
