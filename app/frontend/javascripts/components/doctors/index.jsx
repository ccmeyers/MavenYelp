import React from 'react';
import ReactDOM from 'react-dom';
import DoctorsList from './doctors-list';

const container = () => document.getElementById('doctors-react-container');

const render = () => {
  ReactDOM.render((
    <div className="doctors">
      <DoctorsList />
    </div>
  ), container());
}

const initDoctors = () => {
  if (container()) {
    render();
  }
}

export default initDoctors
