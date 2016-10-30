import React from 'react';
import ReactDOM from 'react-dom';

const container = () => document.getElementById('doctors-react-container');

const render = () => {
  ReactDOM.render((
    <div>Hello, World!</div>
  ), container());
}

const initDoctors = () => {
  if (container()) {
    render();
  }
}

export default initDoctors
