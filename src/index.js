import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AvistamientosApp from './AvistamientosApp';


ReactDOM.render(
  <BrowserRouter>
    <AvistamientosApp />
  </BrowserRouter>,
  document.getElementById('root')
);


