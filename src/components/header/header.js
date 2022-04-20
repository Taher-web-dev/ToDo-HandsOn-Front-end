import { React } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import getCurrentDate from './headerhelper';

const Header = (props) => {
  const { total, done } = props;
  const statistics = [total, done, total - done];
  const statisticsTitle = ['Total', 'Remaining', 'Done'];
  const [day, dt, month] = getCurrentDate();
  return (
    <header>
      <Typography variant="h1">
        {`${day}, ${dt}th`}
        {' '}
      </Typography>
      ;
      <span>{month}</span>
      <div className="stat-wrapper">
        {[0, 1, 2].map((index) => (
          <div className="stat-item" key={index}>
            <Typography variant="h2">
              {statistics[index]}
              {' '}
            </Typography>
            <p>{statisticsTitle[index]}</p>
          </div>
        ))}
      </div>
    </header>
  );
};
Header.propTypes = {
  total: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};
export default Header;
