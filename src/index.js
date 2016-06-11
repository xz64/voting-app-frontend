import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

document.addEventListener('DOMContentLoaded', () => {
  render(React.createElement(App), document.getElementById('root'));
});
