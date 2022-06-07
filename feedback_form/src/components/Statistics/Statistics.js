import React, { useState, useEffect } from "react";
import NotificationMessage from "../Notification/NotificationMessage";
import style from "../Statistics/Statistics.module.css";
import FeedbackOptions from "../FeedbackOtpions/FeedbackOptions";
import SectionTitle from "../SectionTitle/SectionTitle";

const options = {
  option1: "Good",
  option2: "Neutral",
  option3: "Bad",
};

const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const addGoodOpinion = (evt) => {
    setGood(good + 1);
  };

  const addNeutralOpinion = (evt) => {
    setNeutral(neutral + 1);
  };

  const addBadOpinion = (evt) => {
    setBad(bad + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage((good / total) * 100);
  }, [good, total]);

  return (
    <div className={style.container}>
      <SectionTitle title={"Please leave a feedback"}>
        <FeedbackOptions
          {...options}
          addGoodOpinion={addGoodOpinion}
          addNeutralOpinion={addNeutralOpinion}
          addBadOpinion={addBadOpinion}
        />
      </SectionTitle>

      <SectionTitle title={"Statistics"}>
        {total > 0 ? (
          <section>
            <p>
              Good: <span>{good}</span>
            </p>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
            <p>
              Bad: <span>{bad}</span>
            </p>
            <p>
              Total: <span>{total}</span>
            </p>
            <p>
              Positive feedback: <span>{Math.round(percentage)}%</span>
            </p>
          </section>
        ) : (
          <NotificationMessage message={"No feedback given"} />
        )}
      </SectionTitle>
    </div>
  );
};

export default Statistics;
