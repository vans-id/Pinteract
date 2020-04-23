import React, { useState, useEffect } from 'react';

import ImageCard from '../../components/ImageCard/ImageCard';
import Spinner from '../../components/Spinner/Spinner';
import NotFound from '../../components/NotFound/NotFound';

const OtherImage = ({ currentTerm }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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

  let displayImage;

  if (!isLoading) {
    displayImage = (
      <div className='grid grid-cols-4 gap-2'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    );
  } else {
    displayImage = <Spinner />;
  }

  if (!isLoading && images.length === 0) {
    displayImage = <NotFound />;
  }

  return (
    <div className='container mx-auto px-6 mb-16'>
      {displayImage}
    </div>
  );
};

export default OtherImage;
