import { createStore, applyMiddleware } from 'redux';
import appReducer from './app-reducer';
import { updateStorageManager, updateStore } from 'brainstem-redux';
import thunkMiddleware from 'redux-thunk';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const middlewares = applyMiddleware(thunkMiddleware, updateStorageManager, logger);

const store = createStore(appReducer, middlewares);

updateStore(store);

export default store;
