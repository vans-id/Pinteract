import React, { useState, useEffect } from 'react';

import ImageCard from './ImageCard';

const OtherImage = ({ currentTerm }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(currentTerm);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=16152762-55ceae0cfbefc257deed6ec4f&q=${currentTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [currentTerm]);

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
};

export default OtherImage;
