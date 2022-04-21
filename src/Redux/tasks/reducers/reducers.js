import { START_FETCH_TASKS, GET_TASKS, FAILURE_FETCH_TASKS } from "../actions/actions";

const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case START_FETCH_TASKS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TASKS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case FAILURE_FETCH_TASKS:
      return {
        ...state,
        loading: false,
        error: action.loading,
      };
    default:
      return state;
  }
};

export default tasksReducer;
