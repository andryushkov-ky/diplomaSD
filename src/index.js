import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterComponent } from './components/RouterComponent/routerComponent';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouterComponent />
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);
