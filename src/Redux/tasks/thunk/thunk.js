import { startFetchtasks, getTasks, fetchTasksfailure } from "../actions/actions";

const url = 'https://afternoon-anchorage-40437.herokuapp.com/api/v1/tasks';
export const fetchTasks = () => fetch(url);

export const thunkTasks = () => (dispatch) => {
  dispatch(startFetchtasks);
  fetchTasks()
    .then((result) => result.json())
    .then((res) => dispatch(getTasks(res)))
    .catch((error) => dispatch(fetchTasksfailure(error.message)));
};
