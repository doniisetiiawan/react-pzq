import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import initialState from './initialState';
import App from './App';

export default createStore(
  combineReducers({
    App,
  }),
  initialState,
);
