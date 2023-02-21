import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './App'
import {Provider} from './context/books';

// Get the root element out of the html document
const el = document.getElementById('root');

// Create our 'root'
const root = ReactDOM.createRoot(el)

// Render out App component
root.render(
    <Provider>
        <App />
    </Provider>
)