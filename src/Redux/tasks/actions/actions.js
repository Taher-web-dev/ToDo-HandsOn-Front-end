const START_FETCH_TASKS = 'TODO/TASKS/START';
const GET_TASKS = 'TODO/TASKS/GET';
const FAILURE_FETCH_TASKS = 'TODO/TASKS/FAILURE';

export const startFetchtasks = () => ({
  type: START_FETCH_TASKS,
});

export const getTasks = (payload) => ({
  type: GET_TASKS,
  payload,
});

export const fetchTasksfailure = (payload) => ({
  type: FAILURE_FETCH_TASKS,
  payload,
});
