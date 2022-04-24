import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import TODO from '../../assets/images/todo.png';
import { displayItem } from '../../Redux/item/item';
import './addItem.css';

const AddItem = () => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(displayItem());
  };
  const changeColor = (e) => {
    e.target.classList.add('change-input');
  };
  return (
    <div className="addItem-wrapper">
      <header className="header-wrapper">
        <ArrowBackIcon className="back-icon" style={{ color: 'rgb(56, 142, 204)' }} />
        <Typography variant="h6" className="add-thing-title">Add new thing </Typography>
      </header>
      <img src={TODO} alt="todo-icon" className="things-icon" />
      <form>
        <input placeholder="Description" type="text" className="input-data" onChange={changeColor} />
        <input type="date" className="input-data" defaultValue={null} onChange={changeColor} />
        <button type="submit" onClick={addHandler} className="add-btn">ADD YOUR THINGS</button>
      </form>
    </div>
  );
};

export default AddItem;
