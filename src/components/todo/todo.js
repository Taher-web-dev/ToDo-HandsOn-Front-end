import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../header/header';
import Item from '../item/item';
import { getTodaytask, fulfilledTaskcompter } from './todohelper';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const todayTasks = getTodaytask(tasks);
  const total = todayTasks.length;
  const fulfilleds = fulfilledTaskcompter(todayTasks);
  return (
    <div>
      <Header total={total} done={fulfilleds} />
      <Typography variant="h4"> Tasks for today </Typography>
      {todayTasks.map((task) => (
        <Item description={task.description} id={task.id} done={task.done} key={task.id} />))}
      <button type="submit">
        <AddIcon />
        <p>Add new item </p>
      </button>
    </div>
  );
};
export default Todo;
