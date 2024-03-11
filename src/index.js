import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure you have this if you're using global CSS
import App from './App'; // Adjust the path if your App.js is located elsewhere


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're not using reportWebVitals, you can remove or comment out the below line
