import React from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Sections';
import Statistics from './statistics/Statistics';
import { MainWrapper } from 'components/Base.styled';
import Notification from './message/Message';
import { WrapperBtn } from './feedbackOptions/feedbackOptions.styled';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = propertyName => {
    this.setState(prevState => {
      return {
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <MainWrapper>
        <Section title="Please leave feedback">
          <WrapperBtn>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.leaveFeedback}
            />
          </WrapperBtn>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </MainWrapper>
    );
  }
}

export default Counter;
