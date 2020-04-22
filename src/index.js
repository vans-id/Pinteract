import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import App from './App';
import ImageDetails from './components/ImageDetails';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={App} />
    <Route
      path='/details/:id'
      component={ImageDetails}
    />
  </BrowserRouter>,
  document.getElementById('root')
);
