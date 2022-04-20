import { React } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
const Item = (props) => {
  const { id, done, description } = props;
    return(
      <div className="item-wrapper">
        <Checkbox {...label} Checked={done} />
        <input disabled style={{ textDecoration: done ? 'line-through 3px rgb(0, 0, 255)': 'none'}} >{description}</input>
        <MoreVertIcon />
        <DeleteIcon style={{ display: 'none' }}/>
      </div>
    );
}