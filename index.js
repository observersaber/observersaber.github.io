import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Head from './components/Head.js';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
