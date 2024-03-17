import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.css';
import './styles/media-size.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
