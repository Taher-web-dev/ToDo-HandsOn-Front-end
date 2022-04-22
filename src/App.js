import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Typography } from '@mui/material';
import Todo from './components/todo/todo';
import { thunkTasks } from './Redux/tasks/thunk/thunk';
import { resetAlert } from './Redux/alert/alert';
import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const resetMessage = () => dispatch(resetAlert());
  setTimeout(resetMessage, 5000);
  useEffect(() => dispatch(thunkTasks()), []);
  const adjustSize = () => {
    const h = window.innerHeight;
    const wrapper = document.querySelector('.app-wrapper');
    wrapper.style.height = `${h}px`;
  };
  useEffect(() => adjustSize(), []);
  return (
    <div className="app-wrapper">
      <Todo />
      <div className="app-description">
        {
        alert
        && (
        <div className="alert alert-warning" role="alert">
          { alert }
        </div>
        )
      }
        <p className="app-title" style={{ fontWeight: '400' }}> Todo List</p>
        <p className="app-desc" style={{ fontSize: '22px' }}>
          Create your todo list, bring things on schedule
        </p>
      </div>
    </div>
  );
};

export default App;
