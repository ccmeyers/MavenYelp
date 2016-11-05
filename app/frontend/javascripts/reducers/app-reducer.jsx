import { combineReducers } from 'redux';
import mavenlinkRedux from 'brainstem-redux';
import doctorsReducer from '../components/doctors/reducer';

const appReducer = combineReducers({
  brainstem: mavenlinkRedux.reducer,
  doctorsFeature: doctorsReducer,
});

export default appReducer;
