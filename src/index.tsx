import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from './Interface/constants';
import App from './pages/App';
document.title = Text.title; 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
