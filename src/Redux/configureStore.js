import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { alertReducer } from './alert/alert';
import tasksReducer from './tasks/reducers/reducers';

const reducer = combineReducers({
  alert: alertReducer,
  tasks: tasksReducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
