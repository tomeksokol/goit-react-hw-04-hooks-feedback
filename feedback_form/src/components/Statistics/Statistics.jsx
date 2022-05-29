import React, { Component } from "react";
import NotificationMessage from "../Notification/NotificationMessage";
import style from "../Statistics/Statistics.module.css";
import FeedbackOptions from "../FeedbackOtpions/FeedbackOptions";
import SectionTitle from "../SectionTitle/SectionTitle";

const option = {
  option1: "Good",
  option2: "Neutral",
  option3: "Bad",
};

class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    percentage: this.props.percentage,
  };

  addGoodOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      good: state.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addNeutralOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      neutral: state.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addBadOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      bad: state.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((state) => ({
      ...state,
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      ...state,
      percentage: (state.good / state.total) * 100,
    }));
  };

  render() {
    // const { statValue } = this.props;
    return (
      <div className={style.container}>
        <SectionTitle title={"Please leave a feedback"}>
          <FeedbackOptions
            {...option}
            addGoodOpinion={this.addGoodOpinion}
            addNeutralOpinion={this.addNeutralOpinion}
            addBadOpinion={this.addBadOpinion}
          />
        </SectionTitle>

        <SectionTitle title={"Statistics"}>
          {this.state.total > 0 ? (
            <section>
              <p>
                Good: <span>{this.state.good}</span>
              </p>
              <p>
                Neutral: <span>{this.state.neutral}</span>
              </p>
              <p>
                Bad: <span>{this.state.bad}</span>
              </p>
              <p>
                Total: <span>{this.state.total}</span>
              </p>
              <p>
                Positive feedback:{" "}
                <span>{Math.round(this.state.percentage)}%</span>
              </p>
            </section>
          ) : (
            <NotificationMessage message={"No feedback given"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default Statistics;
