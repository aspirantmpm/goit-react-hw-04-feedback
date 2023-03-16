import { FeedbackOptions } from './FeedbackOptions';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const Section = ({
  itemGood,
  itemNeutral,
  itemBad,
  onChangeGood,
  onChangeNeutural,
  onChangeBad,
  feedback,
  positive,
}) => {
  return (
    <div>
      <h2> Please leave feedback</h2>

      <FeedbackOptions
        onChangeGood={onChangeGood}
        onChangeNeutural={onChangeNeutural}
        onChangeBad={onChangeBad}
        itemGood={itemGood}
        itemNeutral={itemNeutral}
        itemBad={itemBad}
      />

      <Statistics
        itemGood={itemGood}
        itemNeutral={itemNeutral}
        itemBad={itemBad}
        feedback={feedback}
        positive={positive}
      />
    </div>
  );
};

Section.propTypes = {
  itemGood: PropTypes.number.isRequired,
  itemNeutral: PropTypes.number.isRequired,
  itemBad: PropTypes.number.isRequired,
  onChangeGood: PropTypes.func.isRequired,
  onChangeNeutural: PropTypes.func.isRequired,
  onChangeBad: PropTypes.func.isRequired,
  feedback: PropTypes.func.isRequired,
  positive: PropTypes.func.isRequired,
};
