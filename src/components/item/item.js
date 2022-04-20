import { React } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
const Item = (props) => {
  const { id, done, description } = props;
  const taskFulfilled = async(e) => {
    const checked = e.target.checked;
    const task = document.querySelector('task-desc');
    checked ? task.style.textDecoration = 'line-through 3px rgb(0, 0, 255)' : task.style.textDecoration='none';
    const task = {
      done: checked,
      description,
    };
    const url = `https://afternoon-anchorage-40437.herokuapp.com/api/v1/tasks/:${id}`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });
    const resp = await res.json();
    const { status } = resp;
    if (status === 'Error'){
      e.target.checked = !checked;
      !checked ? task.style.textDecoration = 'line-through 3px rgb(0, 0, 255)' : task.style.textDecoration='none';
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