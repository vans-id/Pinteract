import React from 'react';
import { NavLink } from 'react-router-dom';

const ImageCard = ({ image }) => {
  const link = `/details/${image.id}`;
  return (
    <NavLink to={link}>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img
          src={image.webformatURL}
          className='w-full h-full'
        />
      </div>
    </NavLink>
  );
};

export default ImageCard;
