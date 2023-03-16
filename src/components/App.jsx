import { Component } from 'react';
// import React, { useState } from 'react';
import { GlobalStyle } from './Globalstyle';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeGood = itemGood => {
    // console.log(itemGood);
    this.setState({ good: itemGood });
  };

  onChangeNeutral = itemNeutral => {
    // console.log(itemNeutral);
    this.setState({ neutral: itemNeutral });
  };

  onChangeBad = itemBad => {
    // console.log(itemBad);
    this.setState({ bad: itemBad });
  };

  countTotalFeedback = () => {
    let totalFeedback  = this.state.good + this.state.neutral + this.state.bad;
    // console.log(totalFeedback)
    return totalFeedback;    
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback =
        Math.round((this.state.good * 100) / this.countTotalFeedback());
      // console.log(positiveFeedback)
    if (this.state.good !== 0) {
      return positiveFeedback; 
    }  else return '0'
  
}
  
  render() {
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
          itemGood={this.state.good}
          itemNeutral={this.state.neutral}
          itemBad={this.state.bad}
          onChangeGood={this.onChangeGood}
          onChangeNeutural={this.onChangeNeutral}
          onChangeBad={this.onChangeBad}
          feedback={this.countTotalFeedback}
          positive={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
