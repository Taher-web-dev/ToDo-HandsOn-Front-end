import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../header/header';
import Item from '../item/item';
import { getTodaytask, fulfilledTaskcompter } from './todohelper';
import './todo.css';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const todayTasks = getTodaytask(tasks);
  const total = todayTasks.length;
  const fulfilleds = fulfilledTaskcompter(todayTasks);
  return (
    <div className="todo-wrapper">
      <Header total={total} done={fulfilleds} />
      <Typography variant="h4" className="today-title" style={{ fontSize: '24px', fontWeight: '550' }}> Tasks for today </Typography>
      {todayTasks.map((task) => (
        <Item description={task.description} id={task.id} done={task.done} key={task.id} />))}
      <button type="submit" className="add-task-btn">
        <AddIcon style={{ color: 'white' }} />
        <p className="btn-title">Add new item </p>
      </button>
    </div>
  );
};
export default Todo;
