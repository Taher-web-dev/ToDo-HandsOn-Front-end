import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { alertReducer } from './alert/alert';
import tasksReducer from './tasks/reducers/reducers';
import { itemReducer } from './item/item';

const reducer = combineReducers({
  alert: alertReducer,
  tasks: tasksReducer,
  item: itemReducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
