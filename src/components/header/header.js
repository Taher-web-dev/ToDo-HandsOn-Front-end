import { react } from react;
import Typography from '@mui/material/Typography';

const Header = (props) => {
  const { total, done } = props;
  const statistics = [total, done, total - done];
  const statisticsTitle = ['Total', 'Remaining', 'Done'];
  return(
    <header>
        <Typography variant="h1"> </Typography>;
        <span></span>
        <div className="stat-wrapper">
          {[0,1,2].map((index) => {
            <div className="stat-item" key={index}>
                <Typography variant="h2">{statistics[index]} </Typography>
                <p>{statisticsTitle[index]}</p>
            </div>
          })}
        </div>
    </header>
  );
};

export default Header;