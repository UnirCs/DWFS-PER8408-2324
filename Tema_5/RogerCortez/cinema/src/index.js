import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MovieList} from './views/MovieList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>
);
