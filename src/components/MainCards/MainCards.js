import React from 'react';

import ImageCard from '../ImageCard/ImageCard';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

function MainCards({ images, isLoading }) {
  let displayImage = <Spinner />;

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
    displayImage = <NotFound />;
  }

  return (
    <div className='container mx-auto px-6 mb-16'>
      {displayImage}
    </div>
  );
}

export default MainCards;
