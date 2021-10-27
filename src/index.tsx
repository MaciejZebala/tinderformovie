import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { worker } from './mock/browser';
import App from './views/App';

worker.start();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
