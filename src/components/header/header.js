import { React } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import getCurrentDate from './headerhelper';
import './header.css';

const Header = (props) => {
  const { total, done } = props;
  const statistics = [total, done, total - done];
  const statisticsTitle = ['Total', 'Remaining', 'Done'];
  const [day, dt, month] = getCurrentDate();
  return (
    <header className="wrapper">
      <Typography variant="h1" className="date-day">
        {`${day}, ${dt}th`}
        {' '}
      </Typography>
      <p className="date-month">{month}</p>
      <div className="stat-wrapper">
        {[0, 1, 2].map((index) => (
          <div className="stat-item" key={index}>
            <Typography variant="h2" className="item-name">
              {statistics[index]}
              {' '}
            </Typography>
            <p className="item-value">{statisticsTitle[index]}</p>
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
