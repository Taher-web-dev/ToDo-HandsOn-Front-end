import { React } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { addAlert } from '../../Redux/alert/alert';
import { updateTask } from './itemhelper';

const Item = (props) => {
  const dispatch = useDispatch();
  const { id, done, description } = props;
  const taskFulfilled = async(e) => {
    const checked = e.target.checked;
    const task = document.querySelector('task-desc');
    checked ? task.style.textDecoration = 'line-through 3px rgb(0, 0, 255)' : task.style.textDecoration='none';
    const task = {
      done: checked,
      description,
    };
    const res = await updateTask(id, task);
    const resp = await res.json();
    const { status, message } = resp;
    if (status === 'Error'){
      e.target.checked = !checked;
      !checked ? task.style.textDecoration = 'line-through 3px rgb(0, 0, 255)' : task.style.textDecoration='none';
      dispatch(addAlert(message));
    }

  }
    return(
      <div className="item-wrapper">
        <Checkbox {...label} Checked={done} className="ckeck-icon" onChange={taskFulfilled}/>
        <input disabled style={{ textDecoration: done ? 'line-through 3px rgb(0, 0, 255)': 'none'}} className="task-desc">{description}</input>
        <MoreVertIcon className="edit-icon"/>
        <DeleteIcon style={{ display: 'none' }} className="delete-icon"/>
      </div>
    );
}