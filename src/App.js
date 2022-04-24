import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Todo from './components/todo/todo';
import AddItem from './components/addItem/addItem';
import { thunkTasks } from './Redux/tasks/thunk/thunk';
import { resetAlert } from './Redux/alert/alert';
import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const resetMessage = () => dispatch(resetAlert());
  const itemState = useSelector((state) => state.item);
  setTimeout(resetMessage, 10000);
  useEffect(() => dispatch(thunkTasks()), []);
  const adjustSize = () => {
    const h = window.innerHeight;
    const wrapper = document.querySelector('.app-wrapper');
    wrapper.style.height = `${h}px`;
  };
  useEffect(() => adjustSize(), []);
  return (
    <div className="app-wrapper">
      { itemState === 'display' && (<Todo />)}
      { itemState === 'add' && (<AddItem />)}
      <div className="app-description">
        {
        alert
        && (
        <Alert variant="warning" style={{ minWidth: '60%', textAlign: 'center' }}>
          { alert }
        </Alert>
        )
      }
        <p className="app-title" style={{ fontWeight: '400' }}>
          Todo List
        </p>
        <p className="app-desc" style={{ fontSize: '24px' }}>
          Create your todo list, bring things on schedule
        </p>
      </div>
    </div>
  );
};

export default App;
