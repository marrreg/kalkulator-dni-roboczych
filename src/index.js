import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <App />,
  document.getElementById("mountNode")
);
