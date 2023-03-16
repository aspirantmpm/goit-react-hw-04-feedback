import PropTypes from 'prop-types';
import { Buttons } from './style';
import { Button } from './style';

export const FeedbackOptions = ({
  itemGood,
  itemNeutral,
  itemBad,
  onChangeGood,
  onChangeNeutural,
  onChangeBad,
}) => {
  return (
    <Buttons>
      <Button onClick={() => onChangeGood((itemGood += 1))}>Good</Button>
      <Button onClick={() => onChangeNeutural((itemNeutral += 1))}>
        Neutral
      </Button>
      <Button onClick={() => onChangeBad((itemBad += 1))}>Bad</Button>
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  itemGood: PropTypes.number.isRequired,
  itemNeutral: PropTypes.number.isRequired,
  itemBad: PropTypes.number.isRequired,
  onChangeGood: PropTypes.func.isRequired,
  onChangeNeutural: PropTypes.func.isRequired,
  onChangeBad: PropTypes.func.isRequired,
};
