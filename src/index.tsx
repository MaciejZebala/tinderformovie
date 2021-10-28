import React from 'react';
import ReactDOM from 'react-dom';
import { MoviesContextProvider } from './context/MovieContext';
import './index.css';
import { worker } from './mock/browser';
import App from './views/App';

worker.start();
ReactDOM.render(
  <MoviesContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoviesContextProvider>,
  document.getElementById('root')
);
