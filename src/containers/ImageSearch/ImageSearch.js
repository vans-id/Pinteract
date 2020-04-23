import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const ImageSearch = ({ searchText, history }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    setText('');
    e.preventDefault();
    history.push('/');
    searchText(text);
  };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-100 px-6 py-3 mb-6'>
      <NavLink
        to='/'
        className='flex items-center flex-shrink-0 text-teal-900 mr-6'
      >
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
        </svg>
        <span className='font-semibold text-xl tracking-tight'>
          Pinteract
        </span>
      </NavLink>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <div className='w-3/4 rounded overflow-hidden block lg:inline-block lg:mt-0 text-teal-200'>
            <form
              onSubmit={onSubmit}
              className='w-full'
            >
              <div className='flex items-center border border-1 border-teal-500 rounded-full py-2 px-2'>
                <i className='fas fa-search mx-1'></i>
                <input
                  type='text'
                  className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                  placeholder='Search'
                  onChange={(e) =>
                    setText(e.target.value)
                  }
                  value={text}
                />
                <button
                  className='appearance-none'
                  type='submit'
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(ImageSearch);
