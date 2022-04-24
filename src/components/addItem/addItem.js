import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import TODO from '../../assets/images/todo.png';
import { displayItem } from '../../Redux/item/item';
import { addAlert } from '../../Redux/alert/alert';
import { thunkTasks } from '../../Redux/tasks/thunk/thunk';
import addTask from './addItemhelper';
import './addItem.css';

const AddItem = () => {
  const dispatch = useDispatch();
  const addHandler = async (e) => {
    e.preventDefault();
    const inputsData = Array.from(document.querySelectorAll('.input-data'));
    const textData = inputsData[0].value;
    const dateData = inputsData[1].value;
    if ((textData !== '') && (dateData !== '')) {
      const request = await addTask(textData, dateData);
      const result = await request.json();
      const { status, message } = result;
      if (status === 'SUCCESS') {
        dispatch(displayItem());
        dispatch(thunkTasks());
      }
      dispatch(addAlert(message));
    } else {
      dispatch(addAlert('Please fill required fields!'));
    }
  };
  const changeColor = (e) => {
    e.target.classList.add('change-input');
  };
  const backHandler = () => {
    dispatch(displayItem());
  };
  return (
    <div className="addItem-wrapper">
      <header className="header-wrapper">
        <ArrowBackIcon className="back-icon" style={{ color: 'rgb(56, 142, 204)' }} onClick={backHandler} />
        <Typography variant="h6" className="add-thing-title">Add new thing </Typography>
      </header>
      <img src={TODO} alt="todo-icon" className="things-icon" />
      <form>
        <input placeholder="Description" type="text" className="input-data" onChange={changeColor} required />
        <input type="date" className="input-data" defaultValue={null} onChange={changeColor} required />
        <button type="submit" onClick={addHandler} className="add-btn">ADD YOUR THINGS</button>
      </form>
    </div>
  );
};

export default AddItem;
