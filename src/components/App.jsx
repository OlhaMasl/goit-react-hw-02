import { useEffect, useState } from "react";
import "../index.css"
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";


const App = () => {
  const [feedbackList, setFeedbackList] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));
    if (savedFeedbacks) {
      return savedFeedbacks;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })

  const totalFeedback = feedbackList.good + feedbackList.neutral + feedbackList.bad;
  const positiveFeedback = Math.round((feedbackList.good / totalFeedback) * 100);


  const updateFeedback = feedbackType => {
    setFeedbackList( prev => ({...prev, [feedbackType]:prev[feedbackType]+1}))
  };
  const resetFeedback = () => {
    setFeedbackList(
      {
      good: 0,
      neutral: 0,
      bad: 0
    })
   };
  
  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbackList))
  }, [feedbackList]);

    return (
      <>
        <Description />
        <Options fn={updateFeedback} resetFn={resetFeedback} total={totalFeedback} />
        {totalFeedback > 0 ? <Feedback good={feedbackList.good} neutral={feedbackList.neutral} bad={feedbackList.bad} total={totalFeedback} positive={positiveFeedback} /> : <Notification/> }
    </>
  );
};

export default App;

