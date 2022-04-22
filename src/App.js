import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Todo from './components/todo/todo';
import { thunkTasks } from './Redux/tasks/thunk/thunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(thunkTasks()), []);
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
