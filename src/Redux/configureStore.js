import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { alertReducer } from './alert/alert';

const reducer = combineReducers({
  alert: alertReducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
