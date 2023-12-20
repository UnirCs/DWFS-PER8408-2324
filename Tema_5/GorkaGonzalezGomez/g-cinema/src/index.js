import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Movies } from './views/Movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);
