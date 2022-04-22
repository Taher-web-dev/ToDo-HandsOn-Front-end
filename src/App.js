import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import Todo from './components/todo/todo';
import { thunkTasks } from './Redux/tasks/thunk/thunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(thunkTasks()), []);
  return (
    <div className="app-wrapper">
      <Todo />
      <div className="app-description">
        <Typography variant="h1" className="app-title"> Todo List</Typography>
        <Typography variant="body1" className="app-desc">
          Create your todo list, bring things on schedule
        </Typography>
      </div>
    </div>
  );
};

export default App;
