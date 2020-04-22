import React from 'react';

const ImageDetails = () => {
  const tags = image.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img
        src={image.webformatURL}
        className='w-full'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul className='text-sm'>
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
        {tags.map((tag, i) => (
          <span
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2'
            key={i}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageDetails;
