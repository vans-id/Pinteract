import React from 'react';
import ImageCard from './ImageCard';

function MainCards({ images, isLoading }) {
  let displayImage = (
    <h1 className='text-6xl text-center mx-auto mt-32'>
      Loading...
    </h1>
  );

  if (!isLoading) {
    displayImage = (
      <div className='grid grid-cols-4 gap-2'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    );
  }

  if (!isLoading && images.length === 0) {
    displayImage = (
      <h1 className='text-5xl text-center mx-auto mt-32'>
        No Images Found
      </h1>
    );
  }

  return (
    <div className='container mx-auto px-6 mb-16'>
      {displayImage}
    </div>
  );
}

export default MainCards;
