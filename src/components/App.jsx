// import { Component } from 'react';
import React, { useState } from 'react';
import { GlobalStyle } from './Globalstyle';
import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onChangeGood = itemGood => {
    // console.log(itemGood);
    setGood( itemGood );
  };

  const onChangeNeutral = itemNeutral => {
    // console.log(itemNeutral);
    setNeutral( itemNeutral );
  };

  const onChangeBad = itemBad => {
    // console.log(itemBad);
    setBad( itemBad );
  };

  const countTotalFeedback = () => {
    let totalFeedback = good + neutral + bad;
    // console.log(totalFeedback)
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = Math.round(
      (good * 100) / countTotalFeedback()
    );
    // console.log(positiveFeedback)
    if (good !== 0) {
      return positiveFeedback;
    } else return '0';
  };

  // render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Section
        itemGood={good}
        itemNeutral={neutral}
        itemBad={bad}
        onChangeGood={onChangeGood}
        onChangeNeutural={onChangeNeutral}
        onChangeBad={onChangeBad}
        feedback={countTotalFeedback}
        positive={countPositiveFeedbackPercentage}
      />
    </div>
  );
  // }
};
