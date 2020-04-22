import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import MainCards from './components/MainCards';
import ImageSearch from './components/ImageSearch';
import ImageDetails from './components/ImageDetails';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=16152762-55ceae0cfbefc257deed6ec4f&q=${term}`
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
  }, [term]);

  return (
    <>
      <ImageSearch
        searchText={(text) => setTerm(text)}
      />
      <BrowserRouter>
        <Route
          path='/'
          exact
          component={() => (
            <MainCards
              images={images}
              isLoading={isLoading}
            />
          )}
        />
        <Route
          path='/details/:id'
          component={ImageDetails}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
