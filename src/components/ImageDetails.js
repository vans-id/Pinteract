import React, { useState, useEffect } from 'react';
import OtherImage from './OtherImage';

const ImageDetails = (props) => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=16152762-55ceae0cfbefc257deed6ec4f&id=${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [props.match.params.id]);

  let displayImage = (
    <h1 className='text-6xl text-center mx-auto mt-32'>
      Loading...
    </h1>
  );
  let currentTerm = null;

  const onGoBack = () => {
    props.history.goBack();
  };

  if (!isLoading) {
    currentTerm = image.tags[0];
    displayImage = (
      <div className='w-5/6 rounded overflow-hidden shadow-lg mx-auto my-8 flex'>
        <img
          src={image.webformatURL}
          className='w-1/2'
        />
        <div>
          <div className='px-6 py-4'>
            <div className='font-semibold text-teal-500 text-4xl mb-2'>
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views: </strong> {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>{' '}
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong> {image.likes}
              </li>
            </ul>
          </div>

          <div className='px-6 py-4'>
            {image.tags.split(',').map((tag, i) => (
              <span
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2'
                key={i}
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={onGoBack}
            className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mx-6 my-8'
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  if (!isLoading && image.length === 0) {
    displayImage = (
      <h1 className='text-5xl text-center mx-auto mt-32'>
        No Images Found
      </h1>
    );
  }

  return (
    <>
      {displayImage}
      <h2 className='text-center text-xl font-semibold mb-4'>
        More like this
      </h2>
      <OtherImage currentTerm={currentTerm} />
    </>
  );
};

export default ImageDetails;
