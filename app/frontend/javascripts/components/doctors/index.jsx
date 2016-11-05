import React from 'react';
import ReactDOM from 'react-dom';
import DoctorsListContainer from './containers/doctors-list-container';
import { Provider } from 'react-redux';
import store from '../../reducers/store';

const container = () => document.getElementById('doctors-react-container');

const render = () => {
  ReactDOM.render((
    <div className="doctors">
      <Provider store={store}>
        <DoctorsListContainer />
      </Provider>
    </div>
  ), container());
}

const initDoctors = () => {
  if (container()) {
    render();
  }
}

export default initDoctors
