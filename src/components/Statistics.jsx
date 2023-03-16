import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const Statistics = ({
  itemGood,
  itemNeutral,
  itemBad,
  feedback,
  positive,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

      {feedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div>
          <p> Good: {itemGood} </p>
          <p> Neutral: {itemNeutral} </p>
          <p>Bad: {itemBad} </p>
          <p>Total: {feedback()} </p>
          <p>Positive feedback: {positive()}% </p>
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  itemGood: PropTypes.number.isRequired,
  itemNeutral: PropTypes.number.isRequired,
  itemBad: PropTypes.number.isRequired,
  feedback: PropTypes.func.isRequired,
  positive: PropTypes.func.isRequired,
};
