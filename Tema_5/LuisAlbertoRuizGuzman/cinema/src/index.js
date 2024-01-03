import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ListPeliculas} from './views/ListPeliculas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListPeliculas />
  </React.StrictMode>
);


