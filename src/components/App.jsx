import { useEffect, useState } from "react";
import "../index.css"
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Option from "./Option/Option";
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

  const updateFeedback = feedbackType => {
    setFeedbackList( prev => ({...prev, [feedbackType]:prev[feedbackType]+1}))
  };
  
  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbackList))
  }, [feedbackList]);

    return (
      <>
        <Description />
        <Option fn={updateFeedback} total={totalFeedback} />
        {totalFeedback > 0 ? <Feedback good={feedbackList.good} neutral={feedbackList.neutral} bad={feedbackList.bad} total={totalFeedback} /> : <Notification/> }
    </>
  );
};

export default App;

