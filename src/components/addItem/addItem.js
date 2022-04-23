import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import TODO from '../../assets/images/todo.png';
import { displayItem } from '../../Redux/item/item';

const AddItem = () => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(displayItem());
  };
  return (
    <div>
      <header>
        <ArrowBackIcon />
        <Typography variant="h6">Add new thing </Typography>
      </header>
      <img src={TODO} alt="todo-icon" />
      <form>
        <input placeholder="Description" type="text" />
        <input type="date" placeholder="Date" />
        <button type="submit" onClick={addHandler}>ADD YOUR THINGS</button>
      </form>
    </div>
  );
};

export default AddItem;
