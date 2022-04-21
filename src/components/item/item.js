/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addAlert } from '../../Redux/alert/alert';
import updateTask from './itemhelper';

const Item = (props) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useDispatch();
  const { id, done, description } = props;
  const taskFulfilled = async (e) => {
    const { checked } = e.target;
    const taskItem = document.querySelector('.task-desc');
    if (checked) {
      taskItem.style.textDecoration = 'line-through 3px rgb(0, 0, 255)';
    } else {
      taskItem.style.textDecoration = 'none';
    }
    const task = {
      done: checked,
      description,
    };
    const res = await updateTask(id, task);
    const resp = await res.json();
    const { status, message } = resp;
    if (status === 'Error') {
      e.target.Checked = !checked;
      if (!checked) {
        taskItem.style.textDecoration = 'line-through 3px rgb(0, 0, 255)';
      } else {
        taskItem.style.textDecoration = 'none';
      }
      dispatch(addAlert(message));
    }
  };
  const editTask = (e) => {
    e.target.style.display = 'none';
    const deleteIcon = document.querySelector('.delete-icon');
    deleteIcon.style.display = 'block';
    const taskDescription = document.querySelector('.task-desc');
    taskDescription.disabled = false;
    taskDescription.addEventListener('change', async (event) => {
      const elem = event.target;
      elem.disabled = true;
      e.target.style.display = 'block';
      deleteIcon.style.display = 'none';
      const description = elem.value;
      const task = {
        description,
      };
      const resp = await updateTask(id, task);
      const result = await resp.json();
      const { status, message } = result;
      if (status === 'Error') {
        // dispatch action to update tasks from back-end
        dispatch(addAlert(message));
      }
    });
    taskDescription.addEventListener('keydown', async (event) => {
      if (event.keyCode === 13) {
        const elem = event.target;
        elem.disabled = true;
        e.target.style.display = 'block';
        deleteIcon.style.display = 'none';
        const description = elem.value;
        const task = {
          description,
        };
        const resp = await updateTask(id, task);
        const result = await resp.json();
        const { status, message } = result;
        if (status === 'Error') {
          // dispatch action to update tasks from back-end
          dispatch(addAlert(message));
        }
      }
    });
  };
  return (
    <div className="item-wrapper">
      <Checkbox {...label} Checked={done} className="ckeck-icon" onChange={taskFulfilled} />
      <input disabled style={{ textDecoration: done ? 'line-through 3px rgb(0, 0, 255)' : 'none' }} className="task-desc" defaultValue={description} />
      <MoreVertIcon className="edit-icon" onClick={editTask} />
      <DeleteIcon style={{ display: 'none' }} className="delete-icon" />
    </div>
  );
};
Item.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};
export default Item;
