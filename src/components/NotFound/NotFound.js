import React from 'react';

const NotFound = () => {
  return (
    <>
      <img
        src={require('../../images/Ilustration@2x.jpg')}
        className='w-64 h-auto mx-auto my-8'
      />
      <h2 className='text-4xl text-teal-500 font-semibold text-center'>
        Opps! Not Found
      </h2>
      <p className='text-base text-center mt-2'>
        Hmmm.. try again with more specific keywords
      </p>
    </>
  );
};

export default NotFound;
