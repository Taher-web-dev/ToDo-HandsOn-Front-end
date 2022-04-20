import { configureStore, combineReducers, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { alertReducer } from './alert/alert';
const reducer = combineReducers({
  alert: alertReducer,
});
const store = configureStore(reducer, applyMiddleWare(thunk, logger));

export default store;