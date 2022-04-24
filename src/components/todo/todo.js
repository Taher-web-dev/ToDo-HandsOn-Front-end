import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../header/header';
import Item from '../item/item';
import { getTodaytask, fulfilledTaskcompter } from './todohelper';
import { addItem } from '../../Redux/item/item';
import './todo.css';

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const todayTasks = getTodaytask(tasks);
  const total = todayTasks.length;
  const fulfilleds = fulfilledTaskcompter(todayTasks);
  const switchToadd = () => {
    dispatch(addItem());
  };
  const adjustbtn = () => {
    const btn = document.querySelector('.add-task-btn');
    const wrapper = document.querySelector('.functional-part');
    if (total < 4) {
      btn.style.position = 'absolute';
      wrapper.style.position = 'relative';
    } else {
      btn.style.position = 'relative';
      wrapper.style.position = 'static';
    }
  };
  useEffect(() => adjustbtn(), [tasks]);
  return (
    <div className="todo-wrapper">
      <Header total={total} done={fulfilleds} />
      <div className="functional-part">
        <Typography variant="h4" className="today-title" style={{ fontSize: '24px', fontWeight: '550' }}> Tasks for today </Typography>
        {todayTasks.map((task) => (
          <Item description={task.description} id={task.id} done={task.done} key={task.id} />))}
        <button type="submit" className="add-task-btn" onClick={switchToadd}>
          <AddIcon style={{ color: 'white' }} />
          <p className="btn-title">Add new item </p>
        </button>
      </div>
    </div>
  );
};
export default Todo;
