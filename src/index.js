// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";


// Components
import App from './App';

ReactDOM.render(
  <Router>      {/**envoltura de enrutacion*/}
    <App />
  </Router>
, document.getElementById('root'));