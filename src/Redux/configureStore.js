import { configureStore, combineReducers, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { alertReducer } from './alert/alert';
const reducer = combineReducers({
  reducer: alertReducer,
});
const store = configureStore(reducer, applyMiddleWare(thunk, logger));

export default store;