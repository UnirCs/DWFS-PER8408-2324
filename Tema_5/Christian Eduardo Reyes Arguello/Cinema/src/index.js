import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Movielist} from "./views/Movielist";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Movielist />
    </React.StrictMode>
);
